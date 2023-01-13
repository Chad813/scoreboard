let home = 0
let guest = 0

let homeScore = document.getElementById("H_score")
let guestScore = document.getElementById("G_score")

function add_home(points) {
    home += points
    homeScore.innerHTML = home
}

function add_guest(points) {
    guest += points
    guestScore.innerHTML = guest
}