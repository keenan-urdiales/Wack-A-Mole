// section defines the id selectors board and score as well as variables count and last hole
const board = document.querySelector('#board')
const scoreKeeper = document.querySelector('#score')
let count = 0
let lastHole;

//this function generates a random mole using a random number generator and     
// a query selector to pick a random hole and insert the image of the mole into the hole
function randomMoleGenerator(holes) {
    const randomNum = Math.floor(Math.random() * 9 + 1);
    const startHole = document.querySelector(`.hole${randomNum}`);
    console.log(startHole);
    startHole.innerHTML = '<img src="./images/mole.png">';
//use an if statement to return a different hole if the randomNum variable selects the same hole
// if (randomNum === lastHole) {
//     return randomMoleGenerator(randomNum);
// }
// lastHole = startHole;
// return startHole;
}
randomMoleGenerator()

 //uses and event listener to detect a click from the mouse on the mole image and add a point to 
 //the scoreboard then runs randomMoleGenerator to move the mole into a new hole
board.addEventListener('click', (e) => {
console.log(e.target.src)
if(e.target.src === "http://192.168.4.84:5501/images/mole.png") {
count++;
scoreKeeper.innerHTML = `score: ${count}`;
e.target.src = "http://192.168.4.84:5501/images/hole.png"
randomMoleGenerator();
} 
})



// function randomMoleGenrator(moles) {
// const i = [Math.floor(Math.random()*holes.length)];
// const hole = holes[i];
// if (holes ===  previousHole) {
// return randomHoleGenerator(holes);
// } 
// }
// randomHoleGenerator();




