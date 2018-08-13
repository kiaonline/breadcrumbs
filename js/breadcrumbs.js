$(document).ready(function(){
    var leftOffset = $(".responsive-breadcrumb .breadcrumb li.active").offset().left - $(".responsive-breadcrumb").offset().left + $(".responsive-breadcrumb").scrollLeft();
    $(".responsive-breadcrumb").animate({ scrollLeft: leftOffset });
})