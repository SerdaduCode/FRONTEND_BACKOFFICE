import Input from "@/components/UI/Input";
import Modal from "@/components/UI/Modal";
import projectService from "@/services/project";
import { Dispatch, FormEvent, SetStateAction, useState } from "react";

type propsTypes = {
  updatedProject: any;
  setUpdatedProject: Dispatch<SetStateAction<any>>;
  setDataProject: Dispatch<SetStateAction<any>>;
};
const UpdateProject = (props: propsTypes) => {
  const { setUpdatedProject, setDataProject, updatedProject } = props;
  const [isLoading, setIsLoading] = useState(false);
  const handleUpdate = async (e: FormEvent<HTMLFormElement>) => {
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
      const result = await projectService.updateProject(
        updatedProject.id,
        data
      );
      if (result) {
        setIsLoading(false);
        const { data } = await projectService.getProjects();
        setDataProject(data.data);
        setUpdatedProject(false);
      }
    } catch (error) {
      setIsLoading(false);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <Modal onClose={() => setUpdatedProject({})}>
      <div className="flex items-center justify-center lg:items-start lg:justify-start">
        <p className="my-9 inline-block bg-clip-text text-3xl font-bold ">
          Updated Project
        </p>
      </div>
      <form onSubmit={handleUpdate}>
        <div>
          <Input
            name="namaProject"
            placeholder="Nama Project"
            required
            title="Nama Project"
            type="text"
            defaultValue={updatedProject.name}
          />
          <Input
            name="code_name"
            placeholder="Code Name"
            required
            title="Code Name"
            type="text"
            defaultValue={updatedProject.code_name}
          />
          <div className="my-3">
            <label htmlFor="">Deskripsi</label>
            <textarea
              name="desc"
              className="py-3 px-4 block w-full border-gray-200 border rounded-lg text-sm "
              rows={3}
              placeholder="This is a textarea placeholder"
              defaultValue={updatedProject.desc}
            />
          </div>
          <Input
            name="start_date"
            placeholder="Start Date"
            required
            title="Start Date"
            type="date"
            defaultValue={updatedProject.start_date}
          />
          <Input
            name="end_date"
            placeholder="End Date"
            required
            title="End Date"
            type="date"
            defaultValue={updatedProject.endDate}
          />
        </div>

        <div className="my-3 flex justify-end">
          <button
            type="submit"
            className="font-medium text-white mr-4 bg-slate-600 px-4 py-1 rounded-md"
          >
            {isLoading ? "Loading..." : "Update"}
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default UpdateProject;
