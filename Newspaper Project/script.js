document.getElementById("menu-toggle").addEventListener("click", function() {
    document.getElementById("wrapper").classList.toggle("toggled");
  });
  
  var collapseElements = document.querySelectorAll('[data-bs-toggle="collapse"]');
  collapseElements.forEach(function (ele) {
    ele.addEventListener('click', function () {
      var arrowIcon = ele.querySelector('.arrow');
      ele.classList.toggle('collapsed');
    });
  });