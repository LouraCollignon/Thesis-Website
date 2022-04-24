//this is the trials section for the Uniformly distributed words. Works the same as the zipfian trials.
function zipfian(){
    //response times recorded in this trials section are recognized by the number 1. This also designates whether a particpant took part in the uniform or zipfian trials.
    RTlocation = 1;
    hideElements();
    //hide everything on screen.
    showElements();
    //show buttons and information.
    $("#information").html("<p>Please listen to the soundstream. It takes approximately 2,5 minutes. The 'next' buttons appears when it's finished. </p>");
    var soundstream = new Howl({src: ['sounds/soundstream.wav']}); //load sound with Howl.
    $("#buttons #play").click(function(){
        $("#buttons #play").hide();
        soundstream.play(); //play the sound
        $("#buttons #next").delay(140000).fadeIn(1);//button appearing is delayed for the runtime of the sound, in ms.
        $("#buttons #next").click(function(){
            //send the participant to the first trial.
            trialZ1();
        });
    });
};

//all trials are coded the same, only the 1st and last one will be commented.
function trialZ1(){
    hideElements();
    //remove everything from the screen.
    showElements();
    //show the buttons and information.
    startTimer();
    //start the response timer and display 6 images onto the screen
    $("#information").html("<img src='images/image_7.jpg' width='200' height='200'> \
    <img src='images/image_1.jpg' width='200' height='200'> \
    <img src='images/image_4.jpg' width='200' height='200'><br /> \
    <img src='images/image_2.jpg' width='200' height='200'> \
    <img src='images/image_14.jpg' width='200' height='200'> \
    <img src='images/image_3.jpg' width='200' height='200'>");

    var string1 = new Howl({src: ['sounds/string1.wav']}); //load sound with Howl
    $("#buttons #play").click(function(){
        $("#buttons #play").hide();
        string1.play(); //play the sound
        displayNext(); //display the next button
        $("#buttons #next").click(function(){
            //stop the response timer and send participant to next trial.
            endTimer();
            trialZ2();
        });
    });
};

function trialZ2(){
    hideElements();
    showElements();
    startTimer();
    $("#information").html("<img src='images/image_4.jpg' width='200' height='200'> \
    <img src='images/image_5.jpg' width='200' height='200'> \
    <img src='images/image_3.jpg' width='200' height='200'><br /> \
    <img src='images/image_9.jpg' width='200' height='200'> \
    <img src='images/image_1.jpg' width='200' height='200'> \
    <img src='images/image_18.jpg' width='200' height='200'>");

    var string2 = new Howl({src: ['sounds/string2.wav']});
    $("#buttons #play").click(function(){
        $("#buttons #play").hide();
        string2.play();
        displayNext();
        $("#buttons #next").click(function(){
            endTimer();
            trialZ3();
        });
    });
};

function trialZ3(){
    hideElements();
    showElements();
    startTimer();
    $("#information").html("<img src='images/image_1.jpg' width='200' height='200'> \
    <img src='images/image_3.jpg' width='200' height='200'> \
    <img src='images/image_5.jpg' width='200' height='200'><br /> \
    <img src='images/image_7.jpg' width='200' height='200'> \
    <img src='images/image_4.jpg' width='200' height='200'> \
    <img src='images/image_12.jpg' width='200' height='200'>");

    var string3 = new Howl({src: ['sounds/string3.wav']});
    $("#buttons #play").click(function(){
        $("#buttons #play").hide();
        string3.play();
        displayNext();
        $("#buttons #next").click(function(){
            endTimer();
            trialZ4();
        });
    });
};

function trialZ4(){
    hideElements();
    showElements();
    startTimer();
    $("#information").html("<img src='images/image_1.jpg' width='200' height='200'> \
    <img src='images/image_15.jpg' width='200' height='200'> \
    <img src='images/image_4.jpg' width='200' height='200'><br /> \
    <img src='images/image_8.jpg' width='200' height='200'> \
    <img src='images/image_5.jpg' width='200' height='200'> \
    <img src='images/image_2.jpg' width='200' height='200'>");

    var string4 = new Howl({src: ['sounds/string4.wav']});
    $("#buttons #play").click(function(){
        $("#buttons #play").hide();
        string4.play();
        displayNext();
        $("#buttons #next").click(function(){
            endTimer();
            trialZ5();
        });
    });
};

function trialZ5(){
    hideElements();
    showElements();
    startTimer();
    $("#information").html("<img src='images/image_3.jpg' width='200' height='200'> \
    <img src='images/image_5.jpg' width='200' height='200'> \
    <img src='images/image_13.jpg' width='200' height='200'><br /> \
    <img src='images/image_2.jpg' width='200' height='200'> \
    <img src='images/image_7.jpg' width='200' height='200'> \
    <img src='images/image_1.jpg' width='200' height='200'>");

    var string5 = new Howl({src: ['sounds/string5.wav']});
    $("#buttons #play").click(function(){
        $("#buttons #play").hide();
        string5.play();
        displayNext();
        $("#buttons #next").click(function(){
            endTimer();
            trialZ6();
        });
    });
};

