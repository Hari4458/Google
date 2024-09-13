document.addEventListener('DOMContentLoaded', () => {
  const searchInput = document.querySelector('.search');
  const form = document.querySelector('.form-search');

  searchInput.addEventListener('focus', () => {
    searchInput.style.boxShadow = '0 3px 8px 0 rgba(0,0,0,0.16), 0 0 0 1px rgba(0,0,0,0.08)'; // Change box shadow on focus
  });

  searchInput.addEventListener('blur', () => {
    searchInput.style.boxShadow = '0 2px 2px 0 rgba(0,0,0,0.16), 0 0 0 1px rgba(0,0,0,0.08)'; // Reset box shadow
  });

  form.addEventListener('submit', (event) => {
    event.preventDefault(); 
    const query = searchInput.value;
    if (query) {
      window.open(`https://www.google.com/search?q=${encodeURIComponent(query)}`, '_blank');
    }
  });
});
