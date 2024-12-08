import Input from "@/components/UI/Input";
import Modal from "@/components/UI/Modal";
import departementService from "@/services/departement";
import { Dispatch, SetStateAction, useState } from "react";

type propsTypes = {
  setModalAddDepartement: Dispatch<SetStateAction<boolean>>;
  setDataDepartement: Dispatch<SetStateAction<any>>;
};
const AddDepartement = (props: propsTypes) => {
  const { setModalAddDepartement, setDataDepartement } = props;
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const form = e.target as HTMLFormElement;
      const data = {
        name: form.namaDepartement.value,
        desc: form.description.value,
      };
      const result = await departementService.createDepartment(data);
      if (result) {
        setIsLoading(false);
        const { data } = await departementService.getDepartements();
        setDataDepartement(data.data);
        form.reset();
        setModalAddDepartement(false);
      }
    } catch (error) {
      setIsLoading(false);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <Modal onClose={() => setModalAddDepartement(false)}>
      <div className="flex items-center justify-center lg:items-start lg:justify-start">
        <p className="my-9 inline-block bg-clip-text text-3xl font-bold ">
          Add departement
        </p>
      </div>
      <form onSubmit={handleSubmit}>
        <div>
          <Input
            name="namaDepartement"
            placeholder="Nama Departement"
            required
            title="Nama Departement"
            type="text"
          />
          <div className="my-3">
            <label htmlFor="">Deskripsi</label>
            <textarea
              name="description"
              className="py-3 px-4 block w-full border-gray-200 border rounded-lg text-sm "
              rows={3}
              placeholder="This is a textarea placeholder"
            />
          </div>
        </div>

        <div className="my-3 flex justify-end">
          <button
            type="submit"
            className="font-medium text-white mr-4 bg-slate-600 px-4 py-1 rounded-md"
          >
            {isLoading ? "Loading..." : "Add"}
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default AddDepartement;
