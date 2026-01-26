

// Define o cookie 'nome' para expirar em 1 de Janeiro de 2027
document.cookie = 'nome=Philiphe; expires=' + new Date(2027, 0, 1).toUTCString()

// Define o cookie 'ultimoNome' para expirar na MESMA data
document.cookie = 'ultimoNome=Ferreira; expires=' + new Date(2027, 0, 1).toUTCString()

// Exibe todos os cookies atuais para o domínio
console.log(document.cookie)