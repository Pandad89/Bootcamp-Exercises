function grade (num) {
    if(num >=90) {
        console.log('A');
    } else if(num >=80) {
        console.log('B');
    } else if(num >=70) {
        console.log('C');
    } else if(num >=65) {
        console.log('D');
    } else {
        console.log('F');
    }
}

grade(93);
grade(85);
grade(72);
grade(66);
grade(59);