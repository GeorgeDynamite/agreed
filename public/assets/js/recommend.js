$(function() {
    $(".guest_like").on("click", function(event) {
      var id = $(this).data("id");
      var newGuestLike = $(this).data("newGuestLike");
  
      var guestLikeMovie= {
        guest_like: 1
      
      };
      
  
      $.ajax("/api/recommended/guest/" + id, {
        type: "PUT",
        data: guestLikeMovie
      }).then(
        function() {
          console.log("Changed to likeMovie", newGuestLike);
          location.reload();
        }
      );
      
    });
    
});


$(function() {
    $(".host_like").on("click", function(event) {
      var id = $(this).data("id");
      var host_like = $(this).data("host_like");
  
      var hostLikeMovie= {
        host_like: host_like
      };
  
      $.ajax("/api/recommended/host/" + id, {
        type: "PUT",
        data: hostLikeMovie
      }).then(
        function() {
          console.log("Changed to likeMovie", hostLikeMovie);
          location.reload();
        }
      );
    });
});

