// const container = document.querySelector('.container')
// const cart = document.querySelector('.cart')
// const button = document.querySelector(".btn")
// const button2 = document.querySelector(".btn-click")
//
// for (let i = 0; i < 500; i++){
//     const square = document.createElement('div')
//     container.append(square)
//     square.setAttribute('class', 'square')
//     square.addEventListener('mouseover', () => {
//         square.style.background = randomColor()
//         square.style.boxShadow  = `3px 3px 3px ${randomColor()}`
//     })
//     square.addEventListener('mouseleave',() => {
//         square.style.background = ''
//         square.style.boxShadow = ''
//     })
//     button.addEventListener("click", () => {
//         button.style.color = 'white'
//         button.style.background = 'red'
//         button2.style.background = 'blueviolet'
//         button2.style.color = 'white'
//         square.style.background = randomColor()
//         square.style.rotate = "y 360deg"
//         square.style.borderRadius = '50px'
//     })
//     button2.addEventListener("click", () => {
//         button.style.color = 'white'
//         button.style.background = ''
//         button2.style.background = ''
//         button2.style.color = 'white'
//         square.style.background = ''
//         square.style.rotate = "x -360deg"
//         square.style.borderRadius = ''
//     })
// }
// function randomColor() {
//     let str = '#'
//     for (let i = 0; i < 6; i++){
//         str += Math.floor(Math.random() * 10)
//     }
//     return str
// }



// const container = document.querySelector(".container")
//
// for (let i = 0; i < 200; i++){
//     const square = document.createElement('div')
//     container.append("square")
//     square.getAttribute("class", "square")
//     square.addEventListener("click", () => {
//         square.style.background = randomColor()
//         square.style.boxShadow  = `3px 3px 3px ${randomColor()}`
//     })
// }
//
//

// function randomColor(){
//     let str = '#'
//     for (let i = 0; i < 6; i++){
//         str += Math.floor(Math.random() * 5)
//     }
//     return str
// }
//
//






















// function randomColor() {
//     const index = Math.round(Math.random() * colorNames.length)
//     return colorNames[index]
// }
// function setColor(el){
//     const color = randomColor()
//     el.style.background = color
//     el.style.transform = "scale(1.2)"
//     el.style.boxShadow = "2px 2px 4px #fff, 0 0 10px #000"
// }
// function removeColor(el) {
//     el.style.background = '#777474'
//     el.style.transform = "scale(1.)"
// }

// const input = document.querySelector("input")
// const btn = document.querySelector("button")
// const h1 = document.querySelector("h1")
// const p = document.querySelector("p")
//
// // h1.innerHTML = ''
//
// btn.addEventListener("click", () => {
//     h1.innerHTML = input.value
//    // p.innerHTML =input.value
//     // console.log(input.value)
// })
