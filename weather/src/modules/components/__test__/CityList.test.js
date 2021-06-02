import { render } from '@testing-library/react'
import { CityWeatherList } from '../CityWeatherList'
describe('CityWeatherList', () => {
    const city =
    {
        "coord": { "lon": 49.892, "lat": 40.3777 },
        "weather": [
            {
                "id": 800,
                "main": "Clear",
                "description": "clear sky",
                "icon": "01n"
            }],
        "base": "stations",
        "main":
        {
            "temp": 296.18,
            "feels_like": 296.31,
            "temp_min": 296.18,
            "temp_max": 296.18,
            "pressure": 1006,
            "humidity": 68,
            "sea_level": 1006,
            "grnd_level": 1007
        },
        "visibility": 10000,
        "wind":
        {
            "speed": 6.6,
            "deg": 185,
            "gust": 9.64
        },
        "clouds":
            { "all": 0 },
        "dt": 1622564255,
        "sys":
        {
            "type": 1,
            "id": 8841,
            "country": "AZ",
            "sunrise": 1622509965,
            "sunset": 1622563447
        },
        "timezone": 14400,
        "id": 587084,
        "name": "Baku",
        "cod": 200
    }

    const temp = 296.18

    test("should render City in given city details", () => {
        const { getByTestId } = render(<CityWeatherList temp={temp} city={city} />)
        expect(getByTestId("name").textContent).toEqual("Baku")
        expect(getByTestId("temprature").textContent).toEqual(296.18)


    })
})