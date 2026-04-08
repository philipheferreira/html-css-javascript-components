// 1. DADOS DE EXEMPLO (Em um app real, viria de uma API)
const dadosVendas = [
    { mes: 'Janeiro', valor: 15000 },
    { mes: 'Fevereiro', valor: 22000 },
    { mes: 'Março', valor: 18000 },
    { mes: 'Abril', valor: 25000 },
    { mes: 'Maio', valor: 30000 },
    { mes: 'Junho', valor: 28000 }
];

// Função para formatar números em moeda brasileira
function formatarMoeda(valor) {
    return valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

// 2. LÓGICA DO DASHBOARD
function atualizarDashboard() {
    // --- Cálculo dos KPIs ---
    const totalVendas = dadosVendas.reduce((acc, item) => acc + item.valor, 0);
    const totalPedidos = dadosVendas.length; // Simplificação: um pedido por mês
    const ticketMedio = totalVendas / totalPedidos;

    // --- Atualização dos KPIs no HTML ---
    document.getElementById('total-vendas').textContent = formatarMoeda(totalVendas);
    document.getElementById('total-pedidos').textContent = totalPedidos;
    document.getElementById('ticket-medio').textContent = formatarMoeda(ticketMedio);

    // --- Criação do Gráfico com Chart.js ---
    const ctx = document.getElementById('vendasPorMesChart').getContext('2d');
    
    // Se o gráfico já existir, destrua-o antes de criar um novo
    if (window.meuGrafico instanceof Chart) {
        window.meuGrafico.destroy();
    }

    window.meuGrafico = new Chart(ctx, {
        type: 'bar', // Tipo do gráfico: barra
        data: {
            labels: dadosVendas.map(d => d.mes), // Labels do eixo X
            datasets: [{
                label: 'Valor em Vendas (R$)',
                data: dadosVendas.map(d => d.valor), // Dados do eixo Y
                backgroundColor: 'rgba(52, 152, 219, 0.6)',
                borderColor: 'rgba(52, 152, 219, 1)',
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        // Formata os valores do eixo Y como moeda
                        callback: function(value) {
                            return formatarMoeda(value);
                        }
                    }
                }
            },
            plugins: {
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            let label = context.dataset.label || '';
                            if (label) {
                                label += ': ';
                            }
                            if (context.parsed.y !== null) {
                                label += formatarMoeda(context.parsed.y);
                            }
                            return label;
                        }
                    }
                }
            }
        }
    });
}

// Executa a função quando a página carrega
window.onload = atualizarDashboard;