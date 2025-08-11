
fetch("sidebar.html")
  .then(res => res.text())
  .then(data => {
    document.getElementById("sidebar-placeholder").innerHTML = data;
  });

fetch("navbar.html")
  .then(res => res.text())
  .then(data => {
    document.getElementById("navbar-placeholder").innerHTML = data;

    const navbarLinks = document.querySelectorAll('.navbar-link');

   const currentPage = window.location.pathname.split("/").pop() || "index.html";
    navbarLinks.forEach(link => {
      if (link.getAttribute("href") === currentPage) {
        link.classList.add("active-nav");
      }
    });
    

  });
