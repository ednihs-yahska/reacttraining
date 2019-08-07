import React, {useEffect} from 'react'
import { Route, Link, withRouter, Redirect } from "react-router-dom";
import styled from 'styled-components'

function Weather({onRequest, match, weather}) {
    return(
        <React.Fragment>
            <ul style={{marginLeft:"10px"}}>
                <li>
                    <Link to={`${match.url}/corvallis`}>Corvallis</Link>
                </li>
                <li>
                    <Link to={`${match.url}/portland`}>Portland</Link>
                </li>
            </ul>
            <Route path={`${match.url}/`} render={()=><Redirect to={`${match.url}/corvallis`}/>} />
            <Route path={`${match.url}/corvallis`} render={(props)=>{
                return (
                    <CityWeather weather={weather} onLoad={onRequest} city="corvallis"/>
                )
            }}/>
            <Route path={`${match.url}/portland`} render={()=>{
                return (
                    <CityWeather weather={weather} onLoad={onRequest} city="portland"/>
                )
            }}/>
        </React.Fragment>
    )
}

export default withRouter(Weather)

const StyledWeather = styled.div`
    display: flex;
    flex-direction: column;
    font-family: sans-serif;
    margin: 10px;

    & img{
        height: 50px;
        width: 50px;
    }
`

function CityWeather({city, onLoad, weather}){
    useEffect(()=>{
        onLoad(city)
    },[])

    return(
        <React.Fragment>
        <div style={{margin: "10px"}}>{city==="corvallis" && "Corvallis"} {city==="portland" && "Portland"} weather</div>
        {weather && 
            <StyledWeather>
                <div>{weather[0].main}</div>
                <img src={`http://openweathermap.org/img/w/${weather[0].icon}.png`}/>
            </StyledWeather>
        }
        </React.Fragment>
    )
}