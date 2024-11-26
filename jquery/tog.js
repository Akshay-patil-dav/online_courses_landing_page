$(document).ready(function () {
    $("#cource").click(function () {
        $(".menbox").toggle();
    });
});

function loop(insert) {

    for (i = insert; i <= 10; i++) {
        $('.men-tog' + i).hide()
    }
}

$(document).ready(function () {
    // Toggle visibility on hover
    $('.toggle-button').hover(
        function () {
            // Show the menu
            $('.men-tog').show();
            // ************************
            loop(1)
           
        },
        function () {
            // Optionally: do nothing here if you want the toggle to persist
        }
    );


        // Toggle visibility on hover
        $('.toggle-button').hover(
            function () {

        //  num = 10;
            for(i=1; i<=10 ; i++){
                loop_loop(i,10);
            }
               
            },
            function () {
                // Optionally: do nothing here if you want the toggle to persist
            }
        );



    // ******************
});


function loop_loop(insert, target) {

    $('.men-tog' +insert).show();


     // ********************************
    //  $('.men-tog').hide()
    console.log('men-tog\n');


     $('.men-tog').hide()
    for (i = 1; i <= insert; i++) {

            console.log("men-tog \t"+i+"\n")
              // $('.men-tog3').hide()
            // break;

    }

    
    console.log("****************************************************")
    for (i = insert+1; i <= target; i++) {

        $('.men-tog' + i).hide()


        // console.log("hide value tar"+i)
    }

}
