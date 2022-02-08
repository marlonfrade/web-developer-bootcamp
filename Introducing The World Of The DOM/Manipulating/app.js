const allLinks = document.querySelectorAll('a');

for (let link of allLinks) {
    link.innerText = 'I AM A LINK!!!!'
}


for (let link of allLinks) {
    link.style.color = 'rgb(0, 108, 134)';
    link.style.textDecorationColor = 'magenta';
    link.style.textDecorationStyle = 'wavy'
}


const h1 = document.querySelector('h1');

for (let span of h1) {
    const rainbow = document.querySelectorAll('span');
    for (let color of rainbow) {
        color[0].style.color = 'red';

    }
}