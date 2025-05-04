// Gallery Navigation
const images = document.querySelectorAll('.gallery img');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
let currentImageIndex = 0;

// Function to update the active image
function updateGallery() {
    images.forEach((img, index) => {
        img.classList.toggle('active', index === currentImageIndex);
    });
}

// Event listener for the previous button
prevBtn.addEventListener('click', () => {
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    updateGallery();
});

// Event listener for the next button
nextBtn.addEventListener('click', () => {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    updateGallery();
});

// Add click event to enlarge the image
images.forEach((img) => {
    img.addEventListener('click', () => {
        if (img.classList.contains('enlarged')) {
            img.classList.remove('enlarged');
        } else {
            images.forEach((i) => i.classList.remove('enlarged')); // Remove enlargement from other images
            img.classList.add('enlarged');
        }
    });
});

// Tab Navigation
const tabs = document.querySelectorAll('.tab');
const tabContents = document.querySelectorAll('.tab-content');

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const targetTab = tab.getAttribute('data-tab');

        // Remove active class from all tabs and contents
        tabs.forEach(t => t.classList.remove('active'));
        tabContents.forEach(content => content.classList.remove('active'));

        // Add active class to the clicked tab and corresponding content
        tab.classList.add('active');
        document.getElementById(targetTab).classList.add('active');
    });
});

const textColorChanger = document.getElementById('textColorChanger');

// Event listener to change text and color
textColorChanger.addEventListener('click', () => {
    // Toggle text
    if (textColorChanger.textContent === 'Click Me to Change Text and Color') {
        textColorChanger.textContent = 'You Changed Me!';
    } else {
        textColorChanger.textContent = 'Click Me to Change Text and Color';
    }

    // Toggle color
    const currentColor = textColorChanger.style.backgroundColor;
    textColorChanger.style.backgroundColor = currentColor === 'blue' ? 'green' : 'blue';
    textColorChanger.style.color = 'white'; // Ensure text is visible
});

// Button Click Event
const clickMeButton = document.getElementById('clickMe');
clickMeButton.addEventListener('click', () => {
    alert('Button clicked!');
});

// Hover Effect
const hoverBox = document.getElementById('hoverBox');
hoverBox.addEventListener('mouseover', () => {
    hoverBox.style.backgroundColor = 'lightblue';
    hoverBox.textContent = 'You hovered over me!';
});
hoverBox.addEventListener('mouseout', () => {
    hoverBox.style.backgroundColor = '';
    hoverBox.textContent = 'Hover Over Me!';
});

// Keypress Detection
const keyInput = document.getElementById('keyInput');
keyInput.addEventListener('keydown', (event) => {
    console.log(`Key pressed: ${event.key}`);
});

// Secret Action: Double-Click or Long Press
const secretElement = document.getElementById('secret');

// Double-click action
secretElement.addEventListener('dblclick', () => {
    alert('Double-click detected! Secret revealed!');
});

// Long press action
let pressTimer;
secretElement.addEventListener('mousedown', () => {
    pressTimer = setTimeout(() => {
        alert('Long press detected! Secret revealed!');
    }, 2000); // 2 seconds for long press
});
secretElement.addEventListener('mouseup', () => {
    clearTimeout(pressTimer);
});
secretElement.addEventListener('mouseleave', () => {
    clearTimeout(pressTimer);
});

const signupForm = document.getElementById('signupForm');
const usernameInput = document.getElementById('username');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');

const usernameError = document.getElementById('usernameError');
const emailError = document.getElementById('emailError');
const passwordError = document.getElementById('passwordError');

// Real-time validation
usernameInput.addEventListener('input', () => {
    usernameError.textContent = usernameInput.value.trim() === '' ? 'Username is required.' : '';
});

emailInput.addEventListener('input', () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    emailError.textContent = emailInput.value.trim() === '' 
        ? 'Email is required.' 
        : !emailRegex.test(emailInput.value) 
        ? 'Invalid email format.' 
        : '';
});

passwordInput.addEventListener('input', () => {
    passwordError.textContent = passwordInput.value.length < 8 
        ? 'Password must be at least 8 characters long.' 
        : '';
});

// Form submission validation
signupForm.addEventListener('submit', (event) => {
    let isValid = true;

    if (usernameInput.value.trim() === '') {
        usernameError.textContent = 'Username is required.';
        isValid = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailInput.value.trim() === '' || !emailRegex.test(emailInput.value)) {
        emailError.textContent = 'Invalid email format.';
        isValid = false;
    }

    if (passwordInput.value.length < 8) {
        passwordError.textContent = 'Password must be at least 8 characters long.';
        isValid = false;
    }

    if (!isValid) {
        event.preventDefault(); // Prevent form submission
    }
});