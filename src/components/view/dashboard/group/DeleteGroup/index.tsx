import Modal from "@/components/UI/Modal";
import departementService from "@/services/departement";
import { Dispatch, SetStateAction, useState } from "react";

type propsTypes = {
  deletedDepartement: any;
  setDeletedDepartement: Dispatch<SetStateAction<any>>;
  setDataDepartement: Dispatch<SetStateAction<any>>;
};

const DeleteDepartement = (props: propsTypes) => {
  const { deletedDepartement, setDeletedDepartement, setDataDepartement } =
    props;

  const [isLoading, setIsLoading] = useState(false);
  const handleDelete = async (e: any) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const result = await departementService.deleteDepartment(
        deletedDepartement.id
      );
      if (result) {
        const { data } = await departementService.getDepartements();
        setDataDepartement(data.data);
        setIsLoading(false);
        setDeletedDepartement({});
      } else {
        setIsLoading(false);
      }
    } catch (error) {
      setIsLoading(false);
    }
  };

  return (
    <Modal onClose={() => setDeletedDepartement({})}>
      <p className="font-medium text-xl">
        Are you sure you want to delete{" "}
        <span className="font-bold text-red-500">
          {deletedDepartement?.name}
        </span>
        ?
      </p>
      <div className="flex justify-end gap-2 mt-10">
        <button
          className="font-medium border mr-4 bg-white px-4 py-1 rounded-md"
          onClick={() => setDeletedDepartement({})}
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

export default DeleteDepartement;
