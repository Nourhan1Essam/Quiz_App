const question = document.querySelector("#question");
const choices = Array.from(document.querySelectorAll(".choice-text"));
const progresstext = document.querySelector("#progresstext");
const scoretext = document.querySelector("#score");
const progressbarfull = document.querySelector("#progressbarfull");

let currentquestion={}
let acceptinganswers=true
let score=0
let questioncounter=0
let availablequestions=[]

let questions = 
[
    {
        question : 'Who wrote the source code for this app?',
        choice1 :'Noura Hany',
        choice2 :'Hana Karim',
        choice3 :'Nourhan Essam',
        choice4 :'Ahmed samir',
        answer : '3',
    },
    {
        question : "what's 2 + 2 ?",
        choice1 :'4',
        choice2 :'14',
        choice3 : '40',
        choice4 : '1',
        answer : '1',
    },
    {
        question : 'In which track does Nourhan Essam take intership in Sync?',
        choice1 :'Python',
        choice2 :'AI',
        choice3 : 'Web Development',
        choice4 : 'App Development',
        answer : '3',
    },
    {
        question : "What color is the banana?",
        choice1 :'Green',
        choice2 :'Yellow',
        choice3 : 'Pink',
        choice4 : 'Red',
        answer : '2',
    }
]

const score_points = 100
const max_questions = 4

startgame = () =>
{
    questioncounter = 0 
    score = 0
    availablequestions = [...questions]
    getnewquestion()
}

getnewquestion = () =>
{
    if(availablequestions.length === 0 || questioncounter > max_questions)
    {
        localStorage.setItem('mostrecentscore' , score);
        return window.location.assign('end.html');
    }
    
    questioncounter++
    progresstext.innerText = 'Question '+ questioncounter + ' of ' + max_questions
    let k =(questioncounter/max_questions)*100
    progressbarfull.style.width = k + '%'

    const questionsindex = Math.floor(Math.random() * availablequestions.length)
    currentquestion =  availablequestions[questionsindex]
    question.innerText = currentquestion.question

    choices.forEach(choice =>
     {
        const number =choice.dataset['number']
        choice.innerText = currentquestion['choice' + number]
    })

    availablequestions.splice(questionsindex,1)
    
    acceptinganswers=true

}

choices.forEach(choice=>{
     choice.addEventListener('click' , e=>{
        if(! acceptinganswers)return

        acceptinganswers = false
        const selectedchoices = e.target
        const selectedanswers  = selectedchoices.dataset['number']

        let classtoapplay = selectedanswers === currentquestion.answer ? 'correct' : 'incorrect'

        if(classtoapplay === 'correct')
        {
            incrementScore(score_points)
        }

        selectedchoices.parentElement.classList.add(classtoapplay)

        setTimeout(() => {
            selectedchoices.parentElement.classList.remove(classtoapplay)
            getnewquestion()
        },1000)

     })   
})

incrementScore = num =>{
    score += num
    scoretext.innerText = score
}

startgame()