"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import type { WaitingList } from "~/lib/schemas";
import { waitingList } from "~/lib/schemas";
import { cn } from "~/lib/utils";

const WaitingListForm = () => {
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

  const onSubmit = (values: WaitingList) => {
    console.log(values);
    toast.success("You have been added to the waiting list!");
    reset();
  };

  return (
    <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
      <div className="flex justify-center gap-2">
        <label className="form-control w-full max-w-sm">
          <input
            type="email"
            placeholder="Enter you email address"
            className={cn(
              "input input-bordered w-full max-w-sm",
              errors.email && "input-error",
            )}
            {...register("email")}
          />
          <div className="label">
            <p className="label-text-alt text-error">{errors.email?.message}</p>
          </div>
        </label>
        <button type="submit" className="btn btn-primary">
          Notify Me
        </button>
      </div>
    </form>
  );
};

export default WaitingListForm;
