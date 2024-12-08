import Input from "@/components/UI/Input";
import Modal from "@/components/UI/Modal";
import projectService from "@/services/project";
import { Dispatch, FormEvent, SetStateAction, useState } from "react";

type propsTypes = {
  setModalAddProject: Dispatch<SetStateAction<boolean>>;
  setDataProject: Dispatch<SetStateAction<any>>;
};
const AddProject = (props: propsTypes) => {
  const { setModalAddProject, setDataProject } = props;
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const form = e.target as HTMLFormElement;
      const data = {
        name: form.namaProject.value,
        code_name: form.code_name.value,
        desc: form.desc.value,
        start_date: form.start_date.value,
        end_date: form.end_date.value,
      };
      const result = await projectService.createProject(data);
      if (result) {
        setIsLoading(false);
        const { data } = await projectService.getProjects();
        setDataProject(data.data);
        form.reset();
        setModalAddProject(false);
      }
    } catch (error) {
      setIsLoading(false);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <Modal onClose={() => setModalAddProject(false)}>
      <div className="flex items-center justify-center lg:items-start lg:justify-start">
        <p className="my-9 inline-block bg-clip-text text-3xl font-bold ">
          Add Project
        </p>
      </div>
      <form onSubmit={handleSubmit}>
        <div>
          <Input
            name="namaProject"
            placeholder="Nama Project"
            required
            title="Nama Project"
            type="text"
          />
          <Input
            name="code_name"
            placeholder="Code Name"
            required
            title="Code Name"
            type="text"
          />
          <div className="my-3">
            <label htmlFor="">Deskripsi</label>
            <textarea
              name="desc"
              className="py-3 px-4 block w-full border-gray-200 border rounded-lg text-sm "
              rows={3}
              placeholder="This is a textarea placeholder"
            />
          </div>
          <Input
            name="start_date"
            placeholder="Start Date"
            required
            title="Start Date"
            type="date"
          />
          <Input
            name="end_date"
            placeholder="End Date"
            required
            title="End Date"
            type="date"
          />
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

export default AddProject;
