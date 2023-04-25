const highsocreslist = document.querySelector('#highsocreslist')
const highscores = JSON.parse(localStorage.getItem('highscores')) || []

highsocreslist.innerHTML = 
highscores.map(score => {
    return '<li class="high-score">' + score.name + ' - ' + score.score + '</li>'
}).join('')