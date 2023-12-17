'use client'

import AdminCardBox from "@/components/adminCardbox";
import AdminGraph from "@/components/adminCreateUser";

export default function Admin() {

  return <>
    <section id="about" className="about">
      <div className="container aos-init aos-animate" data-aos="fade-up">
        <div className="section-title">
          <h2>User Dashboard</h2>
          <h4>A simple Display on User Modify, add, edit</h4>
        </div>
        <AdminCardBox />
        <AdminGraph />
      </div>
    </section>
  </>
}