document.addEventListener('DOMContentLoaded', () => {
  const smoothieBtn = document.getElementById('smoothieBtn');
  const smoothieLink = document.getElementById('smoothieLink');
  const submitForm = document.getElementById('submitForm');
  const recipeInput = document.getElementById('recipeInput');
  const submitMsg = document.getElementById('submitMsg');
  const starContainer = document.getElementById('ratingStars');
  const thankYouMsg = document.getElementById('ratingThanks');
  const extraThanks = document.getElementById('extraThanks');
  const submitRatingBtn = document.getElementById('submitRating');

  const smoothieRecipes = [
    "https://www.allrecipes.com/recipe/221261/peanut-butter-banana-smoothie/",
    "https://www.budgetbytes.com/mixed-berry-smoothie/",
    "https://www.foodnetwork.com/recipes/photos/smoothie-recipes",
    "https://www.prevention.com/food-nutrition/a20499756/20-super-healthy-smoothie-recipes/",
    "https://joybauer.com/healthy-recipes/3-ingredient-protein-smoothie/",
    "https://www.loveandlemons.com/green-smoothie/"
  ];

  smoothieBtn.addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random() * smoothieRecipes.length);
    smoothieLink.innerHTML = `<a href="${smoothieRecipes[randomIndex]}" target="_blank" rel="noopener noreferrer">${smoothieRecipes[randomIndex]}</a>`;
  });

  submitForm.addEventListener('submit', (e) => {
    e.preventDefault();
    if (recipeInput.value) {
      submitMsg.classList.remove('hidden'); 
      submitForm.reset();
      window.location.href = 'confirmation.html';
    }
  });

  for (let i = 0; i < 5; i++) {
    const starDiv = document.createElement('div');
    starDiv.classList.add('star');
    starDiv.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="gray" viewBox="0 0 24 24" class="star-icon">
        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
      </svg>`;
    starContainer.appendChild(starDiv);
  }

  const stars = starContainer.querySelectorAll('.star svg');

  stars.forEach((star, index) => {
    star.addEventListener('mouseover', () => {
      for (let i = 0; i <= index; i++) {
        stars[i].classList.add('hovered');
      }
    });

    star.addEventListener('mouseout', () => {
      stars.forEach(star => star.classList.remove('hovered'));
    });

    star.addEventListener('click', () => {
      stars.forEach(star => star.classList.remove('active-star'));
      for (let i = 0; i <= index; i++) {
        stars[i].classList.add('active-star');
      }
    });
  });

  submitRatingBtn.addEventListener('click', () => {
    thankYouMsg.classList.remove('hidden');
    extraThanks.classList.remove('hidden');
    setTimeout(() => {
      thankYouMsg.classList.add('hidden');
      extraThanks.classList.add('hidden');
    }, 4000);
  });
});