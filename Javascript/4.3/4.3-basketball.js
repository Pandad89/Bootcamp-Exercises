let john = [89, 120, 103];
let johnAverage = (john[0] + john[1] + john[2]) / 3;
let mike = [116, 94, 123];
let mikeAverage = (mike[0] + mike[1] + mike[2]) / 3;
let mary = [97, 134, 105];
let maryAverage = (mary[0] + mary[1] + mary[2]) / 3;

function winnner() {
    if(johnAverage > mikeAverage && johnAverage > maryAverage) {
        console.log(`John's team wins! They scored an average of ${johnAverage} points!`);
    } else if(mikeAverage > johnAverage &&  mikeAverage > maryAverage) {
        console.log(`Mike's team wins! They scored an average of ${mikeAverage} points!`);
    } else if(maryAverage > mikeAverage && maryAverage > johnAverage) {
        console.log(`Mary's team wins! They scored an average of ${maryAverage} points!`);
    } else {
        console.log(`Draw! All teams scored and average of ${mikeAverage} points!`);
    }
}

winnner();