import Modal from "@/components/UI/Modal";
import memberService from "@/services/member";
import React, { useState } from "react";

const DeleteMember = ({
  setDataMember,
  setDeletedMember,
  deletedMember,
}: any) => {
  const [isLoading, setIsLoading] = useState(false);
  const handleDelete = async (e: any) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const result = await memberService.deleteMember(deletedMember.id);
      if (result.status === 200) {
        const { data } = await memberService.getMembers();
        setDataMember(data.data);
        setIsLoading(false);
        setDeletedMember({});
      } else {
        setIsLoading(false);
      }
    } catch (error) {
      setIsLoading(false);
    }
  };

  return (
    <Modal onClose={() => setDeletedMember({})}>
      <p className="font-medium text-xl">
        Are you sure you want to delete{" "}
        <span className="font-bold text-red-500">{deletedMember?.email}</span>?
      </p>
      <div className="flex justify-end gap-2 mt-10">
        <button
          className="font-medium border mr-4 bg-white px-4 py-1 rounded-md"
          onClick={() => setDeletedMember({})}
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

export default DeleteMember;
