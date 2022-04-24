//this is the trials section for the Uniformly distributed words. Works the same as the zipfian trials.
function uniform(){
    RTlocation = 2; //response times recorded in this trials section are recognized by the number 2. This also designates whether a particpant took part in the uniform or zipfian trials.
    hideElements();
    //hide everything
    showElements();
    //show required buttons and instruction.
    $("#information").html("<p>Please listen to the soundstream. It takes approximately 2,5 minutes. The 'next' buttons appears when it's finished. </p>");
    var soundstream1 = new Howl({src: ['sounds/soundstreamUni.wav']}); //load sound through Howl.
    $("#buttons #play").click(function(){
        $("#buttons #play").hide();
        soundstream1.play(); //play the sound
        $("#buttons #next").delay(147000).fadeIn(1); //button appearing is delayed for the runtime of the sound, in ms.
        $("#buttons #next").click(function(){
            //sends the participant to first trial.
            trialU1();
        });
    });
};

//all trials are coded the same, only the 1st and last one will be commented.
function trialU1(){
    hideElements();
    //hide everything
    showElements();
    //show the buttons, information and 6 images.
    startTimer();
    //start the response timer, per set of images and sound.
    $("#information").html("<img src='images/image_6.jpg' width='200' height='200'> \
    <img src='images/image_4.jpg' width='200' height='200'> \
    <img src='images/image_15.jpg' width='200' height='200'><br /> \
    <img src='images/image_16.jpg' width='200' height='200'> \
    <img src='images/image_7.jpg' width='200' height='200'> \
    <img src='images/image_12.jpg' width='200' height='200'>");

    var string51 = new Howl({src: ['sounds/string51.wav']}); //load the sound
    $("#buttons #play").click(function(){
        //play the sound by click "play".
        $("#buttons #play").hide();
        string51.play();
        displayNext(); //diplay the "next" button
        $("#buttons #next").click(function(){
            //stop the response timer and send participant to the next trial.
            endTimer();
            trialU2();
        });
    });
};

function trialU2(){
    hideElements();
    showElements();
    startTimer();
    $("#information").html("<img src='images/image_15.jpg' width='200' height='200'> \
    <img src='images/image_5.jpg' width='200' height='200'> \
    <img src='images/image_2.jpg' width='200' height='200'><br /> \
    <img src='images/image_7.jpg' width='200' height='200'> \
    <img src='images/image_17.jpg' width='200' height='200'> \
    <img src='images/image_12.jpg' width='200' height='200'>");

    var string52 = new Howl({src: ['sounds/string52.wav']});
    $("#buttons #play").click(function(){
        $("#buttons #play").hide();
        string52.play();
        displayNext();
        $("#buttons #next").click(function(){
            endTimer();
            trialU3();
        });
    });
};

function trialU3(){
    hideElements();
    showElements();
    startTimer();
    $("#information").html("<img src='images/image_6.jpg' width='200' height='200'> \
    <img src='images/image_16.jpg' width='200' height='200'> \
    <img src='images/image_15.jpg' width='200' height='200'><br /> \
    <img src='images/image_3.jpg' width='200' height='200'> \
    <img src='images/image_9.jpg' width='200' height='200'> \
    <img src='images/image_10.jpg' width='200' height='200'>");

    var string53 = new Howl({src: ['sounds/string53.wav']});
    $("#buttons #play").click(function(){
        $("#buttons #play").hide();
        string53.play();
        displayNext();
        $("#buttons #next").click(function(){
            endTimer();
            trialU4();
        });
    });
};

function trialU4(){
    hideElements();
    showElements();
    startTimer();
    $("#information").html("<img src='images/image_16.jpg' width='200' height='200'> \
    <img src='images/image_12.jpg' width='200' height='200'> \
    <img src='images/image_15.jpg' width='200' height='200'><br /> \
    <img src='images/image_8.jpg' width='200' height='200'> \
    <img src='images/image_6.jpg' width='200' height='200'> \
    <img src='images/image_3.jpg' width='200' height='200'>");

    var string54 = new Howl({src: ['sounds/string54.wav']});
    $("#buttons #play").click(function(){
        $("#buttons #play").hide();
        string54.play();
        displayNext();
        $("#buttons #next").click(function(){
            endTimer();
            trialU5();
        });
    });
};

function trialU5(){
    hideElements();
    showElements();
    startTimer();
    $("#information").html("<img src='images/image_3.jpg' width='200' height='200'> \
    <img src='images/image_4.jpg' width='200' height='200'> \
    <img src='images/image_18.jpg' width='200' height='200'><br /> \
    <img src='images/image_9.jpg' width='200' height='200'> \
    <img src='images/image_12.jpg' width='200' height='200'> \
    <img src='images/image_15.jpg' width='200' height='200'>");

    var string55 = new Howl({src: ['sounds/string55.wav']});
    $("#buttons #play").click(function(){
        $("#buttons #play").hide();
        string55.play();
        displayNext();
        $("#buttons #next").click(function(){
            endTimer();
            trialU6();
        });
    });
};

