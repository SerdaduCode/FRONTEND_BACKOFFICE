import { LuArrowRight } from "react-icons/lu";
import Avatar from "../Avatar";
import { Dispatch, SetStateAction, useState } from "react";
import DetailGroup from "@/components/view/dashboard/group/detail";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import UpdateDepartement from "@/components/view/dashboard/group/UpdateGroup";
import DeleteDepartement from "@/components/view/dashboard/group/DeleteGroup";

type propsTypes = {
  name: string;
  description: string;
  id?: string;
  members?: any;
  setDataDepartement: Dispatch<SetStateAction<any>>;
};

const CardDepartement = ({
  name,
  description,
  id,
  members,
  setDataDepartement,
}: propsTypes) => {
  const [modalDetailDepartement, setModalDetailDepartement] = useState(false);
  const [updatedDepartement, setUpdatedDepartement] = useState({});
  const [deletedDepartement, setDeletedDepartement] = useState({});

  return (
    <>
      <div className="bg-white p-6 rounded-xl w-full hover:shadow hover:bg-slate-50  lg:mb-0 mb-4">
        <div
          onClick={() => setModalDetailDepartement(true)}
          className="flex justify-between"
        >
          <p className="font-bold text-xl">{name}</p>
          <button className="flex justify-center items-center h-8 w-8">
            <LuArrowRight size={25} />
          </button>
        </div>
        <div className="flex justify-between my-5">
          <p className="text-slate-500">{description}</p>
        </div>
        <div className="flex justify-between">
          <div className="flex -space-x-3 rtl:space-x-reverse">
            <Avatar size={40} />
            <Avatar size={40} />
            <Avatar size={40} />
            <span className="flex items-center justify-center w-10 h-10 text-xs font-bold text-slate-800 bg-slate-200 rounded-full hover:bg-slate-300 dark:border-gray-800 opacity-80">
              +2
            </span>
          </div>
          <div className="flex gap-1">
            <button
              className="font-medium text-white bg-green-500 rounded-full px-4 py-4 shadow-md"
              onClick={() => setUpdatedDepartement({ id, name, description })}
            >
              <FaEdit />
            </button>
            <button
              className="font-medium text-white bg-red-500 px-4 py-4 rounded-full shadow-md"
              onClick={() => setDeletedDepartement({ id, name })}
            >
              <MdDelete />
            </button>
          </div>
        </div>
      </div>
      {modalDetailDepartement && (
        <DetailGroup
          setModalDetailDepartement={setModalDetailDepartement}
          departementName={name}
          members={members}
        />
      )}
      {Object.keys(updatedDepartement).length > 0 && (
        <UpdateDepartement
          updatedDepartement={updatedDepartement}
          setUpdatedDepartement={setUpdatedDepartement}
          setDataDepartement={setDataDepartement}
        />
      )}
      {Object.keys(deletedDepartement).length > 0 && (
        <DeleteDepartement
          deletedDepartement={deletedDepartement}
          setDeletedDepartement={setDeletedDepartement}
          setDataDepartement={setDataDepartement}
        />
      )}
    </>
  );
};

export default CardDepartement;
