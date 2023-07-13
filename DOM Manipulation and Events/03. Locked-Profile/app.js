function lockedProfile() {
    let cards = Array.from(document.getElementsByClassName('profile'));

    cards.map(x => x.addEventListener('click', (e) => {
        const radio = e.currentTarget.querySelector('input[type="radio"][value="unlock"]');
        const button = e.currentTarget.querySelector('button');
        const hidden = e.currentTarget.querySelector('div');

        if (radio.checked) {
            if (e.target.matches('button')) {
                if (button.textContent === 'Show more') {
                    button.textContent = 'Hide it';  
                    hidden.style.display = 'block';
                } else {
                    button.textContent = 'Show more';  
                    hidden.style.display = 'none';
                }
            }
        }
    }));
}
