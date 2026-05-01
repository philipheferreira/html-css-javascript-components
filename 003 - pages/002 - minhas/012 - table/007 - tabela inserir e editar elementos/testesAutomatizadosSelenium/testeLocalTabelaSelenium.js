const { Builder, By } = require('selenium-webdriver');
const path = require('path'); // Importa o módulo 'path'

async function testePaginaTabela() {
	let driver = await new Builder().forBrowser('firefox').build();
	try {

		const caminhoDoArquivo = path.resolve(__dirname, '../index.html');

		const url = 'file://' + caminhoDoArquivo;

		console.log(`Abrindo a URL local: ${url}`);

		await driver.get(url);
		await driver.findElement(By.id('campo_nome')).sendKeys('Selenium');
        await driver.findElement(By.id('botao_enviar')).click();
        const resultadoTexto = await driver.findElement(By.id('resultado')).getText();
        
        const resultadoEsperado = 'Olá, Selenium! Seja bem-vinda(o).';
        if (resultadoTexto === resultadoEsperado) {
            console.log('✅ Teste PASSOU!');
        } else {
            console.log(`❌ Teste FALHOU!`);
        }
	} catch (error) {
        console.error('Ocorreu um erro durante o teste:', error);
    } finally {
        await driver.quit();
    }

}

testePaginaTabela();