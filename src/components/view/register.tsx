import React, { FormEvent, useState } from "react";
import Input from "../UI/Input";
import authService from "@/services";

const RegisterViewPage = () => {
const [isLoading,setIsLoading]=useState(false)


    const handleRegister = async(e :FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        const form = e.target as HTMLFormElement;
        const data ={
            name: form.fullname.value,
            email: form.email.value,
            password: form.password.value
        }

        try {
            const result = await authService.registerMember(data)
            if (result.status === 200){
                setIsLoading(true)
                alert("register success")

            }else{
                alert("register failed")
            }
        } catch (error) {
            alert("email already exist")
        }
        

    }
  return (
    <div className="w-screen h-screen flex items-center">
      <form onSubmit={handleRegister} className="max-w-sm mx-auto bg-white border rounded-md shadow-md h-3/6 w-4/6 p-4 ">
        <Input name="fullname"  placeholder="fullname" required title="fullname" type="text" />
        <Input name="email"  placeholder="email" required title="email" type="email" />
        <Input name="password"  placeholder="password" required title="password" type="password" />
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

export default RegisterViewPage;
