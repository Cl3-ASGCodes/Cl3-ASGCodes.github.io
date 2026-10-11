class ReusableNav extends HTMLElement {
  connectedCallback() {
    // Use Fetch (AJAX) to load the external component file
    fetch('./template.html')
      .then(response => response.text())
      .then(html => {
        // Attach a shadow DOM for style encapsulation
        const shadow = this.attachShadow({ mode: 'open' });
        shadow.innerHTML = html;
      });
  }
}



customElements.define('re-nav', ReusableNav);



document.addEventListener('DOMContentLoaded', () => {
  
  // Find all rows that contain our toggle setup
  const tableRows = document.querySelectorAll('.hide-able tr');
  //const controlAll = document.getElementById('cc-all');

  tableRows.forEach(row => {
    const button = row.querySelector('.content-control');
    const target = row.querySelector('td');

    // Only apply logic if both the button and target exist in this row
    if (button && target) {
      // 1. Autohide the element on page load
      Array.from(target.children).forEach(child => child.style.display = 'none');
      target.style.visibility = 'hidden';
      target.style.height = '0';
      target.style.overflow = 'hidden';
      button.textContent = 'SHOW';

      // 2. Set up the click behavior
      button.addEventListener('click', function() {
        if (target.style.visibility === 'hidden') {
          Array.from(target.children).forEach(child => child.style.display = 'inline-block');
          target.style.visibility = 'visible';
          target.style.height = 'auto';
          this.textContent = 'HIDE';
        } else {
          Array.from(target.children).forEach(child => child.style.display = 'none');
          target.style.visibility = 'hidden';
          target.style.height = '0';
          this.textContent = 'SHOW';
        }
      });
    }
  });

  /*if (controlAll) {
    controlAll.addEventListener('click', () => {
      const state = controlAll.textContent;
      tableRows.forEach(row => {
        const button = row.querySelector('.content-control');
        const target = row.querySelector('.toggle-target');
        
        if (state === 'SHOW ALL') {
            target.style.display = 'block';
            controlAll.textContent = 'HIDE ALL';
        } else if (state === 'HIDE ALL') {
            target.style.display = 'none';
            button.textContent = 'SHOW ALL';
        }
    });
  });
  }*/

});
