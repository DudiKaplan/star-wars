import React, { useState, useEffect } from 'react';
import { fetchVehiclesData, fetchPlanetsData } from './fetchData';
import { planetsLogic, vehicleLogic } from './logicData';
import Table from './components/Table';
import Chart from './components/Chart';
import Loading from './components/Loading';
import './App.css';


function App() {

  const [vehicle, setVehicle] = useState({});
  const [planets, setPlanets] = useState([]);
  const [loadingVehicle, setloadingVehicle] = useState(true);
  const [loadingPlanets, setloadingPlanets] = useState(true);

  useEffect(() => {

    const getVehiclesData = async () => {
      const data = await fetchVehiclesData();
      setVehicle(vehicleLogic(data));
      setloadingVehicle(false);
    }

    const getPlanetsData = async () => {
      const data = await fetchPlanetsData();
      setPlanets(planetsLogic(data));
      setloadingPlanets(false);
    }

    getVehiclesData();
    getPlanetsData();

  }, [])

  return (
    <div className="App">
      {loadingVehicle || loadingPlanets ? (
        <Loading />
      ) : (
        <>
          <Table title='Part 1' vehicle={vehicle} />
          <hr />
          <Chart title='Part 2' planets={planets} />
        </>
      )}
    </div>
  );
}

export default App;
