import React, { useCallback, useEffect } from 'react';
import Preloader from './Preloader';
import DashBoardContent from './DashBoardContent';

function WorldDashBoard(props) {
    const data = props.dashBoardController.data;
    const handleClose = useCallback(() => {
        props.setDashBoardControllerDispatch({ type: 'closeDashBoard' });
    }, []);

    return (
        <div style={{
            display: props.dashBoardController.display ? 'block' : 'none',
            position: 'fixed',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '40%',
            height: '50%',
            backgroundColor: '#001a33',
            boxShadow: '0px 10px 20px 5px #001a33',
            color: '#1e90ff',
            padding: '0px',

        }}>

            {
                (Object.keys(data).length === 0) ?
                    <Preloader /> :
                    <>
                        <div style={{
                            position: 'relative',
                            top: '0px',
                            left: '0px',
                        }}>
                            <span onClick={handleClose} style={{ display: 'inline-block', cursor: 'pointer', padding: '1rem' }} >
                                &#10006;</span>
                        </div>
                        <section style={{ margin: '0 2.5rem' }}>
                            <DashBoardContent data={data} />
                        </section>
                    </>
            }
        </div>
    );
}

export default WorldDashBoard;