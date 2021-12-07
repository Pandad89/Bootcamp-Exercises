const tickBox = document.querySelector('input');
const image = document.querySelector('img');
const styles = window.getComputedStyle(image);
let visibility = styles.getPropertyValue("visibility");

tickBox.addEventListener('input', function(){
    if(tickBox.checked === true){
        image.style.visibility = 'visible';
    } else {
        image.style.visibility = 'hidden';
    }
})

