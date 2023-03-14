const dragItem = document.querySelector('.item')
const placeholders = document.querySelectorAll('.placeholder')

dragItem.addEventListener('dragstart', dragStart)


dragItem.addEventListener('dragend', dragEnd)

for (const placeholder of placeholders) {
    placeholder.addEventListener('dragover', dragover);
    placeholder.addEventListener('dragenter', dragenter);
    placeholder.addEventListener('dragleave', dragleave);
    placeholder.addEventListener('drop', dragDrop);
    placeholder.addEventListener('touchmove', (e) => {
        // console.log(e.target);
    });
    placeholder.addEventListener('touchend', (e) => {
        console.log(e.target);
    });
}

function dragStart(event) {
    event.target.classList.add('hold');
    setTimeout(() => {event.target.classList.add('hide')}, 0)
    
}

function dragEnd(event) {
    event.target.classList.remove('hold', 'hide')
}


function dragover(event) {
    event.preventDefault();
}
function dragenter(event) {
    event.target.classList.add('hovered');
}
function dragleave(event) {
    event.target.classList.remove('hovered');
}
function dragDrop(event) {
    event.target.classList.remove('hovered');
    event.target.append(dragItem);
}