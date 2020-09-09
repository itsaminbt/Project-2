const spinButton = document.querySelector('.spin');
const refreshIcon = document.querySelector('.refresh-icon');

// rotating the refresh-icon
const tl = new TimelineLite({ paused: true });

tl.to('.refresh-icon', 2, {
    rotation: 360,
    ease: Elastic.easeOut
});

spinButton.addEventListener('click', (e) => {
    if(tl.isActive()) {
        e.preventDefault();
        e.stopImmediatePropagation();
        return false;
    }
    let x = e.clientX - e.target.offsetLeft;
    let y = e.clientY - e.target.offsetTop;

    let ripples = document.createElement('span');
    ripples.style.left = x + 'px';
    ripples.style.top = y + 'px';
    spinButton.appendChild(ripples);

    setTimeout(() => {
        ripples.remove()
    }, 1000);
    tl.restart();
});


// spinButton.addEventListener("click", function(e) {
   
// });