function trialZ6(){
    hideElements();
    showElements();
    startTimer();
    $("#information").html("<img src='images/image_18.jpg' width='200' height='200'> \
    <img src='images/image_6.jpg' width='200' height='200'> \
    <img src='images/image_14.jpg' width='200' height='200'><br /> \
    <img src='images/image_3.jpg' width='200' height='200'> \
    <img src='images/image_2.jpg' width='200' height='200'> \
    <img src='images/image_1.jpg' width='200' height='200'>");

    var string6 = new Howl({src: ['sounds/string6.wav']});
    $("#buttons #play").click(function(){
        $("#buttons #play").hide();
        string6.play();
        displayNext();
        $("#buttons #next").click(function(){
            endTimer();
            trialZ7();
        });
    });
};

function trialZ7(){
    hideElements();
    showElements();
    startTimer();
    $("#information").html("<img src='images/image_2.jpg' width='200' height='200'> \
    <img src='images/image_1.jpg' width='200' height='200'> \
    <img src='images/image_15.jpg' width='200' height='200'><br /> \
    <img src='images/image_18.jpg' width='200' height='200'> \
    <img src='images/image_5.jpg' width='200' height='200'> \
    <img src='images/image_3.jpg' width='200' height='200'>");

    var string7 = new Howl({src: ['sounds/string7.wav']});
    $("#buttons #play").click(function(){
        $("#buttons #play").hide();
        string7.play();
        displayNext();
        $("#buttons #next").click(function(){
            endTimer();
            trialZ8();
        });
    });
};

function trialZ8(){
    hideElements();
    showElements();
    startTimer();
    $("#information").html("<img src='images/image_9.jpg' width='200' height='200'> \
    <img src='images/image_3.jpg' width='200' height='200'> \
    <img src='images/image_11.jpg' width='200' height='200'><br /> \
    <img src='images/image_6.jpg' width='200' height='200'> \
    <img src='images/image_2.jpg' width='200' height='200'> \
    <img src='images/image_1.jpg' width='200' height='200'>");

    var string8 = new Howl({src: ['sounds/string8.wav']});
    $("#buttons #play").click(function(){
        $("#buttons #play").hide();
        string8.play();
        displayNext();
        $("#buttons #next").click(function(){
            endTimer();
            trialZ9();
        });
    });
};

function trialZ9(){
    hideElements();
    showElements();
    startTimer();
    $("#information").html("<img src='images/image_1.jpg' width='200' height='200'> \
    <img src='images/image_15.jpg' width='200' height='200'> \
    <img src='images/image_2.jpg' width='200' height='200'><br /> \
    <img src='images/image_7.jpg' width='200' height='200'> \
    <img src='images/image_4.jpg' width='200' height='200'> \
    <img src='images/image_14.jpg' width='200' height='200'>");

    var string9 = new Howl({src: ['sounds/string9.wav']});
    $("#buttons #play").click(function(){
        $("#buttons #play").hide();
        string9.play();
        displayNext();
        $("#buttons #next").click(function(){
            endTimer();
            trialZ10();
        });
    });
};

function trialZ10(){
    hideElements();
    showElements();
    startTimer();
    $("#information").html("<img src='images/image_1.jpg' width='200' height='200'> \
    <img src='images/image_12.jpg' width='200' height='200'> \
    <img src='images/image_9.jpg' width='200' height='200'><br /> \
    <img src='images/image_3.jpg' width='200' height='200'> \
    <img src='images/image_5.jpg' width='200' height='200'> \
    <img src='images/image_2.jpg' width='200' height='200'>");

    var string10 = new Howl({src: ['sounds/string10.wav']});
    $("#buttons #play").click(function(){
        $("#buttons #play").hide();
        string10.play();
        displayNext();
        $("#buttons #next").click(function(){
            endTimer();
            trialZ11();
        });
    });
};

function trialZ11(){
    hideElements();
    showElements();
    startTimer();
    $("#information").html("<img src='images/image_9.jpg' width='200' height='200'> \
    <img src='images/image_3.jpg' width='200' height='200'> \
    <img src='images/image_13.jpg' width='200' height='200'><br /> \
    <img src='images/image_2.jpg' width='200' height='200'> \
    <img src='images/image_1.jpg' width='200' height='200'> \
    <img src='images/image_5.jpg' width='200' height='200'>");

    var string11 = new Howl({src: ['sounds/string11.wav']});
    $("#buttons #play").click(function(){
        $("#buttons #play").hide();
        string11.play();
        displayNext();
        $("#buttons #next").click(function(){
            endTimer();
            trialZ12();
        });
    });
};

