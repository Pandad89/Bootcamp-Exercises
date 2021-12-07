const input = document.querySelector('input');
const btn = document.querySelector('button');

    btn.addEventListener('click', function() {
    if(input.value > 18) {
        alert("You can drink!");
    } else {
        alert("You're too young!")
    }
});