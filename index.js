// Remember to import the data and Dog class!

import dogs from './data.js'
import Dog from './Dog.js'

let count = 0
function dog() {
    return new Dog(dogs[count])
}

function react(){
    document.getElementById('dislike-btn').addEventListener('click', function dislike(){
        document.getElementById('dislike-stamp').style.display ='block'
        currentDog.hasBeenSwiped = true
        setTimeout(()=> {
            if(count === 2) {
                return
            }
            count += 1
            currentDog = dog(count)
            render()
        }, 2000)
    })
    
    document.getElementById('like-btn').addEventListener('click', function like(){
        document.getElementById('like-stamp').style.display ='block'
        currentDog.hasBeenSwiped = true
        currentDog.hasBeenLiked = true
        setTimeout(()=> {
            if(count === 2) {
                return
            }
            count += 1
            currentDog = dog(count)
            render()
        }, 2000)
    })
}

react()

function render() {
    document.getElementById('dog').innerHTML = currentDog.getTinDogHtml()
}

let currentDog = dog(count)

render()