function trialU6(){
    hideElements();
    showElements();
    startTimer();
    $("#information").html("<img src='images/image_3.jpg' width='200' height='200'> \
    <img src='images/image_15.jpg' width='200' height='200'> \
    <img src='images/image_17.jpg' width='200' height='200'><br /> \
    <img src='images/image_12.jpg' width='200' height='200'> \
    <img src='images/image_5.jpg' width='200' height='200'> \
    <img src='images/image_7.jpg' width='200' height='200'>");

    var string56 = new Howl({src: ['sounds/string56.wav']});
    $("#buttons #play").click(function(){
        $("#buttons #play").hide();
        string56.play();
        displayNext();
        $("#buttons #next").click(function(){
            endTimer();
            trialU7();
        });
    });
};

function trialU7(){
    hideElements();
    showElements();
    startTimer();
    $("#information").html("<img src='images/image_3.jpg' width='200' height='200'> \
    <img src='images/image_15.jpg' width='200' height='200'> \
    <img src='images/image_12.jpg' width='200' height='200'><br /> \
    <img src='images/image_17.jpg' width='200' height='200'> \
    <img src='images/image_5.jpg' width='200' height='200'> \
    <img src='images/image_9.jpg' width='200' height='200'>");

    var string57 = new Howl({src: ['sounds/string57.wav']});
    $("#buttons #play").click(function(){
        $("#buttons #play").hide();
        string57.play();
        displayNext();
        $("#buttons #next").click(function(){
            endTimer();
            trialU8();
        });
    });
};

function trialU8(){
    hideElements();
    showElements();
    startTimer();
    $("#information").html("<img src='images/image_1.jpg' width='200' height='200'> \
    <img src='images/image_16.jpg' width='200' height='200'> \
    <img src='images/image_13.jpg' width='200' height='200'><br /> \
    <img src='images/image_6.jpg' width='200' height='200'> \
    <img src='images/image_11.jpg' width='200' height='200'> \
    <img src='images/image_7.jpg' width='200' height='200'>");

    var string58 = new Howl({src: ['sounds/string58.wav']});
    $("#buttons #play").click(function(){
        $("#buttons #play").hide();
        string58.play();
        displayNext();
        $("#buttons #next").click(function(){
            endTimer();
            trialU9();
        });
    });
};

function trialU9(){
    hideElements();
    showElements();
    startTimer();
    $("#information").html("<img src='images/image_16.jpg' width='200' height='200'> \
    <img src='images/image_12.jpg' width='200' height='200'> \
    <img src='images/image_9.jpg' width='200' height='200'><br /> \
    <img src='images/image_6.jpg' width='200' height='200'> \
    <img src='images/image_15.jpg' width='200' height='200'> \
    <img src='images/image_2.jpg' width='200' height='200'>");

    var string59 = new Howl({src: ['sounds/string59.wav']});
    $("#buttons #play").click(function(){
        $("#buttons #play").hide();
        string59.play();
        displayNext();
        $("#buttons #next").click(function(){
            endTimer();
            trialU10();
        });
    });
};

function trialU10(){
    hideElements();
    showElements();
    startTimer();
    $("#information").html("<img src='images/image_7.jpg' width='200' height='200'> \
    <img src='images/image_4.jpg' width='200' height='200'> \
    <img src='images/image_13.jpg' width='200' height='200'><br /> \
    <img src='images/image_18.jpg' width='200' height='200'> \
    <img src='images/image_11.jpg' width='200' height='200'> \
    <img src='images/image_1.jpg' width='200' height='200'>");

    var string60 = new Howl({src: ['sounds/string60.wav']});
    $("#buttons #play").click(function(){
        $("#buttons #play").hide();
        string60.play();
        displayNext();
        $("#buttons #next").click(function(){
            endTimer();
            trialU11();
        });
    });
};

function trialU11(){
    hideElements();
    showElements();
    startTimer();
    $("#information").html("<img src='images/image_4.jpg' width='200' height='200'> \
    <img src='images/image_2.jpg' width='200' height='200'> \
    <img src='images/image_11.jpg' width='200' height='200'><br /> \
    <img src='images/image_14.jpg' width='200' height='200'> \
    <img src='images/image_18.jpg' width='200' height='200'> \
    <img src='images/image_9.jpg' width='200' height='200'>");

    var string61 = new Howl({src: ['sounds/string61.wav']});
    $("#buttons #play").click(function(){
        $("#buttons #play").hide();
        string61.play();
        displayNext();
        $("#buttons #next").click(function(){
            endTimer();
            trialU12();
        });
    });
};

