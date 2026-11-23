import { NextRequest, NextResponse } from 'next/server';
import { api } from '../../api';
import axios from 'axios';

export async function POST(req: NextRequest) {
  try {
    const { name, email, password } = await req.json();

    const { data: signUpData } = await api.post(`:signUp`, {
      email,
      password,
      returnSecureToken: true,
    });

    // 2. Сохраняем имя пользователя
    const { data: updateData } = await api.post(`:update`, {
      idToken: signUpData.idToken,
      displayName: name,
      returnSecureToken: true,
    });

    // 3. Создаём ответ сервера
    const response = NextResponse.json({
      user: {
        localId: signUpData.localId,
        email: signUpData.email,
        displayName: updateData.displayName,
      },
    });

    // 4. Сохраняем токены в HttpOnly cookies
    response.cookies.set('idToken', updateData.idToken || signUpData.idToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      path: '/',
      maxAge: 60 * 60,
    });

    response.cookies.set(
      'refreshToken',
      updateData.refreshToken || signUpData.refreshToken,
      {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax',
        path: '/',
        maxAge: 60 * 60 * 24 * 30,
      }
    );

    return response;
  } catch (error) {
    console.error('REGISTER ERROR:', error);
    if (axios.isAxiosError(error)) {
      return NextResponse.json(
        {
          error: error.response?.data?.error?.message || 'Registration failed',
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
