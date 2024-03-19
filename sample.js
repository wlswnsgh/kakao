const slowboxEl = document.querySelector('.slowbox');
const staticonBtn = document.querySelector('.staticon');
const staticonIcon = staticonBtn.querySelector('.material-symbols-outlined');

staticonBtn.addEventListener('click', function() {
    if (slowboxEl.classList.contains('state')) {
        slowboxEl.classList.remove('state');
        staticonIcon.textContent = 'stat_minus_1';
    } else{
        slowboxEl.classList.add('state');
        staticonIcon.textContent = 'keyboard_control_key';
    }
});
