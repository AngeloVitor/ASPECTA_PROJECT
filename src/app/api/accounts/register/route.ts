import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import bcrypt from "bcrypt";
import { registerSchemaType } from "@/app/types/registerSchema";

export async function POST(request: NextRequest) {
  const { email, password, username }: registerSchemaType =
    await request.json();
  const userFound = await prisma.user.findFirst({
    where: {
      OR: [
        {
          email: email,
        },
        {
          username: password,
        },
      ],
    },
  });

  if (userFound) {
    return NextResponse.json(
      {
        message: "User already exists",
      },
      { status: 400 }
    );
  }
  const newUser = await prisma.user.create({
    data: {
      email,
      password: bcrypt.hashSync(password, 10),
      username,
    },
  });
  return NextResponse.json(newUser);
}
