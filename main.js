 const themeToggle = document.getElementById("themeToggle");
        const icon = themeToggle.querySelector("i");
        const searchButton = document.getElementById("searchButton");
        const searchInput = document.getElementById("searchInput");
        const resultado = document.getElementById("resultado");
        const relatorioBtn = document.getElementById("relatorioBtn");
        let alunoData = JSON.parse(localStorage.getItem("alunos")) || [];

        searchButton.addEventListener("click", buscarAluno);

        function buscarAluno(){
            const matricula = searchInput.value.trim();
            const aluno = alunoData.find(aluno =>
                aluno.matricula === matricula
            );

            if (aluno) {
                resultado.innerHTML = `
                <div class="card-aluno">
                    <h3>${aluno.nome}</h3>
                    <p>Matrícula: ${aluno.matricula}</p>
                    <p>Turma: ${aluno.turma}</p>
                    <p>Turno: ${aluno.turno}</p>
                    <p>Idade: ${aluno.idade}</p>
                </div>
                `;
            }else{
                resultado.innerHTML = `<p style="color: red;">Aluno não encontrado. Verifique a matrícula e tente novamente.</p>`;
            }
        }

        relatorioBtn.addEventListener("click", gerarRelatorio);

        function gerarRelatorio(){
            if(alunoData.length === 0){
                resultado.innerHTML = `<p style="color: red;">Nenhum aluno cadastrado para gerar relatório.</p>`;
                return;
            }

            let html = "";
            alunoData.forEach(aluno => {
                html += `
                <div class="card-aluno">
                    <h3>${aluno.nome}</h3>
                    <p>Matrícula: ${aluno.matricula}</p>
                    <p>Turma: ${aluno.turma}</p>
                    <p>Turno: ${aluno.turno}</p>
                    <p>Idade: ${aluno.idade}</p>
                </div>
                `;
            });
            resultado.innerHTML = html;

        }

        themeToggle.addEventListener("click", () => {
            document.body.classList.toggle("dark-mode");

            if (document.body.classList.contains("dark-mode")) {
                icon.classList.remove("fa-moon");
                icon.classList.add("fa-sun");
            } else {
                icon.classList.remove("fa-sun");
                icon.classList.add("fa-moon");
            }
        });