function expInstructions(){
    //general explanation about the experiment
    hideElements();
    //hide everything and then show the necessary elements
    $("#information").show();
    $("#buttons #next").show();
    $("#information").html("<p>In this task you will first be asked to listen to a soundstream. Then you'll be shown a number of objects and asked to listen to a sound string. Every individual sound in the sound string matches one object out of the objects on the screen. This task is difficult because there is never one sound that matches one object. Each screen will show 6 objects. Please learn the different words and the objects that match to the words. Please don't write down the objects or names, we are interested in studying how people use their memory to learn.</p><p>When you start the experiment, you will immediately see six objects and a 'play' button. Once you press the play button you will hear the matching sound string. The 'next' button will appear shortly afterwards and you can click that to proceed to the next set of objects and the matching sound string. You control the pace at which you memorize the words and objects, but you can only play the sounds once per set of objects. Click 'next' when you are ready. </p><p>There will not be any information or indication whether you are learning the word-object pairs correctly. This is a very difficult task, try to avoid getting frustrated and do your best at learning which words go with what objects.</p><br />");
    $("#buttons #next").click(function(){
        //go to "Instructions" section.
        testInstructions();
    });
}

function testInstructions(){
    //a short test to check if people seriously read the instructions of the experiment.
    hideElements();
    $("#form_input").show();
    $("#buttons #next").show();
    //HTML form with questions and 2 possible answers.
    $("#form_input").html("<form id='instructioncheck' class='form'> \
    <label for='Q1'>How many objects will you see per screen?</label><br /> \
    <input type='radio' id= 'option1' name= 'Q1' value= 'incorrect'/> <label for= 'option1'>4</label> <br /> \
    <input type='radio' id= 'option2' name= 'Q1' value= 'incorrect'/> <label for= 'option2'>5</label> <br /> \
    <input type='radio' id= 'option3' name= 'Q1' value= 'correct'/> <label for= 'option3'>6</label> <br /> \
    <label for='Q2'>How often can you play the sound string?</label><br /> \
    <input type='radio' id = 'option1' name='Q2' value = 'correct'/><label for='option1'>Once<label> <br />\
    <input type='radio' id = 'option2' name='Q2' value = 'incorrect'/><label for='option1'>As often as I want<label> <br />\
    <label for='Q3'>Will you be shown a single object and told what name goes with it??</label><br /> \
    <input type='radio' id = 'option1' name='Q3' value = 'correct'/><label for='option1'>No<label> <br />\
    <input type='radio' id = 'option2' name='Q3' value = 'incorrect'/><label for='option1'>Yes<label> <br />\
    <label for='Q4'>Is there a unlimited time to look at objects?</label><br /> \
    <input type='radio' id = 'option1' name='Q4' value = 'incorrect'/><label for='option1'>No<label> <br />\
    <input type='radio' id = 'option2' name='Q4' value = 'correct'/><label for='option1'>Yes<label> <br />\
    <label for='Q5'>Is it ok to write down the words or objects you see?</label><br /> \
    <input type='radio' id = 'option1' name='Q5' value = 'correct'/><label for='option1'>No<label> <br />\
    <input type='radio' id = 'option2' name='Q5' value = 'incorrect'/><label for='option1'>Yes<label> <br />\
    </form>");
    $("#buttons #next").click(function(){
        //this checks the answers for the test.
        checkInstructions();
    });
}

function checkInstructions(){
    //checks if the answer selected has the value 'correct', if so, it adds +1 to the variable "checked", otherwise it resets the variable to 0.
    var checked = 0;
    $("input[type='radio']:checked").each(function(){
        if (this.value === 'correct'){
            checked++;
        } else {
            checked = 0;
        }
    });
    
    if (checked === 5){
        //if the variable "checked" equals 5, then the participant will be randomly sent to either the Zipfian or Uniform trials. If the variable does not equal 5, it will tell the participant to go read the intstructions again and sends them back to the instructions.
        var randomcondition = false;
        if (!randomcondition){
            if(Math.random() <= 0.5){
                zipfian();
            } else {
                uniform();
            }
        } else {
            zipfian();
        }
    } else {
        alert("You didn't answer all the questions correctly. Please read through the instructions and take the quiz again to continue");
        expInstructions();
    }
}


