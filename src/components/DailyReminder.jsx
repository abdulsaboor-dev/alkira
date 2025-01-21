import { faHeartPulse } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

import rigthArr from "../assets/image/rigth-arrow.svg";
import { HighChart } from "../charts/HighChart";
import { ColumnChart } from "../charts/ColumnChart";
import { AreaChart } from "../charts/AreaChart";

export const DailyReminder = () => {
    return (
        <>
            <section className="Dashboard-container p-5">
                <div className="row mb-4">
                    <div className="col-sm-12 col-md-12 col-lg-3 col-xl-3">
                        <div className="bg-white p-2 rounded">
                            <HighChart />
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-12 col-lg-3 col-xl-3">
                        <div className="bg-white p-2 rounded">
                            <ColumnChart />
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6">
                        <div className="bg-white p-2 rounded">
                            <AreaChart />
                        </div>
                    </div>
                </div>
                <div className="row bg-white px-3 py-4 rounded mb-0 mx-0">
                    <div className="col-sm-12 col-md-12 col-lg-3 col-xl-3">
                        <div className="dashboard-opt-container px-3 py-4 rounded">
                            <FontAwesomeIcon icon={faHeartPulse} className="fontAwe-icon-size mb-2 text-black" />
                            <p className="subtitle mb-0">Lorem Ipsum</p>
                            <p className="smallText">Reminder after you reached daily limit</p>
                            <div className="d-flex justify-content-between align-items-center">
                                <h4 className="mb-0">5078,23</h4>
                                <img src={rigthArr} className="right-arr" />
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-12 col-lg-3 col-xl-3">
                        <div className="dashboard-opt-container px-3 py-4 rounded">
                            <FontAwesomeIcon icon={faHeartPulse} className="fontAwe-icon-size mb-2 text-black" />
                            <p className="subtitle mb-0">Lorem Ipsum</p>
                            <p className="smallText">Reminder after you reached daily limit</p>
                            <div className="d-flex justify-content-between align-items-center">
                                <h4 className="mb-0">5078,23</h4>
                                <img src={rigthArr} className="right-arr" />
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-12 col-lg-3 col-xl-3">
                        <div className="dashboard-opt-container px-3 py-4 rounded">
                            <FontAwesomeIcon icon={faHeartPulse} className="fontAwe-icon-size mb-2 text-black" />
                            <p className="subtitle mb-0">Lorem Ipsum</p>
                            <p className="smallText">Reminder after you reached daily limit</p>
                            <div className="d-flex justify-content-between align-items-center">
                                <h4 className="mb-0">5078,23</h4>
                                <img src={rigthArr} className="right-arr" />
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-12 col-lg-3 col-xl-3">
                        <div className="dashboard-opt-container px-3 py-4 rounded">
                            <FontAwesomeIcon icon={faHeartPulse} className="fontAwe-icon-size mb-2 text-black" />
                            <p className="subtitle mb-0">Lorem Ipsum</p>
                            <p className="smallText">Reminder after you reached daily limit</p>
                            <div className="d-flex justify-content-between align-items-center">
                                <h4 className="mb-0">5078,23</h4>
                                <img src={rigthArr} className="right-arr" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}




