var modal=document.querySelector(".modal-search-hotel"),trigger=document.querySelector(".modal-button");function toggleModal(e){e.preventDefault(),modal.classList.toggle("modal-hide")}modal.classList.add("modal-hide"),trigger.addEventListener("click",toggleModal),window.addEventListener("keydown",function(e){27===e.keyCode&&modal.classList.contains("modal-search-hotel")&&(e.preventDefault(),modal.classList.toggle("modal-hide"))});