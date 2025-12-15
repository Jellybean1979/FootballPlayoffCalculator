document.getElementById('viewReadme').addEventListener('click', () => {
  fetch('README.md')
    .then(response => response.text())
    .then(text => {
      const container = document.getElementById('readmeContainer');
      container.style.display = 'block';
      container.textContent = text;
    })
    .catch(err => {
      alert('Could not load README.md');
      console.error(err);
    });
});
