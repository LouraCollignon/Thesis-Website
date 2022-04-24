function end_exp(){
    // generate an ID and collect all data into 1 variable and take the particpant to the final screen.
    var uniqueID = makeID();
    data_list = []
    data_list.push(uniqueID, demographic_data, chosen_sounds, images, RTuniTrials, RTzipfTrials, RTseg, RTxwl, userstrategy);
    saveData(data_list);
    console.log(data_list);
    the_end();
}

function final_text(){
    hideElements();
    $("#information").show();
    $("#buttons #next").show();
    $("#buttons #play").show();
    $("#buttons #play").attr('value', 'Submit');
    $("#form_input").show();
    $("#information").html("<h1>Welcome to the end of this experiment, you're done!<h1><p>So, what was actually going on, you ask?</p><p>We're linguists interested in fundamental questions about language and conceptual learning, among other things. One of the big puzzles that we're trying to resolve is how people 'for all our shortfalls' manage to learn so much from so little. This is especially evident when you look at language learning, especially in children: languages are HARD but kids who still can't tie their own shoelaces can master aspects of language that professional linguists have difficulty fully explaining.</p><p>What is especially interesting is that children are usually better at learning language than adults, even though adults are 'smarter' in most ways (have better memories, better strategies for learning, etc). As everyone knows, being a native speaker of a language (i.e., learning it in childhood) means that you know it 'better'. Even very smart adults speak with accents and can make obvious grammatical errors in languages they learn in adulthood, even if they have spoken it for years. We're interested in figuring out why adults have so much trouble and children don't.</p><p>One of the theories we are investigating is that at least some of it has to do with the fact that when we are taught languages in schools the distribution of words is not the same distribution that children hear. This experiment was designed to see if some distributions of words lead to better learning than others, while performing two learning tasks: segementation and word mapping. Ultimately we want to be able to find the best distribution of words to help adults learn new languages.</p><p>It's probably pretty obvious to you by now how this experiment fits in with this... you were learning words that came from a distribution that might or might not match the true distribution of words. This many words is a hard thing to learn with so little training so you probably found it difficult but our hope is that you found it at least possible, and that we can eventually develop ways that make it even easier.</p><p>So did I do well in the experiment?</p><p>If you tried your best, then you did great!</p><p>Seriously, like we said, this is generally a hard thing to learn for most adults. If it turns out that it's too hard (at least as we set it up), then that's useful information too. Basically the only way that what you did might be useless to us is if you didn't take it seriously or your headphones weren't working or something. (And we have ways to determine if that was what was going on). So regardless of whether you thought this was impossible or trivially easy, you've helped us figure out a small part of what kinds of factors go into learning languages!</p><p>Now there's one final question, which is entirely optional, but if you have the time we would like to know what strategies you used during this experiment. We would be grateful if you would tell us, but no worries if you don't! Also feel free to just drop your thoughts about the experiment if you want to.</p>");
    //Create a textbox where participants can tell us about the strategies they've used during the experiment if they want to.
    $("#form_input").html("<form id='form-addinfo' class='form'><label for='addinfo'>What strategies did you use? </label><input type='text' id='myaddinfo' size='60' /><br /><br /></form>");

    function savetext(){
        //save the information from the textbox that asks particpants about strategy into the variable "userstrategy".
        var text = $("#myaddinfo").val();
        userstrategy.push(text);
    }
    //Both buttons do the same, but having the "next" button shows that particpants shouldn't feel forced to fill in the strategy textbox. Both buttons take the participant to the final page.
    $("#buttons #play").click(function (){
        savetext();
        end_exp();
    });
    $("#buttons #next").click(function (){
        savetext();
        end_exp();
    });
}
function the_end (){
    //Thank particpants for particpanting, provide a code for Sona (university program that tracks student participation in experiments).
    hideElements();
    $("#information").show();
    var sona = makeID();
    $("#information").html("<p>Thank you very much for participating in this experiment, you can now close this window. For any further questions regarding this experiment you can contact Person A or Person B</p><p>If you participated in this experiment through Sona, please copy the code below into Sona:</p>" + sona);
}