function demographics(){
    // hides all elements
    hideElements();
    
    //Shows required elements and text
    $("#buttons #next").show();
    $("#h3").show();
    $("#h3").text(" information");
    $("#information").text("Please provide the following information to continue:");
    $("#form_input").show();
    $("#form_input").html("<form id='form-pi' class='form'><br /><br /><label for='language'>Please list your native language(s):</label><input name='language' id='language' /><br /><br /><label for='other_lang'>Please list any other languages you speak:</label><input name='other_lang' id='other_lang'/><br /><br /><label for='age'>Age:</label><input name='age' id='age'/><br /><br /><label for='gender'>Gender:</label><input type='radio' id='female' name='gender' value='female'/><label for='female'>Female</label><input type='radio' id='male' name='gender' value='male'/><label for='male'>Male</label><input type='radio' id='other' name='gender' value='other'/><label for='other'>Other</label><br /><br /></form>");

    function checkDemo(){
        // check if all the boxes have been filled in appropriately, and ask participant to do this if they haven't.
        var language = $("#language").val();
        var otherLang = $("#other_lang").val();
        var age = $("#age").val();
        var gender = $("input[name='gender']:checked").val();
        var checkList = 0

        if (isNumber(age) === true){
            //checks if the information provided consists of numbers and adds +1 to the variable checklist if that's the case.
            demographic_data.push(age);
            checkList++;
        }else{
            // if there are no numbers in the field, ask participants to fill it in again.
            alert("Please only use numbers in age.");
        };
        if(isText(language) === true){
            //checks if the information provided consists of letters. If that's the case: add 1 to the variable "checklist".
            demographic_data.push(language.toLowerCase());
            checkList++;
        }else {
            //if symbols that aren't letters or spaces are detected, ask particpant to fill it in again.
            alert("Please only use letters in native language(s).")
        };
        if(isText(otherLang) === true){
            //same as above, add another +1 to "checklist" if only letters and spaces are detected.
            demographic_data.push(otherLang.toLowerCase());
            checkList++;
        };
        if(gender !== undefined){
            //if an option is selected, add +1 to variable "checklist".
            demographic_data.push(gender);
            checkList++;
        } else {
            //if no option is selected, ask participant to select an option.
            alert("Please select a gender.")
        };
        if (checkList < 4) {
            //if the variable "checklist" is lower than 4, ask participant to fill out all fields.
            alert("Please fill out all the fields correctly.")
        }else {
            //if "checklist" variable adds up to 4, move to the experiment instructions.
            expInstructions();
        }    
    }
    //go to the "Experiment Instructions" section
    $("#buttons #next").click(function (){
        checkDemo();
    });
}

function isNumber(number){
    // tests if string contains numbers
    return /^-?[\d.]+(?:e-?\d+)?$/.test(number);
}
function isText(text){
    // tests if string contains letters and spaces
    return /^[a-zA-Z ]+$/.test(text);
}