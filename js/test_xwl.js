function test_xwl(){
    //the final test is location 4, in terms of where the response time was recorded.
    RTlocation = 4;
    hideElements();
    //Hide everything and show the necessary elements and informing the particpant that when the press the "next" button, the last test will start.
    $("#buttons #next").show();
    $("#information").show();
    $("#information").html("<p>Take a deep breath. Press 'Next' to start the final test and the last section of this experiment.</p><br />")
    $("#buttons #next").click(function(){
        //start the last test.
        start_xwl_test();
    });
}

function start_xwl_test(){
    //actual start of the test
    hideElements();
    //hide all the elements
    startTimer();
    //start the response timer, one for the whole test.
    $("#h3").show();
    $("#h3").html("For every word, select the object you think it refers to."); //instruction
    $("#buttons #play").show();
    $("#information").show();
    //display all the images shown throughout the experiment on the screen.
    $("#information").html("<br /><br /> \
    <img src='images/image_1.jpg' id='image1' width='150' height='150'> \
    <img src='images/image_2.jpg' id='image2' width='150' height='150'> \
    <img src='images/image_3.jpg' id='image3' width='150' height='150'> \
    <img src='images/image_4.jpg' id='image4' width='150' height='150'> \
    <img src='images/image_5.jpg' id='image5' width='150' height='150'> \
    <img src='images/image_6.jpg' id='image6' width='150' height='150'><br /> \
    <img src='images/image_7.jpg' id='image7' width='150' height='150'> \
    <img src='images/image_8.jpg' id='image8' width='150' height='150'> \
    <img src='images/image_9.jpg' id='image9' width='150' height='150'> \
    <img src='images/image_10.jpg' id='image10' width='150' height='150'> \
    <img src='images/image_11.jpg' id='image11' width='150' height='150'> \
    <img src='images/image_12.jpg' id='image12' width='150' height='150'><br /> \
    <img src='images/image_13.jpg' id='image13' width='150' height='150'> \
    <img src='images/image_14.jpg' id='image14' width='150' height='150'> \
    <img src='images/image_15.jpg' id='image15' width='150' height='150'> \
    <img src='images/image_16.jpg' id='image16' width='150' height='150'> \
    <img src='images/image_17.jpg' id='image17' width='150' height='150'> \
    <img src='images/image_18.jpg' id='image18' width='150' height='150'>");

    //create variables for the images.
    var image1 = document.getElementById("image1");
    var image2 = document.getElementById("image2");
    var image3 = document.getElementById("image3");
    var image4 = document.getElementById("image4");
    var image5 = document.getElementById("image5");
    var image6 = document.getElementById("image6");
    var image7 = document.getElementById("image7");
    var image8 = document.getElementById("image8");
    var image9 = document.getElementById("image9");
    var image10 = document.getElementById("image10");
    var image11 = document.getElementById("image11");
    var image12 = document.getElementById("image12");
    var image13 = document.getElementById("image13");
    var image14 = document.getElementById("image14");
    var image15 = document.getElementById("image15");
    var image16 = document.getElementById("image16");
    var image17 = document.getElementById("image17");
    var image18 = document.getElementById("image18");

    //create variables for the sounds with Howl.
    var sound1 = new Howl({src: ['sounds/sound1.wav']});
    var sound2 = new Howl({src: ['sounds/sound2.wav']});
    var sound3 = new Howl({src: ['sounds/sound3.wav']}); 
    var sound4 = new Howl({src: ['sounds/sound4.wav']}); 
    var sound5 = new Howl({src: ['sounds/sound5.wav']}); 
    var sound6 = new Howl({src: ['sounds/sound6.wav']}); 
    var sound7 = new Howl({src: ['sounds/sound7.wav']}); 
    var sound8 = new Howl({src: ['sounds/sound8.wav']}); 
    var sound9 = new Howl({src: ['sounds/sound9.wav']}); 
    var sound10 = new Howl({src: ['sounds/sound10.wav']}); 
    var sound11 = new Howl({src: ['sounds/sound11.wav']}); 
    var sound12 = new Howl({src: ['sounds/sound12.wav']}); 
    var sound13 = new Howl({src: ['sounds/sound13.wav']}); 
    var sound14 = new Howl({src: ['sounds/sound14.wav']}); 
    var sound15 = new Howl({src: ['sounds/sound15.wav']}); 
    var sound16 = new Howl({src: ['sounds/sound16.wav']}); 
    var sound17 = new Howl({src: ['sounds/sound17.wav']}); 
    var sound18 = new Howl({src: ['sounds/sound18.wav']}); 

    //for every image on the screen, ensure they are clickable and when clicked the response is recorded and saved.
    if (image1.addEventListener){
        image1.addEventListener('click', function(){
            images.push('image1');
        }, false);
    };
    if (image2.addEventListener){
        image2.addEventListener('click', function(){
            images.push('image2');
        }, false);
    };
    if (image3.addEventListener){
        image3.addEventListener('click', function(){
            images.push('image3');
        }, false);
    };
    if (image4.addEventListener){
        image4.addEventListener('click', function(){
            images.push('image4');
        }, false);
    };
    if (image5.addEventListener){
        image5.addEventListener('click', function(){
            images.push('image5');
        }, false);
    };
    if (image6.addEventListener){
        image6.addEventListener('click', function(){
            images.push('image6');
        }, false);
    };
    if (image7.addEventListener){
        image7.addEventListener('click', function(){
            images.push('image7');
        }, false);
    };
    if (image8.addEventListener){
        image8.addEventListener('click', function(){
            images.push('image8');
        }, false);
    };
    if (image9.addEventListener){
        image9.addEventListener('click', function(){
            images.push('image9');
        }, false);
    };
    if (image10.addEventListener){
        image10.addEventListener('click', function(){
            images.push('image10');
        }, false);
    };
    if (image11.addEventListener){
        image11.addEventListener('click', function(){
            images.push('image11');
        }, false);
    };
    if (image12.addEventListener){
        image12.addEventListener('click', function(){
            images.push('image12');
        }, false);
    };
    if (image13.addEventListener){
        image13.addEventListener('click', function(){
            images.push('image13');
        }, false);
    };
    if (image14.addEventListener){
        image14.addEventListener('click', function(){
            images.push('image14');
        }, false);
    };
    if (image15.addEventListener){
        image15.addEventListener('click', function(){
            images.push('image15');
        }, false);
    };
    if (image16.addEventListener){
        image16.addEventListener('click', function(){
            images.push('image16');
        }, false);
    };
    if (image17.addEventListener){
        image17.addEventListener('click', function(){
            images.push('image17');
        }, false);
    };
    if (image18.addEventListener){
        image18.addEventListener('click', function(){
            images.push('image18');
        }, false);
    };
    //not currently loaded, was used to check if the list of clicked images was recorded properly through an alert. 
    //can be reactivated by displaying the button.
    $("#buttons #next").click(function (){
        var list = images.toString();
        alert(list);
    });
    //The "play" button plays a different sound based on how many images have been clicked during the test.
    $("#buttons #play").click(function(){
        if (images.length < 18 && images.length === 0){
            sound15.play();
        } else if (images.length < 18 && images.length === 1){
            sound6.play();
        } else if (images.length < 18 && images.length === 2){
            sound3.play();
        } else if (images.length < 18 && images.length === 3){
            sound16.play();
        } else if (images.length < 18 && images.length === 4){
            sound12.play();
        } else if (images.length < 18 && images.length === 5){
            sound4.play();
        } else if (images.length < 18 && images.length === 6){
            sound9.play();
        } else if (images.length < 18 && images.length === 7){
            sound18.play();
        } else if (images.length < 18 && images.length === 8){
            sound7.play();
        } else if (images.length < 18 && images.length === 9){
            sound13.play();
        } else if (images.length < 18 && images.length === 10){
            sound17.play();
        } else if (images.length < 18 && images.length === 11){
            sound11.play();
        } else if (images.length < 18 && images.length === 12){
            sound1.play();
        } else if (images.length < 18 && images.length === 13){
            sound10.play();
        } else if (images.length < 18 && images.length === 14){
            sound14.play();
        } else if (images.length < 18 && images.length === 15){
            sound5.play();
        } else if (images.length < 18 && images.length === 16){
            sound2.play();
        } else if (images.length < 18 && images.length === 17){
            sound8.play();
            //once 18 images have been clicked, the play button will be replaced by the next button. The response timer will be stopped and the time recorded and the participant will be sent to the "final text" section.
            $("#buttons #play").hide();
            $("#buttons #next").show().off();
            $("#buttons #next").click(function (){
                endTimer();
                final_text();
            });
        };
    });
};