function trialU12(){
    hideElements();
    showElements();
    startTimer();
    $("#information").html("<img src='images/image_9.jpg' width='200' height='200'> \
    <img src='images/image_3.jpg' width='200' height='200'> \
    <img src='images/image_5.jpg' width='200' height='200'><br /> \
    <img src='images/image_17.jpg' width='200' height='200'> \
    <img src='images/image_15.jpg' width='200' height='200'> \
    <img src='images/image_10.jpg' width='200' height='200'>");

    var string62 = new Howl({src: ['sounds/string62.wav']});
    $("#buttons #play").click(function(){
        $("#buttons #play").hide();
        string62.play();
        displayNext();
        $("#buttons #next").click(function(){
            endTimer();
            trialU13();
        });
    });
};

function trialU13(){
    hideElements();
    showElements();
    startTimer();
    $("#information").html("<img src='images/image_3.jpg' width='200' height='200'> \
    <img src='images/image_12.jpg' width='200' height='200'> \
    <img src='images/image_15.jpg' width='200' height='200'><br /> \
    <img src='images/image_8.jpg' width='200' height='200'> \
    <img src='images/image_17.jpg' width='200' height='200'> \
    <img src='images/image_5.jpg' width='200' height='200'>");

    var string63 = new Howl({src: ['sounds/string63.wav']});
    $("#buttons #play").click(function(){
        $("#buttons #play").hide();
        string63.play();
        displayNext();
        $("#buttons #next").click(function(){
            endTimer();
            trialU14();
        });
    });
};

function trialU14(){
    hideElements();
    showElements();
    startTimer();
    $("#information").html("<img src='images/image_6.jpg' width='200' height='200'> \
    <img src='images/image_11.jpg' width='200' height='200'> \
    <img src='images/image_1.jpg' width='200' height='200'><br /> \
    <img src='images/image_16.jpg' width='200' height='200'> \
    <img src='images/image_8.jpg' width='200' height='200'> \
    <img src='images/image_14.jpg' width='200' height='200'>");

    var string64 = new Howl({src: ['sounds/string64.wav']});
    $("#buttons #play").click(function(){
        $("#buttons #play").hide();
        string64.play();
        displayNext();
        $("#buttons #next").click(function(){
            endTimer();
            trialU15();
        });
    });
};

function trialU15(){
    hideElements();
    showElements();
    startTimer();
    $("#information").html("<img src='images/image_9.jpg' width='200' height='200'> \
    <img src='images/image_5.jpg' width='200' height='200'> \
    <img src='images/image_14.jpg' width='200' height='200'><br /> \
    <img src='images/image_2.jpg' width='200' height='200'> \
    <img src='images/image_12.jpg' width='200' height='200'> \
    <img src='images/image_17.jpg' width='200' height='200'>");

    var string65 = new Howl({src: ['sounds/string65.wav']});
    $("#buttons #play").click(function(){
        $("#buttons #play").hide();
        string65.play();
        displayNext();
        $("#buttons #next").click(function(){
            endTimer();
            trialU16();
        });
    });
};

function trialU16(){
    hideElements();
    showElements();
    startTimer();
    $("#information").html("<img src='images/image_5.jpg' width='200' height='200'> \
    <img src='images/image_11.jpg' width='200' height='200'> \
    <img src='images/image_17.jpg' width='200' height='200'><br /> \
    <img src='images/image_9.jpg' width='200' height='200'> \
    <img src='images/image_1.jpg' width='200' height='200'> \
    <img src='images/image_14.jpg' width='200' height='200'>");

    var string66 = new Howl({src: ['sounds/string66.wav']});
    $("#buttons #play").click(function(){
        $("#buttons #play").hide();
        string66.play();
        displayNext();
        $("#buttons #next").click(function(){
            endTimer();
            trialU17();
        });
    });
};

function trialU17(){
    hideElements();
    showElements();
    startTimer();
    $("#information").html("<img src='images/image_10.jpg' width='200' height='200'> \
    <img src='images/image_6.jpg' width='200' height='200'> \
    <img src='images/image_13.jpg' width='200' height='200'><br /> \
    <img src='images/image_1.jpg' width='200' height='200'> \
    <img src='images/image_16.jpg' width='200' height='200'> \
    <img src='images/image_9.jpg' width='200' height='200'>");

    var string67 = new Howl({src: ['sounds/string67.wav']});
    $("#buttons #play").click(function(){
        $("#buttons #play").hide();
        string67.play();
        displayNext();
        $("#buttons #next").click(function(){
            endTimer();
            trialU18();
        });
    });
};

function trialU18(){
    hideElements();
    showElements();
    startTimer();
    $("#information").html("<img src='images/image_10.jpg' width='200' height='200'> \
    <img src='images/image_13.jpg' width='200' height='200'> \
    <img src='images/image_7.jpg' width='200' height='200'><br /> \
    <img src='images/image_1.jpg' width='200' height='200'> \
    <img src='images/image_17.jpg' width='200' height='200'> \
    <img src='images/image_5.jpg' width='200' height='200'>");

    var string68 = new Howl({src: ['sounds/string68.wav']});
    $("#buttons #play").click(function(){
        $("#buttons #play").hide();
        string68.play();
        displayNext();
        $("#buttons #next").click(function(){
            endTimer();
            trialU19();
        });
    });
};

