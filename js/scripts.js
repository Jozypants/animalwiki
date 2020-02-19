// UI
$(document).ready(function() {
    $("form#selector").submit(function(event) {
        var animal =$("input:radio[name=animal]:checked").val();
        console.log(animal);
        event.preventDefault();

        if (animal === "mantis") {
            // $("#turtle").hide();
            // $("#snake").hide();
            $("#mantis").toggle();
        }
        // }   else if (animal === "snake") {
        //     // $("#turtle").hide();
        //     // $("#mantis").hide();
        //     // $("#snake").show();
        // }   else if (animal === "turtle") {
        //     // $("#snake").hide();
        //     // $("#mantis").hide();
        //     // $("#turtle").show();
        // }

    });
});