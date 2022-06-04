import React from 'react'
import { CityWeatherList } from './CityWeatherList';

export function CityList({ cityList, degreeStatus, handleRemoveFromCityList }) {
    let temp;

    {
        cityList.map(({ data }) => {
            switch (degreeStatus) {
                case 'Kelvin':
                    temp = (data.main.temp * 241).toString() + " K"
                    break;
                case 'Celcius':
                    temp = (data.main.temp).toString() + " C"
                    break;
                case 'Fehrenheight':
                    temp = (data.main.temp * 33.8).toString() + " F"
                    break;

                default:
                    break;
            }
            return (
                <CityWeatherList handleRemoveFromCityList={handleRemoveFromCityList} temp={temp} city={data} />
            )
        })
    }

}
