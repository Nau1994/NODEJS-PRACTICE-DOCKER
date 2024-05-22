const fs = require('fs');
const path = require('path');
const { stdin } = require('process');

function getDirectoryInfo(directory,level) {
    const directoryInfo = {
        name: path.basename(directory),
        path: directory,
        type: 'folder',
        contents: []
    };

    console.log(directory,level)
    if(level<=0 || directory.includes('node_modules')) return directoryInfo;
    level--;
    const items=fs.readdirSync(directory)
    

    items.forEach((item,index)=>{
        const itemPath=path.join(directory,item)
        if(fs.statSync(itemPath).isDirectory() ){
            directoryInfo.contents.push(getDirectoryInfo(itemPath,level))
        }else{
            directoryInfo.contents.push({
                name: path.basename(itemPath),
                path: itemPath,
                type: 'file',
                size: fs.statSync(itemPath).size
            })
        }
    })

    return directoryInfo;
}

function main() {
const readline=require('readline').createInterface({
    input:process.stdin,
    output:process.stdout
})
let level=2
readline.question('Enter file path: ',(directoryPath)=>{
    if(!fs.existsSync(directoryPath) ){
        console.log(`Directory path doesn't exists`,directoryPath)
        readline.close()
    }else{
        // console.log(getDirectoryInfo(directoryPath))
        fs.writeFileSync(path.join(__dirname,"file.json"),
        JSON.stringify(getDirectoryInfo(directoryPath,level--), null, 4))
        readline.close()
    }
})

}

// main();

module.exports=getDirectoryInfo
