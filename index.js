// Get the modal
let modal = document.getElementById("modal");

// Get the modal content
let content = document.getElementById("content");

// Get the button that opens the modal

// Get the  element that closes the modal
let closeModal = document.getElementById("closeModal");

function openModal(img) {
    modal.style.display = "flex";
    content.innerHTML = `<img src="${img}" alt="">`;
}

// When the user clicks on (x), close the modal
closeModal.onclick = function() {
  modal.style.display = "none";
}

window.onload = () => {
    modal.style.display = "none";
    modal.classList.add("opacity-100");
}




$(".custom-carousel").owlCarousel({
    autoWidth: true,
    loop: true
  });
  $(document).ready(function () {
    $(".custom-carousel .item").click(function () {
      $(".custom-carousel .item").not($(this)).removeClass("active");
      $(this).toggleClass("active");
    });
  });
  