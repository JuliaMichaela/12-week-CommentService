function createNewComment () {
    const chatContent = document.querySelector('#chatcontent');

    const author = document.querySelector('#author');
    const authorName = author.value;

    if (authorName ===''){
        const divName = document.createElement('div');
        divName.innerHTML = 'Username';
        chatContent.append(divName);
        divName.classList.add ('item-chat');
    } else {
        function checkName (authorName) {
            let nameCheck;
            nameCheck = authorName.trim();
            nameCheck = nameCheck.toLowerCase();
            nameCheck = nameCheck.charAt(0).toUpperCase()+ nameCheck.slice(1);
            return nameCheck;
        }
    
        const divName = document.createElement('div');
        divName.innerHTML = checkName (authorName);
        chatContent.append(divName);
        divName.classList.add ('item-chat');
    }

    let options = {
        weekday: 'short',
        day: 'numeric',
        month: 'long',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
    }

    const divTime = document.createElement('div');
    divTime.innerHTML = `${new Date().toLocaleString("en-fi", options)}`;
    chatContent.append(divTime);
    
    
    const picture = document.getElementById('picture');
    const imageUser = document.createElement('img');
    imageUser.src = picture.value;
    chatContent.append(imageUser);
    imageUser.classList.add('image');

    const comment = document.querySelector('#usercomment');
    const commentUser = comment.value;
    
    function checkSpam(commentUser) {

        let spamCheck;
    
        spamCheck = commentUser.replace(/viagra/ig, "***");
        spamCheck = spamCheck.replace(/XXX/ig, "***");
        return spamCheck;
    }

    const userComment = document.createElement('p');
    userComment.innerHTML = checkSpam(commentUser);
    chatContent.append(userComment);

    author.value = '';
    picture.value = '';
    comment.value = '';

}

const buttonSend = document.querySelector('#btn');
buttonSend.addEventListener('click', createNewComment);



