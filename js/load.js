$(document).ready(function(){
    //If the person tries to leave the page, ask them if they are sure (taking part after leaving would force the participant to restart the whole experiment)
    window.onbeforeunload = function() {
        return true;
    };

    
    $.when(
        //load all the js scripts that make up the experiment
        $.getScript( "/js/howler-2.2.1.min.js" ),
        $.getScript( "/js/start.js"),
        $.getScript( "/js/consent.js"),
        $.getScript( "/js/soundcheck.js"),
        $.getScript( "/js/demographics.js"),
        $.getScript( "/js/exp_instr.js"),
        $.getScript( "/js/trials_zipf.js"),
        $.getScript( "/js/trials_uni.js"),
        $.getScript( "/js/test_seg.js"),
        $.getScript( "/js/test_xwl.js"),
        $.getScript( "/js/end.js"),

        $.Deferred(function( deferred ){
            $( deferred.resolve );
        })
    ).done(function(){
        start();
    });
});