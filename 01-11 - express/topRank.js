let data=[
    
    {
        name: 'Roland Richards',
        skills: {
            frontend: ['angular',],
            backend: ['node',],
            language: ['javascript',],
            database: ['mongodb',],
        }
    },
    {
        name: 'Roger Gomez',
        experience: 4,
        skills: {
            frontend: ['vue'],
            backend: ['node', 'express',],
            language: ['javascript',],
            database: ['postgresql',],
        }
    },
]

const input=["node","vue"]

rate=data.map(cand=>({...cand ,
    skillCount:Object.values(cand.skills).flat(Infinity).filter(elmnt=>input.includes(elmnt)).length
}))

console.log("rate",rate.sort((a,b)=>b.skillCount-a.skillCount)[0])


rate2=data.map(cand=>({...cand ,
    skillCount:Object.values(cand.skills).flat(Infinity).reduce((total,ele)=>{
        if(input.includes(ele)) {return total+1;}
        return total;
    },0)
}))

console.log("rate2",rate2.sort((a,b)=>b.skillCount-a.skillCount)[0])
