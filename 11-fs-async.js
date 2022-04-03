const {readFile,writeFile} = require('fs')

console.log('Start');

readFile('./content/subfolder/first.txt','utf-8',(err,result)=>{
    if(err){
        console.log(err)
        return
    }
    const first = result;
    readFile('./content/subfolder/first.txt','utf-8',(err,result)=>{
        if(err){
            console.log(err)
            return
        }
        
        const second = result
        writeFile(
            './content/result-sync.txt',
            `here is the result ${first},${second}`,
            (err,result) => {
                if(err){
                    console.log(err)
                    return
                }
                console.log('Done with the task');
            }
        )

    })
})

 console.log('starting new task');