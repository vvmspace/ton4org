document.addEventListener('DOMContentLoaded', function() {
    console.group('Exchange Widget Test');
    
    // Проверка наличия виджета
    const widgetContainer = document.querySelector('.exchange-widget-container');
    if (!widgetContainer) {
        console.error('❌ Widget container not found');
        console.groupEnd();
        return;
    }
    console.log('✅ Widget container found');

    // Проверка iframe
    const iframe = widgetContainer.querySelector('iframe');
    if (!iframe) {
        console.error('❌ Widget iframe not found');
        console.groupEnd();
        return;
    }
    console.log('✅ Widget iframe found');

    // Проверка размеров и стилей
    const containerStyles = window.getComputedStyle(widgetContainer);
    const iframeStyles = window.getComputedStyle(iframe);

    // Проверка ширины контейнера
    if (containerStyles.width !== '100%') {
        console.warn('⚠️ Widget container width is not 100%:', containerStyles.width);
    } else {
        console.log('✅ Widget container width is 100%');
    }

    // Проверка высоты iframe
    if (iframeStyles.height !== '356px') {
        console.warn('⚠️ Widget iframe height is not 356px:', iframeStyles.height);
    } else {
        console.log('✅ Widget iframe height is 356px');
    }

    // Проверка наличия скрипта
    const script = document.querySelector('script[src*="stepper-connector.js"]');
    if (!script) {
        console.error('❌ Widget connector script not found');
        console.groupEnd();
        return;
    }
    console.log('✅ Widget connector script found');

    // Проверка параметров URL
    const iframeSrc = iframe.getAttribute('src');
    const urlParams = new URLSearchParams(iframeSrc.split('?')[1]);

    // Проверка обязательных параметров
    const requiredParams = ['amount', 'from', 'to', 'link_id'];
    let allParamsPresent = true;
    for (const param of requiredParams) {
        if (!urlParams.has(param)) {
            console.error(`❌ Required parameter ${param} is missing`);
            allParamsPresent = false;
        }
    }
    if (allParamsPresent) {
        console.log('✅ All required parameters are present');
    }

    // Проверка значений по умолчанию
    const defaultFrom = urlParams.get('from');
    const defaultTo = urlParams.get('to');
    const defaultAmount = urlParams.get('amount');

    if (defaultFrom !== 'xmr' || defaultTo !== 'usdt' || defaultAmount !== '0.1') {
        console.warn('⚠️ Default values are not set correctly:', {
            from: defaultFrom,
            to: defaultTo,
            amount: defaultAmount
        });
    } else {
        console.log('✅ Default values are correct');
    }

    // Проверка адаптивности
    function checkResponsiveness() {
        const containerWidth = widgetContainer.offsetWidth;
        const iframeWidth = iframe.offsetWidth;
        
        if (Math.abs(containerWidth - iframeWidth) > 5) {
            console.warn('⚠️ Widget is not fully responsive:', {
                containerWidth,
                iframeWidth,
                difference: Math.abs(containerWidth - iframeWidth)
            });
        } else {
            console.log('✅ Widget is responsive');
        }
    }

    // Проверка при загрузке и при изменении размера окна
    checkResponsiveness();
    window.addEventListener('resize', checkResponsiveness);

    // Проверка видимости виджета
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                console.warn('⚠️ Widget is not visible in viewport');
            } else {
                console.log('✅ Widget is visible in viewport');
            }
        });
    });

    observer.observe(widgetContainer);

    console.log('✅ Widget test completed successfully');
    console.groupEnd();
}); 