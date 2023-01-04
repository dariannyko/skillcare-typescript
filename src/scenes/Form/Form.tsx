import { useForm } from "react-hook-form";
import { FormEvent } from "react";

type Props = {};

const Form = (props: Props) => {
    const inputStyles =
    "mb-5 w-full rounded-lg bg-blue-50 px-5 py-3 placeholder-gray-50 placeholder:font-medium text-gray-100 font-semibold  outline-secondary-500";
  const {
    register,
    trigger,
    formState: { errors },
  } = useForm();

  const onSubmit = async (e: FormEvent) => {
    const isValid = await trigger();
    if (!isValid) {
      e.preventDefault();
    }
  };

  return (
    <form
      method="POST"
      action="https://formsubmit.co/el/lamare"
      target="_blank"
      onSubmit={onSubmit}
    >
      <input
        type="text"
        className={inputStyles}
        placeholder="Name"
        {...register("name", {
          required: true,
          maxLength: 100,
        })}
      />
      {errors.name && (
        <p className="text-pink-500 mt-1">
          {errors.name.type === "required" && "This field is required"}
          {errors.name.type === "maxLength" && "Max length is 100 char"}
        </p>
      )}
      <input
        type="email"
        className={inputStyles}
        placeholder="Email"
        {...register("email", {
          required: true,
          pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
        })}
      />
      {errors.email && (
        <p className="text-pink-500 mt-1">
          {errors.email.type === "required" && "This field is required"}
          {errors.email.type === "pattern" && "Invalid email address"}
        </p>
      )}
      <textarea
        className={inputStyles}
        placeholder="Message"
        rows={4}
        cols={50}
        {...register("message", {
          required: true,
          maxLength: 2000,
        })}
      />
      {errors.message && (
        <p className="text-pink-500 mt-1">
          {errors.message.type === "required" && "This field is required"}
          {errors.message.type === "maxLength" && "Max length is 2000 char"}
        </p>
      )}

      <button
        type="submit"
        className="mt-5 rounded-lg bg-secondary-500 px-20 py-3 uppercase text-white transition duration-500 hover:bg-orange-500">
        Submit
      </button>
    </form>
  );
};

export {Form}
