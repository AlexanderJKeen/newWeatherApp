const {getWeather} = require('./getWeather')
const {getLocation} = require('./getLocation')

const main = async (places) => {
    const location = await getLocation(places)
    const weather = await getWeather(location)
    const temp = await Math.floor((weather.temperature - 32) * 5/9)
    
    return {
        place: location.name,
        temp: temp,
        summary: weather.summary
    };
    
}

module.exports = {
    main
};



// request({url: `https://api.darksky.net/forecast/${apiKey}/37.8267,-122.4233`,JSON: true}, (error, responce) => {
//     if(error){
//         console.log(error)
//     }else{
//         const data = responce.body
//         console.log({temp: data.currently.temperature, rain: data.currently.precipProbability})
//     }

// })

