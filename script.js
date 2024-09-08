document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.btn');
    const display = document.getElementById('result');
    const operators = ['+', '-', '*', '/'];

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const currentValue = display.value;
            const lastChar = currentValue.slice(-1);

            if (this.innerHTML === 'C') {
                display.value = '';
            } else if (this.innerHTML === '=') {
                try {
                    display.value = eval(display.value);
                } catch (e) {
                    display.value = 'Mana bisa gitu woi!';
                }
            } else if (this.innerHTML === '+/-') {
                display.value = display.value * -1;
            } else if (this.classList.contains('delete')) {
                display.value = display.value.slice(0, -1); 
            } else {

                if (operators.includes(this.innerHTML)) {

                    if (operators.includes(lastChar)) {
                   display.value = currentValue.slice(0, -1) + this.innerHTML;
                    } else {
                        display.value += this.innerHTML;
                    }
                } else {
                    display.value += this.innerHTML;
                }
            }
        });
    });
});
   const toggleButton = document.querySelector('.toggle-button');
const navbarLinks = document.querySelector('.navbar-links');
const arrowButton = document.querySelector('.arrow-button');
const navLinks = document.querySelectorAll('.navbar-links a');

toggleButton.addEventListener('click', () => {
    navbarLinks.classList.add('active');
});

arrowButton.addEventListener('click', () => {
    navbarLinks.classList.remove('active');
});