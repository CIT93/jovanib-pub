/* async function start() {
const data = await fetch('https://api.weather.gov/gridpoints/OKX/35,35/forecast')
const result =  await data.json()
console.log(result.properties.periods[1].shortForecast)
 }

 async function start2() {
 fetch('https://api.weather.gov/gridpoints/OKX/35,35/forecast')
   .then(data => data.json() )
   .then( result => {
    console.log(result.properties.periods[1].shortForecast)
     })
     }
 start() */
 
 /* function getData() {
    return new Promise(function(resolve, reject) {
        setTimeout(() => {
            reject('Something went wrong.')
        }, 1)
    })
 } */

 async function start() {
    try{
        const data = await fetch('https://api.weather.gov/gridpoints/HNX/52,100/forecast')
        const result =  await data.json();
        onSuccess(result.properties.periods[1].shortForecast)
    } catch (e) {
onError(e);
    }
    }
 function onSuccess(result){
console.log(`Success: $(result`)
}
function onError(err){
console.log(`Error: $(err`)
} 

 start()