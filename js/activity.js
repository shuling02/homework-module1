$(document).ready(function() {

    $("td:not(:first-child)").each(function() {

        if ($(this).text().trim() !== "Not Available") {

            $(this).css("cursor", "pointer");

            $(this).click(function() {
                $(this).toggleClass("selected");
            });

        }

    });

});