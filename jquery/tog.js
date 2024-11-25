$(document).ready(function () {
    $("#cource").click(function () {
        $(".menbox").toggle();
    });
});


// ******************************************
$(document).ready(function () {
    // Toggle visibility on hover
    $('.toggle-button').hover(
        function () {
            // Show the menu
            $('.men-tog').stop(true, true).toggle();
        },
        function () {
            // Optionally: do nothing here if you want the toggle to persist
        }
    );

    // Optional: ensure the menu toggles back when hovering out
 
});
