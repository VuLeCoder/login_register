var login_title = "Wellcome back 😘";
var login = document.getElementById('login_title');
var i=0;
var type_login;

function typing_login_title(){

    if(i < login_title.length){
        login.innerHTML += login_title.charAt(i);
        i++;
    }
    type_login = setTimeout(typing_login_title, 190);
}
var register_title = "Create your account";
var register = document.getElementById('register_title');
var j = 0;
var type_register;

function typing_register_title(){
    if(j < register_title.length){
        register.innerHTML += register_title.charAt(j);
        j++;
    }
    type_register = setTimeout(typing_register_title, 190);
}

window.onload = typing_login_title;


function go_to_register(){
    register.innerHTML = "";
    j = 0;
    clearTimeout(type_login);

    document.getElementById('introduce').classList.add("introduce_expand");
    document.getElementById('go_to_register_page').style.display = 'none';

    setTimeout(() => {
        document.getElementById('login').style.display = 'none';
        document.getElementById('register').style.display = 'flex';

        document.getElementById('introduce').classList.remove("introduce_login");
        document.getElementById('introduce').classList.add("introduce_register");
        document.getElementById('introduce').classList.remove("introduce_expand");
    }, 700);

    setTimeout(() => {
        document.getElementById('go_to_login_page').style.display = 'flex';
        typing_register_title();
    }, 1000);

}

function go_to_login(){
    login.innerHTML = "";
    i = 0;
    clearTimeout(type_register);
    
    document.getElementById('introduce').classList.add("introduce_expand");
    document.getElementById('go_to_login_page').style.display = 'none';

    setTimeout(() => {
        document.getElementById('login').style.display = 'flex';
        document.getElementById('register').style.display = 'none';

        document.getElementById('introduce').classList.remove("introduce_register");
        document.getElementById('introduce').classList.add("introduce_login");
        document.getElementById('introduce').classList.remove("introduce_expand");
    }, 700);

    setTimeout(() => {
        document.getElementById('go_to_register_page').style.display = 'flex';
        typing_login_title();
    }, 1000);
}


var password_field = document.getElementById('password_field');
var password_field_2 = document.getElementById('password_field_2');
var password_field_3 = document.getElementById('password_field_3');
function show_hide_pass(){
    if(password_field.type === 'password')
    {
        password_field.type = 'text';
        document.getElementById('eye').classList.remove("fa-eye");
        document.getElementById('eye').classList.add("fa-eye-slash");
    }
    else
    {
        password_field.type = 'password';
        document.getElementById('eye').classList.remove("fa-eye-slash");
        document.getElementById('eye').classList.add("fa-eye");
    }
}

function show_hide_pass_2(){
    if(password_field_2.type === 'password')
    {
        password_field_2.type = 'text';
        document.getElementById('eye_2').classList.remove("fa-eye");
        document.getElementById('eye_2').classList.add("fa-eye-slash");
    }
    else
    {
        password_field_2.type = 'password';
        document.getElementById('eye_2').classList.remove("fa-eye-slash");
        document.getElementById('eye_2').classList.add("fa-eye");
    }
}

function show_hide_pass_3(){
    if(password_field_3.type === 'password')
    {
        password_field_3.type = 'text';
        document.getElementById('eye_3').classList.remove("fa-eye");
        document.getElementById('eye_3').classList.add("fa-eye-slash");
    }
    else
    {
        password_field_3.type = 'password';
        document.getElementById('eye_3').classList.remove("fa-eye-slash");
        document.getElementById('eye_3').classList.add("fa-eye");
    }
}



function login_submit(){
    let username = document.getElementById('user_field').value;
    let password = password_field.value;

    if (username === "" || password === "")
    {
        alert("Please fill in all blank!");
        console.log("Please fill in all blank!");
    }
    else 
    {
        console.log("Logging in with username: " + username);
        console.log("Logging in with password: " + password);
        alert('login successful, redirecting...');
        document.getElementById('user_field').value = "";
        document.getElementById('password_field').value = "";
    }
}

function register_submit(event){
    let username = document.getElementById('user_field_2');
    let password = password_field_2;
    let confirm_pass = password_field_3;

    if (username.value === "" || password.value === "" || confirm_pass.value === "")
    {
        alert("Please fill in all blank!");
        console.log("Please fill in all blank!");
    }
    else
    {
        if(confirm_pass.value === password.value)
        {
            console.log("Your account username: " + username);
            console.log("Your account password: " + password);
            alert('Register successful, redirecting...');

            username.value = "";
            password_field_2.value = "";
            password_field_3.value = "";

            
            // event.preventDefault();
            // location.reload();
        }
        else
        {
            alert('Password do not match. Please try again');
            password_field_2.value = "";
            password_field_3.value = "";
        }
    }
}
