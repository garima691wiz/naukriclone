import { useForm } from "react-hook-form";
import { IoMdStar } from "react-icons/io";

function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="flex w-full max-w-[600px] flex-col gap-10 rounded-3xl border bg-white p-4 shadow-md md:p-12">
      {/* heading */}
      <div>
        <h2 className="text-2xl font-semibold">Login</h2>
      </div>

      <form className="flex flex-col gap-6" onSubmit={handleSubmit(onSubmit)}>
        {/* Email ID */}
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="flex font-semibold">
            <span>Email ID</span>
            <IoMdStar className="ml-1 self-start text-xs text-red-600" />
          </label>
          <input
            id="email"
            className="w-full rounded-md border-2 p-2"
            placeholder="Enter your email"
            type="email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
                message: "Enter a valid email address",
              },
            })}
          />
          {errors.email && (
            <p className="text-red-600">{errors.email.message}</p>
          )}
        </div>

        {/* Password */}
        <div className="flex flex-col gap-2">
          <label htmlFor="password" className="flex font-semibold">
            <span>Password</span>
            <IoMdStar className="ml-1 self-start text-xs text-red-600" />
          </label>
          <input
            id="password"
            className="w-full rounded-md border-2 p-2"
            placeholder="Enter a strong password"
            type="password"
            {...register("password", {
              required: "Password is required",
            })}
          />
          {errors.password && (
            <p className="text-red-600">{errors.password.message}</p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="mt-6 w-32 rounded-full bg-blue-600 p-2 font-semibold text-white hover:bg-blue-700"
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default LoginForm;
