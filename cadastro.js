let alunoData = JSON.parse(localStorage.getItem("alunos")) || [];

        document.getElementById("cadastrarBtn")
            .addEventListener("click", cadastrarAluno);

        function cadastrarAluno(){

            const nome = document.getElementById("nome").value.trim();
            const matricula = document.getElementById("matricula").value.trim();
            const turma = document.getElementById("turma").value;
            const turno = document.getElementById("turno").value;
            const idade = document.getElementById("idade").value;

            if(!nome || !matricula){
                alert("Preencha nome e matrícula!");
                return;
            }

            const existe = alunoData.find(a => a.matricula === matricula);
            if(existe){
                alert("Matrícula já existe!");
                return;
            }

            const novoAluno = { nome, matricula, turma, turno, idade };

            alunoData.push(novoAluno);

            localStorage.setItem("alunos", JSON.stringify(alunoData));

            alert("Aluno cadastrado!");

            // limpa
            document.getElementById("nome").value = "";
            document.getElementById("matricula").value = "";
        }