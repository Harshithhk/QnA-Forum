import React,{useState,useEffect} from 'react';
import axios from 'axios'
import './App.css';
import UserContext from './data/UserContext'

import HomeScreen from './screens/HomeScreen'
import Header from './components/header'
import RegisterScreen from './screens/RegisterScreen'
import LoginScreen from './screens/LoginScreen'
import CreateQuestion from './components/CreateQuestion'

import {
  BrowserRouter as Router,
  Route,Switch
} from "react-router-dom";


function App() {

  const [userData,setUserData] = useState(undefined)

  useEffect(()=>{
    const checkLoggedIn = async()=>{

      let token = localStorage.getItem("auth-token")
      if(token === null){
        localStorage.setItem("auth-token","")
        token = ""
      }
     
      const tokenRes = await axios.post(`http://localhost:5000/tokenIsValid`,null,{headers:{"authorization": token}})
      if(!tokenRes.data){
        console.log("LOGIN FAILED")
        localStorage.setItem('auth-token','')
      }

      if(tokenRes.data){
        const userRes= await axios.get("http://localhost:5000/api/users/profile",{headers : {"authorization": token}})

        setUserData(userRes.data)
        console.log("LOGGED IN")
      }
    
    }

    checkLoggedIn()
  },[])

  return (
    <div className="App">
      <Router>
        <UserContext.Provider value ={{userData,setUserData}}>
          <Header/>
          <Switch>
            <Route exact path = '/' component={HomeScreen} />
            <Route exact path = '/createquestion' component={CreateQuestion} />
            <Route exact path = '/myquestions' component={HomeScreen} />
            <Route exact path='/register' component={RegisterScreen}/>
            <Route exact path='/login' component={LoginScreen}/>
          </Switch>
      </UserContext.Provider>
      </Router>
    </div>
  );
}

export default App;
