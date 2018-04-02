let userName = 'Иванов Евгений';

function showUser() {
    const header = document.getElementById('header');
    let userInfo = document.createElement('i');
    userInfo.classList.add('username');
    header.insertBefore(userInfo, header.getElementsByTagName('a')[2]);
    if (!userName) {
        userInfo.innerHTML = `Зарегистрируйтесь или войдите`;
        document.getElementById("fab").style.visibility='hidden';
        document.getElementById('imale').style.visibility = 'hidden';
    }
    else {
        userInfo.innerHTML = `${userName}`;
        document.getElementById('ikey').style.visibility = 'hidden';
    }
    const userIcon = document.createElement('i');
    userIcon.classList.add('material-icons');
    userIcon.classList.add('log-out');
    userIcon.innerText = 'account_circle';
    header.appendChild(userIcon);
}