function trialZ12(){
    hideElements();
    showElements();
    startTimer();
    $("#information").html("<img src='images/image_7.jpg' width='200' height='200'> \
    <img src='images/image_4.jpg' width='200' height='200'> \
    <img src='images/image_13.jpg' width='200' height='200'><br /> \
    <img src='images/image_15.jpg' width='200' height='200'> \
    <img src='images/image_1.jpg' width='200' height='200'> \
    <img src='images/image_2.jpg' width='200' height='200'>");

    var string12 = new Howl({src: ['sounds/string12.wav']});
    $("#buttons #play").click(function(){
        $("#buttons #play").hide();
        string12.play();
        displayNext();
        $("#buttons #next").click(function(){
            endTimer();
            trialZ13();
        });
    });
};

function trialZ13(){
    hideElements();
    showElements();
    startTimer();
    $("#information").html("<img src='images/image_7.jpg' width='200' height='200'> \
    <img src='images/image_1.jpg' width='200' height='200'> \
    <img src='images/image_3.jpg' width='200' height='200'><br /> \
    <img src='images/image_5.jpg' width='200' height='200'> \
    <img src='images/image_2.jpg' width='200' height='200'> \
    <img src='images/image_4.jpg' width='200' height='200'>");

    var string13 = new Howl({src: ['sounds/string13.wav']});
    $("#buttons #play").click(function(){
        $("#buttons #play").hide();
        string13.play();
        displayNext();
        $("#buttons #next").click(function(){
            endTimer();
            trialZ14();
        });
    });
};

function trialZ14(){
    hideElements();
    showElements();
    startTimer();
    $("#information").html("<img src='images/image_6.jpg' width='200' height='200'> \
    <img src='images/image_1.jpg' width='200' height='200'> \
    <img src='images/image_5.jpg' width='200' height='200'><br /> \
    <img src='images/image_4.jpg' width='200' height='200'> \
    <img src='images/image_3.jpg' width='200' height='200'> \
    <img src='images/image_10.jpg' width='200' height='200'>");

    var string14 = new Howl({src: ['sounds/string14.wav']});
    $("#buttons #play").click(function(){
        $("#buttons #play").hide();
        string14.play();
        displayNext();
        $("#buttons #next").click(function(){
            endTimer();
            trialZ15();
        });
    });
};

function trialZ15(){
    hideElements();
    showElements();
    startTimer();
    $("#information").html("<img src='images/image_6.jpg' width='200' height='200'> \
    <img src='images/image_11.jpg' width='200' height='200'> \
    <img src='images/image_10.jpg' width='200' height='200'><br /> \
    <img src='images/image_1.jpg' width='200' height='200'> \
    <img src='images/image_2.jpg' width='200' height='200'> \
    <img src='images/image_3.jpg' width='200' height='200'>");

    var string15 = new Howl({src: ['sounds/string15.wav']});
    $("#buttons #play").click(function(){
        $("#buttons #play").hide();
        string15.play();
        displayNext();
        $("#buttons #next").click(function(){
            endTimer();
            trialZ16();
        });
    });
};

function trialZ16(){
    hideElements();
    showElements();
    startTimer();
    $("#information").html("<img src='images/image_7.jpg' width='200' height='200'> \
    <img src='images/image_1.jpg' width='200' height='200'> \
    <img src='images/image_18.jpg' width='200' height='200'><br /> \
    <img src='images/image_2.jpg' width='200' height='200'> \
    <img src='images/image_3.jpg' width='200' height='200'> \
    <img src='images/image_5.jpg' width='200' height='200'>");

    var string16 = new Howl({src: ['sounds/string16.wav']});
    $("#buttons #play").click(function(){
        $("#buttons #play").hide();
        string16.play();
        displayNext();
        $("#buttons #next").click(function(){
            endTimer();
            trialZ17();
        });
    });
};

function trialZ17(){
    hideElements();
    showElements();
    startTimer();
    $("#information").html("<img src='images/image_3.jpg' width='200' height='200'> \
    <img src='images/image_5.jpg' width='200' height='200'> \
    <img src='images/image_2.jpg' width='200' height='200'><br /> \
    <img src='images/image_4.jpg' width='200' height='200'> \
    <img src='images/image_1.jpg' width='200' height='200'> \
    <img src='images/image_11.jpg' width='200' height='200'>");

    var string17 = new Howl({src: ['sounds/string17.wav']});
    $("#buttons #play").click(function(){
        $("#buttons #play").hide();
        string17.play();
        displayNext();
        $("#buttons #next").click(function(){
            endTimer();
            trialZ18();
        });
    });
};

function trialZ18(){
    hideElements();
    showElements();
    startTimer();
    $("#information").html("<img src='images/image_5.jpg' width='200' height='200'> \
    <img src='images/image_7.jpg' width='200' height='200'> \
    <img src='images/image_1.jpg' width='200' height='200'><br /> \
    <img src='images/image_18.jpg' width='200' height='200'> \
    <img src='images/image_3.jpg' width='200' height='200'> \
    <img src='images/image_4.jpg' width='200' height='200'>");

    var string18 = new Howl({src: ['sounds/string18.wav']});
    $("#buttons #play").click(function(){
        $("#buttons #play").hide();
        string18.play();
        displayNext();
        $("#buttons #next").click(function(){
            endTimer();
            trialZ19();
        });
    });
};

