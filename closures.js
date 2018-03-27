const x = 'Global'

function out(){
    const x = 'Local'
    function inter(){
        return x
    }
    return inter
}

const myFunction = out()
console.log(myFunction())
