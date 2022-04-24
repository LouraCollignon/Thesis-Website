function soundCheck(){
    hideElements();
    //remove all elements and load the ones needed for this section, including an input box

    $("#h3").show().text("Soundcheck");
    $("#form_input").show();
    $("#form_input").html("<form id='form-sound' class='form'><label for='myinput'>What words did you hear? </label><input type='text' id='myinput' size='60'/><br /><br /></form>");
    $("#information").show();
    $("#information").html("<p>Before you begin this task, we need to confirm that your computer is configured to play sounds and that you can hit them correctly.</p> <p>To test this, please press the 'Play' button below and listen to the words that are played. You can press the button multiple times if you need to.</p><p> When you are sure you know what the words are, please type them into the box below. Please make sure you put exactly one space between each word and no additional spaces.</p> <p>You will only be able to proceed to the task after you correctly type the words into the box. After you are finished typing, please press the 'Next' button to proceed</p><br/>");

    function checkValue(){
            var str = $("#myinput").val().toLowerCase();
            //input from the box needs to match "boat swim", when it does it sends the participant to the "information" section. When there's nothing in the box ask the participant to fill in something, if the content is wrong, ask the participant to try again.
            if (str === "boat swim"){
                information();
            } else  if (str.length === 0){
                alert("Please fill out the field.");
            } else {
                alert("You did not type the correct words. Please try again.");
            };
        }

    
    //Load the testing sound with Howl.
    var sound = new Howl({src: ['sounds/sound_test.wav']}); 

    $("#buttons #play").show();
    //play the testing sound
    $("#buttons #play").click(function(){
        sound.play();
    });
    $("#buttons #next").show();
    //check if the participant put in the correct words for the sound check.
    $("#buttons #next").click(function (){
        checkValue();
    });
};