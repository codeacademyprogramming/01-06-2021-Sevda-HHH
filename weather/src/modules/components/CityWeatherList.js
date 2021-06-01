import * as  React from 'react'

export function CityWeatherList({ city, temp, degree, handleRemoveFromCityList }) {

    return (
        <>


            <>
                <li key={city.name}> <button onClick={() => handleRemoveFromCityList(city.name)}
                    className="badge bg-secondary">--</button>{city.name}  <b>
                        {temp}  </b></li>
            </>


        </>
    )
}

