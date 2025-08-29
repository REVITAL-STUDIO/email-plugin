import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";
import { report } from "process";
import { Resend } from "resend";

export async function BEEHIIV(req: Request) {
  try {
    const { email } = await req.json();

    if (!email || typeof email != "string") {
      return NextResponse.json({ error: "Email Required" }, { status: 400 });
    }

    const response = await fetch(
      `https://api.beehiiv.com/v2/publications/${process.env.BEEHIIV_PUBLICATION_ID}/subscriptions`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.BEEHIIV_API}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
        }),
      }
    );

    const data = await response.json();
    console.log("Beehiiv Response:", data);

    if (!response.ok) {
      return NextResponse.json(
        { error: data?.message || "Beehiiv error" },
        { status: response.status }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Subscribe Error:", err);
    return NextResponse.json({ error: "Server Error:" }, { status: 500 });
  }
}

const resend = new Resend(process.env.RESEND_API!);

export async function RESEND(req: NextApiRequest, res: NextApiResponse) {
  try {
    const toList = process.env.CONTACT_TO!.split(",").map((e) => e.trim());

    const { email, firstName } = req.body || {};
    const { data, error } = await resend.emails.send({
      from: process.env.CONTACT_FROM!,
      to: toList,
      replyTo: `LawBox ${email}`,
      subject: `LawBox Inquiry: ${firstName || email}`,
      html: `<p>Thanks${
        firstName ? `, ${firstName}` : ""
      }! We'll be in touch soon.</p>`,
    });

    if (error) return res.status(400).json(error);
    return res.status(200).json({ ok: true, id: data?.id });
  } catch (e) {
    console.error(e);
    return res.status(500).json({ error: "Server error" });
  }
}
