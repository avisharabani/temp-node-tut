const {readFile, writeFile} = require('fs');

console.log('start')
readFile('./content/first.txt','utf-8',(err,result)=>{
    if(err){
        console.log(err.message)
        return;
    }
    console.log('read first');

    const data1 = result;
    readFile('./content/second.txt','utf-8',(err,result)=>{
        if(err){
            console.log(err.message)
            return;
        }
        const data2 = result;
        console.log('read second');

        writeFile(
            './content/result-async.txt',
            `Here is the result : ${data1}, ${data2}`,
                (err)=>{
                if(err){
                    console.log(err.message);
                }
                console.log('done with this task')

            }
        )
    }
)})
console.log('starting with next task');