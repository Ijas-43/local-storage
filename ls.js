function signup(e){
    event.preventDefault();

    var email = document.getElementById('email').value;
    
    var username = document.getElementById('uname').value;
    
    var psd = document.getElementById('password').value;
    
    var num = document.getElementById('number').value;

    var user = {
        email: email,
        uname: username,
        password: psd,
        number: num,
    };

    var json = JSON.stringify(user);
    localStorage.setItem(user, json);
    console.log('user Added');
}