function toggle (){
    const divShowName = document.querySelector('#block_name');
    if (this.checked){
        divShowName.style.display = 'block';
    } else {
        divShowName.style.display = 'none';
    }
}
document.getElementById('showName_yes').onchange = toggle;

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
    
    if (picture.value==='') {
        const imageUser = document.createElement('img');
        
        function getRandomAvatar (){
            const avatars = [
                './assets/images/1.png',
                './assets/images/2.png',
                './assets/images/3.png',
                './assets/images/4.png',
                './assets/images/5.png'
            ]
            const randomIndex = Math.floor(Math.random()* avatars.length);
            return avatars[randomIndex];
        }
        imageUser.src = getRandomAvatar();
        chatContent.append(imageUser);
        imageUser.classList.add('image');
    } else {
        const imageUser = document.createElement('img');
        imageUser.src = picture.value;
        chatContent.append(imageUser);
        imageUser.classList.add('image');
    }

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



