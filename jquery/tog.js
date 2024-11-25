$(document).ready(function () {
    $("#cource").click(function () {
        $(".menbox").toggle();
    });
});

$(document).ready(function () {
    // Toggle visibility on hover
    $('.toggle-button').hover(
        function () {
            // Show the menu
            $('.men-tog').stop(true, true).toggle();
            $('.men-tog1').hide()
        },
        function () {
            // Optionally: do nothing here if you want the toggle to persist
        }
    );

    // Optional: ensure the menu toggles back when hovering out
 
});



$(document).ready(function () {
    // Toggle visibility on hover
    $('.toggle-button1').hover(
        function () {
            // Show the menu
            $('.men-tog1').stop(true, true).toggle();
            $('.men-tog').stop(true, true).toggle();
            $('.men-tog').hide()
        },
        function () {
            // Optionally: do nothing here if you want the toggle to persist
        }
    );

    // Optional: ensure the menu toggles back when hovering out
 
});
