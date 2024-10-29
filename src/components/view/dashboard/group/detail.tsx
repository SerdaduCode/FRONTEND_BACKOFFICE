import Avatar from "@/components/UI/Avatar";
import Modal from "@/components/UI/Modal";

const DetailGroup = (props: any) => {
  const { members, setModalDetailDepartement, departementName } = props;
  return (
    <Modal onClose={() => setModalDetailDepartement(false)}>
      <p className="text-2xl font-bold">
        <span className="text-slate-500 mx-2">Team</span>
        {departementName}
      </p>
      <div className=" overflow-x-auto border-2 border-slate-200 rounded-lg mt-4">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
          <thead className="text-xs text-gray-700 ">
            <tr>
              <th scope="col" className="px-6 py-3">
                Nama Anggota
              </th>
              <th scope="col" className="px-6 py-3">
                Role
              </th>
              <th scope="col" className="px-6 py-3">
                Email
              </th>
              <th scope="col" className="pl-6 py-3">
                No.Telpon
              </th>
            </tr>
          </thead>
          <tbody>
            {members.length > 0 ? (
              <>
                {members.map((member: any) => (
                  <tr className="  hover:bg-gray-50 " key={member.id}>
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap flex items-center gap-2"
                    >
                      <Avatar size={40} />
                      {member.name}
                    </th>
                    <td className="px-6 py-4">{member.structure_role}</td>
                    <td className="px-6 py-4">{member.email}</td>
                    <td className="px-6 py-4">{member.phone}</td>
                  </tr>
                ))}{" "}
              </>
            ) : (
                <tr>
                <td
                  colSpan={6}
                  className="whitespace-nowrap px-6 py-4 text-center text-sm text-gray-500"
                >
                  <div className="flex flex-col items-center">
                    <p className="py-5 text-lg ">
                      Tidak ada anggota
                    </p>
                  </div>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </Modal>
  );
};

export default DetailGroup;
