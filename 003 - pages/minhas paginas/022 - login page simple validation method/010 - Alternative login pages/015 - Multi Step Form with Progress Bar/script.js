let currentStep = 0; // O passo atual (começa em 0)
const steps = document.querySelectorAll(".step"); // Todos os elementos de passo
const progressSteps = document.querySelectorAll("#progressbar li"); // Todos os itens da barra de progresso

// Função para exibir o passo atual
function showStep(n) {
    // Esconde todos os passos
    steps.forEach(step => step.style.display = "none");
    // Exibe o passo atual
    steps[n].style.display = "block";
    
    // Atualiza a barra de progresso
    updateProgressBar(n);
    
    // Se for o último passo, muda o texto do botão para "Enviar"
    if (n == steps.length - 1) {
        document.getElementById("nextBtn").innerHTML = "Enviar";
    } else {
        document.getElementById("nextBtn").innerHTML = "Próximo";
    }
    
    // Mostra ou esconde o botão "Anterior"
    document.getElementById("prevBtn").style.display = (n == 0) ? "none" : "inline";
}

// Função para atualizar a barra de progresso
function updateProgressBar(currentStepIndex) {
    progressSteps.forEach((step, index) => {
        // Remove a classe 'active' de todos os passos
        step.classList.remove("active");
        // Adiciona a classe 'active' aos passos já visitados ou ao atual
        if (index < currentStepIndex + 1) {
            step.classList.add("active");
        }
    });
}

// Função para validar o formulário
function validateForm() {
    // Pega todos os inputs do passo atual
    const currentStepElement = steps[currentStep];
    const inputs = currentStepElement.querySelectorAll("input[required]");
    let valid = true;

    // Adiciona uma classe de inválido aos campos vazios
    inputs.forEach(input => {
        if (input.value.trim() === "") {
            input.classList.add("invalid");
            valid = false;
        } else {
            // Remove a classe de inválido se o campo estiver preenchido
            input.classList.remove("invalid");
        }
    });

    // Se estiver no último passo, atualiza o resumo
    if (currentStep === steps.length - 1) {
        updateSummary();
    }

    return valid;
}

// Função para avançar ou retroceder nos passos
function nextPrev(n) {
    // Se estiver avançando (n=1), valida o formulário primeiro
    if (n == 1 && !validateForm()) {
        return false; // Não avança se a validação falhar
    }
    
    // Esconde o passo atual
    steps[currentStep].style.display = "none";
    
    // Atualiza o passo atual
    currentStep = currentStep + n;
    
    // Se chegou ao final do formulário...
    if (currentStep >= steps.length) {
        // ...exibe um alerta (em um app real, aqui você enviaria os dados para um servidor)
        alert("Formulário enviado com sucesso!");
        // Reseta o formulário para o início
        document.getElementById("regForm").reset();
        currentStep = 0;
        showStep(currentStep);
        return false; // Impede que a página recarregue
    }
    
    // Caso contrário, exibe o novo passo
    showStep(currentStep);
}

// Função para criar o resumo no último passo
function updateSummary() {
    const summaryContent = document.getElementById("summary-content");
    const formData = new FormData(document.getElementById("regForm"));
    
    let summaryHTML = "<ul>";
    for (let pair of formData.entries()) {
        // Formata o nome do campo para algo mais legível
        let label = pair[0].charAt(0).toUpperCase() + pair[0].slice(1);
        summaryHTML += `<li><strong>${label}:</strong> ${pair[1]}</li>`;
    }
    summaryHTML += "</ul>";
    
    summaryContent.innerHTML = summaryHTML;
}


// Inicializa o formulário exibindo o primeiro passo
showStep(currentStep);