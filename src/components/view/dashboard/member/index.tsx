import React from "react";
import { LuUserPlus2 } from "react-icons/lu";
import Layout from "@/components/Layout";
import HeaderMenu from "@/components/UI/HeaderMenu";
import Avatar from "@/components/UI/Avatar";

const DashboardMemberPageView = (props: any) => {
  const { members } = props;
  return (
    <Layout>
      <HeaderMenu
        icon={<LuUserPlus2 size={24} />}
        title="Member"
        subtitle="Semua Anggota"
      />

      <div className="relative overflow-x-auto border-2 border-slate-200 rounded-lg mt-4">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Nama Anggota
              </th>
              <th scope="col" className="px-6 py-3">
                Role
              </th>
              <th scope="col" className="px-6 py-3">
                Team
              </th>
              <th scope="col" className="px-6 py-3">
                Email
              </th>
              <th scope="col" className="pl-6 py-3">
                No.Telpon
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className=" dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap flex items-center gap-2"
              >
                <Avatar size={40} />
                alfonso de albuquerque
              </th>
              <td className="px-6 py-4">Game Developer</td>
              <td className="px-6 py-4"> Product</td>
              <td className="px-6 py-4">alfonso@mail.com</td>
              <td className="px-6 py-4">08123456732</td>
              <td className="pr-4 text-right">
                <a
                  href="#"
                  className="font-medium text-white mr-4 bg-green-500 px-4 py-1 rounded-md"
                >
                  Update
                </a>
                <a
                  href="#"
                  className="font-medium text-white bg-red-500 px-4 py-1 rounded-md"
                >
                  Delete
                </a>
              </td>
            </tr>

            <tr className=" dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap flex items-center gap-2"
              >
                <Avatar size={40} />
                alfonso de albuquerque
              </th>
              <td className="px-6 py-4">Game Developer</td>
              <td className="px-6 py-4"> Product</td>
              <td className="px-6 py-4">alfonso@mail.com</td>
              <td className="px-6 py-4">08123456732</td>
              <td className="pr-4 text-right">
                <a
                  href="#"
                  className="font-medium text-white mr-4 bg-green-500 px-4 py-1 rounded-md"
                >
                  Update
                </a>
                <a
                  href="#"
                  className="font-medium text-white bg-red-500 px-4 py-1 rounded-md"
                >
                  Delete
                </a>
              </td>
            </tr>

            <tr className=" dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap flex items-center gap-2"
              >
                <Avatar size={40} />
                alfonso de albuquerque
              </th>
              <td className="px-6 py-4">Game Developer</td>
              <td className="px-6 py-4"> Product</td>
              <td className="px-6 py-4">alfonso@mail.com</td>
              <td className="px-6 py-4">08123456732</td>
              <td className="pr-4 text-right">
                <a
                  href="#"
                  className="font-medium text-white mr-4 bg-green-500 px-4 py-1 rounded-md"
                >
                  Update
                </a>
                <a
                  href="#"
                  className="font-medium text-white bg-red-500 px-4 py-1 rounded-md"
                >
                  Delete
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </Layout>
  );
};

export default DashboardMemberPageView;
