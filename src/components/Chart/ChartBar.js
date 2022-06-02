import React from 'react'
import './css/ChartBar.css';

const ChartBar = (props) => {
    let chartBarFillHeight = '0%';
    if(props.maxValue>0) {
        chartBarFillHeight = Math.round((props.value / props.maxValue) *100) + "%";
    }
    return (
        <div className="chart-bar">
            <div className="chart-bar__inner">
                <div className="chart-bar__fill" style={{height: chartBarFillHeight}}> {/* the styles attr wants a Javascript object always */}

                </div>
            </div>
            <div className="chart-bar__label" style={{color: 'black'}}>{props.label}</div>
        </div>
    )
}
export default ChartBar;