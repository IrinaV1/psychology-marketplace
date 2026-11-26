import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';
import { api } from '../../api';
import axios from 'axios';

export async function GET() {
  try {
    const cookieStore = await cookies();
    let idToken = cookieStore.get('idToken')?.value;
    const refreshToken = cookieStore.get('refreshToken')?.value;

    if (!idToken && !refreshToken) {
      return NextResponse.json({ user: null }, { status: 200 });
    }
    let isRefreshed = false;
    if (!idToken && refreshToken) {
      const refreshRes = await axios.post(
        `https://googleapis.com{process.env.NEXT_PUBLIC_FIREBASE_API_KEY}`,
        {
          grant_type: 'refresh_token',
          refresh_token: refreshToken,
        }
      );

      idToken = refreshRes.data.id_token;
      isRefreshed = true;
    }

    const { data } = await api.post(':lookup', {
      idToken,
    });
    const firebaseUser = data.users[0];
    if (!firebaseUser) {
      return NextResponse.json({ user: null }, { status: 401 });
    }
    const response = NextResponse.json({
      user: {
        localId: firebaseUser.localId,
        email: firebaseUser.email,
        displayName: firebaseUser.displayName,
      },
    });
    if (isRefreshed && idToken) {
      response.cookies.set('idToken', idToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax',
        path: '/',
        maxAge: 60 * 60, // 1 час
      });
    }

    return response;
  } catch (error) {
    console.error('SESSION ERROR:', error);

    if (axios.isAxiosError(error)) {
      const response = NextResponse.json({ user: null }, { status: 401 });
      response.cookies.delete('idToken');
      response.cookies.delete('refreshToken');
      return response;
    }
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}
