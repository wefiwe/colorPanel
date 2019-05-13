let addBtn = document.getElementById('addBtn');
addBtn.addEventListener('click', function() {
    
    
    let inputColor = document.getElementById('inputColor');
    let colorCode = inputColor.value;

    let newPanel = document.createElement('div');

    newPanel.style.backgroundColor = colorCode;
    newPanel.classList.add('panel');

    newPanel.addEventListener('click', clickedPanel);


    let box = document.getElementById('box');

    box.insertBefore(newPanel, box.firstChild);

    inputColor.value = '';
});

function clickedPanel() {
    let inputColor = document.getElementById('inputColor');
    let colorCode = inputColor.value;
    this.style.backgroundColor = colorCode;
}
