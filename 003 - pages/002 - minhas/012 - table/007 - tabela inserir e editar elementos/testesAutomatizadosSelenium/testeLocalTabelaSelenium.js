const { Builder, By } = require('selenium-webdriver');
const path = require('path');

// Função auxiliar para pausar o script por X milissegundos
// Isso ajuda o Selenium a esperar o Javascript rodar
const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

async function typeSlowly(driver, element, text, delay = 100) {
    for (const char of text) {
        await element.sendKeys(char);
        await driver.sleep(delay);
    }
}

async function testePaginaTabela() {
    let driver = await new Builder().forBrowser('firefox').build();
    
    try {
        // 1. Configuração e Abertura do Arquivo
        const caminhoDoArquivo = path.resolve(__dirname, '../index.html');
        const url = 'file://' + caminhoDoArquivo;
        console.log(`Abrindo a URL local: ${url}`);
        await driver.get(url);

        // --- CENÁRIO 1: ADICIONAR (CRIAR) ---
        console.log("\n--- INICIANDO TESTE: FUNCIONALIDADE CRIAR ---");
        
        // Encontrar os campos e preencher
        const inputNome = await driver.findElement(By.css('.novoNomeInput'));
        await typeSlowly(driver, inputNome, 'Joao Selenium');

        await sleep(1000)

        const inputIdade = await driver.findElement(By.css('.novaIdadeInput'));
        await typeSlowly( driver ,inputIdade ,"30");

        await sleep(1000)

        const inputCargo = await driver.findElement(By.css('.novoCargoInput'));
        await typeSlowly( driver, inputCargo, "QA Automatizador");

        await sleep(2000)
        // Clicar no botão Adicionar
        await driver.findElement(By.css('.adicionar')).click();
        
        // Esperar a tabela atualizar
        await sleep(2000);

        // Verificar se a pessoa foi adicionada (Pegar a última linha da tabela)
        const linhas = await driver.findElements(By.css('.tabelaPessoas tbody tr'));
        const ultimaLinha = linhas[linhas.length - 1];
        const nomeNaTabela = await ultimaLinha.findElement(By.css('.nomePessoaNaTabela')).getText();

        if (nomeNaTabela === "Joao Selenium") {
            console.log("✅ SUCESSO: Pessoa criada corretamente.");
        } else {
            console.log("❌ FALHA: Pessoa não encontrada na tabela.");
            return; // Para o teste se falhar aqui
        }

        // --- CENÁRIO 2: EDITAR ---
        console.log("\n--- INICIANDO TESTE: FUNCIONALIDADE EDITAR ---");

        // Encontrar o botão Editar na última linha que criamos
        const btnEditar = await ultimaLinha.findElement(By.css('.botaoEditar'));
        await btnEditar.click();
        
        await sleep(2000); // Esperar o preenchimento do formulário

        // Verificar se o botão mudou para "Salvar Alterações" e o input foi preenchido
        const textoBotaoSalvar = await driver.findElement(By.css('.adicionar')).getText();
        const valorNomeInput = await inputNome.getAttribute('value');

        if (textoBotaoSalvar === "Salvar Alterações" && valorNomeInput === "Joao Selenium") {
            console.log("✅ Intermediário: Modo de edição ativado corretamente.");
        } else {
            console.log("❌ FALHA: Modo de edição não ativado.");
            return;
        }

        // Alterar o nome
        await inputNome.clear();
        await typeSlowly(driver, inputNome, "Joao Editado");

        // Clicar em Salvar
        await driver.findElement(By.css('.adicionar')).click();
        
        await sleep(2000);

        // Verificar se o nome mudou na tabela
        // Precisamos pegar a linha de novo porque o elemento DOM pode ter mudado
        const linhasAposEdicao = await driver.findElements(By.css('.tabelaPessoas tbody tr'));
        const linhaEditada = linhasAposEdicao[linhasAposEdicao.length - 1];
        const nomeAposEdicao = await linhaEditada.findElement(By.css('.nomePessoaNaTabela')).getText();

        if (nomeAposEdicao === "Joao Editado") {
            console.log("✅ SUCESSO: Edição realizada corretamente.");
        } else {
            console.log("❌ FALHA: Edição não funcionou.");
        }

        // --- CENÁRIO 3: DELETAR ---
        console.log("\n--- INICIANDO TESTE: FUNCIONALIDADE DELETAR ---");

        const qtdLinhasAntesDeletar = linhasAposEdicao.length;

        // Encontrar botão excluir
        const btnExcluir = await linhaEditada.findElement(By.css('.botaoDeletar'));
        await btnExcluir.click();

        // Verificar se o número de linhas diminuiu
        const linhasAposDeletar = await driver.findElements(By.css('.tabelaPessoas tbody tr'));
        const qtdLinhasDepoisDeletar = linhasAposDeletar.length;

        if (qtdLinhasDepoisDeletar < qtdLinhasAntesDeletar) {
            console.log("✅ SUCESSO: Linha removida corretamente.");
        } else {
            console.log("❌ FALHA: Linha não foi removida.");
        }

         await sleep(2000);

    } catch (error) {
        console.error('❌ Ocorreu um erro fatal durante o teste:', error);
    } finally {
        // Fecha o navegador
        await driver.quit();
        console.log("\n--- Teste Finalizado ---");
    }
}

testePaginaTabela();