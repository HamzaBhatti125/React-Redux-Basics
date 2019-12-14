import React, { Component } from 'react'
import './App.css';
import {useSelector , useDispatch} from 'react-redux';
import {increment, decrement, user} from './actions';


function App(){
    const counter = useSelector(state => state.counter);
    const isLogged = useSelector(state => state.isLogged);
    const dispatch = useDispatch();   
    return (
      <div className="App">
        <h1>Counter {counter}</h1>
        <button onClick= { () => dispatch(increment(5))}>+</button>
        <button onClick= { () => dispatch(decrement())}>-</button><br/>
        <button onClick={ () => dispatch(user('hamza'))}>LogIn to see Paragraph</button>
        {isLogged ? <h3>Valuable info i should'nt See without Logged in</h3> : '' }        
      </div>
    )
}

export default App