window.onload = () => {
    function makeStickDraggable(panelId, stickId) {
        const panel = document.getElementById(panelId);
        const stick = document.getElementById(stickId);
    
        stick.addEventListener('touchstart', startDrag);
        setInitialPosition()
    
        function startDrag(e) {
            e.preventDefault(); 
            document.addEventListener('touchmove', dragStick);
            document.addEventListener('touchend', stopDrag);
        }
    
        function dragStick(e) {
            e.preventDefault();
            const panelRect = panel.getBoundingClientRect();
            const panelLeft = panelRect.left;
            const panelTop = panelRect.top;
    
            const touch = getTouchForTarget(e, stick); 
            if (!touch) return;
    
            const x = touch.clientX - panelLeft;
            const y = touch.clientY - panelTop;
    
            setPosition(panelRect.width, panelRect.height, x, y, stick);
        }
    
        function stopDrag() {
            document.removeEventListener('touchmove', dragStick);
            document.removeEventListener('touchend', stopDrag);
            setInitialPosition()
        }

        function setInitialPosition() {
            stick.style.left = `${panel.offsetWidth/2-stick.offsetWidth/2}px`
            stick.style.top = `${panel.offsetHeight/2-stick.offsetHeight/2}px`
        }
    
        function setPosition(panelW, panelH, x, y, stick) {
            var offsetX = x - stick.offsetWidth / 2;
            var offsetY = y - stick.offsetHeight / 2;
            offsetX = Math.max(offsetX, 0);
            offsetY = Math.max(offsetY, 0);
            offsetX = Math.min(offsetX, panelW - stick.offsetWidth);
            offsetY = Math.min(offsetY, panelH - stick.offsetHeight);
            stick.style.left = `${offsetX}px`;
            stick.style.top = `${offsetY}px`;
        }
    
        function getTouchForTarget(event, target) {
            const touches = event.touches;
            for (let i = 0; i < touches.length; i++) {
                const touch = touches[i];
                if (touch.target === target) {
                    return touch;
                }
            }
            return null;
        }
        
    }
    
    makeStickDraggable('move', 'move__stick');
    makeStickDraggable('camera', 'camera__stick');
    
}