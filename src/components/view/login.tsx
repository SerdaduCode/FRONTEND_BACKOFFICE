import React, { FormEvent } from "react";
import Input from "../UI/Input";
import authService from "@/services";
import Cookies from "js-cookie";
import { useRouter } from "next/router";

const LoginViewPage = () => {
  const { query } = useRouter();

  const pushUrl: string = (query.callbackUrl as string) || "/";
  const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const data = {
      email: form.email.value,
      password: form.password.value,
    };
    try {
      const result = await authService.loginMember(data);
      if (result.status === 200) {
        alert("login success");
        Cookies.set("token", result.data.token, {
          expires: 1,
          sameSite: "strict",
        });
        const currentUrl = new URL(window.location.href);
        currentUrl.searchParams.set("redirect", pushUrl);
        window.location.href = currentUrl.toString();
      } else {
        alert(result.data.error.message);
      }
    } catch (error) {
      alert("username or password incorrect" + error);
    }
  };
  return (
    <div className="w-screen h-screen flex items-center">
      <form
        onSubmit={handleLogin}
        className="max-w-sm mx-auto bg-white border rounded-md shadow-md h-3/6 w-4/6 p-4 "
      >
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
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default LoginViewPage;
