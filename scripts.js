///Função para selecionar um elemento

const selectElement = (s) => document.querySelector(s);

//Abrir o menu
selectElement('.open').addEventListener('click', () => {
    selectElement('.nav-list').classList.add('active');
});

//Abrir o menu
selectElement('.close').addEventListener('click', () => {
    selectElement('.nav-list').classList.remove('active');
})