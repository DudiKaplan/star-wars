
export const vehicleLogic = (vehiclesData) => {

    debugger
    const populationNum = [];
    let num, populationString;

    vehiclesData.forEach(v => {
        populationString = "";
        num = 0;
        v.planets.forEach(p => {
            num += parseInt(p.population);
            populationString += p.name + " , " + p.population;
        })

        v.populationString = populationString;
        populationNum.push(num);
    });

    // let largest = 0;
    // let index;
    // for (let i=0; i<=largest;i++){
    //     if (populationNum[i]>largest) {
    //         largest=populationNum[i];
    //         index = i;
    //     }
    // }

    return vehiclesData[0];
}


export const planetsLogic = (planetsData) => {

    const intNum = 15;
    planetsData.forEach(p => p.population = parseInt(p.population));
    const largest = planetsData.sort((a, b) => a.population - b.population)[planetsData.length - 1];
    planetsData.forEach(p => {
        if (p.population === largest.population) {
            p.height = intNum + 'rem';
        } else {
            p.height = (p.population / largest.population * intNum + 4) + 'rem';
        }
    })

    return planetsData;
}