function trialZ19(){
    hideElements();
    showElements();
    startTimer();
    $("#information").html("<img src='images/image_11.jpg' width='200' height='200'> \
    <img src='images/image_4.jpg' width='200' height='200'> \
    <img src='images/image_1.jpg' width='200' height='200'><br /> \
    <img src='images/image_2.jpg' width='200' height='200'> \
    <img src='images/image_7.jpg' width='200' height='200'> \
    <img src='images/image_15.jpg' width='200' height='200'>");

    var string19 = new Howl({src: ['sounds/string19.wav']});
    $("#buttons #play").click(function(){
        $("#buttons #play").hide();
        string19.play();
        displayNext();
        $("#buttons #next").click(function(){
            endTimer();
            trialZ20();
        });
    });
};

function trialZ20(){
    hideElements();
    showElements();
    startTimer();
    $("#information").html("<img src='images/image_16.jpg' width='200' height='200'> \
    <img src='images/image_3.jpg' width='200' height='200'> \
    <img src='images/image_10.jpg' width='200' height='200'><br /> \
    <img src='images/image_2.jpg' width='200' height='200'> \
    <img src='images/image_6.jpg' width='200' height='200'> \
    <img src='images/image_1.jpg' width='200' height='200'>");

    var string20 = new Howl({src: ['sounds/string20.wav']});
    $("#buttons #play").click(function(){
        $("#buttons #play").hide();
        string20.play();
        displayNext();
        $("#buttons #next").click(function(){
            endTimer();
            trialZ21();
        });
    });
};

function trialZ21(){
    hideElements();
    showElements();
    startTimer();
    $("#information").html("<img src='images/image_1.jpg' width='200' height='200'> \
    <img src='images/image_3.jpg' width='200' height='200'> \
    <img src='images/image_18.jpg' width='200' height='200'><br /> \
    <img src='images/image_5.jpg' width='200' height='200'> \
    <img src='images/image_9.jpg' width='200' height='200'> \
    <img src='images/image_2.jpg' width='200' height='200'>");

    var string21 = new Howl({src: ['sounds/string21.wav']});
    $("#buttons #play").click(function(){
        $("#buttons #play").hide();
        string21.play();
        displayNext();
        $("#buttons #next").click(function(){
            endTimer();
            trialZ22();
        });
    });
};

function trialZ22(){
    hideElements();
    showElements();
    startTimer();
    $("#information").html("<img src='images/image_14.jpg' width='200' height='200'> \
    <img src='images/image_3.jpg' width='200' height='200'> \
    <img src='images/image_15.jpg' width='200' height='200'><br /> \
    <img src='images/image_1.jpg' width='200' height='200'> \
    <img src='images/image_7.jpg' width='200' height='200'> \
    <img src='images/image_2.jpg' width='200' height='200'>");

    var string22 = new Howl({src: ['sounds/string22.wav']});
    $("#buttons #play").click(function(){
        $("#buttons #play").hide();
        string22.play();
        displayNext();
        $("#buttons #next").click(function(){
            endTimer();
            trialZ23();
        });
    });
};

function trialZ23(){
    hideElements();
    showElements();
    startTimer();
    $("#information").html("<img src='images/image_16.jpg' width='200' height='200'> \
    <img src='images/image_3.jpg' width='200' height='200'> \
    <img src='images/image_2.jpg' width='200' height='200'><br /> \
    <img src='images/image_9.jpg' width='200' height='200'> \
    <img src='images/image_6.jpg' width='200' height='200'> \
    <img src='images/image_1.jpg' width='200' height='200'>");

    var string23 = new Howl({src: ['sounds/string23.wav']});
    $("#buttons #play").click(function(){
        $("#buttons #play").hide();
        string23.play();
        displayNext();
        $("#buttons #next").click(function(){
            endTimer();
            trialZ24();
        });
    });
};

function trialZ24(){
    hideElements();
    showElements();
    startTimer();
    $("#information").html("<img src='images/image_9.jpg' width='200' height='200'> \
    <img src='images/image_8.jpg' width='200' height='200'> \
    <img src='images/image_1.jpg' width='200' height='200'><br /> \
    <img src='images/image_2.jpg' width='200' height='200'> \
    <img src='images/image_6.jpg' width='200' height='200'> \
    <img src='images/image_3.jpg' width='200' height='200'>");

    var string24 = new Howl({src: ['sounds/string24.wav']});
    $("#buttons #play").click(function(){
        $("#buttons #play").hide();
        string24.play();
        displayNext();
        $("#buttons #next").click(function(){
            endTimer();
            trialZ25();
        });
    });
};

