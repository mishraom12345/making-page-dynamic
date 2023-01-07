const posts = [
    {title:'post one' , body:'post is one'},
    {
        title:'post two',body:'post is two'
    }        
]

function getpost(){

    
    setTimeout(() => {
        let output = '';
        for (let index = 0; index < posts.length; index++) {
            output += `<li>${posts[index].title}</li>`
            
        } 
        document.body.innerHTML = output;   
        
    }, 1000);
    
}

function createPost(post){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push(post)
            const error = false;
            if (!error){
                resolve()
            }else{
                reject('Error:something went wrong')
            }
        }, 1000);
    })
}

function deletepost(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(posts.length>0){
   
                resolve( posts.pop()) 
            }else{
                reject(' array is empty now')
            }
            
        }, 2000);
    })

}

createPost({title:'post three',body:'this is post 3'})

createPost({title:'post four',body:'this is post 4'})

.then(()=>{
    getpost()
    deletepost().then(()=>{
        getpost()
        deletepost().then(()=>{
            getpost();
            deletepost().then(()=>{
                getpost()
                deletepost().then(()=>{
                    getpost()
                    deletepost().then().catch(err=>console.log(err))
                })

            })
        })
    })
})


const promise1 = Promise.resolve('hello world');
const promise2 = 10;
const promise3 = new Promise((resolve,reject)=>{
    setTimeout(resolve,2000,'goodbye')
})

const updateLastUserActivityTime = function (){
    return Promise((resolve,reject)=>{
        setTimeout(() => {

            

            resolve(new Date().getTime())

            
        }, 1000);
        
    })
}
Promise.all([promise1,promise2,promise3]).then(value=>{
    console.log(value);
})

function userUpdateapost(){

    Promise.all[(createPost,updateLastUserActivityTime)].then((a,b)=>{
        console.log(a)
    })

}

Promise.all([createPost({title:'post four',body:'this is post four'}),updateLastUserActivityTime]).then(val=>console.log(posts, new Date().getTime()))

deletepost()
.then(val => console.log(posts))
.catch(err => console.log('Array is empty now'))
