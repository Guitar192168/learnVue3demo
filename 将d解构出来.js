let m = {a:{c:[{d:1}]}}

let result = []
function foo(obj){
    Object.keys(obj).forEach(item => {
        if(!(obj[item] instanceof Array)){
            foo(obj[item])
        }else{
            result = obj[item][0]
        }
    })
    console.log(result);
}

foo(m)
export{}
