window.onload = () => {
    function makeMoveStick() {
        const panel = document.getElementById('move');
        const stick = document.getElementById('move__stick');
    
        setInitialPosition()
        stick.addEventListener('touchstart', startDrag);
    
        function startDrag(e) {
            e.preventDefault();
            document.addEventListener('touchmove', dragStick);
            document.addEventListener('touchend', stopDrag);
        }
    
        function dragStick(e) {
            e.preventDefault()
            const panelRect = panel.getBoundingClientRect();
            const panelLeft = panelRect.left;
            const panelTop = panelRect.top;
    
            const touch = e.touches[0];
            const x = touch.clientX - panelLeft;
            const y = touch.clientY - panelTop;
    
            setPosition(panelRect.width, panelRect.height, x, y);
        }
    
        function stopDrag() {
            document.removeEventListener('touchmove', dragStick);
            document.removeEventListener('touchend', stopDrag);
            setInitialPosition()
        }
    
        function setPosition(panelW, panelH, x, y) {
            var offsetX = x - stick.offsetWidth / 2;
            var offsetY = y - stick.offsetHeight / 2;
            offsetX = Math.max(offsetX, 0);
            offsetY = Math.max(offsetY, 0);
            offsetX = Math.min(offsetX, panelW - stick.offsetWidth);
            offsetY = Math.min(offsetY, panelH - stick.offsetHeight);
            stick.style.left = `${offsetX}px`;
            stick.style.top = `${offsetY}px`;
        }
        function setInitialPosition() {
            stick.style.left = `${panel.offsetWidth/2-stick.offsetWidth/2}px`
            stick.style.top = `${panel.offsetHeight/2-stick.offsetHeight/2}px`
        }
    }
    function makeCameraStick() {
        const panel = document.getElementById('camera');
        const stick = document.getElementById('camera__stick');
    
        setInitialPosition()
        stick.addEventListener('touchstart', startDrag);
    
        function startDrag(e) {
            e.preventDefault();
            document.addEventListener('touchmove', dragStick);
            document.addEventListener('touchend', stopDrag);
        }
    
        function dragStick(e) {
            e.preventDefault()
            const panelRect = panel.getBoundingClientRect();
            const panelLeft = panelRect.left;
            const panelTop = panelRect.top;
    
            const touch = e.touches[0];
            const x = touch.clientX - panelLeft;
            const y = touch.clientY - panelTop;
    
            setPosition(panelRect.width, panelRect.height, x, y);
        }
    
        function stopDrag() {
            document.removeEventListener('touchmove', dragStick);
            document.removeEventListener('touchend', stopDrag);
            setInitialPosition()
        }
    
        function setPosition(panelW, panelH, x, y) {
            var offsetX = x - stick.offsetWidth / 2;
            var offsetY = y - stick.offsetHeight / 2;
            offsetX = Math.max(offsetX, 0);
            offsetY = Math.max(offsetY, 0);
            offsetX = Math.min(offsetX, panelW - stick.offsetWidth);
            offsetY = Math.min(offsetY, panelH - stick.offsetHeight);
            stick.style.left = `${offsetX}px`;
            stick.style.top = `${offsetY}px`;
        }
        function setInitialPosition() {
            stick.style.left = `${panel.offsetWidth/2-stick.offsetWidth/2}px`
            stick.style.top = `${panel.offsetHeight/2-stick.offsetHeight/2}px`
        }
    }
    makeMoveStick()
    makeCameraStick()
}