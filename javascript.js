        let linguagens = [];
        linguagens[0] = 'Dart';
        linguagens[1] = 'PHP';
        linguagens[2] = 'Java';
        linguagens[3] = 'Python';
        linguagens[4] = 'Perl';
        linguagens[5] = 'Ruby on Rails';
        linguagens[6] = 'C++';

        function mostrarListaLinguagens() {
            const container = document.getElementById("minhaDiv");
            container.innerHTML = '';
            for (let i = 0; i < linguagens.length; i++) {
                let tag = `<h5>${i} - ${linguagens[i]}</h5>`;
                container.innerHTML += tag;
            }
        }

        function Posicaolinguagens() {
            let indice = prompt('Qual posição deseja consultar?');
            if (indice >= 0 && indice < linguagens.length) {
                alert(linguagens[indice]);
            } else {
                alert("Índice inválido!");
            }
        }

         let frutas = [];
        frutas [0] = 'naça';
        frutas [1] = 'cebola';
        frutas [2] = 'banana';

        function mostrarListafrutas() {
            const container = document.getElementById("minhaDiv2");
            container.innerHTML = '';
            for (let i = 0; i < frutas.length; i++) {
                let tag = `<h5>${i} - ${frutas[i]}</h5>`;
                container.innerHTML += tag;
            }
        }

        function Posicaofrutas() {
            let indice = prompt('Qual posição deseja consultar?');
            if (indice >= 0 && indice < frutas.length) {
                alert(frutas[indice]);
            } else {
                alert("Índice inválido!");
            }
        }