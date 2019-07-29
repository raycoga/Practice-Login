import React, {Fragment, useEffect, useState} from 'react';
import faker from 'faker'


import {Navbar } from 'react-bootstrap'

import '../style/App.css';



import Login from '../components/Login'

faker.locale = "es"// with this, i set faker in spanish, so i can get random data from latin or spanish people
faker.seed(123);// with this i can get the same data all the time, so i wouldn't get random users
let data=[]

function App() {
  
  useEffect(() => {
    for(let x=0; x<7;x++){
    data.push({
      name:faker.name.firstName(),
      email:faker.internet.email(),
      phone:faker.phone.phoneNumber(),
    })
    }
  }, []);
  
function handleSubmit(data){
console.log(data)
}

  return (
    <Fragment>
      <Navbar sticky="top"  expand="lg" variant="dark" bg="dark">
          <Navbar.Brand href="#">Go At' s</Navbar.Brand>
        </Navbar>
          
          <Login data={data} handleSubmit={handleSubmit}/>
    
          
     
      


    </Fragment>
  );
}

export default App;
