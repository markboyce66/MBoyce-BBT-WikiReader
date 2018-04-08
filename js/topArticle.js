/* Random Article in Page Start Up
   JSONP Method
   ===================================  */
var api = "https://en.wikipedia.org/w/api.php?action=query&format=json&prop=extracts&&generator=random&exintro&exlimit=1&explaintext=1&grnlimit=1&grnnamespace=0&callback=?";

// Description: Load JSON-encoded data from the server using a GET HTTP request.  jQuery.getJSON( url [, data ] [, success ] )

/*
var api = "https://en.wikipedia.org/w/api.php?action=query&format=json&prop=extracts&&generator=random&exsentences=2&exlimit=1&explaintext=1&grnlimit=1&grnnamespace=0&callback=?";

url
Type: String
A string containing the URL to which the request is sent.
data
Type: PlainObject or String
A plain object or string that is sent to the server with the request.
success
Type: Function( PlainObject data, String textStatus, jqXHR jqXHR )
A callback function that is executed if the request succeeds.
*/

// The hasOwnProperty() method returns a boolean indicating whether the object has the specified property as its own property (as opposed to inheriting it).

// The push() method adds new items to the end of an array, and returns the new length.

// Create Function to change random article at the top of the page... use document ready(function) to call this function and then reuse it for the button to change the button at the top.

function randomArticle() {
    $.getJSON(api, function(data){ //in this line load the JSON from the var api which defines the url
  var keys = [];
  for (var l in data.query.pages) {
    if (data.query.pages.hasOwnProperty(l)){
      keys.push(l);
    }
  }
  
  $("#randomRandomTitle").html(data.query.pages[keys[0]].title);  //pulls the title from search result and assign it to the randomRandomTitle id
  $("#randomRandomExtract").html(data.query.pages[keys[0]].extract);  //pulls the title from search result and assign it to the randomRandomExtract id
  $("#randomRandomLink").attr("href","https://en.wikipedia.org/wiki/" + data.query.pages[keys[0]].title.replace(" ","%20"));  //pulls the title from search result and assign it to the randomRandomLink id and assigns the link URL
});
       
};
// on document ready state, run random article function which will pull in the random article
$( document ).ready(function() {
    randomArticle();
});
