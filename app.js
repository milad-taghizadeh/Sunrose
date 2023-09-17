const darkModeBtn = document.getElementById('darkModeBtn');
const home = document.getElementById('home');
const button2 = document.getElementById('button2');
const aboutUs = document.getElementById('aboutUs');
const page1 = document.getElementById('page1');
const page2 = document.getElementById('page2');
const page3 = document.getElementById('page3');
const progressBar = document.getElementById('progressBar');
const body = document.body;

darkModeBtn.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
});

const showPage = (page) => {
    page1.classList.add('hidden');
    page2.classList.add('hidden');
    page3.classList.add('hidden');
    page.classList.remove('hidden');
};
const simulateLoading = (page) => {
    let progress = 0;
    const interval = setInterval(() => {
        progress += 10;
        progressBar.style.width = `${progress}%`;
        if (progress >= 100) {
            clearInterval(interval);
            progressBar.style.width = '0';
            showPage(page);
        }
    }, 150);
};

home.addEventListener('click', () => {
    simulateLoading(page1);
});

button2.addEventListener('click', () => {
    simulateLoading(page2);
});

aboutUs.addEventListener('click', () => {
    simulateLoading(page3);
});

// Get header element
const header = document.querySelector('.header');

// Set initial header height
let prevScrollPos = window.scrollY;
let headerHeight = 6; // Change this value to your desired initial height

// Function to handle scroll event
const handleScroll = () => {
    const currentScrollPos = window.scrollY;

    // Check if scrolling up or down
    if (prevScrollPos > currentScrollPos) {
        // Scrolling up, increase header height
        headerHeight += 1; // Change this value to adjust the speed of the height change
    } else {
        // Scrolling down, decrease header height
        headerHeight -= 1; // Change this value to adjust the speed of the height change
    }

    // Limit the minimum and maximum header height
    headerHeight = Math.max(4, headerHeight); // Change the minimum height value
    headerHeight = Math.min(5, headerHeight); // Change the maximum height value

    // Apply the new header height
    header.style.height = `${headerHeight}rem`;

    // Update previous scroll position
    prevScrollPos = currentScrollPos;
};

// Attach scroll event listener
window.addEventListener('scroll', handleScroll);