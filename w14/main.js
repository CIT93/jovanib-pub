const url = ''

    const request = new Request(url,{
         headers: {
        'Authorization': 'Bearer 123'
    }
    })
 async function getData(){
    try {
        const response = await fetch(request)
        if (response.status === 200) {
            const data = await response.json() 
        console.log('Succes', data)
        } else {
            console.log(' Servererror', data.error.message)
        }
         } catch(error){
        console.log('Fetch error', error)
    }
 
}
 getData()