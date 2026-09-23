var imageList = "";

var images = [
    "partner-bustour.png",
    "partner-cabinrental.png",
    "partner-campingadv.png",
    "partner-collegetours.png",
    "partner-rentalbike.png",
    "partner-tourgroup.png"
];

var altText = [
    "Partner Bus Tours",
    "Partner Cabin Rental",
    "Partner Camping Adventure",
    "Partner College Tours",
    "Partner Bike Rentals",
    "Partner Tour Group"
];

for (var i = 0; i < 6; i++){
    imageList += `
        <li class="partner">
            <img src="images/partners/${images[i]}" alt="${altText[i]}">
        </li>
    `;
}

document.getElementById("partners").innerHTML = imageList;

