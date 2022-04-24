//Segmentattion test. First it loads all the sounds into variables with Howl.
var test1 = new Howl({src: ['sounds/test1.wav']});
var test2 = new Howl({src: ['sounds/test2.wav']});
var test3 = new Howl({src: ['sounds/test3.wav']});
var test4 = new Howl({src: ['sounds/test4.wav']});
var test5 = new Howl({src: ['sounds/test5.wav']});
var test6 = new Howl({src: ['sounds/test6.wav']});
var test7 = new Howl({src: ['sounds/test7.wav']});
var test8 = new Howl({src: ['sounds/test8.wav']});
var test9 = new Howl({src: ['sounds/test9.wav']});
var test10 = new Howl({src: ['sounds/test10.wav']});
var test11 = new Howl({src: ['sounds/test11.wav']});
var test12 = new Howl({src: ['sounds/test12.wav']});
var test13 = new Howl({src: ['sounds/test13.wav']});
var test14 = new Howl({src: ['sounds/test14.wav']});
var test15 = new Howl({src: ['sounds/test15.wav']});
var test16 = new Howl({src: ['sounds/test16.wav']});
var test17 = new Howl({src: ['sounds/test17.wav']});
var test18 = new Howl({src: ['sounds/test18.wav']});

function test_seg_start(){
    //short instructions. "location" of the segmentation test is 3, this information is required to measure how long it took a participant to click through this test.
    RTlocation = 3;
    hideElements();
    //hide everything and then load the required elements. The names of the buttons are changed here to "sound 1" & "sound 2".
    $("#h3").hide();
    $("#h3").text("Select the sound you believe is a real word in this language.")
    $("#information").show();
    $("#buttons #next").show();
    $("#buttons #play").prop('value', 'sound 1');
    $("#information").html("<h3>Test instructions</h3><p>That was the training phase! Which means that now there will be a testing phase. This exist out of two test, you will receive a notification when you've finished the first one so you can take a breather before starting the next one.</p><p>The first test will ask you to listen to 2 sounds and you do this by pressing the 'play' button on screen. One of these sounds is part of the language you just listened to, the other one is not part of this language. You are asked to press the button corresponding to the sound you think is part of the language you just listened to. Again, you can hear the 2 words only once, the play button will disappear and the buttons to indicate your choice will appear afterwards for you to make your selection.</p><p>The second test will consist of 18 objects who will stay visible on screen throughtout this last test. You can press 'play' to listen to a word. Again, you will hear this word only once. Then you should click on the object you think that the word you heard referred to. You are asked to determine which word and object go together 18 times.</p><p>Good luck!</p>");
    $("#buttons #next").click(function(){
        hideElements();
        $("#buttons #next").prop('value', 'sound 2');
        //start the actual testing phase.
        test_seg();
        $("#h3").show();
    });     
}

