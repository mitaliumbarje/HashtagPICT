// Start profile popup
document.querySelectorAll('#profilepic').forEach(AllProfile => {
    AllProfile.addEventListener('click', () => {
        document.querySelector('.profile-popup').style.display = 'flex';
    });
});

document.querySelectorAll('.close').forEach(AllCloser => {
    AllCloser.addEventListener('click', () => {
        document.querySelector('.profile-popup').style.display = 'none';
        document.querySelector('.add-post-popup').style.display = 'none';
    });
});

document.querySelectorAll('#profile-upload').forEach(input => {
    input.addEventListener('change', () => {
        document.querySelectorAll('#profilepic img').forEach(AllProfileImg => {
            AllProfileImg.src = URL.createObjectURL(input.files[0]);
        });
    });
});

// Add post start
document.querySelector('#crate-lg').addEventListener('click', () => {
    document.querySelector('.add-post-popup').style.display = 'flex';
});

document.querySelector('#feed-pic-upload').addEventListener('change', () => {
    document.querySelector('#postimg').src = URL.createObjectURL(document.querySelector('#feed-pic-upload').files[0]);
});

// Highlight post input
document.querySelector('.mini-button').addEventListener('click', () => {
    // Assuming you have an element with the class 'input-post'
    document.querySelector('.input-post').classList.add('boxshadow');
});
