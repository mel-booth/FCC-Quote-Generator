$(document).ready(function(){

  var quote;
  var author;
// Define getQuote function - data included is based on forismatic instructions
  function getQuote() {
    $.ajax({
      url: "http://api.forismatic.com/api/1.0/",
      jsonp: "jsonp",
      dataType: "jsonp",
      data: {
        method: "getQuote",
        lang: "en",
        format: "jsonp"
      },
      success: function (response) {
        quote = response.quoteText;
        author = response.quoteAuthor;

        //Will print quote - refers to quote id in html
        $("#quote").text(quote);

        // If an author is associated to quote this will print author's name, if not (else) this will print text - unknown
        if (author){
          $("#author").text("- " + author);
        }
        else {
          $("#author").text("- unknown.")
        }
      }



    })
  }
//Calls function, but will just refresh page
getQuote();

//Calls function to perform when button is clicked, rather than just refreshing the page
$(".newquote").on("click", function(evt){
  evt.preventDefault(); // preventDefault stops page from jumping back to the top, each time button is clicked
  getQuote();
  });

//Opens new twitter window  when tweet button is clicked to share quote
//  $(".tweet").on("click", function(evt){
//    evt.preventDefault(); // preventDefault stops page from jumping back to the top, each time button is clicked
//    window.open("https://twitter.com/share");
//  })

//Opens new twitter window when tweet button is clicked and pre-populates quote text!!!!
$(".tweet").on("click", function(evt){
  evt.preventDefault(); // preventDefault stops page from jumping back to the top, each time button is clicked
  window.open("https://twitter.com/intent/tweet?text=" + encodeURIComponent(quote + " - " + author));
})

});
