import instance from "@/lib/axios/instance";

const memberService = {
    getMembers:()=> instance.get("/member"),
}

export default memberService;