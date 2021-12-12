const STAR_WARS_URL = 'https://www.swapi.tech/api/'


export const fetchVehiclesData = async () => {

    const vehiclesData = []

    let res = await fetch(`${STAR_WARS_URL}vehicles`);
    let data = await res.json();

    for(const v of  data.results) {
        let res1 = await fetch(v.url);
        let data1 = await res1.json();

        if (data1.result.properties.pilots.length > 0) {
            const vehicle = {
                name: data1.result.properties.name,
                pilots: [],
                planets: []
            };

            for (const p of data1.result.properties.pilots) {
                let res2 = await fetch(p);
                let data2 = await res2.json();
                vehicle.pilots.push(data2.result.properties.name);

                let res3 = await fetch(data2.result.properties.homeworld);
                let data3 = await res3.json();

                const planet = {
                    name: data3.result.properties.name,
                    population: data3.result.properties.population
                }

                vehicle.planets.push(planet);
            }

            vehiclesData.push(vehicle);
        }
    };

    return vehiclesData
}

export const fetchPlanetsData = async () => {

    const planetsToShow  = ['Tatooine', 'Alderaan', 'Naboo', 'Bespin', 'Endor'];
    const planetsData = [];

    let res = await fetch(`${STAR_WARS_URL}planets`);
    let data = await res.json();

    for(const p of data.results){
        if(planetsToShow.indexOf(p.name) > -1 ){
            let res1 = await fetch(p.url);
            let data1 = await res1.json();
            planetsData.push(data1.result.properties);
        }
    }

    return planetsData;

}
