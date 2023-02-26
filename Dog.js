// Create the Dog class here

class Dog {
    constructor(data){
        Object.assign(this, data)
    }

    getTinDogHtml(){
        const{name, avatar, age, bio, hasBeenSwiped, hasBeenLiked} = this
        
        return `
        <img id="like-stamp" src="public/assets/images/badge-like.png" alt="Like stamp">
        <img id="dislike-stamp" src="public/assets/images/badge-nope.png" alt="dislike stamp">
        <img id="tin-dog" src=${avatar} alt="photo of the dog to be liked or disliked">
        <h2 id="dog-name">${name}, ${age}</h2>
        <h5 id="phrase">${bio}</h4>
        `
    }
}


export default Dog