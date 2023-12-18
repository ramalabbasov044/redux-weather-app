import { configureStore } from '@reduxjs/toolkit'
import getWeather from '../features/weather/getWeather'
import setDegree from '../features/changeDegree/setDegree'
import setBackground from '../features/changeBackground/setBackground'
export const store = configureStore({
  reducer: {
    weather: getWeather,
    degree: setDegree,
    background: setBackground,
  },
})