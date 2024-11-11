"use server";

import { Resend } from "resend";
import type { WaitingList } from "~/lib/schemas";
import { waitingList } from "~/lib/schemas";

const resend = new Resend(process.env.RESEND_API_KEY);

export const registerWaitingList = async (values: WaitingList) => {
  try {
    const { email } = waitingList.parse(values);
    const { error } = await resend.contacts.create({
      email: email,
      unsubscribed: false,
      audienceId: process.env.RESEND_AUDIENCE_ID || "",
    });

    if (error) {
      return {
        success: false,
        message: "Unable to join the waiting list.",
      };
    }

    return {
      success: true,
      message: "You've been added to the waiting list.",
    };
  } catch (error) {
    console.error(error);
    return {
      success: false,
      message: "Error processing your request.",
    };
  }
};
