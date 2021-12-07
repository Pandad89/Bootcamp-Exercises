let numSiblings = Number(prompt('How many siblings do you have?'));

if (numSiblings === 1) {
        console.log('You have one sibling!');
        window.alert('You have one sibling!');
    } else if (numSiblings > 1) {
        console.log('You have more than one sibling!');
        window.alert('You have more than one sibling!');
    } else {
        console.log('You have no siblings!');
        window.alert('You have no siblings!');
    }