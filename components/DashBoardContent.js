import React from 'react';
import { formatNumber } from './Tooltip';
import { BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar } from 'recharts';
function DashBoardContent(props) {
    return (
        <article style={{ display: 'flex' }}>
            <div style={{ flexBasis: '25%', justifyContent: 'center' }}>

                <h2 style={{ marginTop: '0.5rem', textAlign: 'center' }}>
                    {props.data.country}</h2>
                <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
                    <img style={{ marginBottom: '1rem' }} src={props.data.countryInfo.flag} alt={props.data.country} width='250px' height='125px' />
                    <strong>population:<small> {formatNumber(props.data.population)}</small></strong>
                </div>
            </div>
            <div style={{ flexBasis: '75%' }}>
                <BarChart style={{ margin: '2rem' }} width={250} height={250} data={
                    [
                        {
                            "name": "",
                            "recovered": props.data.recovered,
                            "cases": props.data.cases,
                            "active": props.data.active,
                        }
                    ]
                }>
                    <CartesianGrid />
                    <XAxis dataKey="name" />
                    <YAxis width={80} />
                    <Tooltip position={{ x: 210, y: 50 }} />
                    <Legend align='right' />
                    <Bar dataKey="recovered" fill="#8471E5" />
                    <Bar dataKey="cases" fill="#C21460" />
                    <Bar dataKey="active" fill="#e68a00" />
                </BarChart>
            </div>
        </article>
    );
}

export default DashBoardContent;