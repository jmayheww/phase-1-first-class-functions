// // function Monday() {
// //     console.log("Go for a five-mile run");
// //     console.log("Pump iron");
// // }

// function  Tuesday (){
//     console.log("Go for a five-mile run");
//     console.log("Swim 40 laps");
// }

// function Wednesday () {
//     console.log("Go for a five mile run");
//     console.log("Go for a five-mile run");
// }

// function Thursday () {
//     console.log("Go for a five-mile run");
//     console.log("Pump iron");
// }

// function Friday () {
//     console.log("Go for a five-mile run");
//     console.log("Swim 40 laps");
// }

// function runFiveMiles() {
//     console.log("Go for a five-mile run");
// }

// function liftWeights() {
//     console.log("Pump iron");
// }

// function swimFortyLaps() {
//     console.log("Swim 40 laps");
// }

// function exerciseRoutine(postRunActivity) {
//     runFiveMiles();
//     postRunActivity();
// }

// function Monday() {
//     exerciseRoutine(liftWeights);

// }

// Monday();
// exerciseRoutine(function() {
//     console.log("Stretch! Work that core!")
// });



const chai = "chai";
const spies = chai + "-spies";

function receivesAFunction(spy) {


    spy(()=> console.log(`${spies}`));

    console.log(spy());

}



const newFunction = () => {return "This is the new function"};

function returnsANamedFunction() {
    return newFunction;
}

 const anonymous = function() {
     return function() {
        console.log("I am anonymous");
     }
 }

 function returnsAnAnonymousFunction() {
     return anonymous();
 }