function trialU19(){
    hideElements();
    showElements();
    startTimer();
    $("#information").html("<img src='images/image_11.jpg' width='200' height='200'> \
    <img src='images/image_5.jpg' width='200' height='200'> \
    <img src='images/image_2.jpg' width='200' height='200'><br /> \
    <img src='images/image_17.jpg' width='200' height='200'> \
    <img src='images/image_14.jpg' width='200' height='200'> \
    <img src='images/image_8.jpg' width='200' height='200'>");

    var string69 = new Howl({src: ['sounds/string69.wav']});
    $("#buttons #play").click(function(){
        $("#buttons #play").hide();
        string69.play();
        displayNext();
        $("#buttons #next").click(function(){
            endTimer();
            trialU20();
        });
    });
};

function trialU20(){
    hideElements();
    showElements();
    startTimer();
    $("#information").html("<img src='images/image_17.jpg' width='200' height='200'> \
    <img src='images/image_5.jpg' width='200' height='200'> \
    <img src='images/image_11.jpg' width='200' height='200'><br /> \
    <img src='images/image_1.jpg' width='200' height='200'> \
    <img src='images/image_7.jpg' width='200' height='200'> \
    <img src='images/image_13.jpg' width='200' height='200'>");

    var string70 = new Howl({src: ['sounds/string70.wav']});
    $("#buttons #play").click(function(){
        $("#buttons #play").hide();
        string70.play();
        displayNext();
        $("#buttons #next").click(function(){
            endTimer();
            trialU21();
        });
    });
};

function trialU21(){
    hideElements();
    showElements();
    startTimer();
    $("#information").html("<img src='images/image_11.jpg' width='200' height='200'> \
    <img src='images/image_8.jpg' width='200' height='200'> \
    <img src='images/image_18.jpg' width='200' height='200'><br /> \
    <img src='images/image_4.jpg' width='200' height='200'> \
    <img src='images/image_13.jpg' width='200' height='200'> \
    <img src='images/image_1.jpg' width='200' height='200'>");

    var string71 = new Howl({src: ['sounds/string71.wav']});
    $("#buttons #play").click(function(){
        $("#buttons #play").hide();
        string71.play();
        displayNext();
        $("#buttons #next").click(function(){
            endTimer();
            trialU22();
        });
    });
};

function trialU22(){
    hideElements();
    showElements();
    startTimer();
    $("#information").html("<img src='images/image_10.jpg' width='200' height='200'> \
    <img src='images/image_3.jpg' width='200' height='200'> \
    <img src='images/image_9.jpg' width='200' height='200'><br /> \
    <img src='images/image_15.jpg' width='200' height='200'> \
    <img src='images/image_4.jpg' width='200' height='200'> \
    <img src='images/image_18.jpg' width='200' height='200'>");

    var string72 = new Howl({src: ['sounds/string72.wav']});
    $("#buttons #play").click(function(){
        $("#buttons #play").hide();
        string72.play();
        displayNext();
        $("#buttons #next").click(function(){
            endTimer();
            trialU23();
        });
    });
};

function trialU23(){
    hideElements();
    showElements();
    startTimer();
    $("#information").html("<img src='images/image_18.jpg' width='200' height='200'> \
    <img src='images/image_12.jpg' width='200' height='200'> \
    <img src='images/image_8.jpg' width='200' height='200'><br /> \
    <img src='images/image_4.jpg' width='200' height='200'> \
    <img src='images/image_2.jpg' width='200' height='200'> \
    <img src='images/image_14.jpg' width='200' height='200'>");

    var string73 = new Howl({src: ['sounds/string73.wav']});
    $("#buttons #play").click(function(){
        $("#buttons #play").hide();
        string73.play();
        displayNext();
        $("#buttons #next").click(function(){
            endTimer();
            trialU24();
        });
    });
};

function trialU24(){
    hideElements();
    showElements();
    startTimer();
    $("#information").html("<img src='images/image_12.jpg' width='200' height='200'> \
    <img src='images/image_8.jpg' width='200' height='200'> \
    <img src='images/image_15.jpg' width='200' height='200'><br /> \
    <img src='images/image_4.jpg' width='200' height='200'> \
    <img src='images/image_18.jpg' width='200' height='200'> \
    <img src='images/image_3.jpg' width='200' height='200'>");

    var string74 = new Howl({src: ['sounds/string74.wav']});
    $("#buttons #play").click(function(){
        $("#buttons #play").hide();
        string74.play();
        displayNext();
        $("#buttons #next").click(function(){
            endTimer();
            trialU25();
        });
    });
};

