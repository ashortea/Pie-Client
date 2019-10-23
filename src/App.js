import React, {useState} from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar'
import Auth from './components/Auth/Auth'
import Pies from './components/Pies/Pies'

function App() {

  const [ sessionToken, setSessionToken] = useState(undefined); 
  //let sessionToken = undefined; --> line above used useState to be able to update seesion token
  const viewConductor = () => {
    return sessionToken !== undefined ? <Pies token ={sessionToken} /> : <Auth setSession ={setSessionToken} />
  }

  return (
    <div className="App">
     
     {/* {sessionToken} */}
     <Navbar setSession={setSessionToken} />
     {viewConductor()}
    </div>
  );
}

export default App;


///Array Destructuring

// let [first, second, third] = ['The Fellowship of the Rings', 'Two Towers', 'Return of the King']
// // let first = 'The Fellowship of the Rings';
// //let second = 'Two Towers';
// //let third = 'Retrun of the King';
// console.log(first, second, third);

// let planets = [ 'Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'saturn', 'Uranus', 'Netpune', 'Pluto']
// let [first, ,third, ...other] = planets;
// console.log(first);
// console.log(third);
// console.log(other);