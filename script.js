// This is where you can add interactivity or delays between dialogues
window.onload = () => {
    setTimeout(() => {
        document.querySelector('#andrey .dialogue').style.opacity = '1';
    }, 500);

    setTimeout(() => {
        document.querySelector('#jose .dialogue').style.opacity = '1';
    }, 3500);

    setTimeout(() => {
        document.querySelector('#dustin .dialogue').style.opacity = '1';
    }, 6500);
};