const keys = document.querySelectorAll('.key');
const keysPressed = new Set();
let input = document.querySelector('input');

input.focus()

document.body.addEventListener('click', ()=>{
    input.focus()
})

document.body.addEventListener('keydown', (e) => {
    input.focus()
    const element = e.key.toLowerCase();
    console.log(element);
    keysPressed.add(element);
    keys.forEach(key => {
        if (keysPressed.has(key.dataset.key)) {
            key.style.transform = "translateY(3px)";
        }
    });
});

document.body.addEventListener('keyup', (e) => {
    const element = e.key.toLowerCase();
    keysPressed.delete(element);
    keys.forEach(key => {
        if (key.dataset.key === element) {
            key.style.transform = "translateY(0)";
        }
    });
});