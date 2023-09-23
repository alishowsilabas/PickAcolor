const colors = ['Red', 'Green', 'Blue', 'Yellow', 'Purple'];
const button = document.getElementById('btn');

button.addEventListener('click', function() {
    this.style.background = colors[Math.floor(Math.random() * colors.length)]
})