console.log('person1:show the ticket')
console.log('person 2:show the ticket')

const promisewifeBringingticks = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('ticket')
        
    }, 2000);
})

const getPopcorn = promisewifeBringingticks.then((t)=>{
    console.log('wife : i have the tickets')
    console.log('husband ; we should go in ')
    console.log('wife : no i am hungry')
    return new Promise((resolve, reject) => {
        resolve(`${t} popcorn `)
    })

})

const getButter = getPopcorn.then((t)=>{
    console.log('husband:i got some popcorn')
    console.log('husband : we should go in')
    console.log('wife:i need butter on my popcorn')
    return new Promise((resolve, reject) => {
        resolve(`${t} butter`)
    })
})

getButter.then((t)=>console.log(t))



console.log('person 4:show the ticket')

console.log('person 5:show the ticket')
