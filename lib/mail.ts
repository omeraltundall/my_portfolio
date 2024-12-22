import { Resend } from "resend";


const resend = new Resend(`${process.env.RESEND_API_KEY}`);

interface SendMessageWithEmailProps {
  message: string;
  email: string;
}

export const sendMessageWithEmail = async (
  values: SendMessageWithEmailProps
) => {
  await resend.emails.send({
    from: "Acme <onboarding@resend.dev>",
    to: "altundaomer01.99@gmail.com",
    subject: "Sending Message",
    html: `
      <p>From: ${values.email}</p>
      <p>${values.message}</p>
    `,
  });
};
