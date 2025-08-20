function loadComponent(url, containerId) {
  fetch(url)
    .then(response => response.text())
    .then(html => {
      document.getElementById(containerId).innerHTML = html;
    })
    .catch(err => console.error('Error loading component:', err));
}

// Example: Load sidebar into #sidebar-container
loadComponent('./sidebar.html', 'sidebar-container');