//All code segements below work exactly the same, except the last one. Only first and last segments are commented.
function test_seg(){
    startTimer(); 
    //start the timer to record the response time of the participant in Location 3. 
    if (chosen_sounds.length < 18 && chosen_sounds.length === 0){
        //there are a total of 18 sounds, if 18 have been played, the participant is moved to the next section, if the variable "chosen_sounds" is lower than 18 and matches a specific number, it will play a specific sound and then move on to the next testing sound.
        $("#button #extra").show()
        $("#button #extra").click(function(){
            //show the "extra" button and when it's pressed it will play a "testX" sound.  
            showButtons();
            test1.play();
            //then hide the button to prevent participants to listen to the test sounds multiple times.
            $("#button #extra").hide();
            $("#button #extra").off();
        });
        //load both "play" & "Next" buttons with the different sound options to choose from. Both buttons take the particpant to the next testing sound, but record different values for the buttons they clicked on (correct vs incorrect). It also stops the response timer and records the response time.
        $("#buttons #play").click(function(){
            chosen_sounds.push("incorrect 1");
            hideButtons();
            endTimer();
            test_seg2();
        });  
        $("#buttons #next").click(function(){
            chosen_sounds.push("correct 1");
            hideButtons();
            endTimer();
            test_seg2();
        });
    }    
}
function test_seg2(){
    startTimer();
    hideButtons();
    if (chosen_sounds.length < 18 && chosen_sounds.length === 1){
        $("#button #extra").show()
        $("#button #extra").click(function(){  
            showButtons(); 
            test2.play();
            $("#button #extra").hide();
            $("#button #extra").off();
        });
        $("#buttons #play").click(function(){
            chosen_sounds.push("correct 2");
            hideButtons();
            endTimer();
            test_seg3();
        }); 
        $("#buttons #next").click(function(){
            chosen_sounds.push("incorrect 2");
            hideButtons();
            endTimer();
            test_seg3();
        });
    }    
}
function test_seg3(){
    startTimer();
    hideButtons();
    if (chosen_sounds.length < 18 && chosen_sounds.length === 2){
        $("#button #extra").show()
        $("#button #extra").click(function(){   
            showButtons();
            test3.play();
            $("#button #extra").hide();
            $("#button #extra").off();
        });
        $("#buttons #play").click(function(){
            chosen_sounds.push("correct 3");
            hideButtons();
            endTimer();
            test_seg4();
        });  
        $("#buttons #next").click(function(){
            chosen_sounds.push("incorrect 3");
            hideButtons();
            endTimer();
            test_seg4();
        });
    }    
}
function test_seg4(){
    startTimer();
    hideButtons();
    if (chosen_sounds.length < 18 && chosen_sounds.length === 3){
        $("#button #extra").show()
        $("#button #extra").click(function(){   
            showButtons();
            test4.play();
            $("#button #extra").hide();
            $("#button #extra").off();
        });
        $("#buttons #play").click(function(){
            chosen_sounds.push("correct 4");
            hideButtons();
            endTimer();
            test_seg5();
        });  
        $("#buttons #next").click(function(){
            chosen_sounds.push("incorrect 4");
            hideButtons();
            endTimer();
            test_seg5();
        });
    }    
}
function test_seg5(){
    startTimer();
    hideButtons(); 
    if (chosen_sounds.length < 18 && chosen_sounds.length === 4){
        $("#button #extra").show()
        $("#button #extra").click(function(){   
            showButtons();
            test5.play();
            $("#button #extra").hide();
            $("#button #extra").off();
        });
        $("#buttons #play").click(function(){
            chosen_sounds.push("incorrect 5");
            hideButtons();
            endTimer();
            test_seg6();
        });  
        $("#buttons #next").click(function(){
            chosen_sounds.push("correct 5");
            hideButtons();
            endTimer();
            test_seg6();
        });
    }    
}
function test_seg6(){
    startTimer();
    hideButtons();  
    if (chosen_sounds.length < 18 && chosen_sounds.length === 5){
        $("#button #extra").show()
        $("#button #extra").click(function(){  
            showButtons(); 
            test6.play();
            $("#button #extra").hide();
            $("#button #extra").off();
        });
        $("#buttons #play").click(function(){
            chosen_sounds.push("incorrect 6");
            hideButtons();
            endTimer();
            test_seg7();
        });  
        $("#buttons #next").click(function(){
            chosen_sounds.push("correct 6");
            hideButtons();
            endTimer();
            test_seg7();
        });
    }    
}
function test_seg7(){
    startTimer();
    hideButtons(); 
    if (chosen_sounds.length < 18 && chosen_sounds.length === 6){
        $("#button #extra").show()
        $("#button #extra").click(function(){   
            showButtons();
            test7.play();
            $("#button #extra").hide();
            $("#button #extra").off();
        });
        $("#buttons #play").click(function(){
            chosen_sounds.push("incorrect 7");
            hideButtons();
            endTimer();
            test_seg8();
        });  
        $("#buttons #next").click(function(){
            chosen_sounds.push("correct 7");
            hideButtons();
            endTimer();
            test_seg8();
        });
    }    
}
function test_seg8(){
    startTimer();
    hideButtons();
    if (chosen_sounds.length < 18 && chosen_sounds.length === 7){
        $("#button #extra").show()
        $("#button #extra").click(function(){   
            showButtons();
            test8.play();
            $("#button #extra").hide();
            $("#button #extra").off();
        });
        $("#buttons #play").click(function(){
            chosen_sounds.push("correct 8");
            hideButtons();
            endTimer();
            test_seg9();
        });  
        $("#buttons #next").click(function(){
            chosen_sounds.push("incorrect 8");
            hideButtons();
            endTimer();
            test_seg9();
        });
    }    
}
function test_seg9(){
    startTimer();
    hideButtons();  
    if (chosen_sounds.length < 18 && chosen_sounds.length === 8){
        $("#button #extra").show()
        $("#button #extra").click(function(){  
            showButtons(); 
            test9.play();
            $("#button #extra").hide();
            $("#button #extra").off();
        });
        $("#buttons #play").click(function(){
            chosen_sounds.push("incorrect 9");
            hideButtons();
            endTimer();
            test_seg10();
        });  
        $("#buttons #next").click(function(){
            chosen_sounds.push("correct 9");
            hideButtons();
            endTimer();
            test_seg10();
        });
    }    
}
function test_seg10(){
    startTimer();
    hideButtons(); 
    if (chosen_sounds.length < 18 && chosen_sounds.length === 9){
        $("#button #extra").show()
        $("#button #extra").click(function(){   
            showButtons();
            test10.play();
            $("#button #extra").hide();
            $("#button #extra").off();
        });
        $("#buttons #play").click(function(){
            chosen_sounds.push("incorrect 10");
            hideButtons();
            endTimer();
            test_seg11();
        });  
        $("#buttons #next").click(function(){
            chosen_sounds.push("correct 10");
            hideButtons();
            endTimer();
            test_seg11();
        });
    }    
}
function test_seg11(){
    startTimer();
    hideButtons(); 
    if (chosen_sounds.length < 18 && chosen_sounds.length === 10){
        $("#button #extra").show()
        $("#button #extra").click(function(){   
            showButtons();
            test11.play();
            $("#button #extra").hide();
            $("#button #extra").off();
        });
        $("#buttons #play").click(function(){
            chosen_sounds.push("incorrect 11");
            hideButtons();
            endTimer();
            test_seg12();
        });  
        $("#buttons #next").click(function(){
            chosen_sounds.push("correct 11");
            hideButtons();
            endTimer();
            test_seg12();
        });
    }    
}
function test_seg12(){
    startTimer();
    hideButtons();  
    if (chosen_sounds.length < 18 && chosen_sounds.length === 11){
        $("#button #extra").show()
        $("#button #extra").click(function(){   
            showButtons();
            test12.play();
            $("#button #extra").hide();
            $("#button #extra").off();
        });
        $("#buttons #play").click(function(){
            chosen_sounds.push("correct 12");
            hideButtons();
            endTimer();
            test_seg13();
        });  
        $("#buttons #next").click(function(){
            chosen_sounds.push("incorrect 12");
            hideButtons();
            endTimer();
            test_seg13();
        });
    }    
}
function test_seg13(){
    startTimer();
    hideButtons(); 
    if (chosen_sounds.length < 18 && chosen_sounds.length === 12){
        $("#button #extra").show()
        $("#button #extra").click(function(){   
            showButtons();
            test13.play();
            $("#button #extra").hide();
            $("#button #extra").off();
        });
        $("#buttons #play").click(function(){
            chosen_sounds.push("correct 13");
            hideButtons();
            endTimer();
            test_seg14();
        });  
        $("#buttons #next").click(function(){
            chosen_sounds.push("incorrect 13");
            hideButtons();
            endTimer();
            test_seg14();
        });
    }    
}
function test_seg14(){
    startTimer();
    hideButtons(); 
    if (chosen_sounds.length < 18 && chosen_sounds.length === 13){
        $("#button #extra").show()
        $("#button #extra").click(function(){   
            showButtons();
            test14.play();
            $("#button #extra").hide();
            $("#button #extra").off();
        });
        $("#buttons #play").click(function(){
            chosen_sounds.push("correct 14");
            hideButtons();
            endTimer();
            test_seg15();
        });  
        $("#buttons #next").click(function(){
            chosen_sounds.push("incorrect 14");
            hideButtons();
            endTimer();
            test_seg15();
        });
    }    
}
function test_seg15(){
    startTimer();
    hideButtons(); 
    if (chosen_sounds.length < 18 && chosen_sounds.length === 14){
        $("#button #extra").show()
        $("#button #extra").click(function(){   
            showButtons();
            test15.play();
            $("#button #extra").hide();
            $("#button #extra").off();
        });
        $("#buttons #play").click(function(){
            chosen_sounds.push("correct 15");
            hideButtons();
            endTimer();
            test_seg16();
        });  
        $("#buttons #next").click(function(){
            chosen_sounds.push("incorrect 15");
            hideButtons();
            endTimer();
            test_seg16();
        });
    }    
}
function test_seg16(){
    startTimer();
    hideButtons();  
    if (chosen_sounds.length < 18 && chosen_sounds.length === 15){
        $("#button #extra").show()
        $("#button #extra").click(function(){  
            showButtons(); 
            test16.play();
            $("#button #extra").hide();
            $("#button #extra").off();
        });
        $("#buttons #play").click(function(){
            chosen_sounds.push("correct 16");
            hideButtons();
            endTimer();
            test_seg17();
        });  
        $("#buttons #next").click(function(){
            chosen_sounds.push("incorrect 16");
            hideButtons();
            endTimer();
            test_seg17();
        });
    }    
}
function test_seg17(){
    startTimer();
    hideButtons(); 
    if (chosen_sounds.length < 18 && chosen_sounds.length === 16){
        $("#button #extra").show()
        $("#button #extra").click(function(){   
            showButtons();
            test17.play();
            $("#button #extra").hide();
            $("#button #extra").off();
        });
        $("#buttons #play").click(function(){
            chosen_sounds.push("incorrect 17");
            hideButtons();
            endTimer();
            test_seg18();
        });  
        $("#buttons #next").click(function(){
            chosen_sounds.push("correct 17");
            hideButtons();
            endTimer();
            test_seg18();
        });
    }    
}
function test_seg18(){
    //plays the last testing sound
    startTimer();
    hideButtons(); 
    if (chosen_sounds.length < 18 && chosen_sounds.length === 17){
        $("#button #extra").show()
        $("#button #extra").click(function(){   
            showButtons();
            test18.play();
            $("#button #extra").hide();
            $("#button #extra").off();
        });
        $("#buttons #play").click(function(){
            chosen_sounds.push("incorrect 18");
            hideButtons();
            endTimer();
            //after recording the last response time and choice, the buttons need to be reverted back to their original values of "Play" & "Next", before sending the participant to the last testing phase, regardless of what button they chose to click.
            $("#buttons #play").prop('value', 'Play');
            $("#buttons #play").hide();
            $("#buttons #next").prop('value', 'Next');
            $("#buttons #next").show();
            test_xwl();
        });  
        $("#buttons #next").click(function(){
            chosen_sounds.push("correct 18");
            hideButtons();
            endTimer();
            $("#buttons #play").prop('value', 'Play');
            $("#buttons #play").hide();
            $("#buttons #next").prop('value', 'Next');
            $("#buttons #next").show();
            test_xwl();
        });
    }    
}
