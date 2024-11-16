import { useEffect, useState } from "react";
import { LuUserPlus2 } from "react-icons/lu";
import Layout from "@/components/Layout";
import HeaderMenu from "@/components/UI/HeaderMenu";
import Pagination from "@/components/Layout/Pagination";
import { useRouter } from "next/router";
import CardDepartement from "@/components/UI/CardDepartement";
import AddDepartement from "./AddGroup";

type propsType = {
  departement: Departement;
  currentPage: number;
  totalPages: number;
};

const DashboardGroupPageView = (props: propsType) => {
  const { departement, totalPages, currentPage } = props;
  const [dataDepartement, setDataDepartement] = useState(departement);
  const [modalAddDepartement, setModalAddDepartement] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setDataDepartement(departement);
  }, [departement, currentPage]);

  const handlePageChange = (page: number) => {
    router.push(`/dashboard/group?page=${page}`);
  };

  return (
    <>
      <Layout>
        <HeaderMenu
          icon={<LuUserPlus2 size={24} />}
          title="Departement"
          subtitle="Semua Departement"
          onClick={() => setModalAddDepartement(true)}
        />
        <div className="grid grid-cols-3 gap-4 py-5">
          {dataDepartement?.map((departement: Departement) => {
            return (
              <CardDepartement
                key={departement.id}
                name={departement.name}
                description={departement.desc}
                id={departement.id}
                members={departement.members}
                setDataDepartement={setDataDepartement}
              />
            );
          })}
        </div>
        <div className="flex py-3">
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </div>
      </Layout>
      {modalAddDepartement && (
        <AddDepartement
          setModalAddDepartement={setModalAddDepartement}
          setDataDepartement={setDataDepartement}
        />
      )}
    </>
  );
};

export default DashboardGroupPageView;
