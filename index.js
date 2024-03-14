function addingEventListener() {
    const input = document.getElementById('button');

    function clickAlert() {
        alert('I was clicked!');
    }

    input.addEventListener('click', clickAlert);
}

const button = document.createElement('button');
button.id = 'button';
document.body.appendChild(button);

addingEventListener();

const eventListeners = button.onclick;
const isEventListenerAdded = typeof eventListeners === 'function';

console.log("Is event listener added?", isEventListenerAdded);
