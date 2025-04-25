document.addEventListener('DOMContentLoaded', () => {
    let countdownTime = 10; // Matching countdown duration to HTML
    const countdownElement = document.getElementById('countdownDisplay'); // Correct ID
    const backButton = document.getElementById('backButton');
    
    const countdownInterval = setInterval(() => {
      countdownElement.textContent = `Redirecting in ${countdownTime} seconds...`; // Updated message
      countdownTime--;
    
      if (countdownTime < 0) {
        clearInterval(countdownInterval);
        window.location.href = 'index.html'; 
      }
    }, 1000);
    
    setTimeout(() => {
      backButton.classList.remove('hidden');
      backButton.addEventListener('click', () => {
        window.location.href = 'index.html'; 
      });
    }, 5000);
  });  