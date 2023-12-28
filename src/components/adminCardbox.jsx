import { useContext } from "react";
import userContext from "@/context/usersContext";
import data from "@/app/dat/staticValue";
import { Spinner2 } from "./spinnerloader";
import CountUp from 'react-countup';

export default function AdminCardBox() {

  const { userlist } = useContext(userContext);

  function TotalReport() {
      let report = {
          spend: false,
          purchase: false,
          achieved: false,
          target: data.target,
      };
      userlist?.forEach((val, index) => {
          report.spend += parseInt(val.totalsales);
          report.purchase += parseInt(val.purchased);
      });
      report.achieved = Math.round((report.spend / report.target) * 100);
      return {
          spend: report.spend,
          purchased: report.purchase,
          achieved: report.achieved,
          target: report.target,
      };
  }

  return (
      <>
          {/* dashboard  */}

          <div className="row">
              <div className="col-md-3 col-xs-6">
                  <div className="counter">
                      <div className="counter-icon">
                        <b><i className="bi bi-basket" /></b>
                      </div>
                      <h3>TOTAL PURCHASE</h3>
                      <span className="counter-value">
                          {TotalReport().purchased ? (
                              <CountUp
                                  start={0}
                                  end={TotalReport().purchased}
                                  duration={2}
                              />
                          ) : (
                              <Spinner2 />
                          )}
                      </span>
                  </div>
              </div>
              <div className="col-md-3 col-xs-6">
                  <div className="counter pink">
                      <div className="counter-icon">
                          <b>₹</b>
                          {/* <i className="bi bi-currency-dollar" /> */}
                      </div>
                      <h3>TOTAL EARNING</h3>
                      <span className="counter-value">
                          {TotalReport().spend ? (
                              <CountUp
                                  start={0}
                                  prefix="₹ "
                                  end={TotalReport().spend}
                                  duration={2}
                              />
                          ) : (
                              <Spinner2 />
                          )}
                      </span>
                  </div>
              </div>
              <div className="col-md-3 col-sm-6">
                  <div className="counter orange">
                      <div className="counter-icon">
                          <i className="bi bi-graph-up" />
                      </div>
                      <h3>ACHIEVED</h3>
                      <span className="counter-value">
                          <div
                              className="row no-gutters align-items-center"
                              style={{ padding: '15px' }}
                          >
                              <div className="col-auto">
                                  <div className="h5 mb-0 mr-3 font-weight-bold text-gray-800">
                                      {TotalReport().achieved ? (
                                          <CountUp
                                              suffix="%"
                                              start={0}
                                              end={TotalReport().achieved}
                                              duration={2}
                                          />
                                      ) : (
                                          <Spinner2 />
                                      )}
                                  </div>
                              </div>
                              <div className="col">
                                  <div className="progress progress-sm mr-2">
                                      <div
                                          className="progress-bar bg-info"
                                          role="progressbar"
                                          style={{
                                              width: `${String(
                                                  TotalReport().achieved
                                              )}%`,
                                          }}
                                          aria-valuenow={9000}
                                          aria-valuemin={0}
                                          aria-valuemax={10000}
                                      />
                                  </div>
                              </div>
                          </div>
                      </span>
                  </div>
              </div>
              <div className="col-md-3 col-sm-6">
                  <div className="counter purple">
                      <div className="counter-icon">
                          <i className="bi bi-bullseye" />
                      </div>
                      <h3>SALES TARGET</h3>
                      <span className="counter-value">
                          <CountUp
                              prefix="₹ "
                              start={0}
                              end={TotalReport().target}
                              duration={2}
                          />
                      </span>
                  </div>
              </div>
          </div>
      </>
  );
}