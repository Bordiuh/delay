function delay(seconds){
    let a = new Promise((resolve, reject) => {
        setTimeout(() => resolve("Hi"), seconds)
    })
    return a;
}
delay(3000).then(result => console.log(result))
