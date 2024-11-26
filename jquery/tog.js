// $(document).ready(function () {
//     $("#cource").click(function () {
//         $(".menbox").toggle();
//     });
// });

// $(document).ready(function () {
//     // Toggle visibility on hover
//     $('.toggle-button').hover(
//         function () {
//             // Show the menu
//             $('.men-tog').show();
//             // ************************
//             loop(1)
//             // $('.men-tog'+1).hide()
//             // $('.men-tog2').hide()
//             // $('.men-tog3').hide()
//         },
//         function () {
//             // Optionally: do nothing here if you want the toggle to persist
//         }
//     );



//     // ********************1*********************

//     $('.toggle-button1').hover(
//         function () {

//             $('.men-tog1').show();
//             loop_loop(1, 10)

//         },
//         function () {
//             // Optionally: do nothing here if you want the toggle to persist
//         }
//     );
//     // }

//     // Optional: ensure the menu toggles back when hovering out


//     // ********************2*********************


//     $('.toggle-button2').hover(
//         function () {

//             $('.men-tog2').show();
//             loop_loop(2, 10)

//         },
//         function () {
//             // Optionally: do nothing here if you want the toggle to persist
//         }
//     );
//     // }




//     // ********************3*********************




//     $('.toggle-button3').hover(
//         function () {

//             $('.men-tog3').show();
//             loop_loop(3, 10)

//         },
//         function () {
//             // Optionally: do nothing here if you want the toggle to persist
//         }
//     );
//     // }


//     // ********************3*********************

//     // for(i=4; i<10; i++){
//     // Toggle visibility on hover
//     $('.toggle-button4').hover(
//         function () {

//             $('.men-tog4').show();
//             loop_loop(4, 10)

//         },
//         function () {
//             // Optionally: do nothing here if you want the toggle to persist
//         }
//     );
//     // }


//     $('.toggle-button5').hover(
//         function () {

//             $('.men-tog5').show();
//             loop_loop(5, 10)

//         },
//         function () {
//             // Optionally: do nothing here if you want the toggle to persist
//         }
//     );
//     // }


//     $('.toggle-button6').hover(
//         function () {

//             $('.men-tog6').show();
//             loop_loop(6, 10)

//         },
//         function () {
//             // Optionally: do nothing here if you want the toggle to persist
//         }
//     );
//     // }


//     // ******************
// });

// // ************************************************************
function loop_loop(insert, target) {



    $('.men-tog').hide()


    console.log("log \t"+insert)
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

    for (i = insert; i <= 10; i++) {
        $('.men-tog'+i).hide()
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


    // ************************
    $('.toggle-button1').hover(
        function () {
            // Show the menu
            $('.men-tog1').show();
            // ************************
           loop_loop(1,10)
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
           loop_loop(2,10)
        },
        function () {
            // Optionally: do nothing here if you want the toggle to persist
        }
    );

});