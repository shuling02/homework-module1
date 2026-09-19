var imageList = "";

for (var i = 0; i < 6; i++){
    imageList += `
        <li class="partner">
            <img src="images/logo.png" alt="Partner Bus Tours">
        </li>
    `
}

document.getElementById("partners").innerHTML = imageList;