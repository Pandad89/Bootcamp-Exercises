const btn = document.querySelectorAll('button');
const para = document.querySelector('p');
const styles = window.getComputedStyle(para);
let size = styles.getPropertyValue("font-size");
size = parseInt(size);

console.log(size);

btn[0].addEventListener('click', function(){
    if(size <100) {
        size = size+1;
        para.style.fontSize = size.toString() + 'px';
    }
});

btn[1].addEventListener('click', function(){
    if(size >6){
        size = size-1;
        para.style.fontSize = size.toString() + 'px';}
    });