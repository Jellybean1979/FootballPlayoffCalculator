// Show modal
document.getElementById('viewReadme').addEventListener('click', () => {
  fetch('README.md')
    .then(res => res.text())
    .then(text => {
      document.getElementById('readmeText').textContent = text;
      document.getElementById('readmeModal').style.display = 'block';
    })
    .catch(err => {
      alert('Could not load README.md');
      console.error(err);
    });
});

// Close modal
document.getElementById('closeReadme').addEventListener('click', () => {
  document.getElementById('readmeModal').style.display = 'none';
});

// Optional: close if user clicks outside the box
window.addEventListener('click', (event) => {
  const modal = document.getElementById('readmeModal');
  if (event.target === modal) {
    modal.style.display = 'none';
  }
});
