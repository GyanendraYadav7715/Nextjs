import WelcomeTemplet from "@/emails/WelcomeTemplet";
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
export async function POST() {
   await resend.emails.send({
        from: "",
        to: "codeaur108@gmail.com",
        subject: "",
        react: <WelcomeTemplet name='Gyan'/>
   });
    return NextResponse.json({});
}
