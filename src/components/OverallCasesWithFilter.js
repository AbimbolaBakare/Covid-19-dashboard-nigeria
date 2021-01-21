import React from 'react';
import {Line } from 'react-chartjs-2';
import 'bootstrap-daterangepicker/daterangepicker.css';
import DateRangePicker from "react-bootstrap-daterangepicker";
import { Button } from 'react-bootstrap';

export const OverallCasesWithFilter = (props) => {

    function apply(event, picker) {
        const start = new Date(picker.startDate._d).toLocaleDateString('en-CA');
        const end = new Date(picker.endDate._d).toLocaleDateString('en-CA')
        props.filter_report_by_date(start, end)
    };

    const data = {
        labels: props.details.map(d => (new Date(d.last_updated)).toDateString()),
        datasets: [
            {
                queue: 'queue1',
                label: 'Total Confirmed Cases ',
                fill: false,
                lineTension: 0.1,
                backgroundColor: 'green',
                pointBorderColor: 'green',
                pointBackgroundColor: 'green',
                pointBorderWidth: 5,
                data: props.details.map(d => d.total_confirmed),
            },
            {
                queue: 'queue2',
                label: 'Total Deaths ',
                fill: false,
                lineTension: 0.1,
                backgroundColor: 'red',
                pointBorderColor: 'red',
                pointBackgroundColor: 'red',
                pointBorderWidth: 5,
                data: props.details.map(d => d.total_deaths),
            },
            {
                queue: 'queue3',
                label: 'Total recovered cases',
                fill: false,
                lineTension: 0.1,
                backgroundColor: 'blue',
                pointBorderColor: 'blue',
                pointBackgroundColor: 'blue',
                pointBorderWidth: 5,
                data: props.details.map(d => d.total_recovered),
            }
        ]
    }
    return (
        <>
            <DateRangePicker onApply={apply} >
                <Button >Filter by date</Button>
            </DateRangePicker>
            <Line
                data={data}
                title="Covid 19 Dashboard"
                color="#000"
            />
        </>
    )
}
