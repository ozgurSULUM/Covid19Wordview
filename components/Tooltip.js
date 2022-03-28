import React, { useEffect, useRef } from 'react';
const getDate = (data) => {
    if (data[0] === undefined) {
        return '';
    }
    const months = [
        "Jan.",
        "Feb.",
        "Mar.",
        "Apr.",
        "May.",
        "Jun.",
        "Jul.",
        "Aug.",
        "Sept.",
        "Oct.",
        "Nov.",
        "Dec."];
    let outputStr = '';
    for (let date in data[0]['timeline']['cases']) {
        const [month, day, year] = date.split('/');
        outputStr += day + " " + months[month - 1] + " 20" + year;
        break;
    }
    return outputStr;
}

export const formatNumber = (strNumber) => {
    if (isNaN(Number(strNumber))) return strNumber;
    let reverseStrNumber = strNumber.toString().split("").reverse().join("");
    let counter1 = 0;
    let counter2 = 0;
    let formattedStrNumber = "";
    for (let x of reverseStrNumber) {
        formattedStrNumber += x;
        counter1++;
        if (counter1 % 3 === 0) {
            counter1 = 0;
            if (!(reverseStrNumber[counter2 + 1] === undefined)) {
                formattedStrNumber += '.';
            }
        }
        counter2++;
    }
    formattedStrNumber = formattedStrNumber.split("").reverse().join("");
    return formattedStrNumber;
}

const getCountryData = (data, countryName, dataType) => {


    const countryDatas = data.filter((element) => {
        return (element.country === countryName ? true : false)
    });
    if (countryDatas.length === 0) {
        return 'Data not found.';

    }

    let total = 0;
    for (const countryData of countryDatas) {
        for (let date in countryData.timeline[dataType]) {
            total = total + countryData.timeline[dataType][date];
        }
    }
    return total;
}

const Tooltip = React.forwardRef(function (props, ref) {
    return (
        <div ref={ref} style={{
            display: props.tooltip.show ? 'block' : 'none',
            position: 'fixed',
            overflow: 'hidden',
            color: '#1e90ff',
            width: '200px',
            backgroundColor: '#001a33',
            transition: 'opacity 125ms',
            padding: '1rem',
            boxShadow: '0px 0px 10px 1px #001a33',
            lineHeight: '1.6rem'

        }}>
            <div style={{
                borderBottom: '0.1rem solid #1e90ff',
                paddingBottom: '0.5rem',
                display: 'flex',
                justifyContent: 'space-between',
                marginBottom: '0.2rem',
            }}>
                <strong>{props.tooltip.country}</strong>
                <small>{getDate(props.data)}</small>
            </div>
            <small><strong>cases: </strong>{formatNumber(getCountryData(props.data, props.tooltip.country, "cases"))}</small><br />
            <small><strong>deaths: </strong>{formatNumber(getCountryData(props.data, props.tooltip.country, "deaths"))}</small><br />
            <small><strong>recovered: </strong>{formatNumber(getCountryData(props.data, props.tooltip.country, "recovered"))}</small><br />
        </div >
    );
});

export default Tooltip;