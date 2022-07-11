//set display state
//Select dom elements i.e shareBtn, share, share-icon-white2, share-icon-grey
//add a click event to the share btn
// create a function that toggles the display of the share div

let display = false;

const shareBtn = document.querySelector('.share-icon-grey');
const whiteShareBtn = document.querySelector('.share-icon-white');
const whiteShareBtn2 = document.querySelector('.share-icon-white2');
const shareDiv = document.querySelector('.share');

const showShareLinks = () => {
    shareDiv.classList.remove('hidden');
    whiteShareBtn2.classList.remove('hidden');
    shareBtn.classList.add('hidden');
    shareDiv.classList.add('appear-anim');
    whiteShareBtn2.classList.add('appear-anim');
};

const hideShareLinks = () => {
    shareDiv.classList.add('hidden');
    whiteShareBtn2.classList.add('hidden');
    shareBtn.classList.remove('hidden');
};

shareBtn.addEventListener('click', showShareLinks);
whiteShareBtn.addEventListener('click', hideShareLinks);
whiteShareBtn2.addEventListener('click', hideShareLinks);
