// to acitvate the menu, when set to false the experiment will run from start to finish
var menu = true;

//variables needed throughout the experiment to save data into, these will be condensed later on into 1 variable.
var demographic_data = [];
var chosen_sounds = [];
var RTseg = [];
var RTxwl = [];
var RTzipfTrials = [];
var RTuniTrials = [];
var images = [];
var userstrategy = [];

//checks whether to start at the start or display the menu
function start (){
    if(!menu){
        introduction();
    } else {
        startexp();
    };
};

function introduction(){
    hideElements();
    //hide everything and then show the things needed.
    $("#information").show();
    $("#h3").show();
    $("#buttons #next").show();
    $("#h3").text("Welcome to this experiment!");
    $("#information").html("<p>This study if part of a research master thesis by Person A at the University of Tilburg. This study has been approved by the Ethics Review Board at Tilburg University and is supervised by Person B. For any questions regarding this study you can contact Person A@email.com or Person B@email.com </p><p>To start the experiment, please press 'Next' and to leave the experiment at any time, you can simply close the tab or window.</p>");
    $("#buttons #next").click(function(){
        //move on to the soundcheck section.
        soundCheck();
    });
}

function startexp() {
    //displays the menu to navigate quickly through the experiment to check if everything is working.
    hideText();
    //hide everything and display the required elements.
    $("#h3").show().text("Experiment Options");
    $("#form_input").show();
    $("#form_input").html("<div id='menu' class='form'><p id='p-menu'>What section should we start in?</p><select id='section'><option value='soundcheck'>Soundcheck</option><option value='consent'>Experiment Terms</option><option value='demographics'>Demographics</option><option value='instructions'>Experiment Instructions </option><option value='zipfian'>Training Zipf</option><option value='uniform'>Training Uniform</option><option value='test_seg'>Test Segmentation</option><option value='test_xwl'>Test xwl</option><option value='end'>End</option></select></div>");
    $("#buttons #next").show();
    $("#buttons #next").click(function(){
        switch ($("#section").val()){
            case "soundcheck":
                soundCheck();
                break;
            case "consent":                    
                information();
                break;
            case "demographics":
                demographics();
                break;
            case "instructions":
                expInstructions();
                break;
            case "zipfian":
                zipfian();
                break;
            case "uniform":
                uniform();
                break;
            case "test_seg":
                test_seg_start();
                break; 
            case "test_xwl":
                test_xwl();
                break;
            case "end":
                final_text();
                break;
        };
    });
}



var RTlocation = 0;

function hideElements(){
    // Hide all the things!
    hideButtons();
    hideText();
    hideForms();
    hideHeader();
};

function hideButtons(){
    // Hide the play and next buttons in the overarching ID #buttons and remove the function bound to them
    $("#buttons #play").hide().off('click');
    $("#buttons #next").hide().off('click');
};

function showButtons(){
    //show both buttons
    $("#buttons #play").show();
    $("#buttons #next").show();
}

function hideText(){
    // Hide everything with the class "text"
    $(".text").hide();
};

function hideForms(){
    // Hide everything with the class "form"
    $(".form").hide();
};

function hideHeader(){
    // Hide headers 
    $("#h3, h1").hide();
}
//variables to measure the time participants take to click through different parts of the experiment.
var startTime, endTime;
var RTlocation = 0; //location refers to different parts of the trials and test, each indicated with their own number.

function startTimer(){
    //Gets the starting time for RT measuring 
    startTime = performance.now();
};

function endTimer(){
    //Gets the ending time for RT measuring
    endTime = performance.now();
    var timeDiff = endTime - startTime; //in ms 
    // strip the ms 
    timeDiff /= 1000;       
    // get seconds 
    var seconds = Math.round(timeDiff);
    if (RTlocation === 1){
        RTzipfTrials.push(seconds);
    };
    if (RTlocation === 2){
        RTuniTrials.push(seconds);
    };
    if (RTlocation === 3){
        RTseg.push(seconds);
    };
    if (RTlocation === 4){
        RTxwl.push(seconds);
    };
};

function displayNext (){
    //display the "next" button
    $("#buttons #next").show();
};

function showElements (){
    //display the "play" button and the main text element.
    $("#buttons #play").show();
    $("#information").show();
}

function makeID (){
    //individual participants provide data that gets tied to a random ID for anonymization. This ID is the identifier for their whole session.
    var ID = "";
    ID += Math.random().toString(36).substr(2,9);
    return ID;
}
function saveData(data_list) {
    /*
    * write a new row to the database
    * data: a dictionary composed of key, value pairs
    * containing all the info to write to the database
    * an anonymous function is used because it creates a
    * copy of all information in the data variable, 
    * thus if any other functions change the data object after this function executes
    * then the information written to the database does not change
    */
    console.log(data_list);
    
    (function (d) {
        $.post('submit',  {"content": JSON.stringify(d)});
    })(data_list);
}