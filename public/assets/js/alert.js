function success(text) {
    $('.alert').fadeIn('animated fadeIn').delay(2000).fadeOut('animated fadeOut').html('<div class="alert alert-danger role="alert" data-type="inverse" data-from="top" data-align="right" data-icon="fa fa-comments">' + text + '</div>');
}

function error(text) {
    $('.notif').fadeIn().delay(2000).fadeOut('slow').html('<div class="alert alert-danger role="alert"">' + text + '</div>');
}

function warning(text) {
    $('.notif').fadeIn().delay(2000).fadeOut('slow').html('<div class="alert alert-warning role="alert"">' + text + '</div>');
}





