import React from "react";
import Cookies from "js-cookie";
import Link from "next/link";
const DashboardViewPage = () => {
  const handleLogout = () => {
    Cookies.remove("token");
    window.location.href = "/login";
    const callbackUrl = new URL(window.location.href).pathname;
    const params = new URLSearchParams({ callbackUrl });
    window.location.href = `/login?${params.toString()}`;
  };
  return (
    <div>
      <p>dashboard</p>
      <div className="flex flex-col">
        <Link href="/dashboard/departement" className="underline">
          Departement
        </Link>
        <button onClick={handleLogout} type="button">
          logout
        </button>
      </div>
    </div>
  );
};

export default DashboardViewPage;
