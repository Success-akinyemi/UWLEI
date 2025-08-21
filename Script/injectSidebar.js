

function loadComponent(url, containerId) {
  fetch(url)
    .then(response => response.text())
    .then(html => {
      document.getElementById(containerId).innerHTML = html;
            console.log('BUTTOM SET')

      // Add toggle logic after sidebar loads
      const menuBtn = document.getElementById("menu-btn");
      const sidebar = document.getElementById("sidebar");

      if (menuBtn && sidebar) {
        menuBtn.addEventListener("click", () => {
            console.log('BUTTOM CLICKED')
            sidebar.classList.toggle("mobileClass"); // show/hide
        });
      }
    })
    .catch(err => console.error("Error loading component:", err));
}

// Load sidebar into container
loadComponent("./sidebar.html", "sidebar-container");
//loadComponent("./sidebar.html", "mobile-sidebar-container");

function loadMobileSidebarComponent(url, containerId) {
  fetch(url)
    .then(response => response.text())
    .then(html => {
      document.getElementById(containerId).innerHTML = html;
            console.log('BUTTOM SET')

      // Add toggle logic after sidebar loads
      const menuBtn = document.getElementById("menu-btn");
      const sidebar = document.getElementById("sidebar");

      if (menuBtn && sidebar) {
        menuBtn.addEventListener("click", () => {
            console.log('BUTTOM CLICKED')
          sidebar.classList.toggle("mobileClass"); // show/hide
        });
      }
    })
    .catch(err => console.error("Error loading component:", err));
}

// Load sidebar into container
//loadMobileSidebarComponent("./sidebar.html", "mobile-sidebar-container");