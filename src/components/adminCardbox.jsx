import { useContext } from "react";
import userContext from "@/context/usersContext";
import data from "@/app/dat/staticValue";
import { Spinner2 } from "./spinnerloader";
export default function AdminCardBox(){
  const {userlist} = useContext(userContext);
  function TotalReport(){
    let report= {spend:  false, purchase:false, achieved: false , target: data.target};
    userlist?.forEach((val, index) => {
      report.spend +=parseInt(val.totalsales);
      report.purchase += parseInt(val.purchased);

    })
    report.achieved = Math.round((report.spend/report.target)*100);
    return { spend: report.spend   , purchased: report.purchase, achieved: report.achieved, target: report.target}
  }
    return<>
    {/* dashboard  */}
<div className="row">
  <div className="col-xl-3 col-md-6 mb-4">
    <div className="card border-left-primary shadow h-100 py-2">
      <div className="card-body">
        <div className="row no-gutters align-items-center">
          <div className="col mr-2">
            <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
              Total purchase
            </div>
            <div className="h5 mb-0 font-weight-bold text-gray-800">
              {TotalReport().purchased ? TotalReport().purchased : <Spinner2 />}
            </div>
          </div>
          <div className="col-auto">
            <i className="fas fa-calendar fa-2x text-gray-300" />
          </div>
        </div>
      </div>
    </div>
  </div>

  <div className="col-xl-3 col-md-6 mb-4">
    <div className="card border-left-success shadow h-100 py-2">
      <div className="card-body">
        <div className="row no-gutters align-items-center">
          <div className="col mr-2">
            <div className="text-xs font-weight-bold text-success text-uppercase mb-1">
              Total Earning
            </div>
            <div className="h5 mb-0 font-weight-bold text-gray-800">
               {TotalReport().spend? `$ ${TotalReport().spend}` : <Spinner2/>}
            </div>
          </div>
          <div className="col-auto">
            <i className="fas fa-dollar-sign fa-2x text-gray-300" />
          </div>
        </div>
      </div>
    </div>
  </div>

  <div className="col-xl-3 col-md-6 mb-4">
    <div className="card border-left-info shadow h-100 py-2">
      <div className="card-body">
        <div className="row no-gutters align-items-center">
          <div className="col mr-2">
            <div className="text-xs font-weight-bold text-info text-uppercase mb-1">
              Achieved
            </div>
            <div className="row no-gutters align-items-center">
              <div className="col-auto">
                <div className="h5 mb-0 mr-3 font-weight-bold text-gray-800">
                  {TotalReport().achieved? `${TotalReport().achieved}%`: <Spinner2 />}
                </div>
              </div>
              <div className="col">
                <div className="progress progress-sm mr-2">
                  <div className="progress-bar bg-info" role="progressbar"style={{ width: `${String(TotalReport().achieved)}%` }}
                    aria-valuenow={9000 } aria-valuemin={0} aria-valuemax={10000} />
                </div>
              </div>
            </div>
          </div>
          <div className="col-auto">
            <i className="fas fa-clipboard-list fa-2x text-gray-300" />
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Pending Requests Card Example */}
  <div className="col-xl-3 col-md-6 mb-4">
    <div className="card border-left-warning shadow h-100 py-2">
      <div className="card-body">
        <div className="row no-gutters align-items-center">
          <div className="col mr-2">
            <div className="text-xs font-weight-bold text-warning text-uppercase mb-1">
              Sales Target
            </div>
            <div className="h5 mb-0 font-weight-bold text-gray-800">{TotalReport().target}</div>
          </div>
          <div className="col-auto">
            <i className="fas fa-comments fa-2x text-gray-300" />
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
    </>
}