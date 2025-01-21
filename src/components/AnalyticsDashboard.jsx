import { StackAreaChart } from "../charts/StackAreaChart";
import { ColumnChart } from "../charts/ColumnChart";
import { AreaChart } from "../charts/AreaChart";
import chartData from "../data/areaChart";

export const AnalyticsDashboard = ({ }) => {

    const { areaChartJson, columnChartJson, stackAreaChartJson } = chartData;

    return (
        <>
            <section className="Dashboard-container">
                <h1 className="">Coming Soon</h1>
            </section>

            {/* <section className="Dashboard-container">
                <div className="row mb-4">
                    <div className="col-sm-12 col-md-12 col-lg-3 col-xl-3">
                        <div className="chart-container p-2">
                            <AreaChart data={areaChartJson} label={'Your total Sale'} />
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-12 col-lg-3 col-xl-3">
                        <div className="chart-container p-2">
                            <ColumnChart data={columnChartJson} label={'Sale Performance'} />
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6">
                        <div className="chart-container p-2">
                            <StackAreaChart data={stackAreaChartJson} label={'Revenue Overview'} />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6">
                        <div className="chart-container p-2">
                            <StackAreaChart data={stackAreaChartJson} label={'Revenue Overview'} />
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6">
                        <div className="chart-container p-2">
                            <StackAreaChart data={stackAreaChartJson} label={'Revenue Overview'} />
                        </div>
                    </div>
                </div>
            </section> */}
        </>
    )
}

