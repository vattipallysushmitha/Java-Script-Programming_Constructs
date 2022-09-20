/*Purpose==>4. Write a program to simulate a coin flip and print out "Heads" or "Tails" accordingly.
*Author==>Sushmitha
*Sign_in==>20-09-2022
*/
console.log("Coin Flip Simulation");

let flip = Math.random();
console.log(flip)
if (flip > 0.5) {
    console.log("Heads!");
} else {
    console.log("Tails!");
}