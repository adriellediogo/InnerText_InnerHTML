let titulo = document.querySelector("h1")
let link = document.querySelector("a")
let listaOr = document.querySelector("ol")
let listaNaoOr = document.querySelector("ul")

titulo.innerText = "Título usando o InnerText"
link.innerText = "Link sugerido"

listaNaoOr.innerHTML = `
    <li>Testando 1</li>
    <li>Testando 2</li>
    <li>Testando 3</li>
`
listaOr.innerHTML = `
    <li> <a href="https://g1.globo.com">G1</a></li>
    <li><a href="https://www.opovo.com.br">O povo</a></li>
    <li><a href="https://diariodonordeste.verdesmares.com.br">Diário do Nordeste</a></li>
`

