let currentPostAmount = postManager.size() + 1;
let postAmount = JSON.parse(localStorage.getItem('postAmount'));
if (!postAmount) {
    postAmount = currentPostAmount;
}
window.addEventListener("beforeunload", function () {
    if (!postAmount) {
        localStorage.setItem('postAmount', JSON.stringify(currentPostAmount));
    } else {
        localStorage.setItem('postAmount', JSON.stringify(postAmount));
    }
});
const postRenderer = (function() {
    const postGallery = document.getElementById('#gallery');
    let postsRendered = 0;
    let authorList = [];
    const postsAmountToRender = 10;
    function getTemplate(post) {
        return `
                <img src="${post.photoLink}" class="img">
                <div class="desc">
                    <span class = "name">${post.name}</span>
                     <span class = "age">(${post.age}+)</span>
                    <span class="planingDate">${post.plannedFor.toLocaleDateString()}</span>
                    <span class="description">${post.description}</span>
                </div>
                <div class="hashT">${post.hashTags.join('' + ' ')}</div>
                <div class="info">
                    <span class="author">${post.author}</span>
                    <span class="creatingDate">${post.createdAt.toLocaleDateString()}</span>
                    </div>
                <div class="button" title="хочу пойти">
                    <span class="icon"></span>
                </div>
                <button class="editButt" id="editButt"><span class="icon"></span></button>
                <button class="closeButt" id="closeButt"><span class="icon"></span><a href="#"></a></button>
                <div class="date"></div>
                <div class="postModal">
                    <div class="postModal-content">
                        <div class="fullPost">
                            <img src="${post.photoLink}" class="img">
                                <div class="desc">
                                    <span class = "name">${post.name}</span>
                                    <span class = "age">(${post.age}+)</span>
                                    <span class="planingDate">${post.plannedFor.toLocaleDateString()}</span>
                                    <span class="description">${post.description}</span>
                                </div>
                                <div class="hashT">${post.hashTags.join('' + ' ')}</div>
                                <div class="info">
                                <span class="author">${post.author}</span>
                                <span class="creatingDate">${post.createdAt.toLocaleDateString()}</span>
                                </div>
                                <div class="button" title="хочу пойти">
                                    <span class="icon"></span>
                                </div>
                                <button class="editButt" id="editButt"><span class="icon"></span></button>
                                <button class="closeButt" id="closeButt"><span class="icon"></span><a href="#"></a></button>
                                <div class="date"></div>
                        </div>
                    </div>
                </div>   
`;
    }
    function renderPost(post) {
        const template = getTemplate(post);
        const postElement = getPostElement(template, post.id);
        if (post.author !== userName) {
            postElement.querySelector(`#${'editButt'}`).style.visibility = 'hidden';
            postElement.querySelector(`#${'closeButt'}`).style.visibility = 'hidden';
            postElement.children[8].querySelector(`#${'editButt'}`).style.visibility = 'hidden';
            postElement.children[8].querySelector(`#${'closeButt'}`).style.visibility = 'hidden';
        }
        postElement.addEventListener('click', function(){
            document.getElementById(getPostEventId(post.id)).style.display = 'block';
        });
        window.addEventListener('click', function(e){
            if (e.target === document.getElementById(getPostEventId(post.id))){
                document.getElementById(getPostEventId(post.id)).style.display = 'none';
            }
        });
        postElement.querySelector(`#${'editButt'}`).addEventListener('click', function(e){
            e.stopPropagation();
            document.getElementById("editModal").style.display = 'block';
            const editModal = getEditModal(post);
            editModal.addEventListener('click', function (event) {
                event.stopPropagation();
            });
            document.getElementById('editModal').appendChild(editModal);
        });
        window.addEventListener('click', function(e){
            if (e.target === document.getElementById("editModal")) {
                document.getElementById("editModal").style.display = 'none';
            }
        });
        postElement.querySelector(`#${'closeButt'}`).addEventListener('click', function(e){
            e.stopPropagation();
            erasePost(post.id);
        });
        postGallery.appendChild(postElement);
    }
    function getEditModal(post) {
        const editModal = document.createElement('div');
        editModal.classList.add('addModalContent');
        editModal.innerHTML = `
                <form >
                    <ul>
                        <li><label for="nameE">Название</label></li>
                        <li><input type="text" class="nameE" id="nameE" required></li>
                        <li><label for="dateE">Дата</label></li>
                        <li><input type="date" class="dateE" id="dateE" required></li>
                        <li><label for="descripE">Описание</label></li>
                        <li><input type="text" class="descripE" id="descripE" required></li>
                        <li><label for="ageE">Возрастная категория</label></li>
                        <li><input type="text" class="ageE" id="ageE" required></li>
                        <li><label for="hashTagsE">     Хэштеги</label></li>
                        <li><input type="text" class="hashTagsE" id="hashTagsE"></li>
                        <li><label for="photoE">Фото</label></li>
                        <li><input type="text" class="photoE" id="photoE"></li>
                        <li><label for="scaleE">Локация(local/global)</label></li>
                        <li><input type="text" class="scaleE" id="scaleE"></li>
                    </ul>
                    <input type="submit" id="submitEditting">
                </form>
            `;
        editModal.children[0].children[1].addEventListener('click', function () {
            const name = editModal.querySelector(`#${'nameE'}`);
            const date = editModal.querySelector(`#${'dateE'}`);
            const desc = editModal.querySelector(`#${'descripE'}`);
            const age = editModal.querySelector(`#${'ageE'}`);
            const hash = editModal.querySelector(`#${'hashTagsE'}`);
            const photo = editModal.querySelector(`#${'photoE'}`);
            const loc = editModal.querySelector(`#${'scaleE'}`);
            const updatePost = {
                name: name.value,
                date: date.value,
                description: desc.value,
                age: age.value,
                hashTags: hash.value.split(" "),
                photoLink: photo.value,
                scale: loc.value,
            };
            if (editPost(post.id, updatePost)){
                alert("Редактирование прошло успешно");
            }
            else alert("Некорректные для редактирования данные");
            document.getElementById("editModal").style.display = 'none';
        });
        return editModal;
    }
    function getPostElement(template, id) {
        const postElement = document.createElement('div');
        postElement.classList.add('post');
        postElement.id = getPostId(id);
        postElement.innerHTML = template;
        postElement.children[8].id  = getPostEventId(id);
        return postElement;
    }
    function getPostId(id) {
        return `post-${id}`;
    }
    function getPostEventId(id) {
        return `postEvent-${id}`;
    }
    function renderMore(filterConfig){
        let postsToRender = [];
        if (filterConfig){
            postsToRender = postManager.getPhotoPosts(postsRendered, postsAmountToRender, filterConfig);
        }
        else {
            postsToRender = postManager.getPhotoPosts(postsRendered, postsAmountToRender);
        }
        postsToRender.forEach(elem => postRenderer.renderPost(elem));
        postsRendered += postsToRender.length;
    }
    function displayNewPost(photoPost){
        if (postManager.addPhotoPost(photoPost)){
            postAmount = postAmount + 1;
            clear();
            renderMore();
            return true;
        }
        else return false;
    }
    function erasePost(id) {
        const postToRemove = postGallery.querySelector(`#${getPostId(id)}`);
        postsRendered--;
        postGallery.removeChild(postToRemove);
        postManager.removePhotoPost(id);
    }
    function editPost(id, photoPost) {
        if (postManager.editPhotoPost(id, photoPost)) {
            const postToEdit = postGallery.querySelector(`#${getPostId(id)}`);
            const template = getTemplate(postManager.getPhotoPost(id));
            const updatedPost = getPostElement(template, id);
            postGallery.replaceChild(updatedPost, postToEdit);
            return true;
        }
        else return false;
    }
    function clear() {
        postGallery.innerText = "";
        postsRendered = 0;
    }
    function reload(){
        clear();
        renderMore();
    }
    return {
        renderPost,
        renderMore,
        displayNewPost,
        erasePost,
        editPost,
        clear,
        reload
    }
})();