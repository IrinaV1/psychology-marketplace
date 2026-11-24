import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';
import { api } from '../../api';
import axios from 'axios';

export async function GET() {
  try {
    const cookieStore = await cookies();
    const idToken = cookieStore.get('idToken')?.value;
    if (!idToken) {
      return NextResponse.json({ user: null }, { status: 401 });
    }
    const { data } = await api.post(':lookup', {
      idToken,
    });
    const firebaseUser = data.users[0];
    return NextResponse.json({
      user: {
        localId: firebaseUser.localId,
        email: firebaseUser.email,
        displayName: firebaseUser.displayName,
      },
    });
  } catch (error) {
    console.error('SESSION ERROR:', error);

    if (axios.isAxiosError(error)) {
      return NextResponse.json({ user: null }, { status: 401 });
    }
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}
