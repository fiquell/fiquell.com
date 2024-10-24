import { z } from "zod";

export const waitingList = z.object({
  email: z.string().email({
    message: "Invalid email address",
  }),
});

export type WaitingList = z.infer<typeof waitingList>;
