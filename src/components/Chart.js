import Legend from "./Legend"

function Chart({title ,planets}) {
    return (
        <>
            <h3>{title}</h3>
            <div className="Chart">
                
                {planets.map((planet , index) => (
                    <Legend 
                        key={index} 
                        population='140000'
                        planet={planet}
                        height='8rem' />
                ))}
            </div>
        </>
    )
}

export default Chart
