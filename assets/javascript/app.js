// gifSearch is hook for input



var userSearch = "puppies";

    $.ajax({
      url: "http://api.giphy.com/v1/gifs/search?q=" + userSearch + "&api_key=z1Eb9fn2NeVbF2OEpyUtX5CfPu1tIJkT" + "&limit=10",
      method: "GET"
    }).then(function(response) {
      console.log(response);
      var gifs = response.data;

        for (var i = 0; i < gifs.length; i++) {
            // make container for each image
                var gifCard = $("<div>");
            //Put gifCard into a card-style from bootstrap?******
                gifCard.attr("class", "card");

            // Put image search result into an img 
                var gifResult = $("<img>");
                gifResult.attr("src", gifs[i].images.fixed_height_still.url);
            // Give attribute of image clickMe
                gifResult.attr("class", "clickMe card-img-top");

            // Give attributes of animate, still, and state
                gifResult.attr("data-animate", gifs[i].images.fixed_height.url)
                gifResult.attr("data-still", gifs[i].images.fixed_height_still.url)
                gifResult.attr("data-state", "still");

              
            // Put rating search result into a p
            // give it a class
            // give that class the actual rating text
                var gifRating = $("<p>");
                gifRating.attr("class", "text-center");
                gifRating.html("Rating: <strong>" + gifs[i].rating + "</strong>");        

            // Put gifResult, gifRating into gifCard
            gifCard.append(gifResult);
            gifCard.append(gifRating);

            // Append results to page
            $(".gifs").append(gifCard);

        }
                
    });

    $(document).on("click", ".clickMe", function(){
        var state = $(this).attr("data-state");

        if(state === "still"){
            $(this).attr("data-state", "animated");
            $(this).attr("src", $(this).attr("data-animated"));
        }else{
            $(this).attr("data-state", "still");
            $(this).attr("src", $(this).attr("data-still"))
        }
    })