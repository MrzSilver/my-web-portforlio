import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const body = await req.json();
    const { firstname, lastname, email, phone, service, message } = body;

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER, // Gmail user
        pass: process.env.EMAIL_PASS, // App password
      },
    });

    await transporter.sendMail({
      from: email,
      to: "mr.silversv@gmail.com", // อีเมลคุณ
      subject: `New message from ${firstname} ${lastname}`,
      text: `
        Name: ${firstname} ${lastname}
        Email: ${email}
        Phone: ${phone}
        Service: ${service}
        Message: ${message}
      `,
    });

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (err) {
    console.error(err);
    return new Response(JSON.stringify({ success: false, error: err.message }), { status: 500 });
  }
}
