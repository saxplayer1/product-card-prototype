import React, { useEffect, useState } from 'react'
import { Line } from 'react-chartjs-2'
import Comments from './charts/Comments';

import './ChartSection.css'

let qnt = () => {
    for (let i = 0; i < 7; i++) {
    qnt.push(Math.random(100))
}}; 
let sales = () => { 
    for (let i = 0; i < 7; i++) {
    sales.push(Math.random(100))
}};

function makeRndArr() {
    qnt = [];
    sales = [];
    for (let i = 0; i < 7; i++) {
        qnt.push(Math.random(100))
    }
    for (let i = 0; i < 7; i++) {
        sales.push(Math.random(100))
    }
}

const ChartSection = () => {
    const [chartData, setChartData] = useState({})

    const chart = () => {
        makeRndArr()
        setChartData({
            labels: ['пн', 'вт', 'ср', 'чт','пт', 'сб', 'вс'],
            datasets: [
                {
                    label: 'sales rate',
                    data: qnt,
                    backgroundColor: 'rgba(66, 165, 245, 0.6)',
                    borderColor: 'rgba(66, 165, 245, 0.6)',
                    borderWidth: 4
                }, 
                {
                    label: 'quantity',
                    data: sales,
                    backgroundColor: 'rgba(255, 99, 132, 0.6)',
                    borderColor: 'rgba(255, 99, 132, 0.6)',
                    borderWidth: 4
                }, 
            ]
        })        
    }
    useEffect(() => {
        chart()
    }, [])
        return(
            <div>
                <div className="ChartSection">
                    <div>
                        <Line className="chart" data={chartData} />
                    </div>
                    <div>
                        <Line className="chart" data={chartData} />
                    </div>
                    <div>
                        <Line className="chart" data={chartData} /> 
                    </div>
                    <div>
                        <Line className="chart" data={chartData} /> 
                    </div>
                </div>
            </div>
        );
}

export default ChartSection;