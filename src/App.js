import React, {useState, useEffect} from 'react';
import { fetchVehiclesData ,fetchPlanetsData} from './fetchData';
import { planetsLogic ,vehicleLogic } from './logicData';
import Table from './components/Table';
import Chart from './components/Chart';
import './App.css';


function App() {

  const [vehicle, setVehicle] = useState({});
  const [planets, setPlanets] = useState([]);

  useEffect(() => {

          const getVehiclesData = async () => {
            const data = await fetchVehiclesData();
            console.log(data)
            setVehicle(vehicleLogic(data));
          }

          const getPlanetsData =  async () =>{
            const data = await fetchPlanetsData();
            console.log(data);
            setPlanets(planetsLogic(data));
          }

          getVehiclesData();
          getPlanetsData();

   },[])

  return (
    <div className="App">
      <Table title='Part 1' vehicle={vehicle}/>
      <hr />
      <Chart title='Part 2' planets={planets} />
    </div>
  );
}

export default App;
