import { NextRequest, NextResponse } from 'next/server';
import { api } from '../../api';
import axios from 'axios';

export async function POST(req: NextRequest) {
  try {
    const { email, password } = await req.json();

    const { data } = await api.post(`:signInWithPassword`, {
      email,
      password,
      returnSecureToken: true,
    });

    // 3. Создаём ответ сервера
    const response = NextResponse.json({
      user: {
        localId: data.localId,
        email: data.email,
        displayName: data.displayName,
      },
    });

    // 4. Сохраняем токены в HttpOnly cookies
    response.cookies.set('idToken', data.idToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      path: '/',
      maxAge: 60 * 60,
    });

    response.cookies.set('refreshToken', data.refreshToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      path: '/',
      maxAge: 60 * 60 * 24 * 30,
    });

    return response;
  } catch (error) {
    console.error('LOGIN ERROR:', error);
    if (axios.isAxiosError(error)) {
      return NextResponse.json(
        {
          error: error.response?.data?.error?.message || 'Login failed',
        },
        {
          status: error.response?.status || 500,
        }
      );
    }

    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}
