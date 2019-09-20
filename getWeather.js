const request = require ('request')
const {promisify} = require('util')
const promisifiedRequest = promisify(request)
const{apiKey} = require('./keys')

const getWeather = async (location) => {
    try{ 
        let data = await 
            promisifiedRequest({url: `https://api.darksky.net/forecast/${apiKey}/${location.lng},${location.lat}`,
            json: true})
        return(data.body.currently)
    } catch (error){
   console.log("oops there's been a problem")
    }
   }
   module.exports = {
       getWeather
   }