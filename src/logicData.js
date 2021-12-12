

const planetsToShow  = ['Tatooine', 'Alderaan', 'Naboo', 'Bespin', 'Endor'];

export const getPlanets = () => {
    return planetsToShow;
}


export const planetsLogic = (planetsData) => {
    const largest = planetsData.sort((a,b)=> parseInt(a.population) - parseInt(b.population))[planetsData.length - 1];
    debugger

    return planetsData;
}