var showCard = document.querySelector('#show-card');
var hiddenArrow = document.getElementById("hidden-arrow");
var hiddenCard = document.getElementById("hidden-card");
var indexMessages = document.getElementById("index-messages");


showCard.addEventListener('click', function () {

    indexMessages.classList.add("hidden");
    hiddenCard.classList.add("show");
    hiddenArrow.classList.add("show");

})

