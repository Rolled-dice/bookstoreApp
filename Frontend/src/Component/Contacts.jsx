import React from "react";
import { useForm } from "react-hook-form";
function Contacts() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);
  return (
    <>
      <div className="  max-w-screen-2xl container  mx-auto md: px-4   flex flex-col md:flex-row items-center justify-center  ">
        <div className="  mt-32">
          <form onSubmit={handleSubmit(onSubmit)}>
            <h1 className="text-4xl  font-bold ">Contact us</h1>
            <h3 className="font-bold text-lg mt-3">Name</h3>

            <input
              type="text"
              placeholder="Enter your Name"
              className="w-80  mt-3 px-3 py-1 border rounded-md outline-none focus
               dark:bg-slate-900 dark:text-white"
              {...register("Name", { required: true })}
            />
            <br />
            {errors.Name && (
              <span className="text-sm text-red-500">
                This field is required
              </span>
            )}
            <h3 className="font-bold text-lg mt-3">Email</h3>
            <input
              type="email"
              placeholder="Email address"
              className="w-80 px-3 py-1 border  mt-3 rounded-md outline-none dark:bg-slate-900 dark:text-white"
              {...register("email", { required: true })}
            />
            <br />
            {errors.email && (
              <span className="text-sm text-red-500">
                This field is required
              </span>
            )}

            <h3 className="font-bold text-lg mt-3">Message</h3>

            <textarea
              type="text"
              placeholder="Type your message"
              className="w-80 px-3 py-4 border rounded-md outline-none dark:bg-slate-900 dark:text-white"
              rows={4}
              cols={40}
              {...register("Message", { required: true })}
            />
            <br />
            {errors.Message && (
              <span className="text-sm text-red-500">
                This field is required
              </span>
            )}
            <br />

            <button className="bg-blue-500 text-white hover:bg-blue-700 border mt-2 rounded-md p-1 px-3 cursor-pointer">
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Contacts;
