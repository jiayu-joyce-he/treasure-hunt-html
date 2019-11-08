var treasureLocation = Math.floor(Math.random() * 9)
var bombLocation = Math.floor(Math.random() * 9)
var counter = 5

function treasure(location){
    // alert(location)

    counter = counter - 1
    document.getElementById("counter").innerHTML = `Counter: ${counter}`

    if(counter === 0){
        document.getElementById("gameboard").innerHTML = "<pre>" + "You reached another 🌴 and you ran out of moves." + "\n" + "<img src='https://upload.wikimedia.org/wikipedia/commons/2/29/Cat.gif' </img>" + "</pre>"
    }
    else if(location === treasureLocation){
        document.getElementById(location).innerHTML = "🌈"
        console.log(treasureLocation)
        document.getElementById("gameboard").innerHTML = "YOU WIN! 🌈"
    }
    else if(location === bombLocation){
        document.getElementById(location).innerHTML = "💣"
        console.log(bombLocation)
        document.getElementById("gameboard").innerHTML = "YOU LOSE! 💥"
    }
    else if(location === bombLocation && location === treasureLocation){
        document.getElementById(location).innerHTML = "💣🌈"
        console.log(treasureLocation)
        document.getElementById("gameboard").innerHTML = "Twilight Zone?"
    }
    else{
        document.getElementById(location).innerHTML = "🌴"
    }
document.getElementById(location).disabled = true;
}
