function information(){
    //Provide consent information
    hideElements();
    //Show required elements and text
    $("#buttons #consent").show();
    $("#information").show();
    $("#information").html("<h3> Information about participating:</h3><ul><li>Participating in this study is completely voluntary. If after reading the information presented here, you decide not to participate, simply leave this page. No explanation is required.</li><br /><li>All data will be anonymized.</li><br /><li>Because the researchers will not know which data belongs to you, after you completed the experiment you cannot withdraw your data from the study. Please consider  this carefully before consenting to participate in this study.</li><br /><li>The data collected in this study may be shared pubpcly after the project is complete. Any participant information will still be anonymous and untraceable.</li></ul><h3>Informed consent</h3><p>Please indicate that you agree to participate in this study:</p><br /><ul><li>I hereby confirm to have read this information about this study and acknowledge that I had the opportunity to ask questions about this study.</li><br /><li>I know that participation in this study is completely voluntary. I have the right to decpne to participate once the study has begun, without any negative consequences and without providing any explanation.</li><br /><li>I will not give any personal information beyond what is requested and I am aware that this makes withdrawing from the research impossible once I have completed this study.</li><br /><li>I giver permission to process the anonymous data as mentioned in the participation information.</li><br /><li>I give permission that these data be re-used for future research.</li><br /><li>I give permission for storing the research data for a period of ten years and making the data pubpc.</li><br /><li>I give permission for my participation in the study.</li></ul><br /><p>If you agree to the conditions above, please press 'I accept' to take part in this study. If you disagree with any of the statements above and do not want to consent, please leave this page.</p>");

    $("#buttons #consent").click(function (){
        //Accepting takes the participant to the "Demographics" section
        $("#buttons #consent").hide();
        $("#information").text('');
        demographics();        
    });
};