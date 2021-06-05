var root = document.querySelector(':root')
var rootStyle = getComputedStyle(root);

function select(id) {
    var element = document.getElementById(id)
    if (element.classList.contains('select') == 1) {
        element.classList.remove('select');
    } else {
        element.classList.add('select')

        var x = element.getBoundingClientRect().left;
        root.style.setProperty('--x', x + 'px');
        var y = element.getBoundingClientRect().top;
        root.style.setProperty('--y', y + 'px');
    }
}