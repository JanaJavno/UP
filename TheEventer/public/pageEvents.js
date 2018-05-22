let eventFilter = undefined;

postRenderer.renderMore(eventFilter);//first default posts
showUser();//user properties

let paginButt = document.getElementById("paginationButt");//pagination
paginButt.addEventListener("click", function () {
    postRenderer.renderMore(eventFilter);
});

let searchInput = document.getElementById("search");//search form
document.forms[0].addEventListener("submit", function (e) {
    e.preventDefault();
    let request = searchInput.value;
    postRenderer.clear();
    let result = [];
    switch (request.slice(0, 1)){
        case '':
            eventFilter.plannedFor === undefined ? postRenderer.reload() :
                postRenderer.renderMore({plannedFor: new Date(eventFilter.plannedFor)});
            break;
        case '@':
            eventFilter === undefined ? eventFilter = {author: request.slice(1, request.length)} :
                eventFilter.author = request.slice(1, request.length);
            postRenderer.renderMore(eventFilter);
            break;
        case '#':
            eventFilter === undefined ? eventFilter = {hashTags: request.split(" ")} :
                eventFilter.hashTags = request.split(" ");
            postRenderer.renderMore(eventFilter);
            break;
        default:
            eventFilter === undefined ? eventFilter = {description: request} :
                eventFilter.description = request;
            postRenderer.renderMore(eventFilter);
    }
});

let dateInput = document.getElementById('newCalendar'); //не знаю, как отменить пустую сортировку для reset календаря
dateInput.addEventListener('change', function(){
    if (dateInput.value) {
        postRenderer.clear();
        let result = [];
        if (eventFilter) {
            eventFilter.plannedFor = new Date(dateInput.value);
            result = postRenderer.renderMore(eventFilter);
        }
        else {
            eventFilter = {plannedFor: new Date(dateInput.value)};
            result = postRenderer.renderMore(eventFilter);
        }
    }
});

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

let registrBtn = document.getElementById('registrationBtn');
registrBtn.addEventListener("click", function(){
    postRenderer.clear();
    alert("hi");
});
