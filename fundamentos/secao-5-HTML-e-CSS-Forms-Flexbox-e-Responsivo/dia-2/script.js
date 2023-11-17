const check = document.getElementById('agreement');
const btnSubmit = document.getElementById('submit-btn');

check.addEventListener('change', () => {
    btnSubmit.disabled = !check.checked;
});

const btnReset = document.querySelector('.btn-danger');
btnReset.addEventListener('click', () => {
    window.alert('TEEEEESTE');
})
