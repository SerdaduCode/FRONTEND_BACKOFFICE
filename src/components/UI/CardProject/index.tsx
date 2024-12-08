import { LuArrowRight } from "react-icons/lu";
import StatusProject from "../StatusProject";
import Link from "next/link";
import Avatar from "../Avatar";
import { Dispatch, SetStateAction, useState } from "react";
import UpdateProject from "@/components/view/dashboard/project/UpdateProject";
import DeleteProject from "@/components/view/dashboard/project/DeleteProject";

const CardProject = ({
  name,
  status,
  id,
  desc,
  code_name,
  start_date,
  endDate,
  setDataProject,
}: {
  name: string;
  status?: string;
  endDate: any;
  id: string;
  desc: string;
  code_name: string;
  start_date: any;
  setDataProject: Dispatch<SetStateAction<any>>;
}) => {
  const [modalDetailProject, setModalDetailProject] = useState(false);
  const [updatedProject, setUpdatedProject] = useState({});
  const [deletedProject, setDeletedProject] = useState({});
  return (
    <>
      <div className="flex justify-between">
        <p className="font-bold text-xl">{name}</p>
        <Link href="">
          <LuArrowRight />
        </Link>
      </div>
      <div className="flex justify-between my-5">
        {endDate && <span>{endDate}</span>}

        <span className="py-1 px-3 bg-slate-200 rounded-md text-slate-800 text-sm">
          Programming
        </span>

        <StatusProject status={status} />
      </div>
      <div>
        <div className="flex -space-x-3 rtl:space-x-reverse">
          <Avatar size={40} />
          <Avatar size={40} />
          <Avatar size={40} />
          <a
            className="flex items-center justify-center w-10 h-10 text-xs font-bold text-slate-800 bg-slate-200 rounded-full hover:bg-slate-300 dark:border-gray-800 opacity-80"
            href="#"
          >
            +2
          </a>
        </div>
        <div className="flex justify-end">
          <button
            onClick={() =>
              setUpdatedProject({
                id,
                name,
                desc,
                code_name,
                start_date,
                endDate,
              })
            }
            className="font-medium text-white mr-4 bg-green-500 px-4 py-1 rounded-md"
          >
            Update
          </button>
          <button
            onClick={() => setDeletedProject({ id, name })}
            className="font-medium text-white bg-red-500 px-4 py-1 rounded-md"
          >
            Delete
          </button>
        </div>
      </div>
      {Object.keys(updatedProject).length > 0 && (
        <UpdateProject
          updatedProject={updatedProject}
          setUpdatedProject={setUpdatedProject}
          setDataProject={setDataProject}
        />
      )}
      {Object.keys(deletedProject).length > 0 && (
        <DeleteProject
          deletedProject={deletedProject}
          setDeletedProject={setDeletedProject}
          setDataProject={setDataProject}
        />
      )}
    </>
  );
};

export default CardProject;
