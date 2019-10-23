import React from 'react';

const Pie = (props) => {
    console.log(props);
    return(
        <tr>
            <td>{props.testData.nameOfPie}</td>
            <td>{props.testData.baseOfPie}</td>
            <td>{props.testData.crust}</td>
            <td>{props.testData.timeToBake}</td>
            <td>{props.testData.servings}</td>
            <td>{props.testData.rating}</td>
        </tr>
    )
}

export default Pie;