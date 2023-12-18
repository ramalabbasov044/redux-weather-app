/* eslint-disable react/prop-types */
import { useState } from "react"
import styled from "styled-components"

const SearchComponent = ({ searchWeather }) => {
    const [weatherName, setWeatherName] = useState("")

    let handleData = (e) => {
      try{
        const value = e.target.value
        setWeatherName(value)
        searchWeather(value)
      }catch (err) {
        console.error(err);
      }
    }
    return (
      <Form>
        <SearchInput 
            value={weatherName}
            placeholder="Search locatoin..."  
            onChange={(e) => handleData(e)}
        />
      </Form>
    )
}

export default SearchComponent

const Form = styled.div`
    padding-top: 20px;
`

const SearchInput = styled.input`
    width: 100%;
    padding: 0px 24px;
    height: 55px;
    border-radius: 14px;
    background: #EBEBEC;
    outline: none;
    border: 0;
    color: #A09F9F;
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: 21.5px; 
    letter-spacing: -0.408px;

    &::placeholder{
      color: #A09F9F;
      font-size: 12px;
      font-style: normal;
      font-weight: 500;
      line-height: 21.5px; 
      letter-spacing: -0.408px;
    }
`