import Layout from '../components/Layout'
import Map from '../components/Map'
import WorldDashBoard from '../components/WorldDashBoard'
import React, { useReducer } from 'react'

export const DashBoardContext = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case 'openDashBoard':
      return { display: true, data: {} };
    case 'setData':
      return { display: state.display, data: action.data };
    case 'closeDashBoard':
      return { display: false, data: {} };
  }
}

export default function Home(props) {
  const [dashBoardController, setDashBoardControllerDispatch] = useReducer(reducer, { display: false, data: {} });
  return (
    <Layout>
      <>
        <h1 style={{ position: 'absolute', top: '0px', left: '1rem', color: '#8471E5', textShadow: '5px 5px 5px rgba(0,0,0,1)' }}>Covid-19 <br /> Worldview</h1>
        <DashBoardContext.Provider value={setDashBoardControllerDispatch}>
          <Map data={props.data} />
          <WorldDashBoard dashBoardController={dashBoardController} setDashBoardControllerDispatch={setDashBoardControllerDispatch} />
        </DashBoardContext.Provider>
      </>
    </Layout>
  )
}

export const getServerSideProps = async () => {
  const res = await fetch("https://disease.sh/v3/covid-19/historical?lastdays=1");
  const resData = await res.json();
  return {
    props: {
      data: resData
    }
  };
}