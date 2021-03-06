import * as React from 'react'
import { weatherService } from '../../service'
import { CityWeatherList } from './CityWeatherList'

export function WeatherForecast() {

    const [city, setCity] = React.useState('')
    const [cityList, setCityList] = React.useState([])
    const [degreeStatus, setDegreeStatus] = React.useState('Celcius')
    let temp: number | string;
    console.log(cityList)

    const handleCityChange = (evt: any) => {
        setCity(evt.target.value)
    }
    const handleRemoveFromCityList = (cityName: string) => {
        const newArray: Array<never> = cityList.filter((city: any) => (city.data.name) != cityName)
        setCityList(newArray)
    }
    const handleSubmitWeatherCity = (e: React.FormEvent) => {
        e.preventDefault();
        let exists = false
        weatherService.getWeatherDataByCityName(city)
            .then((resp) => {
                if (cityList.length <= 0) {
                    const cityArray: any = [...cityList, resp]
                    setCityList(cityArray)
                    setCity('')
                } else {
                    cityList.map(({ data }: any) => {
                        (data.name.toLowerCase()) === (city.toLowerCase()) && (exists = true)
                    })
                    const warning: any = document.querySelector(".warningExists")

                    if (!exists) {
                        warning.classList.add("d-none")
                        const newArr: any = [...cityList, resp]
                        setCityList(newArr)
                        setCity('')
                    } else {
                        warning.classList.remove("d-none")
                    }
                }

            }).catch(err => {
                return err
            })
    }

    const handleDegreeChange = (degree: string) => {
        setDegreeStatus(degree)
    }

    return (<>
        <div className="container">
            <div className="row mt-5">
                <div className="col-lg-6 ">
                    <form className="w-100" onSubmit={handleSubmitWeatherCity}>
                        <div className="mb-3">
                            <label htmlFor="city" className="form-label">Email address</label>
                            <input name="city" value={city} onChange={handleCityChange} type="text" className="form-control" id="city" />
                            <div id="city" className="form-text">Please enter a city name .</div>
                            <div className="text-danger d-none warningExists">This city data already exists</div>
                            <button className="btn btn-primary" type="submit" > Find</button>
                        </div>
                    </form>
                    < div className="div" >

                        <ul className="list-unstyled">
                            {cityList.map(({ data }: any) => {
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
                            })}
                        </ul>
                    </div >
                </div>
                <div className="col-lg-6 mt-5 d-flex justify-content-end">
                    <form action="">
                        <div className="form-check">
                            <input className="form-check-input" value="Kelvin" onChange={e => handleDegreeChange(e.target.value)} type="radio" name="degree" id="Kelvin" />
                            <label className="form-check-label" htmlFor="Kelvin"> Kelvin</label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" value="Celcius" onChange={e => handleDegreeChange(e.target.value)} type="radio" name="degree" id="Celcius" />
                            <label className="form-check-label" htmlFor="Celcius">  Celcius</label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" value="Fehrenheight" onChange={e => handleDegreeChange(e.target.value)} type="radio" name="degree" id="Fehrenheight" />
                            <label className="form-check-label" htmlFor="Fehrenheight">Fehrenheight </label>
                        </div>
                    </form>
                </div>
            </div>
        </div >
    </>
    )
}


