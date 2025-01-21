import { faHeartPulse, faChartLine, faPhotoFilm, faPeopleGroup } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Card = ({ title, description, value, icon }) => {

    function convertToInternationalCurrencySystem (labelValue) {

        // Nine Zeroes for Billions
        return Math.abs(Number(labelValue)) >= 1.0e+9
    
        ? (Math.abs(Number(labelValue)) / 1.0e+9).toFixed(2) + "B"
        // Six Zeroes for Millions 
        : Math.abs(Number(labelValue)) >= 1.0e+6
    
        ? (Math.abs(Number(labelValue)) / 1.0e+6).toFixed(2) + "M"
        // Three Zeroes for Thousands
        : Math.abs(Number(labelValue)) >= 1.0e+3
    
        ? (Math.abs(Number(labelValue)) / 1.0e+3).toFixed(2) + "K"
    
        : Math.abs(Number(labelValue));
    
    }

    return (
        <>
            <div className="dashboard-opt-container px-3 py-2">
                <FontAwesomeIcon
                    icon={faChartLine}
                    className="fontAwe-icon-size mb-2 text-black"
                />
                <h4 className="subtitle mb-0">{title}</h4>
                <p className={`smallText ${description != "" ? "d-block" : "d-none"}`}>{description}</p>
                <div className="d-flex justify-content-between align-items-center">
                    <h2 className="mb-0">{Math.round(convertToInternationalCurrencySystem(value) * 100) / 100}</h2>
                    {/* <h2 className="mb-0">{convertToInternationalCurrencySystem(value)}</h2> */}
                    <img src={icon} className="right-arr" alt="Arrow" />
                </div>
            </div>
        </>
    )
}
