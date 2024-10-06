import React, { useEffect, useState } from "react";
import { LuUserPlus2 } from "react-icons/lu";
import Layout from "@/components/Layout";
import HeaderMenu from "@/components/UI/HeaderMenu";
import Avatar from "@/components/UI/Avatar";
import UpdateMember from "./UpdateMember";
import DeleteMember from "./DeleteMember";
import Pagination from "@/components/Layout/Pagination";
import { useRouter } from "next/router";

const DashboardMemberPageView = (props: any) => {
  const { members, totalPages, currentPage } = props;
  const [dataMember, setDataMember] = useState(members);
  const [updatedMember, setUpdatedMember] = useState({});
  const [deletedMember, setDeletedMember] = useState({});
  const router = useRouter();

  useEffect(() => {
    setDataMember(members);
  }, [members, currentPage]);

  const handlePageChange = (page: number) => {
    router.push(`/dashboard/member?page=${page}`);
  };

  return (
    <>
      <Layout>
        <HeaderMenu
          icon={<LuUserPlus2 size={24} />}
          title="Member"
          subtitle="Semua Anggota"
          linkTo="/dashboard/register"
        />
        <div className=" overflow-x-auto border-2 border-slate-200 rounded-lg mt-4">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
            <thead className="text-xs text-gray-700 ">
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
              {dataMember.map((member: any) => (
                <tr className="  hover:bg-gray-50 " key={member.id}>
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap flex items-center gap-2"
                  >
                    <Avatar size={40} />
                    {member.name}
                  </th>
                  <td className="px-6 py-4">{member.structure_role}</td>
                  <td className="px-6 py-4"> {member.department.name}</td>
                  <td className="px-6 py-4">{member.email}</td>
                  <td className="px-6 py-4">{member.phone}</td>
                  <td className="pr-4 text-right">
                    <div className="flex justify-end">
                      <button
                        className="font-medium text-white mr-4 bg-green-500 px-4 py-1 rounded-md"
                        onClick={() => setUpdatedMember(member)}
                      >
                        Update
                      </button>
                      <button
                        className="font-medium text-white bg-red-500 px-4 py-1 rounded-md"
                        onClick={() => setDeletedMember(member)}
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="flex py-3">
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </div>
      </Layout>
      {Object.keys(updatedMember).length > 0 && (
        <UpdateMember
          updatedMember={updatedMember}
          setUpdatedMember={setUpdatedMember}
          setDataMember={setDataMember}
        />
      )}
      {Object.keys(deletedMember).length > 0 && (
        <DeleteMember
          deletedMember={deletedMember}
          setDeletedMember={setDeletedMember}
          setDataMember={setDataMember}
        />
      )}
    </>
  );
};

export default DashboardMemberPageView;
