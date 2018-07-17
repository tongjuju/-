require(['jquery', 'swiper'], function($, swiper) {
    $.ajax({
        url: '/api/list',
        dataType: "json",
        success: function(data) {
            console.log(data)
        },
        error: function(error) {
            console.warn(error)
        }
    })
});