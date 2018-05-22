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
        postGallery.appendChild(postElement);
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
            clear();
            renderMore();
            return true;
        }
        else return false;
    }
    function erasePost(id) {
        const postToRemove = postGallery.querySelector(`#${getPostId(id)}`);
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
        postsRendered = 0;
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