import { NextRequest, NextResponse } from "next/server";
import schema from "../schema";
// interface Porps {
//   params: { id: number };
// }
import prisma from "@/prisma/client";
export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const user = await prisma.user.findUnique({
    where: {
      id: parseInt(params.id),
    },
  });
  if (params.id > "10")
    return NextResponse.json({ error: "page not found " }, { status: 404 });
  return NextResponse.json(user);
}

//updating use PUT /PATCH

//PUT ==> USE TO REPLACE ONE THING
//PATCH ==> USE TO REPLACE ONE AND MORE THING

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  //validate the request the body
  //if invild return 400
  //fetch the user within the given user id
  //if doesn't exits ,return 404
  //udate the user
  //and  return the updated user
  const body = await request.json();
  const validation = schema.safeParse(body);
  if (!validation.success)
    return NextResponse.json(validation.error.errors, { status: 400 });
  const user = await prisma.user.findUnique({
    where: {
      id: parseInt(params.id),
    },
  });
  if (!user)
    return NextResponse.json({ error: "User is not found" }, { status: 404 });
  const updateUser = await prisma.user.update({
    where: { id: user.id },
    data: { name: body.name, email: body.email },
  });
  return NextResponse.json(updateUser);
}

//DELETEING THE USER

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id:string } }
) {

  const user = await prisma.user.findUnique({
    where: {
      id:parseInt(params.id)
    }
  })
  //fetch the user from db
  //if user is not vaild we send 404
  //Delete the user
  //return 200
  if (!user)
    return NextResponse.json({ error: "User is not found" }, { status: 404 });
  const delUser = await prisma.user.delete({
    where: {
      id:user.id
    }
  })
  return NextResponse.json({});
}
