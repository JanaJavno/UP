let currentUserName = '';

let user = function(login, mail, password){
    return {
        login,
        mail,
        password
    }
};

let userName = JSON.parse(localStorage.getItem('userName'));
if (!userName) {
    userName = currentUserName;
}
window.addEventListener("beforeunload", function () {
    if (!userName) {
        localStorage.setItem('userName', JSON.stringify(currentUserName));
    } else {
        localStorage.setItem('userName', JSON.stringify(userName));
    }
});
let currentRegisteredUsers = [];
let registeredUsers = JSON.parse(localStorage.getItem('userList'));
if (!registeredUsers) {
    registeredUsers = currentRegisteredUsers;
} else {
    registeredUsers.forEach(function (item) {
        item.createdAt = new Date(item.createdAt);
        item.plannedFor = new Date(item.plannedFor);
    });
}
window.addEventListener("beforeunload", function () {
    if (!registeredUsers) {
        localStorage.setItem('userList', JSON.stringify(currentRegisteredUsers));
    } else {
        localStorage.setItem('userList', JSON.stringify(registeredUsers));
    }
});
function showUser() {
    const header = document.getElementById('header');
    let userInfo = document.createElement('i');
    userInfo.classList.add('username');
    header.insertBefore(userInfo, header.getElementsByClassName('iwrap')[0]);
    if (!userName) {
        userInfo.innerHTML = `Зарегистрируйтесь или войдите`;
        document.getElementById("fab").style.visibility='hidden';
        document.getElementById('imale').style.visibility = 'hidden';
    }
    else {
        userInfo.innerText = "";
        userInfo.innerHTML = `${userName}`;
        document.getElementById('ikey').style.visibility = 'hidden';
    }
}

let modal = document.getElementById('registrModal');//form display
let modalBtn = document.getElementById('ikey');
modalBtn.addEventListener('click', function(){
    modal.style.display = 'block';
});
window.addEventListener('click', function(e){
    if (e.target === modal){
        modal.style.display = 'none';
    }
});

let userNameInput = document.getElementById("username");
let userPasswordName = document.getElementById("password");
document.forms[1].addEventListener("submit", function(e){
    e.preventDefault();
    let temp = registeredUsers.filter(user => ((user.login === userNameInput.value)
        &&(user.password === userPasswordName.value)));
    if (temp.length === 1){
        userName = userNameInput.value;
        modal.style.display = 'none';
        location.reload();
        alert("Добрый день");
    }
    else alert("Данная учетная запись отсутствует");
});

let registrBtn = document.getElementById('registrationBtn');
registrBtn.addEventListener("click", function(){
    document.getElementById("fullRegistrModal").style.display = 'block';
});

document.forms[2].addEventListener("submit", function(e){
    e.preventDefault();
    let temp = registeredUsers.filter(user => user.login === document.getElementById("loginR").value);
    if (temp.length === 0) {
        alert("Уважаемый(ая), " + document.getElementById("loginR").value + ", теперь Вы зарегистрированы");
        registeredUsers.push({
            login: document.getElementById("loginR").value,
            mail: document.getElementById("mailR").value,
            password: document.getElementById("passwordR").value,
        });
        userName = document.getElementById("loginR").value;
        location.reload();
    }
    else {
        alert("Пользователь с таким именем уже существует!");
    }
    document.getElementById("fullRegistrModal").style.display = 'none';
});

document.getElementById('imale').addEventListener('click', function(){
    userName = "";
    location.reload();
});