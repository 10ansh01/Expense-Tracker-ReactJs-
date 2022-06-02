import React from 'react'
import ChartBar from './ChartBar'
import './css/Chart.css'

export const Chart = (props) => {
    const dataPointsValue = props.dataPoints.map(dataPoint => dataPoint.value)
    const totalMax = Math.max(...dataPointsValue);
    return (
        <div className="chart">
            {props.dataPoints.map((dataPoint) =>
                <ChartBar
                    value={dataPoint.value}
                    maxValue={totalMax}
                    label={dataPoint.label}
                    key={dataPoint.label}
                />)}
        </div>
    )
}
