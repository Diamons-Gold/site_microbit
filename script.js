function select(id) {
    var element = document.getElementById(id)
    if (element.classList.contains('select') == 1) {
        element.classList.remove('select');
    } else {
        element.classList.add('select')
        
    }
}