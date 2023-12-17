'use client'

import {useState, useEffect, useContext} from 'react';
import TokenCheck ,{cryptVerify} from '@/app/service/tokenCheck'
import Cookies from 'js-cookie';
export default function Home() {
  const [token, setToken]= useState("");
  const [curd, setCurd] = useState({login: false}); 

  function CheckLogin(){
    if(TokenCheck(token)){
      setCurd({...curd, login: true})
    }
  }

  function AuthMessage() {
   console.log("success")
    return <>
      <h1>Welcome User</h1>
    </>
  }
    return (
        <>
          <section id="hero" className="d-flex flex-column justify-content-center">
            <div style={{ zIndex: 6 }} className="container aos-init aos-animate">
              <h1>Demo on Nextjs </h1>
              
              <p>
                <span className="typed" data-typed-items="Designer, Developer, Freelancer, Photographer"></span>
              </p>
                {/* <div className="container text-center">
                  <div className="row">
                    <div className="col-md-4 col-xs-12">
                    <div className="social-links">
                      <div className="row g-3 align-items-center">
                      <div className="form-floating mb-3">
                        <input type="password" 
                        onChange={(e)=> setToken(e.target.value)}
                        className="form-control" id="floatingInput" placeholder="your token" />
                        <label  style={{paddingLeft: 50}}>Please Enter TOKEN</label>
                      </div>
                      <button type="button" 
                      onClick={()=>{
                        CheckLogin()
                      }} className="btn btn-outline-dark">Login</button>
                      </div>
                    </div>
                    { curd.login? <AuthMessage />: ""}
                    </div>
                    <div className="col-md-8 ">
                    </div>
                  </div>
                </div> */}
              
            </div>
          </section>
        </>
    );
}
