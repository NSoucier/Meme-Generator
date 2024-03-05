const form = document.querySelector('#form');
const topText = document.querySelector('input[name="topText"]');
const bottomText = document.querySelector('input[name="bottomText"]');
const imageURL = document.querySelector('input[name="userImage"]');
const meme = document.querySelector('#memeLibrary');
const imgs = document.querySelectorAll('img');
const page = document.querySelector('#pagebody');


// Receives values from form when submit is clicked
form.addEventListener('submit', function (e) {
    e.preventDefault();
    // Checks to see that all fields have an input
    if (topText.value == '' || bottomText.value == '' || imageURL.value == '') {
        alert ('You have a missing field in your form. Please enter a value in all 3 fields to generate a meme.');
    } else { //builds meme
        const div = document.createElement('div');
        div.style.position = 'relative';
        const topTextMeme = document.createElement('p');
        const bottomTextMeme = document.createElement('p');
        topTextMeme.setAttribute('id', 'top');
        bottomTextMeme.setAttribute('id', 'bottom');
        const imageMeme = document.createElement('img');
        topTextMeme.innerText = topText.value;
        bottomTextMeme.innerText = bottomText.value;
        imageMeme.setAttribute('src', imageURL.value);
        div.appendChild(topTextMeme);
        div.appendChild(imageMeme);
        imageMeme.style.height = '300px';
        div.appendChild(bottomTextMeme);
        topText.value = '';
        bottomText.value = '';
        imageURL.value = '';
        meme.appendChild(div);
    }
})

// Removes meme from page when clicked on
meme.addEventListener('click', function (e) {
    e.target.parentElement.remove()
    ;
})

// Adds color to page
document.addEventListener('mousemove', function (e){
    let b = Math.floor(e.pageX/window.innerWidth*170)+80;
    let g = Math.floor(e.pageY/window.innerHeight*170)+80;
    document.body.style.backgroundColor = `rgb(200,${g},${b})`;
})