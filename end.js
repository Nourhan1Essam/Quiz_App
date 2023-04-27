const username = document.querySelector('#username')
const savescorebtn = document.querySelector('#savescorebtn')
const finalscore = document.querySelector('#finalscore')
const mostrecentscore = localStorage.getItem('mostrecentscore')

const highscores = JSON.parse(localStorage.getItem('highscores')) || []

const max_high_socres = 5

finalscore.innerText = mostrecentscore

username.addEventListener('keyup' , () => {
    savescorebtn.disabled = !username.value
})

savescorebtn.addEventListener('click' , e => {

    const score = 
    {
        score: mostrecentscore,
        name: username.value
    }

    highscores.push(score)

    highscores.sort((a,b) => {
        return b.score - a.score
    })

    highscores.splice(5)

    localStorage.setItem('highscores' , JSON.stringify(highscores))
    window.location.assign('index.html')
})
