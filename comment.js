document.getElementById('comment-btn').addEventListener('click', () => {
    const commentBox = document.getElementById('comment-box');
    const commentBoxValue = commentBox.value
    
    const commentPlace = document.getElementById('Comment place');
    const makePTag = document.createElement('p');
    makePTag.style.backgroundColor = 'blueviolet';
    makePTag.style.padding = '20px';
    makePTag.style.borderRadius = '10px';
    makePTag.style.color = 'white';
    
    makePTag.innerText = commentBoxValue;

    commentPlace.appendChild(makePTag);
    commentBox.value = '';
})