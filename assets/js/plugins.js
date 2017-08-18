$("#ajax-form-to-email").submit(function() {
    var str = $(this).serialize();
    $.ajax({
        type: "POST",
        url: "asstes/php/contact-form.php",
        data: str,
        success: function(msg) {
            if(msg == 1) {
                result = '<div class="alert success fade in">Your message has been sent. Thank you!<a href="#" class="close-alert" data-dismiss="alert"></a></div>';
                $("#ajax-form-to-email").hide();
            } else {result = msg;}
            $('#form-message').hide();
            $('#form-message').html(result);
            $('#form-message').fadeIn("slow");
            $('html, body').animate({
                scrollTop: $('#form-message').offset().top - 130
            },1500);
        }
    });
    return false;
});
