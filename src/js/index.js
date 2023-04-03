const botaoTrailer = document.querySelector('.botao-trailer')
const modal = document.querySelector('.modal')
const video = document.getElementById('video')
const linkDoVideo = video.src
const botaoFecharModal = document.querySelector('.fechar-modal')

function alternarModal() {
    modal.classList.toggle('aberto') //toggle => se não tiver a classe 'aberto', ele adiciona e se tiver, ele remove. 
}

botaoTrailer.addEventListener('click', () => {
    alternarModal()
    video.setAttribute('src', linkDoVideo)
})

botaoFecharModal.addEventListener('click', () => {
    alternarModal()
    video.setAttribute('src', '')
})