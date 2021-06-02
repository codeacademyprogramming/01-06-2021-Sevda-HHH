import * as  React from 'react'

export function CityWeatherList({ city, temp, degree, handleRemoveFromCityList }) {

    return (
        <>
            <li data-testid="post" key={city.name}> <button onClick={() => handleRemoveFromCityList(city.name)}
                className="badge bg-secondary">--</button><div data-testid="name">{city.name}</div>
                <b data-testid="temprature">
                    {temp}  </b></li>
        </>
    )
}

