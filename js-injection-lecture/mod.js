$('li h2[data-type="vitamin"]').css('background', 'blue');
$('li h2[data-type="mineralwater"]').css('background', 'green');
$('li h2[data-type="proteinbar"]').css('background', 'black');

$("li").css({"cursor":"pointer"});

$(document).ready(function(){
    // Add smooth scrolling to all links
    $("a").on('click', function(event) {
  
      // Make sure this.hash has a value before overriding default behavior
      if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();
  
        // Store hash
        var hash = this.hash;
  
        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function(){
  
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        });
      } // End if
    });
  });

  var x = $('#history').clone().prop("id", "history-clone");
  $('#history').before(x);
  $(x).text("Who's the best. Jan is!");
  $(x).css('background', '#9e9e9e');

  

  $(document).ready(function(){
    $('a[href^="http://"]').each(function(){ 
        var oldUrl = $(this).attr("href"); 
        // Get current url
        var newUrl = oldUrl.replace("http://", "https://"); 
        // Create new url
        $(this).attr("href", newUrl); 
        // Set herf value
    });