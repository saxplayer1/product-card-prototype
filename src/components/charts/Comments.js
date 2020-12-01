import React, { useEffect, useState } from 'react'
import { Line } from 'react-chartjs-2'

let value = [];

function makeRndArr() {
    value = [];
    for (let i = 0; i < 7; i++) {
        value.push(Math.random(100))
    }
}

const Comments = () => {
    const [chartData, setChartData] = useState({})

    const chart = () => {
        makeRndArr()
        setChartData({
            labels: ['пн', 'вт', 'ср', 'чт','пт', 'сб', 'вс'],
            datasets: [
                {
                    label: 'sales rate',
                    data: value,
                    backgroundColor: 'rgba(66, 165, 245, 0.6)',
                    borderColor: 'rgba(66, 165, 245, 0.6)',
                    borderWidth: 4
                }
            ]
        })        
    }
    useEffect(() => {
        chart()
    }, [])
        return(
                <div>
                    <Line data={chartData} />
                </div>
        );
}

export default Comments;