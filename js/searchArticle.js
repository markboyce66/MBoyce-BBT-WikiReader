/* Random Article in Page Start Up
   JSONP Method
   ===================================  */
var api = "https://en.wikipedia.org/w/api.php?action=query&format=json&prop=extracts&generator=random&exchars=600&explaintext=1&grnnamespace=0";

/*
var api = "https://en.wikipedia.org/w/api.php?action=query&format=json&prop=extracts&generator=random&exchars=600&explaintext=1&grnnamespace=0&callback=?";

var api= imports the json api

https://en.wikipedia.org/w/api.php :: url

?action=query :: type of action

&format=json :: defines the format

&prop=extracts :: defines the property 

&generator=random :: defines what type of generator, in this case random articles, Get the list of pages to work on by executing the specified query module. Note: Generator parameter names must be prefixed with a "g", see examples.

&exchars=600 :: sets character limits

&explaintext=1 :: returns extracts as plain text instead of limited HTML - boolean

&grnnamespace=0 :: returns pages in these namespaces only

&callback=? :: If specified, wraps the output into a given function call. For safety, all user-specific data will be restricted. this creates the random article displaying on the initial page load


/w/api.php?action=query&format=json&prop=extracts&list=&generator=random&exchars=600&exlimit=1&explaintext=1&grnlimit=10
sample api call

*/



// Displaying Search Results using Wikipedia API and Input Field
function searchResults(searchValue){  //takes string entered in input and assigns it value of searchValue
  var api = "https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&srsearch=" + searchValue + "&callback=?";
  
  var htmlCode = ""; 
  $.getJSON(api, function(data){
    for(var i in data.query.search) { //this formats the searchu results, replacing link, title, timestamp and snippet
      htmlCode += "<div class='col-lg-4 col-md-12 col-sm-12 results item-head'><div></div><div class='item-body'><a target='_blank' href='https://en.wikipedia.org/wiki/" + data.query.search[i].title.replace(" ","%20") + "'><h2>" + data.query.search[i].title + "</h2></a><h6 class='item-timeStamp'>" + data.query.search[i].timestamp + "</h6><p>" + data.query.search[i].snippet + "...</p></div></div>";
    }
    $("#searchResults").html(htmlCode); //rewrites (concatenate) html in searchResults id with html assigned results to htmlCode 
  });
}

// Searching for query on Enter 
$("input").keypress(function (e) {
  if (e.which == 13) {  //this function listens for a key press, in this case 13 is "enter" key tied to the input element
    $("form").submit();
    searchResults($("input").val());
    return false;
  }
});