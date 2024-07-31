import { NextRequest, NextResponse } from "next/server";
import schema from "./schema"; 
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
export function GET(request: NextRequest) {
 
  return NextResponse.json([
    {
      id: 1,
      name: "Gyan",
    },
    {
      id: 2,
      name: "Rohan",
    },
  ]);
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  const validation = schema.safeParse(body);
  //validate
  //errors we send 400
  //else return body
  if (!validation.success)
    return NextResponse.json(validation.error.errors, { status: 400 });
  return NextResponse.json({ id: 1, name: body.name }, { status: 201 });
}