function trialU25(){
    hideElements();
    showElements();
    startTimer();
    $("#information").html("<img src='images/image_8.jpg' width='200' height='200'> \
    <img src='images/image_12.jpg' width='200' height='200'> \
    <img src='images/image_4.jpg' width='200' height='200'><br /> \
    <img src='images/image_18.jpg' width='200' height='200'> \
    <img src='images/image_2.jpg' width='200' height='200'> \
    <img src='images/image_15.jpg' width='200' height='200'>");

    var string75 = new Howl({src: ['sounds/string75.wav']});
    $("#buttons #play").click(function(){
        $("#buttons #play").hide();
        string75.play();
        displayNext();
        $("#buttons #next").click(function(){
            endTimer();
            trialU26();
        });
    });
};

function trialU26(){
    hideElements();
    showElements();
    startTimer();
    $("#information").html("<img src='images/image_13.jpg' width='200' height='200'> \
    <img src='images/image_16.jpg' width='200' height='200'> \
    <img src='images/image_10.jpg' width='200' height='200'><br /> \
    <img src='images/image_6.jpg' width='200' height='200'> \
    <img src='images/image_7.jpg' width='200' height='200'> \
    <img src='images/image_1.jpg' width='200' height='200'>");

    var string76 = new Howl({src: ['sounds/string76.wav']});
    $("#buttons #play").click(function(){
        $("#buttons #play").hide();
        string76.play();
        displayNext();
        $("#buttons #next").click(function(){
            endTimer();
            trialU27();
        });
    });
};

function trialU27(){
    hideElements();
    showElements();
    startTimer();
    $("#information").html("<img src='images/image_1.jpg' width='200' height='200'> \
    <img src='images/image_13.jpg' width='200' height='200'> \
    <img src='images/image_7.jpg' width='200' height='200'><br /> \
    <img src='images/image_10.jpg' width='200' height='200'> \
    <img src='images/image_4.jpg' width='200' height='200'> \
    <img src='images/image_18.jpg' width='200' height='200'>");

    var string77 = new Howl({src: ['sounds/string77.wav']});
    $("#buttons #play").click(function(){
        $("#buttons #play").hide();
        string77.play();
        displayNext();
        $("#buttons #next").click(function(){
            endTimer();
            trialU28();
        });
    });
};

function trialU28(){
    hideElements();
    showElements();
    startTimer();
    $("#information").html("<img src='images/image_1.jpg' width='200' height='200'> \
    <img src='images/image_1.jpg' width='200' height='200'> \
    <img src='images/image_4.jpg' width='200' height='200'><br /> \
    <img src='images/image_18.jpg' width='200' height='200'> \
    <img src='images/image_13.jpg' width='200' height='200'> \
    <img src='images/image_10.jpg' width='200' height='200'>");

    var string78 = new Howl({src: ['sounds/string78.wav']});
    $("#buttons #play").click(function(){
        $("#buttons #play").hide();
        string78.play();
        displayNext();
        $("#buttons #next").click(function(){
            endTimer();
            trialU29();
        });
    });
};

function trialU29(){
    hideElements();
    showElements();
    startTimer();
    $("#information").html("<img src='images/image_6.jpg' width='200' height='200'> \
    <img src='images/image_15.jpg' width='200' height='200'> \
    <img src='images/image_16.jpg' width='200' height='200'><br /> \
    <img src='images/image_9.jpg' width='200' height='200'> \
    <img src='images/image_12.jpg' width='200' height='200'> \
    <img src='images/image_3.jpg' width='200' height='200'>");

    var string79 = new Howl({src: ['sounds/string79.wav']});
    $("#buttons #play").click(function(){
        $("#buttons #play").hide();
        string79.play();
        displayNext();
        $("#buttons #next").click(function(){
            endTimer();
            trialU30();
        });
    });
};

function trialU30(){
    hideElements();
    showElements();
    startTimer();
    $("#information").html("<img src='images/image_16.jpg' width='200' height='200'> \
    <img src='images/image_14.jpg' width='200' height='200'> \
    <img src='images/image_7.jpg' width='200' height='200'><br /> \
    <img src='images/image_6.jpg' width='200' height='200'> \
    <img src='images/image_11.jpg' width='200' height='200'> \
    <img src='images/image_2.jpg' width='200' height='200'>");

    var string80 = new Howl({src: ['sounds/string80.wav']});
    $("#buttons #play").click(function(){
        $("#buttons #play").hide();
        string80.play();
        displayNext();
        $("#buttons #next").click(function(){
            endTimer();
            trialU31();
        });
    });
};

function trialU31(){
    hideElements();
    showElements();
    startTimer();
    $("#information").html("<img src='images/image_14.jpg' width='200' height='200'> \
    <img src='images/image_8.jpg' width='200' height='200'> \
    <img src='images/image_6.jpg' width='200' height='200'><br /> \
    <img src='images/image_2.jpg' width='200' height='200'> \
    <img src='images/image_12.jpg' width='200' height='200'> \
    <img src='images/image_16.jpg' width='200' height='200'>");

    var string81 = new Howl({src: ['sounds/string81.wav']});
    $("#buttons #play").click(function(){
        $("#buttons #play").hide();
        string81.play();
        displayNext();
        $("#buttons #next").click(function(){
            endTimer();
            trialU32();
        });
    });
};

