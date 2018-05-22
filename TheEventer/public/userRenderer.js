let userName = '';

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
        userInfo.innerHTML = `${userName}`;
        document.getElementById('ikey').style.visibility = 'hidden';
    }
}