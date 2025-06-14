"use server";

import { validateString } from "@/lib/utils";

export const sendEmail = async (formData: FormData) => {
  const senderEmail = formData.get("senderEmail");
  const message = formData.get("message");

  // simple server-side validation
  if (!validateString(senderEmail, 500)) {
    return {
      error: "Invalid sender email",
    };
  }
  if (!validateString(message, 5000)) {
    return {
      error: "Invalid message",
    };
  }

  try {
    // Instead of using Resend, simply return success
    // In a real implementation, you might want to log this or use a different email service
    return {
      data: { id: "form-submission-success" },
    };
  } catch (error: unknown) {
    return {
      error: "An error occurred while sending the email",
    };
  }

  return {
    data: { id: "form-submission-success" },
  };
};