function trialU32(){
    hideElements();
    showElements();
    startTimer();
    $("#information").html("<img src='images/image_5.jpg' width='200' height='200'> \
    <img src='images/image_11.jpg' width='200' height='200'> \
    <img src='images/image_7.jpg' width='200' height='200'><br /> \
    <img src='images/image_17.jpg' width='200' height='200'> \
    <img src='images/image_14.jpg' width='200' height='200'> \
    <img src='images/image_2.jpg' width='200' height='200'>");

    var string82 = new Howl({src: ['sounds/string82.wav']});
    $("#buttons #play").click(function(){
        $("#buttons #play").hide();
        string82.play();
        displayNext();
        $("#buttons #next").click(function(){
            endTimer();
            trialU33();
        });
    });
};

function trialU33(){
    hideElements();
    showElements();
    startTimer();
    $("#information").html("<img src='images/image_8.jpg' width='200' height='200'> \
    <img src='images/image_6.jpg' width='200' height='200'> \
    <img src='images/image_3.jpg' width='200' height='200'><br /> \
    <img src='images/image_13.jpg' width='200' height='200'> \
    <img src='images/image_16.jpg' width='200' height='200'> \
    <img src='images/image_10.jpg' width='200' height='200'>");

    var string83 = new Howl({src: ['sounds/string83.wav']});
    $("#buttons #play").click(function(){
        $("#buttons #play").hide();
        string83.play();
        displayNext();
        $("#buttons #next").click(function(){
            endTimer();
            trialU34();
        });
    });
};

function trialU34(){
    hideElements();
    showElements();
    startTimer();
    $("#information").html("<img src='images/image_10.jpg' width='200' height='200'> \
    <img src='images/image_8.jpg' width='200' height='200'> \
    <img src='images/image_1.jpg' width='200' height='200'><br /> \
    <img src='images/image_17.jpg' width='200' height='200'> \
    <img src='images/image_13.jpg' width='200' height='200'> \
    <img src='images/image_5.jpg' width='200' height='200'>");

    var string84 = new Howl({src: ['sounds/string84.wav']});
    $("#buttons #play").click(function(){
        $("#buttons #play").hide();
        string84.play();
        displayNext();
        $("#buttons #next").click(function(){
            endTimer();
            trialU35();
        });
    });
};

function trialU35(){
    hideElements();
    showElements();
    startTimer();
    $("#information").html("<img src='images/image_18.jpg' width='200' height='200'> \
    <img src='images/image_2.jpg' width='200' height='200'> \
    <img src='images/image_4.jpg' width='200' height='200'><br /> \
    <img src='images/image_11.jpg' width='200' height='200'> \
    <img src='images/image_7.jpg' width='200' height='200'> \
    <img src='images/image_14.jpg' width='200' height='200'>");

    var string85 = new Howl({src: ['sounds/string85.wav']});
    $("#buttons #play").click(function(){
        $("#buttons #play").hide();
        string85.play();
        displayNext();
        $("#buttons #next").click(function(){
            endTimer();
            trialU36();
        });
    });
};

function trialU36(){
    hideElements();
    showElements();
    startTimer();
    $("#information").html("<img src='images/image_9.jpg' width='200' height='200'> \
    <img src='images/image_4.jpg' width='200' height='200'> \
    <img src='images/image_3.jpg' width='200' height='200'><br /> \
    <img src='images/image_11.jpg' width='200' height='200'> \
    <img src='images/image_16.jpg' width='200' height='200'> \
    <img src='images/image_14.jpg' width='200' height='200'>");

    var string86 = new Howl({src: ['sounds/string86.wav']});
    $("#buttons #play").click(function(){
        $("#buttons #play").hide();
        string86.play();
        displayNext();
        $("#buttons #next").click(function(){
            endTimer();
            trialU37();
        });
    });
};

function trialU37(){
    hideElements();
    showElements();
    startTimer();
    $("#information").html("<img src='images/image_18.jpg' width='200' height='200'> \
    <img src='images/image_1.jpg' width='200' height='200'> \
    <img src='images/image_4.jpg' width='200' height='200'><br /> \
    <img src='images/image_9.jpg' width='200' height='200'> \
    <img src='images/image_13.jpg' width='200' height='200'> \
    <img src='images/image_10.jpg' width='200' height='200'>");

    var string87 = new Howl({src: ['sounds/string87.wav']});
    $("#buttons #play").click(function(){
        $("#buttons #play").hide();
        string87.play();
        displayNext();
        $("#buttons #next").click(function(){
            endTimer();
            trialU38();
        });
    });
};

