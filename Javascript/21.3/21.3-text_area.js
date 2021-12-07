const btn = document.querySelector('button');
const text = document.querySelector('textarea');

btn.addEventListener('click', function(){
    if (text.value.length < 100) {
        text.value = "Please enter at least 100 characters before clicking the button."
    } else {
        text.value = "sent :)"
    }
})