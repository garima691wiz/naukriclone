import { useForm } from "react-hook-form";
import { IoMdStar } from "react-icons/io";

function RegisterForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="flex w-full max-w-[800px] flex-col gap-10 rounded-3xl border bg-white p-4 shadow-md md:p-12">
      {/* heading */}
      <div>
        <h2 className="text-2xl font-semibold">Create your Naukari profile</h2>
        <p className="font-semibold text-stone-400">
          Search & apply to jobs from India's No.1 Job Site
        </p>
      </div>

      <form className="flex flex-col gap-6" onSubmit={handleSubmit(onSubmit)}>
        {/* Full Name */}
        <div className="flex flex-col gap-2">
          <label htmlFor="fullName" className="flex font-semibold">
            <span>Full Name</span>
            <IoMdStar className="ml-1 self-start text-xs text-red-600" />
          </label>
          <input
            id="fullName"
            className="w-full rounded-md border-2 p-2"
            placeholder="What is your name?"
            type="text"
            {...register("fullName", { required: "Full Name is required" })}
          />
          {errors.fullName && (
            <p className="text-red-600">{errors.fullName.message}</p>
          )}
        </div>

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
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters",
              },
            })}
          />
          {errors.password && (
            <p className="text-red-600">{errors.password.message}</p>
          )}
        </div>

        {/* Mobile Number */}
        <div className="flex flex-col gap-2">
          <label htmlFor="mobile" className="flex font-semibold">
            <span>Mobile Number</span>
            <IoMdStar className="ml-1 self-start text-xs text-red-600" />
          </label>
          <input
            id="mobile"
            className="w-full rounded-md border-2 p-2"
            placeholder="Enter your mobile number"
            type="tel"
            {...register("mobile", {
              required: "Mobile number is required",
              pattern: {
                value: /^[6-9]\d{9}$/,
                message: "Enter a valid 10-digit mobile number",
              },
            })}
          />
          {errors.mobile && (
            <p className="text-red-600">{errors.mobile.message}</p>
          )}
        </div>

        {/* City */}
        <div className="flex flex-col gap-2">
          <label htmlFor="city" className="flex font-semibold">
            <span>City</span>
            <IoMdStar className="ml-1 self-start text-xs text-red-600" />
          </label>
          <input
            id="city"
            className="w-full rounded-md border-2 p-2"
            placeholder="Enter your city"
            type="text"
            {...register("city", { required: "City is required" })}
          />
          {errors.city && <p className="text-red-600">{errors.city.message}</p>}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="mt-6 w-32 rounded-full bg-blue-600 p-2 font-semibold text-white hover:bg-blue-700"
        >
          Register
        </button>
      </form>
    </div>
  );
}

export default RegisterForm;
