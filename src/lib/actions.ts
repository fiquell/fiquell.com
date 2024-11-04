"use server";

import { Resend } from "resend";
import { env } from "~/env";
import type { WaitingList } from "~/lib/schemas";
import { waitingList } from "~/lib/schemas";

const resend = new Resend(env.RESEND_API_KEY);

export const registerWaitingList = async (values: WaitingList) => {
  try {
    const { email } = waitingList.parse(values);
    const { error } = await resend.contacts.create({
      email: email,
      unsubscribed: false,
      audienceId: env.RESEND_AUDIENCE_ID,
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
    return {
      success: false,
      message: "Error processing your request.",
    };
  }
};
