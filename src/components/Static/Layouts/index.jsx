/* eslint-disable no-dupe-else-if */
/* eslint-disable react-hooks/exhaustive-deps */
import styled from 'styled-components'
import Header from '../Header/index'
import SearchComponent from '../SearchComponent'
import { getWeatherData } from '../../../features/weather/getWeather'
import { useDispatch , useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
const Layouts = () => {
    const dispatch = useDispatch()
    const [weatherInfo,setWeatherInfo] = useState([])
    const degreType = useSelector((state) => state.degree.degreeType)
    const seletor = useSelector((state) => state.weather.weatherData)
    const backgroundType = useSelector((state) => state.background.backgroundType)

    const searchWeather = (cityName) => {
        dispatch(getWeatherData(cityName))
    }

    const filterWeatherImage = (weatherType) => {
      if (weatherType === "Snow") {
        return <WeatherImage src={"https://cdn-icons-png.flaticon.com/512/1163/1163629.png"} />;
      } else if (weatherType === "Clouds") {
        return <WeatherImage src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcvXh6bTHNBsYLFk05a3yf3cYN1d20aLPzpw&usqp=CAU"} />;
      } else if (weatherType === "Clear") {
        return <WeatherImage src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBGUJ2snnmkw9bjtqXo0CWD46ArX_dD8ZnMQ&usqp=CAU"} />;
      } else if (weatherType === "Rainy") {
        return <WeatherImage src={"https://www.pewtrusts.org/-/media/post-launch-images/2020/03/gettyimages838815210jpgmaster/16x9_m.jpg"} />;
      }else {
        return <WeatherImage src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBGUJ2snnmkw9bjtqXo0CWD46ArX_dD8ZnMQ&usqp=CAU"} />;
      }
    };

    const renderWeatherInformation = () => {
        if(weatherInfo == "city not found"){
          return (
            <NotFound>
              City Not Found
            </NotFound>
          )  
        }else{
          return (
            <WeatherInfoBox>
              <HeadTitle>
                Potential Weather
              </HeadTitle>

              <WeatherItem>
                  <Left>
                    {
                      degreType ? (weatherInfo?.main?.temp - 273.15)?.toFixed(1) + " C°" : (weatherInfo?.main?.temp)?.toFixed(0) + " K°"
                    } 
                  </Left>
                  <Center>
                      <Day>
                        {weatherInfo.name}
                      </Day>
                      <Time>
                        {weatherInfo?.weather?.[0]?.main}
                      </Time>
                  </Center>
                  <Right>
                      {
                        filterWeatherImage(weatherInfo?.weather?.[0]?.main)
                      }
                  </Right>
              </WeatherItem>
            </WeatherInfoBox>
          ) 
        }
    }

    useEffect(() => {
        setWeatherInfo(seletor)
    }, [searchWeather])

    useEffect(() => {
        dispatch(getWeatherData(""))
    },[])

    return (
      <Wrapper style={{background: backgroundType ? "black" : "white"}}> 
          <Header />

          <SearchComponent searchWeather={searchWeather} />


            {
              renderWeatherInformation()
            }
      </Wrapper>
    )
}

export default Layouts

const Wrapper = styled.div`
    padding: 30px;
    max-width: 400px;
    width: 100%;
    height: 100%;
    border-radius: 50px;
    background: #FFF;
`

const WeatherInfoBox = styled.div`
    margin-top: 32px;
    padding: 28px 27px;
    border-radius: 34px;
    background: #161616;
    box-shadow: 0px 8px 30px 0px rgba(0, 0, 0, 0.35);
`

const HeadTitle = styled.p`
    color: #FFF;
    font-size: 19px;
    font-style: normal;
    font-weight: 500;
    line-height: 21.5px; 
    letter-spacing: -0.408px;
    text-align: center;
`

const WeatherItem = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 15px 0px; 
    border-radius:1px;
    color: #fff;
    border-bottom: 1px solid #908F90;
`

const Left = styled.p`
    color: #FFF;
    font-size: 36px;
    font-style: normal;
    font-weight: 700;
    letter-spacing: -0.408px;
    line-height: 21.5px; /* 59.722% */
`

const Center = styled.p`
    color: #FFF;
    font-size: 36px;
    font-style: normal;
    font-weight: 700;
    line-height: 21.5px; 
    letter-spacing: -0.408px;
`

const Right = styled.p`
    color: #FFF;
    font-size: 36px;
    font-style: normal;
    font-weight: 700;
    line-height: 21.5px; 
    letter-spacing: -0.408px;
`

const Day = styled.p`
    color: #FFF;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: 21.5px; /* 153.571% */
    letter-spacing: -0.408px;
`

const Time = styled.p`
    color: #FFF;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: 21.5px; /* 153.571% */
    letter-spacing: -0.408px;
`

const WeatherImage = styled.img`
    width: 87px;
    height: 87px;
`

const NotFound = styled.p`
    font-weight: 600;
    font-size: 20px;
    color: #000;
    text-align: center;
`