//promises are asynchonous in nature
async function damakepromise(){
    try {
        const dadpromise =  await new Promise((resolve,reject)=>{
            setTimeout(() => {
                var salarycredited = true;
                var salary = 32000
                var costofps5 = 40000
                var costofps4 = 30000
                if (salarycredited = true && salary > costofps5) {
                    resolve('buy him ps5')
                    
                }else if (salarycredited = true && salary> costofps4) {
                    reject('buy him ps2')
                    
                } else {
                    reject('sorry son i will try next month')
                    
                }
                
            }, 1000);
        })
        console.log(dadpromise)
    } catch (error) {
        console.log(error)
        
    }
   
}
damakepromise()

