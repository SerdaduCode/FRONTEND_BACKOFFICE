import React from "react";
import { LuUserPlus2 } from "react-icons/lu";
import Layout from "@/components/Layout";
import HeaderMenu from "@/components/UI/HeaderMenu";

const DashboardMemberPageView = (props: any) => {
  const { members } = props;

  return (
    <Layout>
      <HeaderMenu
        icon={<LuUserPlus2 size={24} />}
        title="Member"
        subtitle="Semua Anggota"
      />
      <div>
        <div className="flex flex-col">
          <div className="-m-1.5 overflow-x-auto">
            <div className="p-1.5 min-w-full inline-block align-middle">
              <div className="overflow-hidden">
                <table className="min-w-full divide-y divide-gray-200 dark:divide-neutral-700">
                  <thead>
                    <tr>
                      <th
                        scope="col"
                        className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500"
                      >
                        Nama Anggota
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500"
                      >
                        Role
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500"
                      >
                        Email
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-end text-xs font-medium text-gray-500 uppercase dark:text-neutral-500"
                      >
                        No.Telp
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-end text-xs font-medium text-gray-500 uppercase dark:text-neutral-500"
                      >
                        Aksi
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 dark:divide-neutral-700">
                    {members?.users.map((member: any) => (
                      <tr>
                        <td className="px-6 py-4 text-start text-sm font-medium text-neutral-800">
                          {member.name}
                        </td>
                        <td className="px-6 py-4 text-start text-sm font-medium text-neutral-800">
                          {member.structure_role}
                        </td>
                        <td className="px-6 py-4 text-start text-sm font-medium text-neutral-800">
                          {member.email}
                        </td>
                        <td className="px-6 py-4 text-end text-sm font-medium text-neutral-800">
                          {member.phone}
                        </td>
                        <td className="px-6 py-4 text-end text-sm font-medium text-neutral-800">
                          <a
                            href="#"
                            className="text-red-500 hover:text-red-700"
                          >
                            Hapus
                          </a>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default DashboardMemberPageView;
