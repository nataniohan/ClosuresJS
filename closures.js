//Closure é o escopo criado quando uma função é declarada
//Esse escopo permite a função acessar e manipular variáveis externas a função 

//Contexto léxico em ação!

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

// a função 'sempre' procura primeiramente no seu escopo, e caso nao ache 
// ai sim procura fora 

// lembrando que isso sao padrões JavaScript, sao padrões usados em pro