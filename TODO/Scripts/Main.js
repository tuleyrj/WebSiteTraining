// Toggle To-Do completion
$("ul").on("click", "li", function(){
    $(this).toggleClass("completed");
});

// Remove to-do
$("ul").on("click", "li span", function(e){
    // stop the click event from triggering on the <li>
    e.stopPropagation();
    console.log($(this).parent());
    $(this).parent().fadeOut(250, function(){
        $(this).remove();
    });
});

// Add new li
$("input[type=text]").on("keypress", function(e){
    if (e.which === 13){

        // Grab the text from the text box;
        var t = $(this).val();

        // Add a new li element to the list
        $("ul").append("<li></li>");

        // Add the text to the li (this prevents html injection)
        $("ul").children().last().text(" " + t);

        // now prepend the span
        $("ul").children().last().prepend("<span><i class=\"fas fa-trash-alt\"></span>");

        // clear the text box
        $(this).val("");
    }
});

$(".fa-plus-square").click(function(){
    $("input[type=text]").fadeToggle();
});