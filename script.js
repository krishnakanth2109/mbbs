document.getElementById('leadForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const name = document.querySelector('input[name="name"]').value;
    const email = document.querySelector('input[name="email"]').value;
    const phone = document.querySelector('input[name="phone"]').value;
    const country = document.querySelector('select[name="country"]').value;
  
    if (!name || !email || !phone || !country) {
      alert('Please fill out all fields.');
      return;
    }
  
    alert('Form submitted successfully!');
    // You can add AJAX call here to send data to the server.
  });