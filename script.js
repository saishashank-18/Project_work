// Function to search books
function searchBooks() {
  const input = document.getElementById('searchInput').value.toLowerCase();
  const rows = document.querySelectorAll('#bookTable tr');
  rows.forEach(row => {
    const cells = row.querySelectorAll('td');
    let match = false;
    cells.forEach(cell => {
      if (cell.textContent.toLowerCase().includes(input)) {
        match = true;
      }
    });
    row.style.display = match ? '' : 'none';
  });
}

// Function to handle add book
function addBook() {
  alert('Functionality to add a new book!');
  // Redirect to form or open modal to add book details
}

// Function to handle remove book
function removeBook() {
  alert('Functionality to remove a book!');
  // Open modal to select and remove book
}

// Function to handle feedback
function sendFeedback() {
  const feedback = prompt('Please provide your feedback:');
  if (feedback) {
    alert('Thank you for your feedback!');
    // You can send feedback to backend here
  }
}

// Function to edit a book
function editBook(id) {
  alert('Edit book with ID: ' + id);
  // Redirect to edit form or open modal
}

// Function to delete a book
function deleteBook(id) {
  const confirmDelete = confirm('Are you sure you want to delete book with ID: ' + id + '?');
  if (confirmDelete) {
    alert('Book deleted!');
    // Perform deletion logic here
  }
}