function trialU38(){
    hideElements();
    showElements();
    startTimer();
    $("#information").html("<img src='images/image_1.jpg' width='200' height='200'> \
    <img src='images/image_11.jpg' width='200' height='200'> \
    <img src='images/image_4.jpg' width='200' height='200'><br /> \
    <img src='images/image_18.jpg' width='200' height='200'> \
    <img src='images/image_14.jpg' width='200' height='200'> \
    <img src='images/image_9.jpg' width='200' height='200'>");

    var string88 = new Howl({src: ['sounds/string88.wav']});
    $("#buttons #play").click(function(){
        $("#buttons #play").hide();
        string88.play();
        displayNext();
        $("#buttons #next").click(function(){
            endTimer();
            trialU39();
        });
    });
};

function trialU39(){
    hideElements();
    showElements();
    startTimer();
    $("#information").html("<img src='images/image_8.jpg' width='200' height='200'> \
    <img src='images/image_2.jpg' width='200' height='200'> \
    <img src='images/image_14.jpg' width='200' height='200'><br /> \
    <img src='images/image_5.jpg' width='200' height='200'> \
    <img src='images/image_12.jpg' width='200' height='200'> \
    <img src='images/image_17.jpg' width='200' height='200'>");

    var string89 = new Howl({src: ['sounds/string89.wav']});
    $("#buttons #play").click(function(){
        $("#buttons #play").hide();
        string89.play();
        displayNext();
        $("#buttons #next").click(function(){
            endTimer();
            trialU40();
        });
    });
};

function trialU40(){
    hideElements();
    showElements();
    startTimer();
    $("#information").html("<img src='images/image_3.jpg' width='200' height='200'> \
    <img src='images/image_13.jpg' width='200' height='200'> \
    <img src='images/image_7.jpg' width='200' height='200'><br /> \
    <img src='images/image_16.jpg' width='200' height='200'> \
    <img src='images/image_6.jpg' width='200' height='200'> \
    <img src='images/image_10.jpg' width='200' height='200'>");

    var string90 = new Howl({src: ['sounds/string90.wav']});
    $("#buttons #play").click(function(){
        $("#buttons #play").hide();
        string90.play();
        displayNext();
        $("#buttons #next").click(function(){
            endTimer();
            trialU41();
        });
    });
};

function trialU41(){
    hideElements();
    showElements();
    startTimer();
    $("#information").html("<img src='images/image_1.jpg' width='200' height='200'> \
    <img src='images/image_14.jpg' width='200' height='200'> \
    <img src='images/image_11.jpg' width='200' height='200'><br /> \
    <img src='images/image_8.jpg' width='200' height='200'> \
    <img src='images/image_17.jpg' width='200' height='200'> \
    <img src='images/image_5.jpg' width='200' height='200'>");

    var string91 = new Howl({src: ['sounds/string91.wav']});
    $("#buttons #play").click(function(){
        $("#buttons #play").hide();
        string91.play();
        displayNext();
        $("#buttons #next").click(function(){
            endTimer();
            trialU42();
        });
    });
};

function trialU42(){
    hideElements();
    showElements();
    startTimer();
    $("#information").html("<img src='images/image_13.jpg' width='200' height='200'> \
    <img src='images/image_10.jpg' width='200' height='200'> \
    <img src='images/image_4.jpg' width='200' height='200'><br /> \
    <img src='images/image_18.jpg' width='200' height='200'> \
    <img src='images/image_3.jpg' width='200' height='200'> \
    <img src='images/image_7.jpg' width='200' height='200'>");

    var string92 = new Howl({src: ['sounds/string92.wav']});
    $("#buttons #play").click(function(){
        $("#buttons #play").hide();
        string92.play();
        displayNext();
        $("#buttons #next").click(function(){
            endTimer();
            trialU43();
        });
    });
};

function trialU43(){
    hideElements();
    showElements();
    startTimer();
    $("#information").html("<img src='images/image_16.jpg' width='200' height='200'> \
    <img src='images/image_7.jpg' width='200' height='200'> \
    <img src='images/image_15.jpg' width='200' height='200'><br /> \
    <img src='images/image_12.jpg' width='200' height='200'> \
    <img src='images/image_2.jpg' width='200' height='200'> \
    <img src='images/image_6.jpg' width='200' height='200'>");

    var string93 = new Howl({src: ['sounds/string93.wav']});
    $("#buttons #play").click(function(){
        $("#buttons #play").hide();
        string93.play();
        displayNext();
        $("#buttons #next").click(function(){
            endTimer();
            trialU44();
        });
    });
};

function trialU44(){
    hideElements();
    showElements();
    startTimer();
    $("#information").html("<img src='images/image_17.jpg' width='200' height='200'> \
    <img src='images/image_10.jpg' width='200' height='200'> \
    <img src='images/image_5.jpg' width='200' height='200'><br /> \
    <img src='images/image_9.jpg' width='200' height='200'> \
    <img src='images/image_13.jpg' width='200' height='200'> \
    <img src='images/image_1.jpg' width='200' height='200'>");

    var string94 = new Howl({src: ['sounds/string94.wav']});
    $("#buttons #play").click(function(){
        $("#buttons #play").hide();
        string94.play();
        displayNext();
        $("#buttons #next").click(function(){
            endTimer();
            trialU45();
        });
    });
};

