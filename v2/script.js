var older;
var set;

function select(id) {
    var element = document.getElementById(id)
    var older = document.getElementById(window.older)

    if (element.classList.contains('select') == 1) {
        element.classList.remove('select');
        element.style.zIndex = '10';
        window.older = id
        window.set = 'false'
    } else {
        if (!set) {
            element.classList.add('select')
            element.style.zIndex= '10';
        } else if (window.set == 'false') {
            element.classList.add('select')
            element.style.zIndex= '10';
        }
        if (older && window.older != id) {
            older.style.zIndex= '1';
        }
        window.set = 'true'
    }
}
