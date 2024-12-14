let header           = document.getElementById('header');
let navigationHeader = document.getElementById('header-navigation');
let content          = document.getElementById('content');
let showSidebar      = false;

function toggleSidebar() {
    showSidebar = !showSidebar;
    if (showSidebar) {
        navigationHeader.style.marginLeft = '-5vw';
        navigationHeader.style.animationName = 'showSidebar';
        content.style.filter = 'blur(2px)';
    } else {
        navigationHeader.style.marginLeft = '-100vw';
        navigationHeader.style.animationName = '';
        content.style.filter = '';
    }
}

function closeSidebar() {
    if (showSidebar) {
        showSidebar = false;
        navigationHeader.style.marginLeft = '-100vw';
        navigationHeader.style.animationName = '';
        content.style.filter = '';
    }
}

window.addEventListener('resize', function(event) {
    if(window.innerWidth > 768 && showSidebar) 
    {  
        showSidebar = true;
        toggleSidebar();
    }
});

