import './App.css';
import axios from 'axios';
import { useState } from 'react';

const App = () => {
  const apiUrl = "http://localhost:1337/api/dbs"

  const [ data, setData ] = useState({
    username: '',
    password: ''
  }) 

  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
    data: data,
  };

  const handleChange = (e) => {
    e.preventDefault();
    const {name, value} = e.target
    setData({
      ...data,
      [name]: value
    })
    console.log(data)
  }

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(apiUrl, config, data)
      console.log(response)
    } catch(error) {
        console.log(error)
    }
  }
 
return (
    <form onSubmit={(e) => handleLogin(e)}>
      <label htmlFor="username">username</label>
      <input type='text' 
      id='usernameInput' 
      name='username' 
      value={data.username}
      onChange={(e) => handleChange(e)} />
  
      <label htmlFor='password'>password</label>
      <input type='text' 
      id='passwordInput' 
      name='password' 
      value={data.password}
      onChange={(e) => handleChange(e)} />
  
      <button type='submit'>submit</button>
    </form>
  )
}
export default App