import React, {useState, useEffect} from 'react';
import './Pies.css';

import Pie from './Pie';

// const testDataPies = [
//     {
//         nameOfPie: 'Pumpkin',
//         baseOfPie: 'Pumpkin puree',
//         crust: 'Pastry',
//         timeToBake: 50,
//         servings: 8,
//         rating: 4.2
//     },
//     {
//         nameOfPie: 'Apple', 
//         baseOfPie: 'Jam',
//         crust: 'Graham cracker',
//         timeToBake: 30,
//         servings: 6,
//         rating: 4.0
//     },
//     {
//         nameOfPie: 'Chocolate',
//         baseOfPie: 'Pudding',
//         crust: 'Pastry',
//         timeToBake: 20,
//         servings: 8,
//         rating: 5.0
//     }
// ]

const Pies = (props) => {

    const [pies, setPies] = useState([])
    
    const pieRows = () => {
        const pieColumns = {
            nameOfPie: 'Pie Name',
            baseOfPie: 'Pie Base',
            crust: 'Pie Crust',
            timeToBake: 'Bake Time',
            servings: 'Servings',
            rating: 'Rating'
        }

        return [<Pie key={'column names'} testData={pieColumns} />].concat(
            pies.map((pieInfo, index) => {
                console.log(pieInfo)
                return <Pie key={index} testData={pieInfo} />
            })
        )

    }
        useEffect(() =>{
            fetch('http://localhost:3000/pies/',{
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': props.token
                }
            })
            .then (res => res.json())
            .then(json => setPies(json))
            .catch(err => console.log(err))
        },[])

    return(
        <table>
            <tbody>
                {/* <Pie testData={testDataPies} /> */}
                {pieRows()}
            </tbody>
        </table>
    )
}

export default Pies;