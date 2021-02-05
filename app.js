const form = document.querySelector('.quiz-form');

const correctAnswers = ['B', 'A', 'B', 'B'];

const p = document.querySelector('.score');


let score = 0;
let contCorrectAnswers = 0;
const userAnswers = [
    form.inputQuestion1.value,
    form.inputQuestion2.value,
    form.inputQuestion3.value,
    form.inputQuestion4.value
];

p.innerHTML = `Pontuação: ${score} %`;
const scoreUser = () => {    
    userAnswers.forEach((userAnswer, index) =>{
        if(userAnswer === correctAnswers[index]){
            contCorrectAnswers++;
            const intevalScore = setInterval(() => {
                score++;
                
                p.innerHTML = `Pontuação: ${score} %`;
                
                if(score === (contCorrectAnswers*25)){
                    
                    clearInterval(intevalScore);
                }
                
            }, 500);           
        }        
    });
    scrollTo(0,0)    
}

form.addEventListener('submit', event =>{
    event.preventDefault();
    
    scoreUser();
    
})
