"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import * as React from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { registerWaitingList } from "~/lib/actions";
import type { WaitingList } from "~/lib/schemas";
import { waitingList } from "~/lib/schemas";
import { cn } from "~/lib/utils";

const WaitingListForm = () => {
  const [loading, setLoading] = React.useState(false);
  const [success, setSuccess] = React.useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<WaitingList>({
    resolver: zodResolver(waitingList),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = async (values: WaitingList) => {
    setLoading(true);

    try {
      const response = await registerWaitingList(values);

      if (response.success) {
        setSuccess(true);
        toast.success(response.message);
        return;
      }

      reset();
      toast.error(response.message);
    } catch (error) {
      toast.error("Error processing your request.");
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <p className="id-paragraph">
        Thank you! You have been added to the waiting list.
      </p>
    );
  }

  return (
    <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
      <div className="flex justify-center gap-2">
        <label className="form-control w-full max-w-sm">
          <input
            {...register("email")}
            type="email"
            placeholder="Enter your email address"
            className={cn(
              "input input-bordered w-full max-w-sm",
              errors.email && "input-error",
            )}
          />
          <div className="label">
            <p className="label-text-alt text-error">{errors.email?.message}</p>
          </div>
        </label>
        <button type="submit" className="btn btn-primary">
          {loading && <span className="loading loading-dots loading-xs" />}
          Notify Me
        </button>
      </div>
    </form>
  );
};

export default WaitingListForm;