function trialZ25(){
    hideElements();
    showElements();
    startTimer();
    $("#information").html("<img src='images/image_2.jpg' width='200' height='200'> \
    <img src='images/image_1.jpg' width='200' height='200'> \
    <img src='images/image_3.jpg' width='200' height='200'><br /> \
    <img src='images/image_4.jpg' width='200' height='200'> \
    <img src='images/image_18.jpg' width='200' height='200'> \
    <img src='images/image_5.jpg' width='200' height='200'>");

    var string25 = new Howl({src: ['sounds/string25.wav']});
    $("#buttons #play").click(function(){
        $("#buttons #play").hide();
        string25.play();
        displayNext();
        $("#buttons #next").click(function(){
            endTimer();
            trialZ26();
        });
    });
};

function trialZ26(){
    hideElements();
    showElements();
    startTimer();
    $("#information").html("<img src='images/image_4.jpg' width='200' height='200'> \
    <img src='images/image_11.jpg' width='200' height='200'> \
    <img src='images/image_2.jpg' width='200' height='200'><br /> \
    <img src='images/image_5.jpg' width='200' height='200'> \
    <img src='images/image_1.jpg' width='200' height='200'> \
    <img src='images/image_15.jpg' width='200' height='200'>");

    var string26 = new Howl({src: ['sounds/string26.wav']});
    $("#buttons #play").click(function(){
        $("#buttons #play").hide();
        string26.play();
        displayNext();
        $("#buttons #next").click(function(){
            endTimer();
            trialZ27();
        });
    });
};

function trialZ27(){
    hideElements();
    showElements();
    startTimer();
    $("#information").html("<img src='images/image_9.jpg' width='200' height='200'> \
    <img src='images/image_12.jpg' width='200' height='200'> \
    <img src='images/image_4.jpg' width='200' height='200'><br /> \
    <img src='images/image_2.jpg' width='200' height='200'> \
    <img src='images/image_1.jpg' width='200' height='200'> \
    <img src='images/image_5.jpg' width='200' height='200'>");

    var string27 = new Howl({src: ['sounds/string27.wav']});
    $("#buttons #play").click(function(){
        $("#buttons #play").hide();
        string27.play();
        displayNext();
        $("#buttons #next").click(function(){
            endTimer();
            trialZ28();
        });
    });
};

function trialZ28(){
    hideElements();
    showElements();
    startTimer();
    $("#information").html("<img src='images/image_6.jpg' width='200' height='200'> \
    <img src='images/image_14.jpg' width='200' height='200'> \
    <img src='images/image_4.jpg' width='200' height='200'><br /> \
    <img src='images/image_2.jpg' width='200' height='200'> \
    <img src='images/image_1.jpg' width='200' height='200'> \
    <img src='images/image_9.jpg' width='200' height='200'>");

    var string28 = new Howl({src: ['sounds/string28.wav']});
    $("#buttons #play").click(function(){
        $("#buttons #play").hide();
        string28.play();
        displayNext();
        $("#buttons #next").click(function(){
            endTimer();
            trialZ29();
        });
    });
};

function trialZ29(){
    hideElements();
    showElements();
    startTimer();
    $("#information").html("<img src='images/image_7.jpg' width='200' height='200'> \
    <img src='images/image_1.jpg' width='200' height='200'> \
    <img src='images/image_13.jpg' width='200' height='200'><br /> \
    <img src='images/image_6.jpg' width='200' height='200'> \
    <img src='images/image_3.jpg' width='200' height='200'> \
    <img src='images/image_2.jpg' width='200' height='200'>");

    var string29 = new Howl({src: ['sounds/string29.wav']});
    $("#buttons #play").click(function(){
        $("#buttons #play").hide();
        string29.play();
        displayNext();
        $("#buttons #next").click(function(){
            endTimer();
            trialZ30();
        });
    });
};

function trialZ30(){
    hideElements();
    showElements();
    startTimer();
    $("#information").html("<img src='images/image_3.jpg' width='200' height='200'> \
    <img src='images/image_9.jpg' width='200' height='200'> \
    <img src='images/image_2.jpg' width='200' height='200'><br /> \
    <img src='images/image_6.jpg' width='200' height='200'> \
    <img src='images/image_13.jpg' width='200' height='200'> \
    <img src='images/image_1.jpg' width='200' height='200'>");

    var string30 = new Howl({src: ['sounds/string30.wav']});
    $("#buttons #play").click(function(){
        $("#buttons #play").hide();
        string30.play();
        displayNext();
        $("#buttons #next").click(function(){
            endTimer();
            trialZ31();
        });
    });
};

function trialZ31(){
    hideElements();
    showElements();
    startTimer();
    $("#information").html("<img src='images/image_9.jpg' width='200' height='200'> \
    <img src='images/image_14.jpg' width='200' height='200'> \
    <img src='images/image_1.jpg' width='200' height='200'><br /> \
    <img src='images/image_4.jpg' width='200' height='200'> \
    <img src='images/image_2.jpg' width='200' height='200'> \
    <img src='images/image_5.jpg' width='200' height='200'>");

    var string31 = new Howl({src: ['sounds/string31.wav']});
    $("#buttons #play").click(function(){
        $("#buttons #play").hide();
        string31.play();
        displayNext();
        $("#buttons #next").click(function(){
            endTimer();
            trialZ32();
        });
    });
};

