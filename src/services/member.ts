import instance from "@/lib/axios/instance";

const memberService = {
  getMembers: (page = 1, limit = 10) =>
    instance.get(`/member?page=${page}&limit=${limit}`),
  getMemberById: (id: string) => instance.get(`/member/${id}`),
  updateMember: (id: string, data: any) => instance.put(`/member/${id}`, data),
  deleteMember: (id: string) => instance.delete(`/member/${id}`),
};

export default memberService;
