
window.onload = function() {
    if(localStorage.getItem('username') && localStorage.getItem('password')) {
        var btn = document.getElementById('existing');
        btn.style.display = "block";
        btn.onclick = function() {
            alert('Logged in as ' + localStorage.getItem('username'));
        };
    }
};

function submitForm() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var remember = document.getElementById('checkbox').checked;

    if(remember) {
        localStorage.setItem('username', username);
        localStorage.setItem('password', password);
    } else {
        localStorage.removeItem('username');
        localStorage.removeItem('password');
    }

    alert('Logged in as ' + username);
}