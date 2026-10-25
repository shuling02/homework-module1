
$(document).ready(function () {

    $("td:not(:first-child)").each(function () {
        if ($(this).text().trim() !== "Not Available") {
            $(this).css("cursor", "pointer");
        }
    });

    $("td:not(:first-child)").click(function () {
        var content = $(this).text().trim();

        if (content === "Not Available") {
            return;
        }

        var columnIndex = $(this).index();
        var cliffName = $("thead th").eq(columnIndex).text().trim();

        $(this).toggleClass("tdhighlight");

        // Rebuild the modal list from all highlighted activities
        var selectedActivities = "";

        $("td.tdhighlight").each(function () {
            var activity = $(this).text().trim();
            var index = $(this).index();
            var cliff = $("thead th").eq(index).text().trim();

            selectedActivities +=
                "<p>" + activity + " at " + cliff + "</p>";
        });

        $("#activityModalBody").html(selectedActivities);

        // Open the modal after selecting or deselecting an activity
        $("#activityModal").modal("show");
    });

    // Get Info button
    $("#getInfo").click(function () {
        $("#activityModal").modal("hide");
        // We can connect this button to the contact/enquiry workflow next.
    });

});

