





$("#searchTimes").on("click", function(nyTimesSearch) {
  nyTimesSearch.preventDefault();

  clear();
var queryURL = buildQueryURL();

$.ajax({
  url: queryURL,
  method: "GET"
}).then(updatePage);
});

