const form = document.querySelector('.quiz-form');

const correctAnswers = ['B', 'A', 'B', 'D'];

const p = document.querySelector('.score');


let score = 0;


const getUserAnswers = () => correctAnswers.map((_,index) => 
    form[`inputQuestion${index + 1}`].value) 
    
    


p.innerHTML = `Pontuação: ${score} %`;

const calculatUserScore = userAnswers => {    
    userAnswers.forEach((userAnswer, index) =>{
        if(userAnswer === correctAnswers[index]){
            score+=25;
                      
        }        
    });
      
}
const animateFinalScore = () => {
    let counter = 0;

    const intevalScore = setInterval(() => {
        
        if(counter === score){            
            clearInterval(intevalScore);
        }
        p.innerHTML = `Pontuação: ${counter++} %`;
        
    }, 10); 
    
}

const resetScore = () => {
    score = 0
}

form.addEventListener('submit', event =>{
    event.preventDefault();

    
    const userAnswers = getUserAnswers();

    resetScore();

    calculatUserScore(userAnswers);

    scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
    })

    animateFinalScore();
    console.log(score, " ")
    
})
