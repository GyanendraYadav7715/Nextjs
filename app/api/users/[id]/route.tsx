import { error } from "console";
import { NextRequest, NextResponse } from "next/server";
import schema from "../schema";
// interface Porps {
//   params: { id: number };
// }
export function GET(
  request: NextRequest,
  { params }: { params: { id: number } }
) {
  if (params.id > 10)
    return NextResponse.json({ error: "page not found " }, { status: 404 });
  return NextResponse.json({ id: 1, name: "Gyanendra Yadav" });
}


//updating use PUT /PATCH

//PUT ==> USE TO REPLACE ONE THING
//PATCH ==> USE TO REPLACE ONE AND MORE THING

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: number } }
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
    return NextResponse.json( validation.error.errors, { status: 400 });
  if (params.id > 10)
    return NextResponse.json({ error: "User is not found" }, { status: 404 });
  return NextResponse.json({ id: 1, name: body.name });
}

//DELETEING THE USER

export function DELETE(
  request: NextRequest,
  { params }: { params: { id: number } }
) {

    //fetch the user from db
    //if user is not vaild we send 404
    //Delete the user 
    //return 200
    if (params.id > 10)
          return NextResponse.json(
            { error: "User is not found" },
            { status: 404 }
        );
    return NextResponse.json({});
}

