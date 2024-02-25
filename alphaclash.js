/*function play(){
    // step:1 hide the home screen, to hide the screen add the class hidden to the home section the section

    const homeSection = document.getElementById('home-screen');
    homeSection.classList.add('hidden');
    //console.log(homeSection.classList);


    //sho the playground
    const playgroundSection = document.getElementById('play-ground');
    playgroundSection.classList.remove('hidden');
    //console.log(playgroundSection.classList)
}*/

function handleKeyboardKeyUpEvent(event){
    const playerPressed = event.key;
    console.log('player pressed', playerPressed);

    //stop the game if 'Esc'
    if(playerPressed === 'Escape'){
        gameOver();
    }


    // get the expected to press
    const currentAlphabetElement = document.getElementById('current-alphabet');
    const currentAlphabet = currentAlphabetElement.innerText;

    const expectedAlphabet = currentAlphabet.toLowerCase();
    console.log(playerPressed, expectedAlphabet);

    //check matched ot not 
    if (playerPressed === expectedAlphabet){

        const currentScore = getTextElementValueBtId('current-score');
        console.log(currentScore);
        const updatedScore = currentScore + 1;

        setTextElementValueById('current-score', updatedScore);


        //...............................................
       /* console.log('you get a point');
        //update score
        //1.get the current score
        const currentScoreElement = document.getElementById('current-score');
        const currentScoreText = currentScoreElement.innerText;
        const currentScore = parseInt(currentScoreText);
        console.log(currentScore);*/

        //2.new score
        const newScore = currentScore + 1;

        //3. show the update score
        //currentScoreElement.innerText = newScore;




        //start a new round
        console.log('you have pressed correctly', expectedAlphabet);
        removeBackgroundColorById(expectedAlphabet);
        continueGame();
    }

    else{
        console.log('You lost a point');

        const currentLife = getTextElementValueBtId('current-life');
        const updateLife = currentLife - 1;
        setTextElementValueById('current-life', updateLife);

        if(updateLife === 0){
           gameOver();
        }
        //...........................................
       /* //1. get the current Life
        const currentLifeElement = document.getElementById('current-life');
        const currentLifeText = currentLifeElement.innerText;
        const currentLife = parseInt(currentLifeText);
        

        //2. reduce the life count

        const newLife = currentLife - 1;

        //3. display the update life count
        currentLifeElement.innerText = newLife;*/
        
    }
}
document.addEventListener('keyup', handleKeyboardKeyUpEvent)




function continueGame(){
    // step-1: generate a random alphabet
    const alphabet = getRandomAlphabet();
    //console.log('your random alphabet', alphabet);

    //set randomly generated alphabet to the screen (show it)
    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet;

     //set bg color

     setBackgroundColorById(alphabet);

}

//function use kore index.js a jeguls korsi tar sthy link kore akhne boslam
function play(){
    //hide everything show only the playground
    hideElementById('home-screen');
    hideElementById('final-score');
    shoElementById('play-ground');

    //reset score life
    setTextElementValueById('current-life', 5);
    setTextElementValueById('current-score', 0);
    continueGame()
}

function gameOver(){
    hideElementById('play-ground');
    shoElementById('final-score');

    //update final score
    //1.get the final score
    const lastScore = getTextElementValueBtId('current-score');
    console.log(lastScore);
    setTextElementValueById('last-score', lastScore);

    //clear the last selected alphabet
    const currentAlphabet = getElementTextById('current-alphabet');
    //console.log(currentAlphabet);
    removeBackgroundColorById(currentAlphabet);
}
