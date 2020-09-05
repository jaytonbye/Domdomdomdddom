
document.addEventListener('DOMContentLoaded',()=>{
    let btn = document.createElement('button')
    let btnText = document.createTextNode('Add Square')
    btn.className= 'btn'
    document.body.appendChild(btn)
    btn.appendChild(btnText)
    
    let numberOfBoxes = 0

    

    btn.addEventListener('click',()=>{
        let div = document.createElement('div')
        div.className = 'theBox'
        div.id = numberOfBoxes
        let divText = document.createTextNode(numberOfBoxes)
        document.body.appendChild(div)
        numberOfBoxes = document.getElementsByClassName('theBox').length

        div.addEventListener('mouseover',()=>{
            div.appendChild(divText)
        })
        
        div.addEventListener('mouseleave',()=>{
            divText.remove()
        })

        div.addEventListener('click',()=>{
            let colorArray = ['red', 'yellow', 'purple', 'blue', 'grey']
            let randomColor = colorArray[Math.floor(colorArray.length * Math.random())]
            div.style.backgroundColor = randomColor
        })

        div.addEventListener('dblclick',()=>{
            if (div.id%2 === 0){
                //how do I select the next box?
                //Although this works once, it stops working once the IDs get messed up from removing boxes. This is not a good strategy.
                document.getElementById(`${parseInt(div.id)+1}`).remove()
            }
            if (div.id%2 === 1){
                //how do I select the previoius box?
            }
        })
    })
})