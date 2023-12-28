'use client'
import AdminCardBox from "@/components/adminCardbox";
import AdminGraph from "@/components/adminCreateUser";

export default function Admin() {

  return <>
    <section id="about" className="about">
      <div className="container aos-init aos-animate" data-aos="fade-up">
        <div className="section-title">
          <h2>User Dashboard</h2>
          <h4>A Simple <b style={{color: 'red'}}>C U R D</b> demo based on user demo data</h4>
        </div>
        <AdminCardBox />
        <br/>
        <br/>
        <AdminGraph />
      </div>
    </section>
  </>
}