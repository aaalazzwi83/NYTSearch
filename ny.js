





// $("#searchTimes").on("click", function(nyTimesSearch) {
//   nyTimesSearch.preventDefault();

//   clear();
// var queryURL = buildQueryURL();

// $.ajax({
//   url: queryURL,
//   method: "GET"
// }).then(updatePage);
// });



//---------------------------------------------------
//---------------------------------------------------

$("#searchTimes").on("click", function (event) {
  event.preventDefault();
  $(".content").empty();
  var apikey = "8rEnv3pQSqaZrqJIHVHx7sLhBJMrPgXU";
  var numArticles = $("#numArt").val();
  var pages = 0 + Math.floor(numArticles / 10);
  var serchKey = $("#searchTerm").val();
  var bDate = $("#startYear").val();          // YYYYMMDD format
  bDate = bDate.replace(/-/g, "");
  var eDate = $("#endYear").val();          // YYYYMMDD format
  eDate = eDate.replace(/-/g, "");

  //var articlesSet = numArticles;
  var artIndex = 1;
  for (var i = 0; i <= pages; i++) {

      var searchurl = "https://api.nytimes.com/svc/search/v2/articlesearch.json?fq='" + serchKey + "'&begin_date=" + bDate + "&end_date=" + eDate + "&page=" + i + "&api-key=" + apikey;
      
      $.ajax({
          url: searchurl,
          method: "GET"
      }).then(function(response) {
          console.log(response.response.docs);
          $.each(response.response.docs, function (index, item) {
              if (artIndex <= numArticles) {
                  
                  var newart = $("<p>").text((artIndex) + "." + item.abstract);
                  $(".content").append(newart);
                  artIndex++;
              }

          });

      });

      


  };




});

$("#clearTimes").on("click", function (event) {
  $(".content").empty();
});


//---------------------------------------------------
//---------------------------------------------------