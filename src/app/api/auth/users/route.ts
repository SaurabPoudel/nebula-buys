import { NextResponse } from 'next/server';
import connect from '@/lib/db';
import UserModel from '@/models/UserModel';

interface NewUserRequest {
  username: string;
  email: string;
  password: string;
}

interface NewUserResponse {
  id: string;
  username: string;
  email: string;
  role: string;
}

type NewResponse = NextResponse<{ user?: NewUserResponse; error?: string }>;

export const POST = async (req: Request): Promise<NewResponse> => {
  const body = (await req.json()) as NewUserRequest;

  await connect();

  const oldUser = await UserModel.findOne({ email: body.email });
  if (oldUser)
    return NextResponse.json(
      { error: 'email is already in use! ' },
      { status: 422 }
    );
  const user = await UserModel.create({ body });

  return NextResponse.json({
    user: {
      id: user.id.toString(),
      email: user.email,
      username: user.username,
      role: user.role,
    },
  });
};
