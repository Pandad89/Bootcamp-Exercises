const myObj = {
    name: "Adam",
    printName: function() {
        console.log(this.name)
    }, 
    printNameLater: setTimeout(function() {
        myObj.printName();
    }, 1000)
}

myObj.printName();
myObj.printNameLater;
