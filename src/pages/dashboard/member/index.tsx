import React from "react";
import DashboardMemberPageView from "@/components/view/dashboard/member";
import memberService from "@/services/member";

const MemberPage = (props: any) => {
  const { members, totalPages, currentPage } = props;
  return (
    <DashboardMemberPageView
      members={members}
      totalPages={totalPages}
      currentPage={currentPage}
    />
  );
};

export default MemberPage;

export async function getServerSideProps(context: any) {
  const { page, limit } = context.query;
  const currentPage = page ? parseInt(page, 10) : 1;
  const limitPage = limit ? parseInt(limit, 10) : 5;
  const { data } = await memberService.getMembers(currentPage, limitPage);
  return {
    props: {
      members: data.data,
      currentPage,
      totalPages: data.totalPages,
    },
  };
}
