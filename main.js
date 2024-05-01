window.onload = () => {
    // Функция для движения сосков
    function makeStickDraggable(panelId, stickId) {
        // Выцепляем из документа блоки
        const panel = document.getElementById(panelId);
        const stick = document.getElementById(stickId);
    
        setInitialPosition() // начальное позиционирование по центру
        stick.addEventListener('touchstart', startDrag); // добавляется событие вызова функции startDrag
    
        function startDrag(e) {
            e.preventDefault(); 
            document.addEventListener('touchmove', dragStick); // если двигаем зажатый стик, то вызывается dragStick
            document.addEventListener('touchend', stopDrag); // если опускаем/убираем палец, вызывается фукнция stopDrag
            setInitialPosition()
        }
    
        // Функция, которая меняет расположение сосков
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
            // Убираются события, которые вешаются в функции startDrag
            document.removeEventListener('touchmove', dragStick);
            document.removeEventListener('touchend', stopDrag);
            setInitialPosition() // снова выравнивается по центру
        }

        // функция центрального позиционирования
        function setInitialPosition() {
            stick.style.left = `${panel.offsetWidth/2-stick.offsetWidth/2}px`
            stick.style.top = `${panel.offsetHeight/2-stick.offsetHeight/2}px`
        }
    
        // функция установки новой позиции
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
    
    // Вызов функции для обоих джойстиков, передаем айдишники блоков
    makeStickDraggable('move', 'move__stick');
    makeStickDraggable('camera', 'camera__stick');
    
}