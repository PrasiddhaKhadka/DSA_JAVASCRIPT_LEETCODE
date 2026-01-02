async function sleep(millis) {
    let promise = new Promise((resolve,error)=>{
        setTimeout(()=>{
            resolve(
                console.log('RESOLVED >.....')
            )
        },millis)
    })
}


let t = Date.now()
sleep(100).then(() => console.log(Date.now() - t))