const form = document.getElementById('registration-form');
    const cardContainer = document.getElementById('card-container');

    form.addEventListener('submit', function(event) {
      event.preventDefault();
      createCard();
      form.reset();
    });

    function createCard() {
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const website = document.getElementById('website').value;
      const image = document.getElementById('image').value;
      const gender = document.getElementById('gender').value;
      const skills = getSelectedSkills();

      const card = document.createElement('div');
      card.classList.add('card');

      card.innerHTML = `
        <p class="card-title"></p>
        <div class="card-item">
          <span class="card-item-label"></span>
          <span class="card-item-value">${name}</span>
        </div>
        <div class="card-item">
          <span class="card-item-label"></span>
          <span class="card-item-value">${gender}</span>
        </div>
        <div class="card-item">
          <span class="card-item-label"></span>
          <span class="card-item-value">${email}</span>
        </div>
        <div class="card-item">
          <span class="card-item-label"></span>
          <span class="card-item-value">${website}</span>
        </div>
        <div class="card-item">
          <span class="card-item-label"></span>
          <img src="${image}" alt="Student Image" class="card-image">
        </div>
        <div class="card-item">
          <span class="card-item-label"></span>
          <span class="card-item-value">${skills.join(', ')}</span>
        </div>
      `;

      cardContainer.appendChild(card);
    }

    function getSelectedSkills() {
      const skills = document.getElementsByName('skills');
      const selectedSkills = [];

      skills.forEach(skill => {
        if (skill.checked) {
          selectedSkills.push(skill.value);
        }
      });

      return selectedSkills;
    }

  