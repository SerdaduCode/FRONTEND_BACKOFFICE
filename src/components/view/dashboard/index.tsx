import React, { useEffect, useState } from "react";
import { LuUserPlus, LuUsers, LuCalendarClock } from "react-icons/lu";
import Layout from "@/components/Layout";
import CardWrapper from "@/components/UI/CardWrapper";
import Card from "@/components/UI/Card";
import Image from "next/image";
import CardProject from "@/components/UI/CardProject";
import CardMember from "@/components/UI/CardMember";
import welcomeIcon from "@/../public/images/welcome-icon.svg";
import Cookies from "js-cookie";

const DashboardViewPage = ({ widgetCount, projects }: any) => {
  const [user, setUser] = useState<any>({});
  useEffect(() => {
    const dataUser = JSON.parse(Cookies.get("user") || "{}");
    setUser(dataUser);
  }, []);
  return (
    <Layout>
      <article className="bg-white w-full px-12 py-16 rounded-xl mb-16 flex justify-between relative shadow-sm">
        <div>
          <h1 className="text-3xl font-bold mb-3">
            Welcome, Bro{" "}
            <span className="text-red-500 uppercase">{user?.name}</span> 👋
          </h1>
          <p className="text-lg text-slate-500">Sunday, September 20 1945</p>
        </div>

        <Image
          priority
          src={welcomeIcon}
          alt=""
          className="lg:block absolute right-0 bottom-0 hidden"
        />
      </article>

      <article className="mb-16">
        <div className="flex gap-10 mb-6 items-center">
          <h1 className="text-2xl font-bold">Statistics</h1>
          <p className="text-base font-bold text-slate-500">Januari 1945</p>
        </div>

        <div className="lg:flex justify-between gap-6">
          <CardWrapper>
            <Card
              icon={<LuUserPlus size={50} color="white" />}
              title="Total Member"
              total={widgetCount?.memberCount}
              totalDesc="Peoples"
            />
          </CardWrapper>

          <CardWrapper>
            <Card
              icon={<LuUsers size={50} color="white" />}
              title="Total Project"
              total={widgetCount?.projectCount}
              totalDesc="Projects"
            />
          </CardWrapper>

          <CardWrapper>
            <Card
              icon={<LuCalendarClock size={50} color="white" />}
              title="Total Event"
              total={widgetCount?.eventCount}
              totalDesc="Events"
            />
          </CardWrapper>
        </div>
      </article>

      <article className="mb-16">
        <div className="flex gap-10 mb-6 items-center">
          <h1 className="text-2xl font-bold">Latest Project</h1>
          <p className="text-base font-bold text-slate-500">Januari 1945</p>
        </div>
        <div className="lg:flex justify-between gap-6">
          {projects?.map((project: any) => (
            <CardWrapper key={project.id}>
              <CardProject
                name={project.name}
                endDate={project.end_date}
                status="Selesai"
              />
            </CardWrapper>
          ))}
        </div>
      </article>

      <article className="mb-16">
        <div className="flex gap-10 mb-6 items-center">
          <h1 className="text-2xl font-bold">Member</h1>
          <p className="text-base font-bold text-slate-500">Development Team</p>
        </div>

        <div className="lg:flex">
          <div className="lg:flex justify-between gap-6 lg:mr-14">
            <CardWrapper>
              <CardMember />
            </CardWrapper>

            <CardWrapper>
              <CardMember />
            </CardWrapper>

            <CardWrapper>
              <CardMember />
            </CardWrapper>
          </div>
          <CardWrapper>
            <div className="flex justify-between">
              <div>
                <h1 className="text-2xl font-bold">Respon Mereka</h1>
                <p className="text-slate-500 mt-2 mb-5">
                  Beri respon kepada calon anggota divisi programming
                </p>
                <button className="bg-black text-white py-1 px-14 rounded-lg">
                  Lihat Mereka
                </button>
              </div>
              {/* <Image
                priority
                src={responseIcon}
                alt=""
                className="max-xl:hidden absolute right-12 block"
              /> */}
            </div>
          </CardWrapper>
        </div>
      </article>
    </Layout>
  );
};

export default DashboardViewPage;
