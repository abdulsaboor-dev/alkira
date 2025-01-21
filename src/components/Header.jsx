import React from "react";
import axios from "axios";
import { faBell, faChevronDown, faCircle, faCircleChevronDown, faImage, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import notification from "../assets/image/notification.svg";
import user from "../assets/image/user.svg";
import logout from "../assets/image/logout-icon.svg";

import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { clearUser } from "../features/UserSlice";



export const Header = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    
    const userRedux = useSelector(state => state.user.user);
    
    const handlerLogout = () => {
        try{
            let url = "http://16.171.166.192/auth/logout";
            const config = {
                headers: {
                    'Authorization': `Bearer ${userRedux.token}`,
                    'Content-Type': 'application/json'
                },
            };
            const body = {}

            const response = axios.post(url,body,config);
            console.log(response.data);
            dispatch(clearUser());
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <>
            <div className="header-container d-block px-5 py-3">
                <div className="row align-items-center">
                    <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6">
                        <div className="search-container">
                            <span className="me-2">
                                <FontAwesomeIcon icon={faMagnifyingGlass} />
                            </span>
                            <input type="text" className="search-input" placeholder="Search"/>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6">
                        <div className="d-flex justify-content-end align-items-center">
                            {/* <div className="me-4">
                                 <img src={notification} className="notific-icon" />
                            </div> */}
                            <div className="me-4">
                                {/* <FontAwesomeIcon icon={faCircle} className="user-icon" /> */}
                                <img src={'https://www.vhv.rs/dpng/d/551-5511364_circle-profile-man-hd-png-download.png'} className="user-icon" />
                            </div>
                            <div className="d-flex">
                                <div className="me-4">
                                    <p className="fw-bold lh-1 mb-0">{userRedux.user.name}</p>
                                    <p className="admin-lbl mb-0">Admin</p>
                                </div>
                                <div className="dropdown header-dropdown-container">
                                    <button className="btn custom-dropdown dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        <FontAwesomeIcon icon={faChevronDown} />
                                    </button>
                                    <ul className="dropdown-menu">
                                        <li>
                                            {/* <a className="dropdown-item" href="" onClick={logout}>logout</a> */}
                                            <button className="dropdown-item" onClick={handlerLogout}>logout</button>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}