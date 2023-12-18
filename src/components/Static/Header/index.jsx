/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import styled from "styled-components"
import NetworkIcon from '../../Icons/Network/index'
import SetIcon from '../../Icons/Set/index'
import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { changeDegre } from '../../../features/changeDegree/setDegree'
import { changeBackground } from '../../../features/changeBackground/setBackground'
const Header = () => {
    const dispatch = useDispatch()
    const [degree,setDegree] = useState(false) 
    const [bg,setBg] = useState(false) 
    const [battery,setBattery] = useState()
    const [currentTime, setCurrentTime] = useState(new Date());

    const getBatteryFunction = async () => {
        try{
            let batteryData = await navigator.getBattery()
            let battery = batteryData.level * 100
            setBattery(battery.toFixed(0))
        }catch (err) {
          console.log(err);
        }
    }

    const fullTime = `${currentTime.getHours()}:${String(
        currentTime.getMinutes()
    ).padStart(2, "0")}`;

    useEffect(() => {
        getBatteryFunction();

        const intervalId = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);

    useEffect(() => {
        dispatch(changeDegre(degree))
    }, [degree])

    useEffect(() => {
        dispatch(changeBackground(bg))
    }, [bg])

    return (
      <Wrapper>
          <Top> 
              <Hour>
                {
                  fullTime
                }
              </Hour>

              <About>
                  <SetIcon />

                  <NetworkIcon />

                  <Battery>
                      <Percentage style={{width: battery + "%"}}>

                      </Percentage>
                  </Battery>
              </About>
          </Top>

          <Center>
            <svg width="125" height="37" viewBox="0 0 125 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="125" height="37" rx="18.5" fill="black"/>
                  <rect width="80" height="37" rx="18.5" fill="black"/>
                  <rect x="88" width="37" height="37" rx="18.5" fill="black"/>
              </svg>
          </Center>

          <Bottom>
            <Box onClick={() => setDegree(!degree)}>
                {degree ? "C °" : "K °"}
            </Box>

            <Box onClick={() => setBg(!bg)}>
              <MoonImage src={"https://cdn3.iconfinder.com/data/icons/meteocons/512/moon-symbol-512.png"} />
            </Box>
          </Bottom>
      </Wrapper>
    )
}

export default Header

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

const Box = styled.div`
    width: 53px;
    height: 54px;
    border-radius: 17px;
    border: 2px solid #D5D5D5;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`

const Top = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const Center = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: -30px;
`

const Bottom = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 40px;
`

const MoonImage = styled.img`
    width: 35px;
    height: 24px;
    object-fit: cover;
`

const Hour = styled.p`
    color: #000;
    font-size: 17px;
    font-style: normal;
    font-weight: 600;
    line-height: 22px; 
    letter-spacing: -0.408px;
`

const About = styled.div`
    display: flex;
    gap: 8px;
`

const Battery = styled.div`
    width: 26px;
    height: 13px;
    border-radius: 4px;
    padding: 1px;
    border: 1px solid #a6a6a6
`

const Percentage = styled.div`
  height: 100%;
  background: #000;
  border-radius: 2px;
`