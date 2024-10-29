import React, { FormEvent, useState } from "react";
import Input from "../UI/Input";
import authService from "@/services";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import { FaHome } from "react-icons/fa";
import Link from "next/link";

const LoginViewPage = () => {
  const { query } = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const pushUrl: string = (query.callbackUrl as string) || "/";
  const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    const form = e.target as HTMLFormElement;
    const data = {
      email: form.email.value,
      password: form.password.value,
    };
    try {
      const result = await authService.loginMember(data);
      const userData = {
        email: result.data.data.email,
        name: result.data.data.name,
        role: result.data.data.structure_role,
      };
      if (result.status === 200) {
        alert("login success");
        setIsLoading(false);
        Cookies.set("token", result.data.token, {
          expires: 1,
          sameSite: "strict",
        });
        Cookies.set("user", JSON.stringify(userData), {
          expires: 1,
          sameSite: "strict",
        });
        const currentUrl = new URL(window.location.href);
        currentUrl.searchParams.set("redirect", pushUrl);
        window.location.href = currentUrl.toString();
      } else {
        alert(result.data.error.message);
        setIsLoading(false);
      }
    } catch (error) {
      alert("username or password incorrect" + error);
      setIsLoading(false);
    }
  };
  return (
    <div className="w-screen h-screen flex items-center">
      <form
        onSubmit={handleLogin}
        className="max-w-md mx-auto bg-white border rounded-md shadow-md  w-4/6 p-4"
      >
        <Link href="/" className="py-2">
          <FaHome className="text-3xl text-gray-500" />
        </Link>
        <p className="text-xl text-center font-semibold">Masuk ke akun anda</p>
        <div className="py-5 gap-2">
          <Input
            name="email"
            title="Email"
            type="email"
            placeholder="Enter your email"
          />
          <Input
            name="password"
            title="Password"
            type="password"
            placeholder="Enter your Password"
          />
        </div>
        <button
          type="submit"
          className={`${
            isLoading ? "cursor-not-allowed" : ""
          } text-white bg-slate-700 hover:bg-slate-800 focus:ring-4 focus:outline-none focus:ring-slate-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-slate-600 dark:hover:bg-slate-700 dark:focus:ring-slate-800`}
        >
          {isLoading ? "Loading..." : "Login"}
        </button>
      </form>
    </div>
  );
};

export default LoginViewPage;
