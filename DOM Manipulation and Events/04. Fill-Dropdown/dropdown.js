function addItem() {
    let field = {
        text: document.getElementById('newItemText'),
        value: document.getElementById('newItemValue'),
        menu: document.getElementById('menu')
    }
    let option = document.createElement('option')
    option.value = field.value.value;
    option.textContent = field.text.value;

    field.menu.appendChild(option)
    field.value.value = ''
    field.text.value = ''
}