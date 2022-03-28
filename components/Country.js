import React, { useContext } from 'react';
import { TooltipContext } from './Map';
import { DashBoardContext } from '../pages/index';

function Country(props) {
    const tooltipDispatch = useContext(TooltipContext);
    const setDashBoardControllerDispatch = useContext(DashBoardContext);
    const handleClick = async () => {
        setDashBoardControllerDispatch({ type: 'openDashBoard' });
        const response = await fetch(`https://disease.sh/v3/covid-19/countries/${props.dataName}`);
        const resData = await response.json();
        setDashBoardControllerDispatch({ type: 'setData', data: resData });
    }
    return (
        <path
            d={props.d}
            id={props.id}
            onClick={handleClick}
            title={props.dataName}
            onMouseEnter={() => tooltipDispatch({ type: 'onMouseEnter', country: props.dataName })}
            onMouseLeave={() => tooltipDispatch({ type: 'onMouseLeave', country: '' })}
        />
    );
}

export default Country;