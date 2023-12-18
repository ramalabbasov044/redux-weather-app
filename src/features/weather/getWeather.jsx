import {baseUrl} from '../../constants/base/baseUrl'
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export const getWeatherData = createAsyncThunk('/getWeatherdata', async(cityName) => {
    const response = await fetch(`${baseUrl}?q=${cityName === "" ? 'Ganja' : cityName}&appid=d32bd17e782e54a0729a829c462c76ac`)
    const weatherdata = await response.json()
    return weatherdata
}); 


const initialState = {
  weatherData: {},
  isLoading: false
};

export const getWeather = createSlice({
    name: "weather",
    initialState,
    extraReducers: (builder) => {
      builder
      .addCase(getWeatherData.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getWeatherData.rejected, (state) => {
        state.isLoading = false
      })
      .addCase(getWeatherData.fulfilled, (state,action) => {
          if(action.payload.cod === '404'){
            state.weatherData = 'city not found';
          }else{
              state.isLoading = false;
              state.weatherData = action.payload;
          }
      })
    }
});

export default getWeather.reducer;