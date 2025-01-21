import { faArrowRightFromBracket, faChartLine, faCopy, faHeartPulse, faList, faPeopleGroup, faPhotoFilm } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

import logo from "../assets/image/recursion-icon.svg";
import menu from "../assets/image/dashboard-menu.svg";
import { useNavigate } from "react-router-dom";

export const Siderbar = () => {

    const navigate = useNavigate();

    const handlerAnalyticsDashboard = () => {
        navigate("/analytics");
    }

    const handlerDashboard = () => {
        navigate("/dashboard");
    }

    const handlderHeart = () => {
        navigate("/health");
    }

    return (
        <>
            <div className="sider-main-container">
                <div className="text-center">
                    <img src={logo} className="logo" onClick={handlerDashboard}/>
                </div>
                <div className="text-center">
                    <div>
                        <img src={menu} className="fontAwe-icon-size"  onClick={handlerDashboard} />
                        {/* <FontAwesomeIcon icon={faList} className="fontAwe-icon-size active-menu" onClick={handlerDashboard}/> */}
                    </div>
                    <div>
                        <FontAwesomeIcon icon={faHeartPulse} className="fontAwe-icon-size" onClick={handlderHeart}/>
                    </div>
                    <div>
                        <FontAwesomeIcon icon={faChartLine} className="fontAwe-icon-size" onClick={handlerAnalyticsDashboard} />
                    </div>
                    {/* <div>
                        <FontAwesomeIcon icon={faPhotoFilm} className="fontAwe-icon-size" />
                    </div>
                    <div>
                        <FontAwesomeIcon icon={faPeopleGroup} className="fontAwe-icon-size" />
                    </div>
                    <div>
                        <FontAwesomeIcon icon={faCopy} className="fontAwe-icon-size" />
                    </div> */}
                </div>
                {/* <div className="text-center pb-5">
                    <FontAwesomeIcon icon={faArrowRightFromBracket} className="logout-icon" onClick={handlerLogout}/>
                </div> */}
            </div>
        </>
    )
}