function trialZ32(){
    hideElements();
    showElements();
    startTimer();
    $("#information").html("<img src='images/image_12.jpg' width='200' height='200'> \
    <img src='images/image_3.jpg' width='200' height='200'> \
    <img src='images/image_6.jpg' width='200' height='200'><br /> \
    <img src='images/image_15.jpg' width='200' height='200'> \
    <img src='images/image_4.jpg' width='200' height='200'> \
    <img src='images/image_1.jpg' width='200' height='200'>");

    var string32 = new Howl({src: ['sounds/string32.wav']});
    $("#buttons #play").click(function(){
        $("#buttons #play").hide();
        string32.play();
        displayNext();
        $("#buttons #next").click(function(){
            endTimer();
            trialZ33();
        });
    });
};

function trialZ33(){
    hideElements();
    showElements();
    startTimer();
    $("#information").html("<img src='images/image_2.jpg' width='200' height='200'> \
    <img src='images/image_3.jpg' width='200' height='200'> \
    <img src='images/image_7.jpg' width='200' height='200'><br /> \
    <img src='images/image_4.jpg' width='200' height='200'> \
    <img src='images/image_12.jpg' width='200' height='200'> \
    <img src='images/image_1.jpg' width='200' height='200'>");

    var string33 = new Howl({src: ['sounds/string33.wav']});
    $("#buttons #play").click(function(){
        $("#buttons #play").hide();
        string33.play();
        displayNext();
        $("#buttons #next").click(function(){
            endTimer();
            trialZ34();
        });
    });
};

function trialZ34(){
    hideElements();
    showElements();
    startTimer();
    $("#information").html("<img src='images/image_9.jpg' width='200' height='200'> \
    <img src='images/image_3.jpg' width='200' height='200'> \
    <img src='images/image_2.jpg' width='200' height='200'><br /> \
    <img src='images/image_4.jpg' width='200' height='200'> \
    <img src='images/image_10.jpg' width='200' height='200'> \
    <img src='images/image_5.jpg' width='200' height='200'>");

    var string34 = new Howl({src: ['sounds/string34.wav']});
    $("#buttons #play").click(function(){
        $("#buttons #play").hide();
        string34.play();
        displayNext();
        $("#buttons #next").click(function(){
            endTimer();
            trialZ35();
        });
    });
};

function trialZ35(){
    hideElements();
    showElements();
    startTimer();
    $("#information").html("<img src='images/image_4.jpg' width='200' height='200'> \
    <img src='images/image_2.jpg' width='200' height='200'> \
    <img src='images/image_1.jpg' width='200' height='200'><br /> \
    <img src='images/image_7.jpg' width='200' height='200'> \
    <img src='images/image_11.jpg' width='200' height='200'> \
    <img src='images/image_9.jpg' width='200' height='200'>");

    var string35 = new Howl({src: ['sounds/string35.wav']});
    $("#buttons #play").click(function(){
        $("#buttons #play").hide();
        string35.play();
        displayNext();
        $("#buttons #next").click(function(){
            endTimer();
            trialZ36();
        });
    });
};

function trialZ36(){
    hideElements();
    showElements();
    startTimer();
    $("#information").html("<img src='images/image_1.jpg' width='200' height='200'> \
    <img src='images/image_8.jpg' width='200' height='200'> \
    <img src='images/image_4.jpg' width='200' height='200'><br /> \
    <img src='images/image_7.jpg' width='200' height='200'> \
    <img src='images/image_2.jpg' width='200' height='200'> \
    <img src='images/image_10.jpg' width='200' height='200'>");

    var string36 = new Howl({src: ['sounds/string36.wav']});
    $("#buttons #play").click(function(){
        $("#buttons #play").hide();
        string36.play();
        displayNext();
        $("#buttons #next").click(function(){
            endTimer();
            trialZ37();
        });
    });
};

function trialZ37(){
    hideElements();
    showElements();
    startTimer();
    $("#information").html("<img src='images/image_8.jpg' width='200' height='200'> \
    <img src='images/image_3.jpg' width='200' height='200'> \
    <img src='images/image_4.jpg' width='200' height='200'><br /> \
    <img src='images/image_2.jpg' width='200' height='200'> \
    <img src='images/image_1.jpg' width='200' height='200'> \
    <img src='images/image_7.jpg' width='200' height='200'>");

    var string37 = new Howl({src: ['sounds/string37.wav']});
    $("#buttons #play").click(function(){
        $("#buttons #play").hide();
        string37.play();
        displayNext();
        $("#buttons #next").click(function(){
            endTimer();
            trialZ38();
        });
    });
};

