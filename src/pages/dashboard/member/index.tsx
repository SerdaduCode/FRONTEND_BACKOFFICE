import React from 'react';
import DashboardMemberPageView from '@/components/view/dashboard/member';
import memberService from '@/services/member';

const MemberPage = (props:any) => {
  const { members } = props;
  console.log(members.users);
  return <DashboardMemberPageView members={members} />;
};

export default MemberPage;


export async function getServerSideProps() {
  const data = await memberService.getMembers();
  return {
    props: {
      members: data.data,
    },
  };
}