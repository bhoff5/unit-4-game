$(document).ready(function () {
    var magicNumber;
    var wins = 0;
    var losses = 0;
    var crystal1Val;
    var crystal2Val;
    var crystal3Val;
    var crystal4Val;
    var pause = false;



    function randomValues() {

        magicNumber = Math.floor(Math.random() * 50) + 50;
        crystal2Val = Math.floor(Math.random() * 10) + 2;
        crystal3Val = Math.floor(Math.random() * 10) + 2;
        crystal4Val = Math.floor(Math.random() * 10) + 2;
        crystal1Val = Math.floor(Math.random() * 10) + 2;
    }

    function newGame() {

        randomValues();
        pause = false;
        $("#magicNumber").text(magicNumber)
        $("#crystalImage1").attr("data-crystalvalue", crystal1Val)
        $("#crystalImage2").attr("data-crystalvalue", crystal2Val)
        $("#crystalImage3").attr("data-crystalvalue", crystal3Val)
        $("#crystalImage4").attr("data-crystalvalue", crystal4Val)
    }
    newGame()

    function youWin() {
        wins++
        $("#wins").text(wins);

    }

    function youLose() {
        $("#magicNumber").attr("id", "grayscale");
        losses++;
        $("#losses").text(losses);
    }

    $(".crystalImage").on("click", function () {
        if (pause === false) {
            var audio = new Audio("assets/images/winsound.wav");
            audio.play();
            var crystalVal = $(this).attr("data-crystalvalue");
            magicNumber = magicNumber - parseInt(crystalVal);
            $("#magicNumber").text(magicNumber);
            if (magicNumber === 0) {
                youWin()
                console.log("you win")
                pause = true;
            }
            else if (magicNumber < 0) {
                youLose()
                console.log("you lose")
                pause = true;
            }

            else {
                console.log("keep playing")
            }
        }

    })

    $("#playAgain").on("click", function () {
        $("#grayscale").attr("id", "magicNumber");
        newGame();
    })


})