function trialZ38(){
    hideElements();
    showElements();
    startTimer();
    $("#information").html("<img src='images/image_1.jpg' width='200' height='200'> \
    <img src='images/image_2.jpg' width='200' height='200'> \
    <img src='images/image_3.jpg' width='200' height='200'><br /> \
    <img src='images/image_17.jpg' width='200' height='200'> \
    <img src='images/image_6.jpg' width='200' height='200'> \
    <img src='images/image_11.jpg' width='200' height='200'>");

    var string38 = new Howl({src: ['sounds/string38.wav']});
    $("#buttons #play").click(function(){
        $("#buttons #play").hide();
        string38.play();
        displayNext();
        $("#buttons #next").click(function(){
            endTimer();
            trialZ39();
        });
    });
};

function trialZ39(){
    hideElements();
    showElements();
    startTimer();
    $("#information").html("<img src='images/image_3.jpg' width='200' height='200'> \
    <img src='images/image_2.jpg' width='200' height='200'> \
    <img src='images/image_8.jpg' width='200' height='200'><br /> \
    <img src='images/image_15.jpg' width='200' height='200'> \
    <img src='images/image_6.jpg' width='200' height='200'> \
    <img src='images/image_1.jpg' width='200' height='200'>");

    var string39 = new Howl({src: ['sounds/string39.wav']});
    $("#buttons #play").click(function(){
        $("#buttons #play").hide();
        string39.play();
        displayNext();
        $("#buttons #next").click(function(){
            endTimer();
            trialZ40();
        });
    });
};

function trialZ40(){
    hideElements();
    showElements();
    startTimer();
    $("#information").html("<img src='images/image_4.jpg' width='200' height='200'> \
    <img src='images/image_1.jpg' width='200' height='200'> \
    <img src='images/image_2.jpg' width='200' height='200'><br /> \
    <img src='images/image_8.jpg' width='200' height='200'> \
    <img src='images/image_3.jpg' width='200' height='200'> \
    <img src='images/image_6.jpg' width='200' height='200'>");

    var string40 = new Howl({src: ['sounds/string40.wav']});
    $("#buttons #play").click(function(){
        $("#buttons #play").hide();
        string40.play();
        displayNext();
        $("#buttons #next").click(function(){
            endTimer();
            trialZ41();
        });
    });
};

function trialZ41(){
    hideElements();
    showElements();
    startTimer();
    $("#information").html("<img src='images/image_3.jpg' width='200' height='200'> \
    <img src='images/image_5.jpg' width='200' height='200'> \
    <img src='images/image_2.jpg' width='200' height='200'><br /> \
    <img src='images/image_16.jpg' width='200' height='200'> \
    <img src='images/image_1.jpg' width='200' height='200'> \
    <img src='images/image_9.jpg' width='200' height='200'>");

    var string41 = new Howl({src: ['sounds/string41.wav']});
    $("#buttons #play").click(function(){
        $("#buttons #play").hide();
        string41.play();
        displayNext();
        $("#buttons #next").click(function(){
            endTimer();
            trialZ42();
        });
    });
};

function trialZ42(){
    hideElements();
    showElements();
    startTimer();
    $("#information").html("<img src='images/image_1.jpg' width='200' height='200'> \
    <img src='images/image_2.jpg' width='200' height='200'> \
    <img src='images/image_8.jpg' width='200' height='200'><br /> \
    <img src='images/image_14.jpg' width='200' height='200'> \
    <img src='images/image_9.jpg' width='200' height='200'> \
    <img src='images/image_3.jpg' width='200' height='200'>");

    var string42 = new Howl({src: ['sounds/string42.wav']});
    $("#buttons #play").click(function(){
        $("#buttons #play").hide();
        string42.play();
        displayNext();
        $("#buttons #next").click(function(){
            endTimer();
            trialZ43();
        });
    });
};

function trialZ43(){
    hideElements();
    showElements();
    startTimer();
    $("#information").html("<img src='images/image_1.jpg' width='200' height='200'> \
    <img src='images/image_14.jpg' width='200' height='200'> \
    <img src='images/image_5.jpg' width='200' height='200'><br /> \
    <img src='images/image_10.jpg' width='200' height='200'> \
    <img src='images/image_3.jpg' width='200' height='200'> \
    <img src='images/image_15.jpg' width='200' height='200'>");

    var string43 = new Howl({src: ['sounds/string43.wav']});
    $("#buttons #play").click(function(){
        $("#buttons #play").hide();
        string43.play();
        displayNext();
        $("#buttons #next").click(function(){
            endTimer();
            trialZ44();
        });
    });
};

function trialZ44(){
    hideElements();
    showElements();
    startTimer();
    $("#information").html("<img src='images/image_9.jpg' width='200' height='200'> \
    <img src='images/image_1.jpg' width='200' height='200'> \
    <img src='images/image_2.jpg' width='200' height='200'><br /> \
    <img src='images/image_3.jpg' width='200' height='200'> \
    <img src='images/image_11.jpg' width='200' height='200'> \
    <img src='images/image_5.jpg' width='200' height='200'>");

    var string44 = new Howl({src: ['sounds/string44.wav']});
    $("#buttons #play").click(function(){
        $("#buttons #play").hide();
        string44.play();
        displayNext();
        $("#buttons #next").click(function(){
            endTimer();
            trialZ45();
        });
    });
};

