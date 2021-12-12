const Table = ({title, vehicle }) => {
    return (
        <div>
            <h3>{title}</h3>
            <table>
                <tbody>
                <tr>
                    <td>Vehicle name with the largest sum</td>
                    <td>{vehicle.name}</td>
                </tr>
                <tr>
                    <td>Related home planets and their respective population</td>
                    <td>{vehicle.populationString}</td>
                </tr>
                <tr>
                    <td>Related pilot names</td>
                    <td>{vehicle.pilots}</td>
                </tr>
                </tbody>
            </table>      
        </div>
    )
}



export default Table
