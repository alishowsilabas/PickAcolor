const colors = ['Red', 'Green', 'Blue', 'Yellow', 'Purple'];
const button = document.getElementById('btn');
const color = document.querySelector('.color');

button.addEventListener('click', function() {
    const randomColor = genRandomColor()
    this.style.background = colors[randomColor]
    color.textContent = colors[randomColor]
})

function genRandomColor() {
    return Math.floor(Math.random() * colors.length)
}