function trialU45(){
    hideElements();
    showElements();
    startTimer();
    $("#information").html("<img src='images/image_1.jpg' width='200' height='200'> \
    <img src='images/image_10.jpg' width='200' height='200'> \
    <img src='images/image_13.jpg' width='200' height='200'><br /> \
    <img src='images/image_8.jpg' width='200' height='200'> \
    <img src='images/image_16.jpg' width='200' height='200'> \
    <img src='images/image_6.jpg' width='200' height='200'>");

    var string95 = new Howl({src: ['sounds/string95.wav']});
    $("#buttons #play").click(function(){
        $("#buttons #play").hide();
        string95.play();
        displayNext();
        $("#buttons #next").click(function(){
            endTimer();
            trialU46();
        });
    });
};

function trialU46(){
    hideElements();
    showElements();
    startTimer();
    $("#information").html("<img src='images/image_14.jpg' width='200' height='200'> \
    <img src='images/image_8.jpg' width='200' height='200'> \
    <img src='images/image_18.jpg' width='200' height='200'><br /> \
    <img src='images/image_11.jpg' width='200' height='200'> \
    <img src='images/image_4.jpg' width='200' height='200'> \
    <img src='images/image_2.jpg' width='200' height='200'>");

    var string96 = new Howl({src: ['sounds/string96.wav']});
    $("#buttons #play").click(function(){
        $("#buttons #play").hide();
        string96.play();
        displayNext();
        $("#buttons #next").click(function(){
            endTimer();
            trialU47();
        });
    });
};

function trialU47(){
    hideElements();
    showElements();
    startTimer();
    $("#information").html("<img src='images/image_2.jpg' width='200' height='200'> \
    <img src='images/image_14.jpg' width='200' height='200'> \
    <img src='images/image_5.jpg' width='200' height='200'><br /> \
    <img src='images/image_11.jpg' width='200' height='200'> \
    <img src='images/image_9.jpg' width='200' height='200'> \
    <img src='images/image_17.jpg' width='200' height='200'>");

    var string97 = new Howl({src: ['sounds/string97.wav']});
    $("#buttons #play").click(function(){
        $("#buttons #play").hide();
        string97.play();
        displayNext();
        $("#buttons #next").click(function(){
            endTimer();
            trialU48();
        });
    });
};

function trialU48(){
    hideElements();
    showElements();
    startTimer();
    $("#information").html("<img src='images/image_8.jpg' width='200' height='200'> \
    <img src='images/image_16.jpg' width='200' height='200'> \
    <img src='images/image_11.jpg' width='200' height='200'><br /> \
    <img src='images/image_2.jpg' width='200' height='200'> \
    <img src='images/image_6.jpg' width='200' height='200'> \
    <img src='images/image_14.jpg' width='200' height='200'>");

    var string98 = new Howl({src: ['sounds/string98.wav']});
    $("#buttons #play").click(function(){
        $("#buttons #play").hide();
        string98.play();
        displayNext();
        $("#buttons #next").click(function(){
            endTimer();
            trialU49();
        });
    });
};

function trialU49(){
    hideElements();
    showElements();
    startTimer();
    $("#information").html("<img src='images/image_3.jpg' width='200' height='200'> \
    <img src='images/image_10.jpg' width='200' height='200'> \
    <img src='images/image_13.jpg' width='200' height='200'><br /> \
    <img src='images/image_17.jpg' width='200' height='200'> \
    <img src='images/image_5.jpg' width='200' height='200'> \
    <img src='images/image_7.jpg' width='200' height='200'>");

    var string99 = new Howl({src: ['sounds/string99.wav']});
    $("#buttons #play").click(function(){
        $("#buttons #play").hide();
        string99.play();
        displayNext();
        $("#buttons #next").click(function(){
            endTimer();
            trialU50();
        });
    });
};
//last trial
function trialU50(){
    hideElements();
    showElements();
    startTimer();
    $("#information").html("<img src='images/image_18.jpg' width='200' height='200'> \
    <img src='images/image_2.jpg' width='200' height='200'> \
    <img src='images/image_15.jpg' width='200' height='200'><br /> \
    <img src='images/image_4.jpg' width='200' height='200'> \
    <img src='images/image_12.jpg' width='200' height='200'> \
    <img src='images/image_9.jpg' width='200' height='200'>");

    var string100 = new Howl({src: ['sounds/string100.wav']});
    $("#buttons #play").click(function(){
        $("#buttons #play").hide();
        string100.play();
        displayNext();
        $("#buttons #next").click(function(){
            endTimer();
            test_seg_start(); //instead of sending participant to next trial, it sends the participant to the start of the "segmentation test" section.
        });
    });
};


