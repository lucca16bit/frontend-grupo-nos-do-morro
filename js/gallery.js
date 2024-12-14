function openFullscreen(img) {
    const fullscreenImg = document.createElement('img');
    fullscreenImg.src = img.src;
    fullscreenImg.style.width = '100%';
    fullscreenImg.style.height = 'auto';
    fullscreenImg.style.position = 'fixed';
    fullscreenImg.style.top = '0';
    fullscreenImg.style.left = '0';
    fullscreenImg.style.zIndex = '9999';
    fullscreenImg.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
    fullscreenImg.style.cursor = 'pointer';
    fullscreenImg.onclick = function() {
        document.body.removeChild(fullscreenImg);
    };
    document.body.appendChild(fullscreenImg);
}