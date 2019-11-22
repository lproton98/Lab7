function init() {

    var button = document.getElementById('entrybutton');
    var input = document.getElementById('entryinput');
    var h2 = document.getElementById('textoutput');

    button.addEventListener('click', function() {
        alert('Lukas Proffen:' + input.value);
    });

    button.addEventListener('click', function() {
        h2.innerHTML = input.value;
    });

}
window.addEventListener('load', init);