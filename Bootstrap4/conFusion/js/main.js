$(document).ready(function(){

    // carousel functions
    $("#mycarousel").carousel( { interval: 1000 } );

    $("#carouselButton").click(function(){
        if($("#carouselButton").children("span").hasClass('fa-pause')) {
            $("#mycarousel").carousel('pause');
            $("#carouselButton").children("span").removeClass('fa-pause');
            $("#carouselButton").children("span").addClass('fa-play');
        }
        else if($("#carouselButton").children("span").hasClass('fa-play')) {
            $("#mycarousel").carousel('cycle');
            $("#carouselButton").children("span").removeClass('fa-play');
            $("#carouselButton").children("span").addClass('fa-pause');
        }
    });


    
    
    /**
        Reserve modal smoking button functions
    **/

    //Smoking Option
    $("#optionSmoking").click(
        function() {

            if($("#optionSmoking").parent().hasClass("btn-danger")){
                $("#optionSmoking").parent().removeClass("btn-danger");
                $("#optionSmoking").parent().addClass("btn-success");
                $("#optionNonSmoking").parent().removeClass("btn-success");
                $("#optionNonSmoking").parent().addClass("btn-danger");
            }

        }
    )
    //Non Smoking Option
    $("#optionNonSmoking").click(
        function() {

            if($("#optionNonSmoking").parent().hasClass("btn-danger")){
                $("#optionNonSmoking").parent().removeClass("btn-danger");
                $("#optionNonSmoking").parent().addClass("btn-success");
                $("#optionSmoking").parent().removeClass("btn-success");
                $("#optionSmoking").parent().addClass("btn-danger");
            }

        }
    )

});