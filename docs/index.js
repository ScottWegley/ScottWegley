window.addEventListener('load', () => {
    injectEventListeners();
    
});

function injectEventListeners() {
    console.log('SCOTTS PORTFOLIO: Backend Loaded')
    let expandables = document.getElementsByClassName('collapsible');
    for (let i = 0; i < expandables.length; i++) {
        expandables[i].addEventListener("click", function () {
            console.log('click')
            this.classList.toggle("active");
            var content = this.nextElementSibling;
            if (content.style.maxHeight) {
                content.style.maxHeight = null;
            } else {
                content.style.maxHeight = content.scrollHeight + "px";
            }
        });
    }
}