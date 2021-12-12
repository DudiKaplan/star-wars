
//get Vehicle name with the largest sum
export const vehicleLogic = (vehiclesData) => {

    const populationNum = [];
    let num, populationString;

    vehiclesData.forEach(v => {
        populationString = "";
        num = 0;
        v.planets.forEach(p => {
            num += parseInt(p.population);
            populationString +=  `${p.name} , ${ p.population}  ;`;
        })

        v.populationString = populationString;
        v.pilotsString = v.pilots.toString();
        populationNum.push(num);
    });

    const max = Math.max(...populationNum);
    const index = populationNum.indexOf(max);

    return vehiclesData[index];
}


//Calculate percentages for the graph
export const planetsLogic = (planetsData) => {

    const intNum = 15;
    planetsData.forEach(p => p.population = parseInt(p.population));
    const largest = planetsData.sort((a, b) => a.population - b.population)[planetsData.length - 1];
    planetsData.forEach(p => {
        if (p.population === largest.population) {
            p.height = `${intNum}rem`;
        } else {
            p.height = (p.population / largest.population * intNum + 4) + 'rem';
        }
    })

    return planetsData;
}