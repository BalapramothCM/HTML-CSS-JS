document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault();

  // Get form data
  const formData = new FormData(event.target);
  const formDataObj = Object.fromEntries(formData.entries());

  // Send POST request to server
  fetch('http://localhost:3000/send-email', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(formDataObj)
  })
  .then(response => {
    if (!response.ok) {
      throw new Error('Failed to send email');
    }
    return response.text();
  })
  .then(data => {
    alert(data); // Show success message
  })
  .catch(error => {
    alert('Error: ' + error.message);
  });
});