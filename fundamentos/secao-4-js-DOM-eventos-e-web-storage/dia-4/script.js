window.onload = () => {
    const setBackgroundColor = (color) => {
        let content = document.querySelector(".content")
        content.style.backgroundColor = color
        localStorage.setItem('corFundo', color)
    }


    const setFontColor = (color) => {
        let paragraphs = document.querySelectorAll(".paragraph")
        for (let index = 0; index < paragraphs.length; index += 1) {
            paragraphs[index].style.color = color
            localStorage.setItem('corParagrafo', color)
        }
    }

    const setFontSize = (size) => {
        let paragraphs = document.querySelectorAll(".paragraph")
        for (let index = 0; index < paragraphs.length; index += 1) {
            paragraphs[index].style.fontSize = size
            localStorage.setItem('tamanhoParagrafo', size)
        }
    }

    const setLineHeight = (height) => {
        let paragraphs = document.querySelectorAll(".paragraph")
        for (let index = 0; index < paragraphs.length; index += 1) {
            paragraphs[index].style.lineHeight = height
            localStorage.setItem('espacoLinhas', height)
        }
    }

    const setFontFamily = (family) => {
        let paragraphs = document.querySelectorAll(".paragraph")
        for (let index = 0; index < paragraphs.length; index += 1) {
            paragraphs[index].style.fontFamily = family
            localStorage.setItem('fontParagrafo', family)
        }
    }

    // Cor de fundo da tela;
    let backgroundColorButtons = document.querySelectorAll("#background-color>button")
    for (let index = 0; index < backgroundColorButtons.length; index += 1) {
        backgroundColorButtons[index].addEventListener("click", (event) => {
            setBackgroundColor(event.target.innerHTML)
        })
    }

    // Cor do texto;
    let fontColorButtons = document.querySelectorAll("#font-color>button")
    for (let index = 0; index < fontColorButtons.length; index += 1) {
        fontColorButtons[index].addEventListener("click", (event) => {
            setFontColor(event.target.innerHTML)
        })
    }

    // Tamanho da fonte
    let fontSizeButtons = document.querySelectorAll("#font-size>button")
    for (let index = 0; index < fontSizeButtons.length; index += 1) {
        fontSizeButtons[index].addEventListener("click", (event) => {
            setFontSize(event.target.innerHTML)
        })
    }

    // Espaçamento entre as linhas do texto;
    let lineHeightButtons = document.querySelectorAll("#line-height>button")
    for (let index = 0; index < lineHeightButtons.length; index += 1) {
        lineHeightButtons[index].addEventListener("click", (event) => {
            setLineHeight(event.target.innerHTML)
        })
    }

    // Tipo da fonte (_Font family_).
    let fontFamilyButtons = document.querySelectorAll("#font-family>button")
    for (let index = 0; index < fontFamilyButtons.length; index += 1) {
        fontFamilyButtons[index].addEventListener("click", (event) => {
            setFontFamily(event.target.innerHTML)
        })
    }

    const recuperaMudancas = () => {
    const corFundo = localStorage.getItem('corFundo')
    if (corFundo !== null) setBackgroundColor(corFundo)

    const corParagrafo = localStorage.getItem('corParagrafo')
    if (corParagrafo) setFontColor(corParagrafo)

    const tamanhoParagrafo = localStorage.getItem('tamanhoParagrafo')
    if (tamanhoParagrafo) setFontSize(tamanhoParagrafo)

    const espacoLinhas = localStorage.getItem('espacoLinhas')
    if (espacoLinhas) setLineHeight(espacoLinhas)

    const fontParagrafo = localStorage.getItem('fontParagrafo')
    if (fontParagrafo) setFontFamily(fontParagrafo)
}
recuperaMudancas()
}

 