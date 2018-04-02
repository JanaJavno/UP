const postRenderer = (function() {
    const postGallery = document.getElementById('#gallery');
    let postsRendered = 0;
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
                <div class="hashT">${post.hashTags.join('' +
            ' ')}</div>
                <div class="info">
                    <span class="author">${post.author}</span>
                    <span class="creatingDate">${post.createdAt.toLocaleDateString()}</span>
                    </div>
                <div class="button" title="хочу пойти">
                    <span class="icon"></span>
                </div>
                <button class="editButt" id="editButt"><span class="icon"></span></button>
                <button class="closeButt" id="closeButt"><span class="icon"></span><a href="#"></a></button>
                <div class="date"></div>`;
    }
    function renderPost(post) {
        const template = getTemplate(post);
        const postElement = getPostElement(template, post.id);
        if (post.author !== userName) {
            postElement.querySelector(`#${'editButt'}`).style.visibility = 'hidden';
            postElement.querySelector(`#${'closeButt'}`).style.visibility = 'hidden';
        }
        postGallery.appendChild(postElement);
    }
    function getPostElement(template, id) {
        const postElement = document.createElement('div');
        postElement.classList.add('post');
        postElement.id = getPostId(id);
        postElement.innerHTML = template;
        return postElement;
    }
    function getPostId(id) {
        return `post-${id}`;
    }
    function renderMore(){
        const postsToTake = postsRendered + postsAmountToRender > postManager.size ?
            postManager.size - postsRendered : postsAmountToRender;
        let postsToRender = postManager.getPhotoPosts(postsRendered, postsToTake);
        for (let i = 0; i < postsToTake; i++) {
            postRenderer.renderPost(postsToRender[i]);
        }
        postsRendered += postsToTake;
    }
    function displayNewPost(photoPost){
        if (postManager.addPhotoPost(photoPost)){
            const template = getTemplate(photoPost);
            const postElement = getPostElement(template, photoPost.id);
            postGallery.insertBefore(postElement, postGallery.children[0]);
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
    return {
        renderPost,
        renderMore,
        displayNewPost,
        erasePost,
        editPost,
    }
})();