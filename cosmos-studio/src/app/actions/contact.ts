"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY || "re_dummy_key");

export async function submitContact(formData: FormData) {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const focus = formData.get("focus") as string;
  const budget = formData.get("budget") as string;
  const timeline = formData.get("timeline") as string;
  const project = formData.get("project") as string;

  if (!name || !project || !email) {
    return { success: false, message: "Name, Email, and Project are required." };
  }

  try {
    // If no API key is provided, we simulate the delay for the fallback
    if (!process.env.RESEND_API_KEY) {
      console.log("No RESEND_API_KEY found, simulating success.");
      await new Promise(resolve => setTimeout(resolve, 1500));
      return { success: true, message: "Message received. I’ll return thoughtfully within 1–2 working days." };
    }

    const { data, error } = await resend.emails.send({
      from: "Atelier Studio <onboarding@resend.dev>", 
      to: "anshumanverma027@gmail.com",
      subject: `New Inquiry from ${name} - ${focus}`,
      replyTo: email,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; line-height: 1.6; color: #1a1a1a;">
          <h2 style="font-weight: 500; border-bottom: 1px solid #eaeaea; padding-bottom: 12px; margin-bottom: 24px;">New Studio Inquiry</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Business Type:</strong> ${focus}</p>
          <p><strong>Budget:</strong> ${budget || "Not specified"}</p>
          <p><strong>Timeline:</strong> ${timeline || "Not specified"}</p>
          <div style="margin-top: 24px; padding: 16px; background-color: #f9f9f9; border-radius: 8px;">
            <h3 style="font-weight: 500; font-size: 14px; margin-top: 0; color: #666;">Project Description:</h3>
            <p style="margin-bottom: 0;">${project.replace(/\n/g, "<br>")}</p>
          </div>
        </div>
      `,
    });

    if (error) {
      console.error("Resend Error:", error);
      return { success: false, message: "Failed to send inquiry." };
    }

    return { success: true, message: "Message received. I’ll return thoughtfully within 1–2 working days." };
  } catch (error) {
    console.error("Server Action Error:", error);
    return { success: false, message: "Something went wrong. Please try again." };
  }
}
