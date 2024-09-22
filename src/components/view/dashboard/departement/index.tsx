import Link from "next/link";
import React from "react";

type propsTypes = {
  departements: any;
};

const DepartementViewPage = (props: propsTypes) => {
  const { departements } = props;
  return (
    <div>
      <p>DepartementViewPage</p>
      <Link href="/dashboard" className="underline">
        dashboard
      </Link>

      <div className="flex flex-col mt-10 bg-teal-500">
        <p>data</p>
        {departements.map((departement: any) => (
          <p className="mx-2" key={departement.id}>
            {departement.name}
          </p>
        ))}
      </div>
    </div>
  );
};

export default DepartementViewPage;
