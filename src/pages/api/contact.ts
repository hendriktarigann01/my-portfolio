import { NextApiRequest, NextApiResponse } from "next";
import twilio from "twilio";

const accountSid = process.env.TWILIO_ACCOUNT_SID as string;
const authToken = process.env.TWILIO_AUTH_TOKEN as string;
const twilioPhoneNumber = process.env.TWILIO_PHONE_NUMBER as string;
const receiverPhoneNumber = process.env.RECEIVER_PHONE_NUMBER as string;

if (!accountSid || !authToken || !twilioPhoneNumber || !receiverPhoneNumber) {
  throw new Error("Missing Twilio environment variables.");
}

const client = twilio(accountSid, authToken);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { name, email, message } = req.body;

    // Validasi input
    if (!name || !email || !message) {
      return res.status(400).json({ error: "All fields are required." });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ error: "Invalid email format." });
    }

    try {
      // Kirim SMS
      const response = await client.messages.create({
        body: `Pesan baru dari ${name} (${email}): ${message}`,
        from: twilioPhoneNumber,
        to: receiverPhoneNumber,
      });

      res.status(200).json({ success: true, response });
    } catch (error: unknown) {
      if (error instanceof Error) {
        res.status(500).json({ success: false, error: error.message });
      } else {
        res
          .status(500)
          .json({ success: false, error: "Unknown error occurred." });
      }
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
