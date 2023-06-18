let items = document.querySelector(`.items`)

let images = [`1.jpg`, `2.jpg`, `3.jpg`, `4.jpg`, `5.jpg`, `6.jpg`]
let dubleImg = [...images, ...images]
let arrayForCompare = []
let openedCards = 0
let steps = 0

dubleImg.sort(() => Math.random() - 0.5)

dubleImg.forEach((img, i) => {
    items.innerHTML += `
    <div onclick = "showCard(${i})"></div>
    `
})

let cards = items.querySelectorAll(`div`)

function showCard(index) {

    if (!cards[index].classList.contains(`active`)) {
            arrayForCompare.push(index)
            if(arrayForCompare.length > 2) return

            cards[index].classList.add(`active`)
            cards[index].style.backgroundImage = `url(images/${dubleImg[index]})`
            
            if(arrayForCompare.length === 2) {
                    steps++
                    setTimeout(() => {
                        if (cards[arrayForCompare[0]].style.backgroundImage === cards[arrayForCompare[1]].style.backgroundImage) {
                            openedCards++
                            cards[arrayForCompare[0]].classList.add(`found`)
                            cards[arrayForCompare[1]].classList.add(`found`)
                                if (openedCards == images.length) {
                                    setTimeout(() => {
                                        alert(`Congratulations you won. Steps - ${steps}!!!`)
                                        location.reload()
                                    }, 500)
                                }
                        }
                        else{
                                cards[arrayForCompare[0]].classList.remove(`active`)
                                cards[arrayForCompare[1]].classList.remove(`active`)
                                cards[arrayForCompare[0]].style.backgroundImage = `unset`
                                cards[arrayForCompare[1]].style.backgroundImage = `unset`
                        }
                        arrayForCompare = []
                    }, 1000)
            }
    }
}