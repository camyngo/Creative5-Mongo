/*global $*/
$(document).ready(function() {


    var URL = "comment?q=";
    if ($("#query").val()) {
        URL += $("#query").val();
    }
    console.log(URL);
    $.getJSON(URL, function(data) {
        console.log(data);
        var everything = "<ul>";
        for (var comment in data) {
            com = data[comment];
            everything += "<li> <div class='w3-display-container'> <div class='w3-display-topleft w3-container'> " + com.Name + ": " + com.Comment + "</div> <img src='" + com.URL + "' width='300' height='300' class='w3-circle'>" + "</li>";
        }
        everything += "</div> </ul>";
        $("#comments").html(everything);

    })


    // post a comment when button is on click
    $("#postComment").click(function() {
        if ($("#name").val() == "")
            window.alert("Pease type your name")
        else if ($("#comment").val() == "")
            window.alert("Pease comment on your victory")
        else if ($("#picture").val() == "")
            window.alert("give us an image link. ppl need to know of your glorious victory (or shameful loss...)")
        else {
            var myobj = { URL: $("#picture").val(), Name: $("#name").val(), Comment: $("#comment").val() };
            // make the whole object into a string
            jobj = JSON.stringify(myobj);
            //print out the string
            //$("#json").text(jobj);
            var url = "comment";
            $.ajax({
                url: url,
                type: "POST",
                data: jobj,
                contentType: "application/json; charset=utf-8",
                success: function(data, textStatus) {
                    //$("#done").html(textStatus);
                }
            })

            var URL = "comment?q=";
            if ($("#query").val()) {
                URL += $("#query").val();
            }
            console.log(URL);
            $.getJSON(URL, function(data) {
                console.log(data);
                var everything = "<ul>";
                for (var comment in data) {
                    com = data[comment];
                    everything += "<li> <div class='w3-display-container'> <div class='w3-display-topleft w3-container'> " + com.Name + ": " + com.Comment + "</div> <img src='" + com.URL + "' width='300' height='300' class='w3-circle'>" + "</li>";
                }
                everything += "</div> </ul>";
                $("#comments").html(everything);

            })
        }
    });



});
