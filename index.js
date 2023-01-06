const posts = [
    { title: 'Post One', body: 'This is post one', createdAt: new Date().getTime()},
    { title: 'Post Two', body: 'This is post two', createdAt: new Date().getTime()}
];



let Intervalid = 0;
function getpost(){
    clearInterval(Intervalid)
    
    Intervalid = setInterval(() => {
        let output = '';
        for (let index = 0; index < posts.length; index++) {
            output += `<li>${posts[index].title} - last updated ${(new Date().getTime() - posts[index].createdAt)/1000} second ago</li>`
            
        } 
        document.body.innerHTML = output;   
        
    }, 1000);
    
}

function createPost(post,cb){
    setTimeout(() => {
        posts.push({...post,createdAt: new Date().getTime()})
        cb()
    }, 2000);
}

function create4thPost(post,callback){
    setTimeout(()=>{
        posts.push({...post,createdAt: new Date().getTime()})
        callback()

    },4000 )
}

createPost({title:'post three',body:'this is post three'},getpost)
create4thPost({title:'post four',body:'this is post four'},getpost)