function trialZ45(){
    hideElements();
    showElements();
    startTimer();
    $("#information").html("<img src='images/image_17.jpg' width='200' height='200'> \
    <img src='images/image_5.jpg' width='200' height='200'> \
    <img src='images/image_7.jpg' width='200' height='200'><br /> \
    <img src='images/image_1.jpg' width='200' height='200'> \
    <img src='images/image_2.jpg' width='200' height='200'> \
    <img src='images/image_3.jpg' width='200' height='200'>");

    var string45 = new Howl({src: ['sounds/string45.wav']});
    $("#buttons #play").click(function(){
        $("#buttons #play").hide();
        string45.play();
        displayNext();
        $("#buttons #next").click(function(){
            endTimer();
            trialZ46();
        });
    });
};

function trialZ46(){
    hideElements();
    showElements();
    startTimer();
    $("#information").html("<img src='images/image_6.jpg' width='200' height='200'> \
    <img src='images/image_8.jpg' width='200' height='200'> \
    <img src='images/image_1.jpg' width='200' height='200'><br /> \
    <img src='images/image_2.jpg' width='200' height='200'> \
    <img src='images/image_7.jpg' width='200' height='200'> \
    <img src='images/image_4.jpg' width='200' height='200'>");

    var string46 = new Howl({src: ['sounds/string46.wav']});
    $("#buttons #play").click(function(){
        $("#buttons #play").hide();
        string46.play();
        displayNext();
        $("#buttons #next").click(function(){
            endTimer();
            trialZ47();
        });
    });
};

function trialZ47(){
    hideElements();
    showElements();
    startTimer();
    $("#information").html("<img src='images/image_3.jpg' width='200' height='200'> \
    <img src='images/image_10.jpg' width='200' height='200'> \
    <img src='images/image_11.jpg' width='200' height='200'><br /> \
    <img src='images/image_4.jpg' width='200' height='200'> \
    <img src='images/image_1.jpg' width='200' height='200'> \
    <img src='images/image_5.jpg' width='200' height='200'>");

    var string47 = new Howl({src: ['sounds/string47.wav']});
    $("#buttons #play").click(function(){
        $("#buttons #play").hide();
        string47.play();
        displayNext();
        $("#buttons #next").click(function(){
            endTimer();
            trialZ48();
        });
    });
};

function trialZ48(){
    hideElements();
    showElements();
    startTimer();
    $("#information").html("<img src='images/image_1.jpg' width='200' height='200'> \
    <img src='images/image_3.jpg' width='200' height='200'> \
    <img src='images/image_5.jpg' width='200' height='200'><br /> \
    <img src='images/image_2.jpg' width='200' height='200'> \
    <img src='images/image_14.jpg' width='200' height='200'> \
    <img src='images/image_9.jpg' width='200' height='200'>");

    var string48 = new Howl({src: ['sounds/string48.wav']});
    $("#buttons #play").click(function(){
        $("#buttons #play").hide();
        string48.play();
        displayNext();
        $("#buttons #next").click(function(){
            endTimer();
            trialZ49();
        });
    });
};

function trialZ49(){
    hideElements();
    showElements();
    startTimer();
    $("#information").html("<img src='images/image_6.jpg' width='200' height='200'> \
    <img src='images/image_2.jpg' width='200' height='200'> \
    <img src='images/image_12.jpg' width='200' height='200'><br /> \
    <img src='images/image_3.jpg' width='200' height='200'> \
    <img src='images/image_1.jpg' width='200' height='200'> \
    <img src='images/image_10.jpg' width='200' height='200'>");

    var string49 = new Howl({src: ['sounds/string49.wav']});
    $("#buttons #play").click(function(){
        $("#buttons #play").hide();
        string49.play();
        displayNext();
        $("#buttons #next").click(function(){
            endTimer();
            trialZ50();
        });
    });
};

function trialZ50(){
    hideElements();
    showElements();
    startTimer();
    $("#information").html("<img src='images/image_9.jpg' width='200' height='200'> \
    <img src='images/image_6.jpg' width='200' height='200'> \
    <img src='images/image_3.jpg' width='200' height='200'><br /> \
    <img src='images/image_13.jpg' width='200' height='200'> \
    <img src='images/image_1.jpg' width='200' height='200'> \
    <img src='images/image_2.jpg' width='200' height='200'>");

    var string50 = new Howl({src: ['sounds/string50.wav']});
    $("#buttons #play").click(function(){
        $("#buttons #play").hide();
        string50.play();
        displayNext();
        $("#buttons #next").click(function(){
            endTimer();
            test_seg_start(); //instead of sending participant to next trial, it sends the participant to the start of the "segmentation test" section.
        });
    });
};