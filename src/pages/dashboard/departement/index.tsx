import DepartementViewPage from "@/components/view/dashboard/departement";
import departementService from "@/services/departement";
import React from "react";

const DepartementPage = (props: any) => {
  const { departements } = props;

  return <DepartementViewPage departements={departements} />;
};

export default DepartementPage;

export async function getServerSideProps() {
  const { data } = await departementService.getDepartements();
  return {
    props: {
      departements: data.data,
    },
  };
}
