$(function() {
  $("#search").click(function() {
    var searchTerm = $("#searchTerm").val();
    $.ajax({
      type: "GET",
      url:
        "https://en.wikipedia.org/w/api.php?action=opensearch&search=" +
        searchTerm +
        "&callback=?",
      async: false,
      dataType: "json",
      success: function(data) {
        $("#results").html("");

        for (let i = 0; i < 10; i++) {
          if (data[1][i] === undefined) {
            break;
          }

          $("#results").append(
            "<h2><a href =" +
              data[3][i] +
              ' target = "blank">' +
              data[1][i] +
              "</a></h2><h4>" +
              data[2][i] +
              '</h4><br>'
          );
        }
      },
      error: function(err) {
        alert("Err");
      }
    });
  });

  $("#searchTerm").bind("keypress", function(e) {
    if (e.keyCode == 13) {
      $("#search").click();
    }
  });
});
