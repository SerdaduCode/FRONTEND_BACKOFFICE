import instance from "@/lib/axios/instance";

const dashboardService = {
  getWidgetCount: () => instance.get("/widget/stats-count"),
  getProjectMember: () => instance.get("/widget/project-member")
}

export default dashboardService;
