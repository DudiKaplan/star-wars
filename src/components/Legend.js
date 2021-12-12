function Legend({ population, planet, height }) {
    return (
        <div>
            <p>{population}</p>
            <div className="Legend"
                style={{ height: height }}></div>
            <p>{planet}</p>
        </div>
    )
}

export default Legend
