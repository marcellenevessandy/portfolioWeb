document.addEventListener("DOMContentLoaded", function () {
    const projetos = [
        {
            titulo: "Calculadora",
            descricao: "Calculadora que soma dois valores e mostra o resultado.",
            imagem: "img/calculadora.img.jpeg",
            link: "https://calculadora-marcelle.vercel.app/"
        },
        {
            titulo: "Radar",
            descricao: "Radar verifica se a velocidade está acima de 80km/h.",
            imagem: "img/radar.img.jpeg",
            link: "https://marcelle-radar-velocidade.vercel.app/"
        }
    ];

    const barraProjetos = document.getElementById("barra-projetos");
    const projetoDetalhes = document.getElementById("projeto-detalhes");
    const titulo = document.getElementById("titulo");
    const descricao = document.getElementById("descricao");
    const imagem = document.getElementById("imagem");
    const linkElement = document.getElementById("link");

    let projetoAberto = null;

    projetos.forEach((projeto) => {
        const button = document.createElement("button");
        button.textContent = projeto.titulo;

        button.addEventListener("click", function () {
            if (projetoAberto === projeto) {
                projetoDetalhes.style.display = "none";
                projetoAberto = null;
            } else {
                titulo.textContent = projeto.titulo;
                descricao.textContent = projeto.descricao;
                imagem.src = projeto.imagem;
                linkElement.href = projeto.link;

                projetoDetalhes.style.display = "block";
                projetoAberto = projeto;
            }
        });

        barraProjetos.appendChild(button);
    });
});
