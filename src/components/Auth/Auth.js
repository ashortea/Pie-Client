import React, {useState} from 'react';
import './Auth.css';

const Auth = (props) => {

        const [firstName, setFirstName] = useState('');    
        const [lastName, setLastName] = useState('');    
        const [email, setEmail] = useState('');    
        const [password, setPassword] = useState('');    
        const [login, setLogin] = useState(true);   
         
        const title = ()=>{
            return login ? 'Login' : 'Signup';
        }

        const logginToggle = (event) => {
            event.preventDefault();
            setLogin(!login);

            setEmail('');
            setPassword('');
            setFirstName('');
            setLastName('');
        }

        const signupFields = () => !login ? 
        (
            <div>
                <label htmlFor='firstName'>First name:</label>
                <br/>
                <input type='text' id="firstName" value={firstName} onChange={(e) => setFirstName(e.target.value)}></input>
                <br/>
                <label htmlFor='lastName'>Last Name:</label>
                <br/>
                <input type='text' id="lastName" value={lastName} onChange={(e) => setLastName(e.target.value)}></input>
            </div>
        ) : null;

        const handleSumbit = (e) => {
            e.preventDefault();
            const url = login ? 'http://localhost:3000/auth/signin' : 'http://localhost:3000/auth/signup'
            const bodyObj = login ? {
                email: email,
                password: password 
            } : {
                email: email,
                password : password,
                firstName: firstName,
                lastName: lastName
            }
           
            fetch(url, {
                method: 'POST',
                body: JSON.stringify(bodyObj),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then(res => res.json())
            .then(json => props.setSession(json.sessionToken))
            .catch(err => console.log(err))
        }

    return( 
        <div>
            <form onSubmit= {handleSumbit}>
                <h1>{title()}</h1>
                {signupFields()}
                <label htmlFor='email'>Email:</label>
                <br/>
                <input type='text' id ='email' value={email} onChange={(e) => setEmail(e.target.value)}></input>
                <br/>
                <label htmlFor='password'>Password:</label>
                <br/>
                <input type='password' id='password' value={password} onChange={(e) => setPassword(e.target.value)}></input>
                <br/>
                <button onClick={logginToggle}>Login/Signup Toggle</button>
                <br/>
                <button type='sumbit'>Submit</button>
            </form>

        </div>
        
    )
}
export default Auth;