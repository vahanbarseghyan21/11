let starter = document.getElementById('starter')
starter.children[1].addEventListener('click',()=>[
    start()
])
let wins = document.getElementById('wins')
wins.innerHTML = `wins:${localStorage.getItem('wins')}` || `wins0`
let checkers = []
let oldchecked = ''
function print(){

}
function start(){
    starter.style.display = 'none'
    let divers = document.createElement('div')
    for(let i = 0;i<12;i++){
        let div = document.createElement('div')
        div.innerHTML = ''
        div.setAttribute('class','block')
        divers.appendChild(div)
    }
    divers.id = 'divers'
    document.body.appendChild(divers)
    let elements = document.getElementsByClassName('block')
    for(let i = 0;i<elements.length/2;i++){
        for(let z = 0;z<2;z++){
            for(let x = 0;x<100;x++){
                let elem = elements[Math.floor(Math.random()*12)]
                if(elem.innerHTML === ''){
                    elem.innerHTML = i
                    break;
                }
            }
           
        }
    }
    setTimeout(()=>{
        for(let i = 0;i<elements.length;i++){
            elements[i].style.color = '#fff'
            elements[i].onclick = function(){
                if(oldchecked === i){
                    
                }else{
                    elements[i].style.color = '#000'
                    checkers.push(elements[i])
                    oldchecked = i
                    adder()
                }
                
            }
        }
    },500)
}
function adder(){
    if(checkers.length === 2 && checkers[0].innerHTML === checkers[1].innerHTML){
       setTimeout(()=>{
            checkers[0].onclick = function(){}
            checkers[1].onclick = function(){}
            checkers = []
       },300)
    }else if(checkers.length === 2){
       setTimeout(()=>{
            checkers[1].style.color = '#fff'
            checkers[0].style.color = '#fff'
            checkers = []
},300)
           
    }
    let elements = document.getElementsByClassName('block')
    let isSuccess = 0
    for(let i = 0;i<elements.length;i++){
        if(elements[i].style.color !== 'rgb(255, 255, 255)'){
            isSuccess++
        }
    }
    if(isSuccess === 12){
        alert('you are win')
        let wins = localStorage.getItem('wins')
        wins++
        localStorage.setItem('wins',wins)
        window.location.reload()
    }
    isSuccess = 0
   
}