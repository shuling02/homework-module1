$(document).ready(function() {

    $("td").click(function () {
        var content = $(this).text();

        var columnIndex = $(this).index();
        var cliffName = $("thead th").eq(columnIndex).text().trim();

        if(content != "Not Available"){
            $(this).toggleClass("tdhighlight");

            if($(this).hasClass("tdhighlight")) {
                $('#displaySelected').css("visibility", "visible");
                $('#displaySelected').css("margin-top", "2em");
                $('#result').append("<p>"+content+"  <span class='cliffName'>at "+cliffName+"</span></p>");
            } else{
                $('#result p:contains("'+content+'")').remove();

                if ($('#result').has('p').length == false){
                    $('#displaySelected').css("visibility", "hidden");
                    $('#displaySelected').css("margin-top", "0");
                }
            }
        }
    });

    $("td:not(:first-child)").each(function() {

        if ($(this).text().trim() !== "Not Available") {

            $(this).css("cursor", "pointer");

        }

    });

});