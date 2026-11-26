import { NextResponse } from 'next/server';
import { apiDatabase } from '../api';

export async function GET() {
  try {
    const response = await apiDatabase.get('.json');

    if (!response.data) {
      return NextResponse.json([]);
    }

    const psychologists = Object.entries(response.data).map(([id, item]) => ({
      ...(item as object),
      id,
    }));

    return NextResponse.json(psychologists);
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: 'Failed to fetch psychologists' },
      { status: 500 }
    );
  }
}
