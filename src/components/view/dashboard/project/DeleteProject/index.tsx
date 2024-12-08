import Modal from "@/components/UI/Modal";
import projectService from "@/services/project";
import { Dispatch, SetStateAction, useState } from "react";

type propsTypes = {
  deletedProject: any;
  setDeletedProject: Dispatch<SetStateAction<any>>;
  setDataProject: Dispatch<SetStateAction<any>>;
};

const DeleteProject = (props: propsTypes) => {
  const { deletedProject, setDeletedProject, setDataProject } = props;

  const [isLoading, setIsLoading] = useState(false);
  const handleDelete = async (e: any) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const result = await projectService.deleteProject(deletedProject.id);
      if (result) {
        const { data } = await projectService.getProjects();
        setDataProject(data.data);
        setIsLoading(false);
        setDeletedProject({});
      } else {
        setIsLoading(false);
      }
    } catch (error) {
      setIsLoading(false);
    }
  };

  return (
    <Modal onClose={() => setDeletedProject({})}>
      <p className="font-medium text-xl">
        Are you sure you want to delete{" "}
        <span className="font-bold text-red-500">{deletedProject?.name}</span>?
      </p>
      <div className="flex justify-end gap-2 mt-10">
        <button
          className="font-medium border mr-4 bg-white px-4 py-1 rounded-md"
          onClick={() => setDeletedProject({})}
        >
          cancel
        </button>
        <button
          className="font-medium text-white mr-4 bg-slate-600 px-4 py-1 rounded-md"
          onClick={handleDelete}
        >
          {isLoading ? "loading..." : "delete"}
        </button>
      </div>
    </Modal>
  );
};

export default DeleteProject;
