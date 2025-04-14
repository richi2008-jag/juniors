// Select the buttons
const button1 = document.createElement('button');
const button2 = document.createElement('button');

// Set button text
button1.textContent = 'Button 1';
button2.textContent = 'Button 2';

// Append only the first button initially
document.body.appendChild(button1);

// Function to toggle buttons
function toggleButtons() {
    if (document.body.contains(button1)) {
        document.body.replaceChild(button2, button1);
    } else {
        document.body.replaceChild(button1, button2);
    }
}

// Add event listeners to both buttons
button1.addEventListener('click', toggleButtons);
button2.addEventListener('click', toggleButtons);