import { faHeartPulse, faChartLine, faPhotoFilm, faPeopleGroup, } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";

import rigthArr from "../assets/image/rigth-arrow.svg";
import { StackAreaChart } from "../charts/StackAreaChart";
import { ColumnChart } from "../charts/ColumnChart";
import { AreaChart } from "../charts/AreaChart";

import chartData from "../data/areaChart";
import allChartsData from "../data/areaChart";
import dashboardCards from "../data/dashboardCard";
import { useSelector } from "react-redux";
import { MultiLineChart } from "../charts/MultiLineChart";
import axios from "axios";
import { Card } from "../charts/Card";

export const Dashboard = () => {

  const { areaChartJson, columnChartJson, stackAreaChartJson, multiLinesChart } = chartData;

  const [areaChartData, setAreaChartData] = useState(null);
  const [arrByMonthChartData, setArrByMonthChartData] = useState(allChartsData.singleSeriesColumnChart);
  const [arrByModalChartData, setArrByModalChartData] = useState(allChartsData.multiSeriesLineChartData);
  const [arrByCustomerChartData, setArrByCustomerChartData] = useState(allChartsData.singleSeriesColumnChart);
  const [overageByModalChartData, setOverageByModalChartData] = useState(allChartsData.multiSeriesLineChartData);
  const [overageByCustomerChartData, setOverageByCustomerChartData] = useState(allChartsData.multiSeriesLineChartData);
  const [overAllChartData, setoverAllChartData] = useState(null);
  const [loading, setLoading] = useState(false);

  const userRedux = useSelector(state => state.user.user);

  function getTopFiveValuesDescending(json, numberOfItems) {
    let newJSON = {
      "xAxisCategories": [],
      "ySeries": {
        "data": []
      }
    }

    let ySeriesData = json.ySeries.data;
    let xAxisCategories = json.xAxisCategories;

    // Create an array of objects with value and index
    const indexedData = ySeriesData.map((value, index) => ({
      label: xAxisCategories[index],
      value: value,
      index: index
    }));

    // Sort by value in descending order
    indexedData.sort((a, b) => b.value - a.value);

    // Extract the top 5 items
    const topFiveLabels = indexedData.slice(0, numberOfItems).map(item => item.label);
    const topFiveValues = indexedData.slice(0, numberOfItems).map(item => item.value);

    newJSON.ySeries.data = topFiveValues;
    newJSON.xAxisCategories = topFiveLabels;

    return newJSON;
  };

  const fetchAreaChartData = async () => {
    setLoading(true);
    try {
      const url = "http://16.171.166.192/kpi/arr_by_month";
      const config = {
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Token ${userRedux.token}`
        },
      };

      const response = await axios.get(url, config);
      // console.log(response.data);
      if (response.data) {
        setArrByMonthChartData(response.data);
      }
      else {
        setArrByMonthChartData(allChartsData.singleSeriesColumnChart);
      }
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const fetchModalChartData = async () => {
    setLoading(true);
    try {
      const url = "http://16.171.166.192/kpi/arr_by_model";
      const config = {
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Token ${userRedux.token}`
        },
      };

      const response = await axios.get(url, config);
      // console.log(response.data);
      if (response.data) {
        setArrByModalChartData(response.data);
      }
      else {
        setArrByModalChartData(allChartsData.multiSeriesLineChartData);
      }
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const fetchCustomerChartData = async () => {
    setLoading(true);
    try {
      const url = "http://16.171.166.192/kpi/arr_by_customer";
      const config = {
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Token ${userRedux.token}`
        },
      };

      const response = await axios.get(url, config);

      if (response.data) {
        let newData = getTopFiveValuesDescending(response.data, 5)
        setArrByCustomerChartData(newData);
      }
      else {
        setArrByCustomerChartData(allChartsData.singleSeriesColumnChart);
      }
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const fetchOverallChartData = async () => {
    setLoading(true);
    try {
      const url = "http://16.171.166.192/kpi/overall";
      const config = {
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Token ${userRedux.token}`
        },
      };

      const response = await axios.get(url, config);
      console.log(response.data);
      if (response.data) {
        setoverAllChartData(response.data);
      }
      else {
        setoverAllChartData(null);
      }
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const fetchOverageByModelChartData = async () => {
    setLoading(true);
    try {
      const url = "http://16.171.166.192/kpi/overage_by_model";
      const config = {
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Token ${userRedux.token}`
        },
      };

      const response = await axios.get(url, config);
      console.log(response.data);
      if (response.data) {
        setOverageByModalChartData(response.data);
      }
      else {
        setOverageByModalChartData(allChartsData.multiSeriesLineChartData);
      }
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const fetchOverageByCustomerChartData = async () => {
    setLoading(true);
    try {
      const url = "http://16.171.166.192/kpi/overage_by_customer";
      const config = {
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Token ${userRedux.token}`
        },
      };

      const response = await axios.get(url, config);
      console.log(response.data);
      if (response.data) {
        const tempData1 = {
          "xAxisCategories": response.data.xAxisCategories,
          "ySeries": response.data.ySeries
        }

        setOverageByCustomerChartData(response.data);
      }
      else {
        setOverageByCustomerChartData(allChartsData.multiSeriesLineChartData);
      }
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };


  useEffect(() => {
    fetchAreaChartData();
    fetchModalChartData();
    fetchCustomerChartData();
    fetchOverallChartData();
    fetchOverageByModelChartData();
    fetchOverageByCustomerChartData();
  }, []);

  return (
    <>
      <section className="Dashboard-container">

        <div className="row dashboard-opt-main-container bg-white px-3 pt-4 pb-2 mb-4 mx-0">
          <div className="col-sm-12 col-md-12 col-lg-3 col-xl-3 mb-3" >
            {
              overAllChartData != null ?
                <Card title={"Annual Recurring Revenue ($M)"} description={""} value={overAllChartData != null ? overAllChartData.arr : ""} icon={rigthArr} />
                :
                <div className="loader-container d-flex justify-content-center align-items-center h-100">
                  <div class="spinner-border loader-color" role="status">
                    <span class="visually-hidden">Loading...</span>
                  </div>
                </div>
            }
          </div>
          <div className="col-sm-12 col-md-12 col-lg-3 col-xl-3 mb-3" >
            {
              overAllChartData != null ?
                <Card title={"No. Of Contracts"} description={""} value={overAllChartData != null ? overAllChartData.contracts : ""} icon={rigthArr} />
                :
                <div className="loader-container d-flex justify-content-center align-items-center h-100">
                  <div class="spinner-border loader-color" role="status">
                    <span class="visually-hidden">Loading...</span>
                  </div>
                </div>
            }
          </div>
        </div>

        <div className="row mb-4">
          <div className="col-sm-12 col-md-12 col-lg-3 col-xl-3">
            <div className="chart-container p-2">
              {/* <AreaChart data={areaChartJson} label={"Your total Sale"} /> */}
              {
                loading ?
                  <div className="loader-dashboard-container d-flex justify-content-center align-items-center h-100">
                    <div class="spinner-border loader-color" role="status">
                      <span class="visually-hidden">Loading...</span>
                    </div>
                  </div>
                  :
                  <ColumnChart data={arrByCustomerChartData} label={"Top 5 customers by ARR last month"} />
              }
            </div>
          </div>
          <div className="col-sm-12 col-md-12 col-lg-3 col-xl-3">
            <div className="chart-container p-2">
              {
                loading ?
                  <div className="loader-dashboard-container d-flex justify-content-center align-items-center h-100">
                    <div class="spinner-border loader-color" role="status">
                      <span class="visually-hidden">Loading...</span>
                    </div>
                  </div>
                  :
                  <ColumnChart data={arrByMonthChartData} label={"ARR by month"} />
              }
            </div>
          </div>
          <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6">
            <div className="chart-container p-2">
              {
                loading ?
                  <div className="loader-dashboard-container d-flex justify-content-center align-items-center h-100">
                    <div class="spinner-border loader-color" role="status">
                      <span class="visually-hidden">Loading...</span>
                    </div>
                  </div>
                  :
                  <MultiLineChart
                    data={arrByModalChartData}
                    label={"ARR by Business Model by month"}
                    yAxis={"Annual Recurring revenue"}
                  />
              }
              {/* <StackAreaChart data={stackAreaChartJson} label={'Revenue Overview'} /> */}
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6">
            <div className="chart-container p-2">
              {
                loading ?
                  <div className="loader-dashboard-container d-flex justify-content-center align-items-center h-100">
                    <div class="spinner-border loader-color" role="status">
                      <span class="visually-hidden">Loading...</span>
                    </div>
                  </div>
                  :
                  <MultiLineChart
                    data={overageByModalChartData}
                    label={"Overages amount by Business Model by month"}
                    yAxis={"Overage amount"}
                  />
              }
              {/* <StackAreaChart data={stackAreaChartJson} label={'Revenue Overview'} /> */}
            </div>
          </div>
          <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6">
            <div className="chart-container p-2">
              {
                loading ?
                  <div className="loader-dashboard-container d-flex justify-content-center align-items-center h-100">
                    <div class="spinner-border loader-color" role="status">
                      <span class="visually-hidden">Loading...</span>
                    </div>
                  </div>
                  :
                  <MultiLineChart
                    data={overageByCustomerChartData}
                    label={"Overages amount by Customer by month"}
                    yAxis={"Overage amount"}
                  />
              }
              {/* <StackAreaChart data={stackAreaChartJson} label={'Revenue Overview'} /> */}
            </div>
          </div>
        </div>

      </section>
    </>
  );
};
