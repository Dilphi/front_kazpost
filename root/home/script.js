document.addEventListener('DOMContentLoaded', function() {
    // Общая функция для настройки блока QR
    function setupQrBlock(buttonId, blockId, closeId) {
        const blockQr = document.getElementById(blockId);
        const onBtn = document.getElementById(buttonId);
        const offBtn = document.getElementById(closeId);

        // Функция для отображения блока на нужном уровне экрана
        function showQrBlock() {
            const scrollY = window.scrollY; // Текущее положение прокрутки
            const windowHeight = window.innerHeight; // Высота видимой части окна

            blockQr.style.top = `${scrollY + windowHeight / 2}px`; // Позиция по вертикали (центр)
            blockQr.style.display = 'block'; // Показать блок
            document.body.style.overflow = 'hidden'; // Отключить скроллинг
        }

        // Показать блок по клику на кнопку
        onBtn.addEventListener('click', function() {
            showQrBlock();
        });

        // Скрыть блок по клику на кнопку "Закрыть"
        offBtn.addEventListener('click', function() {
            blockQr.style.display = 'none'; // Скрыть блок
            document.body.style.overflow = ''; // Включить скроллинг
        });

        // При изменении размера окна блок остается по центру
        window.addEventListener('resize', function() {
            if (blockQr.style.display === 'block') {
                showQrBlock(); // Корректируем положение блока при изменении размера окна
            }
        });
    }

    // Настройка для первого блока QR
    setupQrBlock('btn-qr1', 'block-qr1', 'closeBtn1');
    // Настройка для второго блока QR
    setupQrBlock('btn-qr2', 'block-qr2', 'closeBtn2');
});