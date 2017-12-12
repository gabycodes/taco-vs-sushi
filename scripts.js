const tacoVsSushi = {};

    $(function () {
        tacoVsSushi.init();
    });
    tacoVsSushi.init = function() {
        tacoVsSushi.eventListener();
    };
    
    let tacoPoints = 0;
    let sushiPoints = 0;
    const quizProgress = [false,false,false,false,false,false,false];
    const tweetGenerated = false;
    let userResult = "";
    let resultImgSrc = "";
    let tacoImgSrc = "assets/tacoCheeky.png";
    let sushiImgSrc = "assets/sushiCheeky.png";
    let resultText = "";
    const tacoText = "Hola Amigo! Welcome to the cool team.";
    const sushiText = "Kon'nichiwa! Welcome to the cool team.";
    let progressIncrement = 100;
    
    tacoVsSushi.eventListener = function () {

        $('a.startQuiz').on('click', function (e) {
            e.preventDefault();
            console.log("start quiz!");
            $(".splash").css({ "animation": "flyAway 1s forwards 1 cubic-bezier(0.71,-0.01, 0.71, 0.78)" });
            tacoVsSushi.showProgress();
        });

        $('a.submit').on('click', function (e) {
            e.preventDefault();
            tacoVsSushi.checkProgress(quizProgress);
            console.log("answers submitted, tweet generated");
            tacoVsSushi.hideProgress();
            $('#twitter-widget-0').remove();

            $(".q7").css({ "animation": "flyAway 1s forwards 1 cubic-bezier(0.71,-0.01, 0.71, 0.78)" });

            $(this).css({
                "transition": "top 0.95s cubic-bezier(0.71,-0.01, 0.71, 0.78)",
                "top":"-15vh"
            });

            // $('#twitter-widget-0').remove();

            // const tweetButton = $('<a>')
            //     .addClass("twitter-share-button tweetIt")
            //     .attr("data-text", `You got team ${userResult}`)
            //     .attr("data-hashtags", "tacoVsSushi")
            //     .attr("data-size", "large")
            //     .attr("data-show-count", "false")
            //     .css({"margin":"20px 50px"});
            // $('.tweetHolder').append(tweetButton);
            // twttr.widgets.load();
        });// end of a.submit listener

        $('a.playAgain').on('click', function (e) {
            location.reload();
        });

        $('.result').on( "click", '.decoyTweetIt', function(e) {
            $('.twitter-share-button').trigger("click");
            $('.twitter-share-button-rendered').trigger("click");
            $('.twitter-tweet-button').trigger("click");
            $('#twitter-widget-1').trigger("click");
            e.preventDefault();
            console.log("clicked the tweet")
        });
        
        $('a.answer').on('click', function (e) {
            e.preventDefault();
            if ($(this).closest(".q1").length) {// if this element is a child of something with a class of "q"
                if (this.classList.contains("taco") && quizProgress[0] === false) {// if this conatins a class of "taco", add to tacoPoints
                    tacoVsSushi.AddTacoPoints(1);
                    quizProgress[0] = true;
                    console.log("question 1 complete");
                     $(".q1").css({ "animation": "flyAway 1s forwards 1 cubic-bezier(0.71,-0.01, 0.71, 0.78)" });
                     tacoVsSushi.updateProgressBar();
                };
                if (this.classList.contains("sushi") && quizProgress[0] === false) {// if this conatins a class of "sushi", add to sushiPoints
                    tacoVsSushi.AddSushiPoints(1);
                    quizProgress[0] = true;
                    console.log("question 1 complete");
                     $(".q1").css({ "animation": "flyAway 1s forwards 1 cubic-bezier(0.71,-0.01, 0.71, 0.78)" });
                     tacoVsSushi.updateProgressBar();
                }
            }
            if ($(this).closest(".q2").length) {
                if (this.classList.contains("taco") && quizProgress[1] === false) {
                    tacoVsSushi.AddTacoPoints(1);
                    quizProgress[1] = true;
                    console.log("question 2 complete");
                    $(".q2").css({ "animation": "flyAway 1s forwards 1 cubic-bezier(0.71,-0.01, 0.71, 0.78)" });
                    tacoVsSushi.updateProgressBar();
                };
                if (this.classList.contains("sushi") && quizProgress[1] === false) {
                    tacoVsSushi.AddSushiPoints(1);
                    quizProgress[1] = true;
                    console.log("question 2 complete");
                    $(".q2").css({ "animation": "flyAway 1s forwards 1 cubic-bezier(0.71,-0.01, 0.71, 0.78)" });
                    tacoVsSushi.updateProgressBar();
                }
            }
            if ($(this).closest(".q3").length) {
                if (this.classList.contains("taco") && quizProgress[2] === false) {
                    tacoVsSushi.AddTacoPoints(1);
                    quizProgress[2] = true;
                    console.log("question 3 complete");
                    $(".q3").css({ "animation": "flyAway 1s forwards 1 cubic-bezier(0.71,-0.01, 0.71, 0.78)" });
                    tacoVsSushi.updateProgressBar();
                };
                if (this.classList.contains("sushi") && quizProgress[2] === false) {
                    tacoVsSushi.AddSushiPoints(1);
                    quizProgress[2] = true;
                    console.log("question 3 complete");
                    $(".q3").css({ "animation": "flyAway 1s forwards 1 cubic-bezier(0.71,-0.01, 0.71, 0.78)" });
                    tacoVsSushi.updateProgressBar();
                }
            }
            if ($(this).closest(".q4").length) {
                if (this.classList.contains("taco") && quizProgress[3] === false) {
                    tacoVsSushi.AddTacoPoints(1);
                    quizProgress[3] = true;
                    console.log("question 4 complete");
                    $(".q4").css({ "animation": "flyAway 1s forwards 1 cubic-bezier(0.71,-0.01, 0.71, 0.78)" });
                    tacoVsSushi.updateProgressBar();
                };
                if (this.classList.contains("sushi") && quizProgress[3] === false) {
                    tacoVsSushi.AddSushiPoints(1);
                    quizProgress[3] = true;
                    console.log("question 4 complete");
                    $(".q4").css({ "animation": "flyAway 1s forwards 1 cubic-bezier(0.71,-0.01, 0.71, 0.78)" });
                    tacoVsSushi.updateProgressBar();
                }
            }
            if ($(this).closest(".q5").length) {
                if (this.classList.contains("taco") && quizProgress[4] === false) {
                    tacoVsSushi.AddTacoPoints(1);
                    quizProgress[4] = true;
                    console.log("question 5 complete");
                    $(".q5").css({ "animation": "flyAway 1s forwards 1 cubic-bezier(0.71,-0.01, 0.71, 0.78)" });
                    tacoVsSushi.updateProgressBar();
                   
                };
                if (this.classList.contains("sushi") && quizProgress[4] === false) {
                    tacoVsSushi.AddSushiPoints(1);
                    quizProgress[4] = true;
                    console.log("question 5 complete");
                    $(".q5").css({ "animation": "flyAway 1s forwards 1 cubic-bezier(0.71,-0.01, 0.71, 0.78)" });
                    tacoVsSushi.updateProgressBar();
                }
            }
            if ($(this).closest(".q6").length) {
                if (this.classList.contains("taco") && quizProgress[5] === false) {
                    tacoVsSushi.AddTacoPoints(1);
                    quizProgress[5] = true;
                    console.log("question 6 complete");
                    $(".q6").css({ "animation": "flyAway 1s forwards 1 cubic-bezier(0.71,-0.01, 0.71, 0.78)" });
                    tacoVsSushi.updateProgressBar();
                   
                };
                if (this.classList.contains("sushi") && quizProgress[5] === false) {
                    tacoVsSushi.AddSushiPoints(1);
                    quizProgress[5] = true;
                    console.log("question 6 complete");
                    $(".q6").css({ "animation": "flyAway 1s forwards 1 cubic-bezier(0.71,-0.01, 0.71, 0.78)" });
                    tacoVsSushi.updateProgressBar();
                }
            }
            if ($(this).closest(".q7").length) {
                if (this.classList.contains("taco") && quizProgress[6] === false) {
                    tacoVsSushi.AddTacoPoints(1);
                    quizProgress[6] = true;
                    console.log("question 7 complete");
                    $('a.submit').css({
                        "transition":"transform 1s cubic-bezier(0.31, 0, 0.41, 1.26)",
                        "transform":"translateX(0)"
                    });
                    if ($(window).width() < 480) {
                        tacoVsSushi.hideProgress();
                     }
                    tacoVsSushi.updateProgressBar();
                   
                };
                if (this.classList.contains("sushi") && quizProgress[6] === false) {
                    tacoVsSushi.AddSushiPoints(1);
                    quizProgress[6] = true;
                    console.log("question 7 complete");
                    $('a.submit').css({
                        "transition":"transform 1s cubic-bezier(0.31, 0, 0.41, 1.26)",
                        "transform":"translateX(0)"
                    });
                    if ($(window).width() < 480) {
                        tacoVsSushi.hideProgress();
                     }
                    tacoVsSushi.updateProgressBar();
                }
            }
        });// end of 'a.answer' listener
    }

    tacoVsSushi.AddTacoPoints = function(points) {
        tacoPoints = tacoPoints + points;
        console.log(`tacoPoints = ${tacoPoints}`);
    };
    
    tacoVsSushi.AddSushiPoints = function(points) {
        sushiPoints = sushiPoints + points;
        console.log(`sushiPoints = ${sushiPoints}`);
    }
    tacoVsSushi.checkProgress = function(array) {
        let questionsAnswered = 0;
        for (let i = 0; i < array.length; i++) {
            if (array[i] === true) {
                questionsAnswered++;
                if (questionsAnswered === 2) {
                    console.log("quiz completed!");
                    tacoVsSushi.determineResult(tacoPoints,sushiPoints);
                }
            }
        }
    }

    tacoVsSushi.determineResult = function(tP, sP) {
        const tieBreaker = tacoVsSushi.getRandomNumber();

        if (tP > sP) {
            userResult = "Taco";
            resultText = tacoText;
            resultImgSrc = tacoImgSrc;
            console.log(`Team ${userResult}!`);
            tacoVsSushi.displayResult();

        } else if (tP < sP) {
            userResult = "Sushi";
            resultText = sushiText;
            resultImgSrc = sushiImgSrc;
            console.log(`Team ${userResult}!`);
            tacoVsSushi.displayResult();
        } else if (tP === sP) {
            tacoVsSushi.getRandomNumber();
            if (tieBreaker === 1) {
                userResult = "Taco";
                resultText = tacoText;
                resultImgSrc = tacoImgSrc;
                console.log(`Team ${userResult}!`);
                tacoVsSushi.displayResult();
            }
            if (tieBreaker === 2) {
                userResult = "Sushi";
                resultText = sushiText;
                resultImgSrc = sushiImgSrc;
                console.log(`Team ${userResult}!`);
                tacoVsSushi.displayResult();
            }
        }
    }

    tacoVsSushi.getRandomNumber = function() {
        return Math.floor((Math.random() * 2) + 1);
        // console.log(randomNumber);
    }
    tacoVsSushi.displayResult = function() {
        $('.result h3').append(`You're on team ${userResult}!`);
        $('.result p').append(resultText);
        $('.result img').attr('src', resultImgSrc);
        $('.decoyTweetIt').attr('href', `https://twitter.com/intent/tweet?hashtags=tacoVsSushi&text=I'm on team ${userResult}! http://bit.ly/2jBDX6b #tacoVsSushi`);
    }
    tacoVsSushi.showProgress = function() {
        $('.progressBarHolder').css({"transform":"translateY(0)"});
        console.log("doing it!");
    }
    tacoVsSushi.hideProgress = function() {
        $('.progressBarHolder').css({ "transform": "translateY(190%)"});
        console.log("doing it!");
    }
    tacoVsSushi.updateProgressBar = function() {
        if (quizProgress[0] === true) {
            $(".progress").css({"width":"14.28%"});
        }
        if (quizProgress[1] === true) {
            $(".progress").css({
                "width":"28.56%",
                "background":"tomato"
            });
        }
        if (quizProgress[2] === true) {
            $(".progress").css({
                "width":"42.84%",
                "background":"rgb(48, 126, 25)"
            });
        }
        if (quizProgress[3] === true) {
            $(".progress").css({
                "width":"57.12%",
                "background":"rgb(255, 0, 76)"
            });
        }
        if (quizProgress[4] === true) {
            $(".progress").css({
                "width":"71.4%",
                "background":"rgb(255, 123, 0)"
            });
        }
        if (quizProgress[5] === true) {
            $(".progress").css({
                "width":"85.68%",
                "background":"rgb(128, 163, 0)"
            });
        }
        if (quizProgress[6] === true) {
            $(".progress").css({
                "width":"100%",
                "background":"rgb(204, 5, 5)"
            });
        }
    }

    tacoVsSushi.determineProgressIncrement = function() {
        const numberOfQuestions = quizProgress.length;
        a = 100 / numberOfQuestions;
        console.log(a);
        b = a + "%";
        console.log(b);
        $('.progress').css({ "width": b});
    }

    tacoVsSushi.changeScreen = function() {
        // $('a.startQuiz').css({background:"yellow"});
        // $(".splash").css({ "z-index": "0" });
        // $(".splash").css({ "transition": "left 2s ease" });
        // $(".splash").css({ "top": "50%" });
        // $(".splash").css({ "animation": "spook 2.5s forwards 1 cubic-bezier(0.51,-0.22, 0.26, 0.85)" }); 
        // $(".splash").css({ "animation": "flyAway 2.5s forwards 1 cubic-bezier(0.68, 0.02, 0.48, 0.9)" }); 
        // cubic-bezier(0.51, -0.22, 0.26, 0.85)
        
    }










    // Ryan's feedback: 
    // - Make different listeners for the different buttons (start, all questions and submit)
    // - Add "tacoVsSushi." to viariables declared directly in the init



    //     Create variables to hold points for each result (let tacoPoints, let sushiPoints)
    

        // Create actual quiz
        
        //     Listen for user click on buttons
        //     When user clicks a button (selects an answer), add applicable points to either tacoPoints, sushiPoints, or both
        //     Check if all answers have been answered
        //     Check which variable has a higher value
        //     If it's a tie, randomize the result

        // Create progress bar
        //     Start at zero
        //     Listen for button presses (user submitting answers) (constantly or after each question)
        //     Increase value based on progress
        // (Need to research how to actually do this)

        // Create Preconstructed Twitter Post
        // (Need to research how to actually do this)
    