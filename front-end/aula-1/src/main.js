import { nanoid } from 'nanoid';
import copy from 'clipboard-copy';
import Swal from 'sweetalert2';
import './style.css';


const passwordbtn = document.querySelector('button');
const displayPass = document.querySelector('h2');

passwordbtn.addEventListener('click', () => {
  displayPass.innerHTML = nanoid();
});

displayPass.addEventListener('click', () => {
  copy(event.target.innerHTML);
  Swal.fire({
    title: 'Senha copiada!',
    text: 'Clique em OK para continuar',
    icon: 'success',
    confirmButtonText: 'Ok'
  });
});
