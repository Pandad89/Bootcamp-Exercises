const storm = {
    superPower: ["Flight"],
    callPrintSuperPower: printSuperPower,
}
function printSuperPower() {
    console.log("my superpower is " + this.superPower); 
}
storm.callPrintSuperPower();