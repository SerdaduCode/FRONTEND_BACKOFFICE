import React, { FormEvent, useState } from "react";
import Input from "../UI/Input";
import authService from "@/services";
import Image from "next/image";
import welcomeIcon from "@/../public/images/welcome-icon.svg";
import Link from "next/link";
import { BiArrowBack } from "react-icons/bi";

const RegisterViewPage = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleRegister = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    const form = e.target as HTMLFormElement;
    const data = {
      name: form.fullname.value,
      email: form.email.value,
      password: form.password.value,
      address: form.address.value,
      structure_role: form.structureRole.value,
      phone: form.phone.value,
    };

    try {
      const result = await authService.registerMember(data);
      if (result.status === 201) {
        setIsLoading(true);
        alert("register success");
        setIsLoading(false);
      } else {
        alert("register failed");
        setIsLoading(false);
      }
    } catch (error) {
      alert("email already exist");
      setIsLoading(false);
    }
  };
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <form
        onSubmit={handleRegister}
        className=" mx-4  bg-white border rounded-md shadow-md min-h-3/6 w-full md:w-1/2 p-4"
      >
        <div className="flex justify-between">
          <p className="text-3xl font-bold my-3 py-2 border-b-4">
            Membership <br />
            Register
          </p>
          <Image
            src={welcomeIcon}
            width={500}
            height={500}
            alt="logo"
            className="w-24 h-24"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-4 gap-0">
          <div>
            <Input
              name="fullname"
              placeholder="fullname"
              required
              title="Fullname"
              type="text"
            />
            <Input
              name="email"
              placeholder="email"
              required
              title="Email"
              type="email"
            />
            <Input
              name="password"
              placeholder="password"
              required
              title="Password"
              type="password"
            />
          </div>
          <div>
            <Input
              name="address"
              placeholder="address"
              required
              title="Address"
              type="text"
            />
            <Input
              name="structureRole"
              placeholder="structure role"
              required
              title="Structure role"
              type="text"
            />
            <Input
              name="phone"
              placeholder="phone"
              required
              title="Phone"
              type="number"
            />
          </div>
        </div>
        <div className="flex justify-between items-center">
          <Link href="dashboard">
            <BiArrowBack className="text-3xl" />
          </Link>

          <button
            type="submit"
            className="text-white bg-slate-700 hover:bg-slate-800 focus:ring-4 focus:outline-none focus:ring-slate-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-slate-600 dark:hover:bg-slate-700 dark:focus:ring-slate-800"
          >
            {isLoading ? "Loading..." : "Register"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default RegisterViewPage;
