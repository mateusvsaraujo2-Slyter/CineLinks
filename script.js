const botaoTema = document.querySelector("#botao-tema");

const temaSalvo = localStorage.getItem("tema");

if (temaSalvo === "claro") {
    document.body.classList.add("tema-claro");
    botaoTema.textContent = "Light";
} else {
    botaoTema.textContent = "Dark";
}

botaoTema.addEventListener("click", function () {
    document.body.classList.toggle("tema-claro");

    if (document.body.classList.contains("tema-claro")) {
        botaoTema.textContent = "Light";
        localStorage.setItem("tema", "claro");
    } else {
        botaoTema.textContent = "Dark";
        localStorage.setItem("tema", "escuro");
    }
});