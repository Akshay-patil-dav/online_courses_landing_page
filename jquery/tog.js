

// // ************************************************************
function loop_loop(insert, target) {



    $('.men-tog').hide()


    console.log("log \t" + insert)
    for (i = 1; i < insert; i++) {

        // console.log("men-tog \t"+i+"\n")
        $('.men-tog' + i).hide()
        // break;

    }


    console.log("****************************************************")
    for (i = insert + 1; i <= target; i++) {

        $('.men-tog' + i).hide()


    }

}




function loop(insert) {

    for (i = insert; i <= 13; i++) {
        $('.men-tog' + i).hide()
    }
}


// **************************************************************************************************


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


    // ************************
    $('.toggle-button1').hover(
        function () {
            // Show the menu
            $('.men-tog1').show();
            // ************************
            loop_loop(1, 14)
        },
        function () {
            // Optionally: do nothing here if you want the toggle to persist
        }
    );

    // ************************
    $('.toggle-button2').hover(
        function () {
            // Show the menu
            $('.men-tog2').show();
            // ************************
            loop_loop(2, 13)
        },
        function () {
            // Optionally: do nothing here if you want the toggle to persist
        }
    );

    // ************************
    $('.toggle-button3').hover(
        function () {
            // Show the menu
            $('.men-tog3').show();
            // ************************
            loop_loop(3, 13)
        },
        function () {
            // Optionally: do nothing here if you want the toggle to persist
        }
    );

    // ************************
    $('.toggle-button4').hover(
        function () {
            // Show the menu
            $('.men-tog4').show();
            // ************************
            loop_loop(4, 13)
        },
        function () {
            // Optionally: do nothing here if you want the toggle to persist
        }
    );

    // ************************
    $('.toggle-button5').hover(
        function () {
            // Show the menu
            $('.men-tog5').show();
            // ************************
            loop_loop(5, 13)
        },
        function () {
            // Optionally: do nothing here if you want the toggle to persist
        }
    );

    // ************************
    $('.toggle-button6').hover(
        function () {
            // Show the menu
            $('.men-tog6').show();
            // ************************
            loop_loop(6, 13)
        },
        function () {
            // Optionally: do nothing here if you want the toggle to persist
        }
    );


    // ************************
    $('.toggle-button7').hover(
        function () {
            // Show the menu
            $('.men-tog7').show();
            // ************************
            loop_loop(7, 13)
        },
        function () {
            // Optionally: do nothing here if you want the toggle to persist
        }
    );


    // ************************
    $('.toggle-button8').hover(
        function () {
            // Show the menu
            $('.men-tog8').show();
            // ************************
            loop_loop(8, 13)
        },
        function () {
            // Optionally: do nothing here if you want the toggle to persist
        }
    );


    // ************************
    $('.toggle-button9').hover(
        function () {
            // Show the menu
            $('.men-tog9').show();
            // ************************
            loop_loop(9, 13)
        },
        function () {
            // Optionally: do nothing here if you want the toggle to persist
        }
    );

    // ************************
    $('.toggle-button10').hover(
        function () {
            // Show the menu
            $('.men-tog10').show();
            // ************************
            loop_loop(10, 13)
        },
        function () {
            // Optionally: do nothing here if you want the toggle to persist
        }
    );



    // ************************
    $('.toggle-button11').hover(
        function () {
            // Show the menu
            $('.men-tog11').show();
            // ************************
            loop_loop(11, 13)
        },
        function () {
            // Optionally: do nothing here if you want the toggle to persist
        }
    );


    // ************************
    $('.toggle-button12').hover(
        function () {
            // Show the menu
            $('.men-tog12').show();
            // ************************
            loop_loop(12, 13)
        },
        function () {
            // Optionally: do nothing here if you want the toggle to persist
        }
    );


    // ************************
    $('.toggle-button'+13).hover(
        function () {
            // Show the menu
            $('.men-tog13').show();
            // ************************
            loop_loop(13, 13)
        },
        function () {
            // Optionally: do nothing here if you want the toggle to persist
        }
    );

});

