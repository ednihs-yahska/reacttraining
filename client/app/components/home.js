import React, {useEffect} from 'react'
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import styled from 'styled-components'
import TodoList from './reusable/todoList'
import Weather from './weather'

const StyledHome = styled.div`
    display: flex;
    font-family: sans-serif;
    justify-content: center;
    align-items: center;

`

function Home(props){
    return(
        <React.Fragment>
            <ul>
                <li>
                    <Link to="/todo"> Todo </Link>
                </li>
                <li>
                    <Link to="/weather"> Weather </Link>
                </li>
            </ul>
            <Route path="/todo" render={()=>(
                <StyledHome>
                    <TodoList list={props.home.list} toggleDone={(id)=>props.dispatch({type:"TOGGLE_DONE", payload:id})}/>
                </StyledHome>
            )}/>

            <Route path="/weather" render={()=><Weather weather={props.home.weather} onRequest={(city)=>props.dispatch({type: "GET_WEATHER", payload: city})} />} />
        </React.Fragment>
    )
}

const mapStateToProps = (state, ownProps) => {
    return {
        ...state
    }
}


const mapDispatchToProps = dispatch => {
    return {
      dispatch: dispatch
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Home)