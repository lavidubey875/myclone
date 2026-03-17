const firstbasket= document.querySelector('.basket-1 span')
const secondbasket = document.querySelector('.basket-2  span')
const leftArrow = document.querySelector('.left.arrow')
const rightArrow = document.querySelector('.right.arrow')
const totalapples = 10

let secondbasketapplecount = 0
let firstbasketapplecount = totalapples - secondbasketapplecount
// let secondbasketapplecount = 0
firstbasket.innerText = firstbasketapplecount
secondbasket.innerText = secondbasketapplecount
rightArrow.addEventListener('click', () => {
    if (firstbasketapplecount > 0) {
    firstbasketapplecount--
    firstbasket.innerText = firstbasketapplecount
    secondbasketapplecount++
    secondbasket.innerText = secondbasketapplecount
    }
    // basket1.innerText = firstbasketapplecount
})
leftArrow.addEventListener('click', () => {
    if (firstbasketapplecount > 0) {
    firstbasketapplecount++
    firstbasket.innerText = firstbasketapplecount
    secondbasketapplecount--
    secondbasket.innerText = secondbasketapplecount
    }
})