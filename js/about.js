document.addEventListener('DOMContentLoaded', function() {
    const actionSelect = document.getElementById('action');
    const buyFields = document.getElementById('buy-fields');
    const sellFields = document.getElementById('sell-fields');

    actionSelect.addEventListener('change', function() {
        if (actionSelect.value === 'buy') {
            buyFields.style.display = 'block';
            sellFields.style.display = 'none';
        } else if (actionSelect.value === 'sell') {
            buyFields.style.display = 'none';
            sellFields.style.display = 'block';
        }
    });

    // Trigger the event on load to ensure proper visibility of fields
    actionSelect.dispatchEvent(new Event('change'));
});
