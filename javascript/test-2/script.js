
function add() {
    let input = document.getElementById('input').value;

    if(input.length > 0) {
        let li = document.createElement('li');
        li.appendChild(document.createTextNode(input + ' '));
    
        let span = document.createElement('span');
        span.innerHTML = '<a href="#" target="_self">[Delete]</a>';
        span.firstChild.addEventListener('click', deleteItem);
        li.appendChild(span);
        document.getElementById('items').appendChild(li);
        document.getElementById('input').value = '';
    }
};

function deleteItem() {
    let li = this.parentNode.parentNode;
    console.log(this)
    let ul = li.parentNode;
    ul.removeChild(li);
};

function onoff() {
    if (document.getElementById('par').style.display == 'block') {
        document.getElementById('par').style.display = 'none';
    } else {
        document.getElementById('par').style.display = 'block';
    }
    
}