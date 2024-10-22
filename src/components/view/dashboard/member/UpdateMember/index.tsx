import Input from "@/components/UI/Input";
import Modal from "@/components/UI/Modal";
import memberService from "@/services/member";
import { useState } from "react";

type propsTypes = {
  updatedMember: any;
  setUpdatedMember: any;
  setDataMember: any;
};
const UpdateMember = (props: propsTypes) => {
  const { updatedMember, setUpdatedMember, setDataMember } = props;
  const [isLoading, setIsLoading] = useState(false);

  const handleUpdate = async (e: any) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const form = e.target as HTMLFormElement;
      const data = {
        name: form.fullname.value,
        email: form.email.value,
        password: form.password.value,
        address: form.address.value,
        structure_role: form.structureRole.value,
        phone: form.phone.value,
      };
      const result = await memberService.updateMember(updatedMember.id, data);
      if (result.status === 200) {
        setIsLoading(false);
        const { data } = await memberService.getMembers();
        setDataMember(data.data);
        setUpdatedMember({});
      }
    } catch (error) {
      setIsLoading(false);
    }
  };
  return (
    <Modal onClose={() => setUpdatedMember({})}>
      <div className="flex items-center justify-center lg:items-start lg:justify-start">
        <p className="my-9 inline-block bg-clip-text text-3xl font-bold ">
          Update Member
        </p>
      </div>
      <form onSubmit={handleUpdate}>
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-4 gap-0">
          <div>
            <Input
              name="fullname"
              placeholder="fullname"
              required
              title="Fullname"
              defaultValue={updatedMember.name}
              type="text"
            />
            <Input
              name="email"
              placeholder="email"
              defaultValue={updatedMember.email}
              disabled
              required
              title="Email"
              type="email"
            />
            <Input
              name="password"
              placeholder="password"
              defaultValue={updatedMember.password}
              disabled
              required
              title="Password"
              type="password"
            />
          </div>
          <div>
            <Input
              name="address"
              placeholder="address"
              required
              title="Address"
              defaultValue={updatedMember.address}
              type="text"
            />
            <Input
              name="structureRole"
              placeholder="structure role"
              defaultValue={updatedMember.structure_role}
              required
              title="Structure role"
              type="text"
            />
            <Input
              name="phone"
              placeholder="phone"
              defaultValue={updatedMember.phone}
              required
              title="Phone"
              type="number"
            />
          </div>
        </div>

        <div className="my-3 flex justify-end">
          <button className="font-medium text-white mr-4 bg-slate-600 px-4 py-1 rounded-md">
            {isLoading ? "Loading..." : "Update"}
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default UpdateMember;
