const nameInWhite = document.getElementById('your-name-here');
const nameBox = document.getElementById('newName');
const enterNameButton = document.getElementById('button-click');

enterNameButton.addEventListener('click', () => {
    const guestName = nameBox.value;
    nameInWhite.textContent = guestName;

    //checks
    console.log(nameInWhite);
    console.log(nameBox);
    console.log(enterNameButton);
});