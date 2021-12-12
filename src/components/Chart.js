import Legend from "./Legend"

function Chart({title ,planets}) {
    return (
        <>
            <h3>{title}</h3>
            <div className="Chart">
                
                {planets.map((planet , index) => (
                    <Legend 
                        key={index} 
                        population={planet.population}
                        planet={planet.name}
                        height={planet.height} />
                ))}
            </div>
        </>
    )
}

export default Chart
