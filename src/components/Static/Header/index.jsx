/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import styled from "styled-components"
import NetworkIcon from '../../Icons/Network/index'
import SetIcon from '../../Icons/Set/index'
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { changeDegre } from '../../../features/changeDegree/setDegree'
import { changeBackground } from '../../../features/changeBackground/setBackground'
const Header = () => {
    const dispatch = useDispatch()
    const [bg,setBg] = useState(false) 
    const [degree,setDegree] = useState(false) 
    const [battery,setBattery] = useState()
    const [currentTime, setCurrentTime] = useState(new Date());
    const backgroundType = useSelector((state) => state.background.backgroundType)

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
              <Hour style={{color: backgroundType ? "white" : "black"}}>
                {
                  fullTime
                }
              </Hour>

              <About>
                    {backgroundType ? (
                            <svg width="19" height="12" viewBox="0 0 19 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.7994 3C10.7994 2.44772 11.2471 2 11.7994 2H12.7994C13.3517 2 13.7994 2.44772 13.7994 3V11C13.7994 11.5523 13.3517 12 12.7994 12H11.7994C11.2471 12 10.7994 11.5523 10.7994 11V3Z" fill="white"/>
                                <path d="M15.7994 1C15.7994 0.447715 16.2471 0 16.7994 0H17.7994C18.3517 0 18.7994 0.447715 18.7994 1V11C18.7994 11.5523 18.3517 12 17.7994 12H16.7994C16.2471 12 15.7994 11.5523 15.7994 11V1Z" fill="white"/>
                                <path d="M5.79938 6.5C5.79938 5.94772 6.24709 5.5 6.79938 5.5H7.79938C8.35166 5.5 8.79938 5.94772 8.79938 6.5V11C8.79938 11.5523 8.35166 12 7.79938 12H6.79938C6.24709 12 5.79938 11.5523 5.79938 11V6.5Z" fill="white"/>
                                <path d="M0.799377 9C0.799377 8.44772 1.24709 8 1.79938 8H2.79938C3.35166 8 3.79938 8.44772 3.79938 9V11C3.79938 11.5523 3.35166 12 2.79938 12H1.79938C1.24709 12 0.799377 11.5523 0.799377 11V9Z" fill="white"/>
                            </svg>
                        ) : <SetIcon />
                    }

                    {backgroundType ? (
                            <svg width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M9.29984 2.58753C11.7664 2.58764 14.1386 3.55505 15.9263 5.28982C16.0609 5.42375 16.276 5.42206 16.4086 5.28603L17.6954 3.96045C17.7625 3.89146 17.7999 3.798 17.7994 3.70076C17.7988 3.60353 17.7603 3.51052 17.6924 3.44234C13.0005 -1.14745 5.59845 -1.14745 0.90654 3.44234C0.838575 3.51047 0.800012 3.60345 0.799385 3.70069C0.798758 3.79792 0.83612 3.89141 0.903201 3.96045L2.19034 5.28603C2.32283 5.42226 2.53816 5.42396 2.67269 5.28982C4.46053 3.55494 6.83304 2.58752 9.29984 2.58753ZM9.33529 6.58937C10.6905 6.58929 11.9974 7.10346 13.0019 8.03199C13.1378 8.16376 13.3518 8.16091 13.4843 8.02555L14.7695 6.69997C14.8372 6.63044 14.8748 6.53611 14.8738 6.4381C14.8728 6.34008 14.8334 6.24656 14.7644 6.17844C11.7053 3.27385 6.9679 3.27385 3.90882 6.17844C3.83973 6.24656 3.8003 6.34013 3.79939 6.43817C3.79849 6.53622 3.83617 6.63054 3.904 6.69997L5.18891 8.02555C5.32136 8.16091 5.5354 8.16376 5.67127 8.03199C6.67516 7.10408 7.98097 6.58995 9.33529 6.58937ZM11.9489 9.17672C11.9509 9.27501 11.913 9.36977 11.8443 9.43863L9.62103 11.7289C9.55585 11.7962 9.467 11.834 9.37429 11.834C9.28157 11.834 9.19272 11.7962 9.12754 11.7289L6.9039 9.43863C6.83521 9.36972 6.79742 9.27492 6.79946 9.17663C6.80149 9.07834 6.84317 8.98527 6.91466 8.91938C8.33453 7.69354 10.414 7.69354 11.8339 8.91938C11.9053 8.98532 11.947 9.07843 11.9489 9.17672Z" fill="white"/>
                            </svg>
                        ) : <NetworkIcon />
                    }

                  <Battery>
                      <Percentage style={{width: battery + "%",background: backgroundType ? "white" : "black"}}>

                      </Percentage>
                  </Battery>
              </About>
          </Top>

          <Center>
                {
                    backgroundType ? (
                        <svg width="125" height="37" viewBox="0 0 125 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="125" height="37" rx="18.5" fill="#EBEBEC"/>
                            <rect width="80" height="37" rx="18.5" fill="#EBEBEC"/>
                            <rect x="88" width="37" height="37" rx="18.5" fill="#EBEBEC"/>
                        </svg>
                    ):(
                        <svg width="125" height="37" viewBox="0 0 125 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="125" height="37" rx="18.5" fill="black"/>
                            <rect width="80" height="37" rx="18.5" fill="black"/>
                            <rect x="88" width="37" height="37" rx="18.5" fill="black"/>
                        </svg>
                    )
                }
                

                
          </Center>

          <Bottom>
            <Box style={{color: backgroundType ? "white" : "black"}} onClick={() => setDegree(!degree)}>
                {degree ? "C °" : "K °"}
            </Box>

            <Box onClick={() => setBg(!bg)}>
                {
                    backgroundType ? <MoonImage1 src={"https://upload.wikimedia.org/wikipedia/commons/b/b7/Moon_at_night.svg"} /> : <MoonImage src={"https://cdn3.iconfinder.com/data/icons/meteocons/512/moon-symbol-512.png"} />
                }
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

const MoonImage1 = styled.img`
    width: 35px;
    height: 20px;
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
  border-radius: 2px;
`