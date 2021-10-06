// JavaScript Document
$( function() {
   $("map area").click( function(){

      if ($(this).attr("id") == "Carmel Valley") {
         $("#feedback").css("color","red");
         $("#feedback").html("No, Carmel Valley is too hot for Pinot Noir");
      }

      if ($(this).attr("id") == "Santa Lucia Highlands") {
         $("#feedback").css("color","green");
         $("#feedback").html("Yes, Pinot Noir loves to grow in the cool, breezy Santa Lucia Highlands");
      }

      if ($(this).attr("id") == "San Antonio Valley") {
         $("#feedback").css("color","red");
         $("#feedback").html("No, San Antonio is too arid and hot for Pinot Noir");
      }
	   if ($(this).attr("id") == "San Bernabe") {
         $("#feedback").css("color","red");
         $("#feedback").html("No, San Bernabe is not famous for growing Pinot Noir");
      }

  $("#feedback").css("backgroundColor","yellow");

   });
}); //end main jQuery function
