'use client'

import AdminCardBox from "@/components/adminCardbox";
import AdminGraph from "@/components/adminCreateUser";

export default function Admin() {

  return <>
    <section id="about" className="about">
      <div className="container aos-init aos-animate" data-aos="fade-up">
        <div className="section-title">
          <h2>User Dashboard</h2>
          <p>
            Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
            aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
            quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat
            sit in iste officiis commodi quidem hic quas.
          </p>
        </div>
        <AdminCardBox />
        <AdminGraph />
      </div>
    </section>
  </>
}