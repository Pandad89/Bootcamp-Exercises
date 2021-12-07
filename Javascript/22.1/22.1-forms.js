const textBox = document.querySelector('div');
const btn = document.querySelector('button');
const styles = window.getComputedStyle(textBox);
const input = document.querySelectorAll('input');
let visibility = styles.getPropertyValue("visibility");




btn.addEventListener('click', function(){
    if(input[0].value.length > 0 && input[1].value.length > 0 && input[2].value.length > 0)  {
        textBox.style.visibility = 'visible';
    }
})


