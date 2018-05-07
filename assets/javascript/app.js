var userSearch = "puppies";

    $.ajax({
      url: "http://api.giphy.com/v1/gifs/search?q=" + userSearch + "&api_key=z1Eb9fn2NeVbF2OEpyUtX5CfPu1tIJkT" + "&limit=5",
      method: "GET"
    }).then(function(response) {
      console.log(response);
      var gifs = response.data;

      for (var i = 0; i < gifs.length; i++) {
        // make container for each image
            var gifCard = $("<div>");
        //Put gifCard into a card-style from bootstrap?******
        
        // Put image search result into an img 
            var gifResult = $("<img>");
            gifResult.attr("src", gifs[i].images.fixed_height_still.url);
        // Give attribute of image clickMe
            gifResult.attr("class", "clickMe")

        // Put rating search result into a p
        // give it a class
        // give that class the actual rating text
            var gifRating = $("<p>");
            gifRating.html(gifs[i].rating);        

        // Put gifResult, gifRating into gifCard
        gifCard.append(gifResult);
        gifCard.append(gifRating);

        // Append results to page
        $(".gifs").append(gifCard);
      }
    });

