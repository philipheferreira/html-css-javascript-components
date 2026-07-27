// ==============================
// SCRIPT - Sabor & Arte - Receitas
// Com autenticacao e modais
// ==============================

document.addEventListener('DOMContentLoaded', function() {

    // ==============================
    // BASE DE DADOS DAS RECEITAS
    // ==============================
    var recipesDB = [
        {
            title: 'Feijoada Completa',
            image: 'https://lirp.cdn-website.com/33406c6e/dms3rep/multi/opt/feijoada-1920w.jpg',
            badge: 'Brasileira', badgeClass: 'brasileira',
            time: '2h 30min', servings: '8 porcoes', difficulty: 'Medio',
            desc: 'O prato mais iconico do Brasil. Feijao preto cozido lentamente com diversas carnes defumadas, servido com arroz branco, couve refogada, farofa, laranja fatiada e caipirinha. Uma verdadeira celebracao a mesa que reune familia e amigos.',
            ingredients: [
                '500g de feijao preto',
                '300g de paesoca (linguica portuguesa defumada)',
                '250g de costela de porco salgada (dessalgada)',
                '200g de charque (dessalgado e desfiado)',
                '150g de bacon em cubos',
                '150g de linguica calabresa',
                '2 cebolas grandes picadas',
                '6 dentes de alho picados',
                '3 folhas de louro',
                'Sal e pimenta-do-reino a gosto',
                'Para acompanhar: arroz branco, couve refogada, farofa, laranja fatiada'
            ],
            steps: [
                'Deixe o feijao de molho em agua por pelo menos 8 horas (ou de uma noite para outra). Escorra e reserve.',
                'Dessalgue a costela e o charque: troque a agua varias vezes durante 12 horas. Depois, cozinhe por 20 minutos, escorra e desfie o charque. Corte a costela em pedacos.',
                'Em uma panela grande de pressao, frite o bacon ate dourar. Adicione a paesoca, a costela, o charque e a linguica calabresa. Frite bem para soltar os sabores.',
                'Adicione a cebola e o alho. Refogue ate murcharem, cerca de 3 minutos. Junte as folhas de louro.',
                'Coloque o feijao na panela e cubra com agua (cerca de 3 dedos acima dos ingredientes). Feche a panela e cozinhe por 40-50 minutos apos pegar pressao.',
                'Desligue o fogo, espere a pressao sair naturalmente. Abra, verifique o tempero (sal e pimenta) e a consistencia. Se necessario, volte ao fogo sem pressao para encorpar.',
                'Sirva com arroz branco, couve refogada com alho, farofa crocante e fatias de laranja.'
            ],
            tips: [
                'O segredo de uma boa feijoada e a qualidade das carnes defumadas. Nao economize na paesoca.',
                'O caldo deve ser encorpado mas nao grosso demais. Se ficar muito ralo, amasse uma concha de feijao e volte ao fogo.',
                'Feijoada fica ainda melhor no dia seguinte, quando os sabores se integram. Faca de vespera se possivel.',
                'Congele porcoes individuais por ate 3 meses. O sabor se mantem excelente.'
            ]
        },
        {
            title: 'Coxinha de Frango',
            image: 'https://guiadacozinha.com.br/wp-content/uploads/2018/08/coxinhadefrangocremosa.webp',
            badge: 'Brasileira', badgeClass: 'brasileira',
            time: '1h', servings: '20 unidades', difficulty: 'Facil',
            desc: 'O salgadinho mais amado do Brasil. Massa de batata com recheio generoso de frango desfiado temperado com requeijao, empanada e frita ate ficar dourada e crocante. Perfeita para festas e lanches da tarde.',
            ingredients: [
                '500g de peito de frango cozido e desfiado',
                '1kg de batata descascada',
                '200g de requeijao cremoso',
                '1 cebola picada',
                '2 dentes de alho picados',
                '2 colheres de sopa de manteiga',
                'Sal e pimenta-do-reino a gosto',
                'Salsinha picada a gosto',
                'Farinha de trigo para empanar (cerca de 300g)',
                '2 ovos batidos',
                'Farinha de rosca para empanar (cerca de 400g)',
                'Oleo para fritar'
            ],
            steps: [
                'Cozinhe as batatas ate ficarem bem macias. Escorra, amasse enquanto quentes ate virar um pure liso. Junte a manteiga e misture bem. Tempere com sal.',
                'Refogue a cebola e o alho na manteiga. Adicione o frango desfiado, tempere com sal, pimenta e salsinha. Acrescente o requeijao, misture e desligue. Deixe esfriar.',
                'Unte as maos com oleo. Pegue uma porcao de massa, achate na palma, coloque o recheio e feche no formato de gota (coxinha). Repita ate acabar.',
                'Passe cada coxinha na farinha de trigo, depois no ovo batido e por ultimo na farinha de rosca, pressionando bem para cobrir uniformemente.',
                'Frite em oleo quente (180C) ate dourar por igual, cerca de 4-5 minutos. Escorra em papel-toalha.',
                'Sirva quente com molho de pimenta ou ketchup.'
            ],
            tips: [
                'A massa nao pode ficar aguada. Se a batata soltar muita agua, volte ao fogo para secar.',
                'Para congelar: empane normalmente, coloque em uma assadeira sem sobrepor, congele e depois transfira para sacos. Frite direto do congelador, adicionando 2 minutos ao tempo.',
                'O formato classico e de gota com a ponta mais fina. Use as maos untadas para modelar.'
            ]
        },
        {
            title: 'Brigadeiro Gourmet',
            image: 'https://www.somosfriends.com/_next/image?url=https%3A%2F%2Fs3.amazonaws.com%2Fcdn.somosfriends.com%2Fmedium_melhor_brigadeiro_gourmet_do_mundo_679ad3976c.jpg&w=750&q=75',
            badge: 'Sobremesa', badgeClass: 'sobremesa',
            time: '30min', servings: '30 unidades', difficulty: 'Facil',
            desc: 'O doce que e a cara do Brasil. Leite condensado, cacau em po de qualidade e manteiga, cozidos no ponto certo e enrolados com chocolate granulado. Versao gourmet com chocolate belga ou meio amargo.',
            ingredients: [
                '1 lata de leite condensado (395g)',
                '2 colheres de sopa de cacau em po 100% (ou chocolate em po de boa qualidade)',
                '1 colher de sopa de manteiga sem sal',
                'Chocolate granulado gourmet para decorar',
                'Forminhas de papel'
            ],
            steps: [
                'Em uma panela antiaderente, misture o leite condensado, o cacau e a manteiga.',
                'Leve ao fogo medio-baixo, mexendo SEMPRE com uma espatula de silicone, raspando o fundo e as laterais.',
                'Cozinhe por cerca de 8-10 minutos. O ponto certo e quando a massa se solta do fundo da panela ao inclina-la e forma um "V" ao cair da espatula.',
                'Transfira para um prato untado com manteiga e deixe esfriar completamente (pode ir a geladeira por 1 hora para acelerar).',
                'Unte as maos com manteiga, pegue pequenas porcoes, enrole em bolinhas e passe no granulado.',
                'Coloque nas forminhas e sirva.'
            ],
            tips: [
                'Nunca pare de mexer enquanto cozinha, senao queima no fundo e fica com gosto de queimado.',
                'O ponto de brigadeiro e antes do ponto de beijinho: a massa deve estar mais firme, nao liquida.',
                'Para versao gourmet, use cacau 100% de boa marca e granulado de chocolate belga meio amargo.',
                'Duram ate 3 dias em geladeira dentro de um pote fechado.'
            ]
        },
        {
            title: 'Pasta alla Carbonara',
            image: 'https://s2-receitas.glbimg.com/n18JLJvQ-hlXaYzgabkZQ1haU54=/0x0:1000x667/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_1f540e0b94d8437dbbc39d567a1dee68/internal_photos/bs/2020/M/0/fJpbMQTfutNTLQs72IjQ/carbonara.jpg',
            badge: 'Italiana', badgeClass: 'italiana',
            time: '25min', servings: '4 porcoes', difficulty: 'Medio',
            desc: 'A verdadeira carbonara romana: spaghetti al dente com guancio crocante, gema de ovo, pecorino romano e pimenta-preta. Sem creme de leite, como manda a tradicao. O equilibrio perfeito entre cremosidade e sabor intenso.',
            ingredients: [
                '400g de spaghetti',
                '200g de guancio (ou pancetta se nao encontrar)',
                '4 gemas de ovo grandes',
                '100g de pecorino romano ralado na hora',
                'Pimenta-do-reino preta moída na hora (generosa)',
                'Sal grosso para a agua do macarrao'
            ],
            steps: [
                'Ferva agua generosa com sal grosso. Cozinhe o spaghetti 1 minuto a menos do que o indicado na embalagem (al dente). Reserve 1 xicara da agua do cozimento antes de escorrer.',
                'Corte o guancio em tiras ou cubos de cerca de 5mm. Em uma frigideira grande (sem oleo), frite em fogo medio-baixo ate ficarem crocantes e dourados, cerca de 6-8 minutos. Retire do fogo.',
                'Em uma tigela, misture as gemas, o pecorino ralado e bastante pimenta-do-reino. Mexa bem ate formar uma pasta espessa.',
                'Com a frigideira do guancio AINDA FORA DO FOGO, adicione o spaghetti escorrido. Misture bem para envolver com a gordura.',
                'Despeje a mistura de gemas sobre o macarrao. Mexa vigorosamente, adicionando a agua do cozimento reservada aos poucos, ate obter um creme sedoso que envolve cada fio. Nunca volte ao fogo direto ou as gemas talham.',
                'Sirva imediatamente com mais pecorino ralado e pimenta-do-reino por cima.'
            ],
            tips: [
                'A regra de ouro: NUNCA use creme de leite na carbonara. A cremosidade vem das gemas e do amido da agua do macarrao.',
                'Se nao encontrar guancio, use pancetta. Bacon funciona em emergencia, mas o sabor fica diferente.',
                'O segredo do creme perfeito e a agua do cozimento amilácea. Adicione aos poucos e mexa sem parar.',
                'Sirva em no maximo 2 minutos depois de pronta. Carbonara espera por ninguem.'
            ]
        },
        {
            title: 'Lasanha a Bolonhesa',
            image: 'https://guiadacozinha.com.br/wp-content/uploads/2014/01/lasanha-bolonhesa-na-pressao.jpg',
            badge: 'Italiana', badgeClass: 'italiana',
            time: '1h 30min', servings: '10 porcoes', difficulty: 'Avancado',
            desc: 'Camadas generosas de massa fresca, ragu de carne bovina cozido lentamente com vinho tinto, molho bechamel aveludado e queijo gratinado. O prato italiano que reune a familia em torno da mesa.',
            ingredients: [
                '500g de massa de lasanha (prefira fresca)',
                '600g de carne moida bovina',
                '1 cebola grande picada',
                '2 cenouras picadas',
                '2 talos de salsao picados',
                '4 dentes de alho picados',
                '400ml de molho de tomate passata',
                '200ml de vinho tinto seco',
                '50g de manteiga',
                '50g de farinha de trigo',
                '700ml de leite integral',
                '200g de muccarela ralada',
                '100g de parmesao ralado',
                'Azeite, sal, pimenta, noz-moscada'
            ],
            steps: [
                'RAGU: Refogue a cebola, cenoura e salsao no azeite por 5 minutos. Adicione o alho e a carne moida. Frite ate dourar bem, quebrando os pedacos.',
                'Despeje o vinho tinto e deixe evaporar completamente. Adicione o molho de tomate, tempere com sal e pimenta. Abaixe o fogo e cozinhe por 40 minutos, mexendo de vez em quando.',
                'BECHAMEL: Derreta a manteiga em fogo baixo. Adicione a farinha de uma vez e mexa por 2 minutos (roux). Adicione o leite aos poucos, mexendo sem parar para nao empelotar. Cozinhe ate engrossar. Tempere com sal, pimenta e noz-moscada.',
                'MONTAGEM: Em um refratario untado, alterne camadas: molho de tomate no fundo, massa, ragu, bechamel, queijo muccarela. Repita 3-4 vezes.',
                'Finalize com bechamel, parmesao generoso por cima e alguns pedacinhos de manteiga.',
                'Asse em forno preaquecido a 180C por 30-35 minutos, ate dourar e borbulhar. Desligue o forno e deixe descansar 10 minutos antes de cortar.'
            ],
            tips: [
                'O ragu fica melhor quando cozinhado lentamente. Se tiver tempo, faca de vespera.',
                'O bechamel nao pode ficar muito liquido nem muito espesso. Deve ter consistencia de creme de leite grosso.',
                'Se usar massa seca, cozinhe em agua por 3-4 minutos (nao ate o fim) antes de montar.',
                'Descansar 10 minutos apos sair do forno e essencial para a lasanha firmar e nao desmoronar ao cortar.'
            ]
        },
        {
            title: 'Pizza Margherita Napoletana',
            image: 'https://blog.livup.com.br/wp-content/uploads/2021/06/pizza-napolitana-800x534.jpg',
            badge: 'Italiana', badgeClass: 'italiana',
            time: '45min (+24h fermentacao)', servings: '4 porcoes', difficulty: 'Medio',
            desc: 'Massa fermentada por 24 horas, molho de tomate San Marzano, mozzarella di bufala fresca e manjericao. Assada em forno bem quente para obter a borda aerada e o centro macio, como em Napoles.',
            ingredients: [
                '500g de farinha de trigo tipo 00 (ou farinha de pizza)',
                '325ml de agua morna',
                '10g de sal',
                '3g de fermento biologico seco',
                '1 lata de tomate pelado San Marzano (400g)',
                '250g de mozzarella di bufala (ou muccarela fresca)',
                'Folhas de manjericao fresco',
                'Azeite extravirgem a gosto',
                'Sal para o molho'
            ],
            steps: [
                'MASSA: Dissolva o fermento na agua morna. Misture a farinha e o sal. Adicione a agua aos poucos, sovando por 10 minutos ate obter uma massa lisa e elastica.',
                'Divida em 4 bolas, coloque em um recipiente untado com oleo, cubra e leve a geladeira por 24 horas (fermentacao lenta).',
                'MOLHO: Bata os tomates pelados com a mao ou no liquidificador de forma rapida (deve ficar pedacudo). Tempere com sal e um fio de azeite. Nao cozinhe.',
                '2 horas antes de assar, tire as bolas de massa da geladeira para atingir temperatura ambiente.',
                'Preaqueca o forno na temperatura maxima (250-300C) com uma pedra de pizza ou assadeira invertida dentro por pelo menos 30 minutos.',
                'Abra cada bola com as maos (nunca rolo) ate obter um disco de cerca de 25cm, mantendo a borda mais grossa. Espalhe o molho, distribua a muccarela em pedacos e asse por 6-8 minutos.',
                'Ao sair do forno, finalize com manjericao fresco e um fio de azeite extravirgem.'
            ],
            tips: [
                'A fermentacao lenta na geladeira e o segredo da massa leve e digestível. Nao pule esta etapa.',
                'Nunca use rolo de macarrao para abrir a pizza. Use as maos para manter as bolhas de ar.',
                'O forno caseiro nao chega aos 450C dos fornos napolitanos, mas quanto mais quente, melhor. Preaqueca por bastante tempo.',
                'A mozzarella di bufala solta muita agua. Se for usar, escorra bem e adicione apos o molho, nao antes.'
            ]
        },
        {
            title: 'Sushi e Sashimi',
            image: 'https://www.estadao.com.br/resizer/v2/XPB7RWNISNLUFK6ZMK547QQDAM.jpg?quality=80&auth=5722928bf0f33510ae575dc252af2fabb4b688e2ac5ed6a3b40671df3a0359a5&width=1075&height=527&focal=379,229',
            badge: 'Japonesa', badgeClass: 'japonesa',
            time: '1h', servings: '4 porcoes', difficulty: 'Avancado',
            desc: 'A arte da culinaria japonesa em cada pedaco. Arroz de sushi temperado com vinagre, envelopando peixes frescos como salmao, atum e robalo. Acompanha gengibre em conserva, wasabi e molho de soja.',
            ingredients: [
                '400g de arroz japones de grao curto',
                '60ml de vinagre de arroz',
                '2 colheres de sopa de acucar',
                '1 colher de chá de sal',
                '300g de salmao fresco (sashimi grade)',
                '200g de atum fresco (sashimi grade)',
                'Nori (folhas de alga)',
                'Gengibre em conserva (gari)',
                'Wasabi',
                'Molho de soja (shoyu)'
            ],
            steps: [
                'Lave o arroz em agua corrente 5-6 vezes ate a agua sair quase transparente. Cozinhe com a mesma proporcao de agua (1:1). Deixe descansar 10 minutos com a panela fechada.',
                'MISTURA DE VINAGRE: Aqueca o vinagre, acucar e sal ate dissolver (sem ferver). Deixe esfriar.',
                'Espalhe o arroz quente em uma bandeja larga (hangiri ou assadeira). Despeje a mistura de vinagre enquanto corta o arroz com movimentos verticais, sem amassar. Ventile com um leque ate esfriar.',
                'Corte o salmao e o atum em fatias de cerca de 5mm de espessura, no sentido contrario as fibras, com uma faca bem afiada.',
                'NIGIRI: Umedeca as maos com agua com vinagre. Pegue uma pequena porcao de arroz, forme um oval comprimido e coloque uma fatia de peixe por cima, pressionando levemente.',
                'MAKI: Coloque nori sobre a esteira (makisu), espalhe arroz deixando 1cm na borda superior. Coloque o peixe no centro e enrole firmemente. Corte com faca molhada em 6-8 pedacos.',
                'Sirva com gari, wasabi e shoyu em pequenas tigelas.'
            ],
            tips: [
                'Use SOMENTE peixe com certificacao "sashimi grade" ou "pronto para consumo cru". Nunca use peixe de supermercado comum.',
                'A faca deve ser a mais afiada possivel. Uma faca cega esmaga o peixe em vez de cortar.',
                'O arroz de sushi nao pode ser quente nem gelado. Temperatura ambiente e o ideal.',
                'Umedeca as maos com agua-vinagre (1:1) toda vez que for manusear o arroz para nao grudar.'
            ]
        },
        {
            title: 'Ramen Tonkotsu',
            image: 'https://cdn.apartmenttherapy.info/image/upload/f_auto,q_auto:eco,c_fill,g_auto,w_728,h_546/k%2FPhoto%2FRecipes%2F2024-03-tonkotsu-ramen%2Ftonkotsu-ramen-195',
            badge: 'Japonesa', badgeClass: 'japonesa',
            time: '4h', servings: '4 porcoes', difficulty: 'Avancado',
            desc: 'Caldo rico e cremoso de ossos de porco cozidos por horas, noodles finos e al dente, chashu (carne de porco brazeada), ovo marinado, cebolinha, nori e brotos de bambu. Comfort food japones no nivel mais alto.',
            ingredients: [
                '1kg de ossos de porco (femur, joelho, com tutano)',
                '500g de carne de porco (barriga ou picanha) para chashu',
                '400g de noodles frescos de ramen',
                '4 ovos',
                '4 folhas de nori cortadas ao meio',
                'Cebolinha verde fatiada',
                'Brotos de bambu (menma)',
                'Alho (6 dentes inteiros), gengibre (30g fatiado)',
                'Cebola (1 inteira cortada ao meio)',
                'Shoyu, mirin, saque, oleo de gergelim torrado'
            ],
            steps: [
                'CALDO: Coloque os ossos em uma panela grande com agua fria. Ferva, escorra e lave os ossos (para remover impurezas). Enxague a panela.',
                'Volte os ossos limpos a panela com 3 litros de agua fresca, alho, gengibre e cebola. Ferva e mantenha em fogo alto por 3-4 horas, adicionando agua quando necessario. O caldo deve ficar branco e cremoso. Coe e reserve.',
                'CHASHU: Tempere a carne com shoyu, mirin, saque e alho. Em uma frigideira, sele a carne de todos os lados. Coloque em uma assadeira, regue com o liquido da marinada e asse a 160C por 2 horas, regando a cada 30 minutos. Fatie quando esfriar.',
                'OVOS MARINADOS: Cozinhe os ovos por exatamente 6 minutos e 30 segundos. Imediatamente para gelada. Descasque e marinade em shoyu, mirin e agua (1:1:1) por pelo menos 4 horas.',
                'Cozinhe os noodles conforme o pacote (geralmente 2-3 minutos). Escorra bem.',
                'MONTAGEM: Coloque 2 colheres de shoyu e 1 de oleo de gergelim no fundo de cada tigela. Despeje o caldo fervente. Adicione os noodles, fatias de chashu, ovo cortado ao meio, nori, cebolinha e brotos de bambu.'
            ],
            tips: [
                'O segredo do caldo branco e cremoso e ferver em fogo ALTO, deixando a agua borbulhar violentamente. Isso emulsiona a gordura com o caldo.',
                'Os ovos tem tempo exato: 6min30s para a gema cremosa e o branco firme. Um minuto a mais e perde o ponto.',
                'Se nao encontrar noodles de ramen, use espaguete fino cozido al dente. Nao e o mesmo, mas funciona.',
                'O chashu pode ser feito de vespera. Na verdade, fica melhor, pois os sabores se integram.'
            ]
        },
        {
            title: 'Temaki de Salmao',
            image: 'https://static.itdg.com.br/images/640-400/774375583e3775acf3328a7c7a0a0470/303152-original.jpg',
            badge: 'Japonesa', badgeClass: 'japonesa',
            time: '30min', servings: '4 unidades', difficulty: 'Facil',
            desc: 'O cone de sushi feito na hora: nori crocante envolvendo arroz perfeito, salmao fresco em fatias, cream cheese, pepino e gergelim. A melhor forma de comer sushi com as maos, como os japoneses fazem.',
            ingredients: [
                '2 xicaras de arroz de sushi pronto (veja receita de sushi)',
                '4 folhas de nori cortadas ao meio',
                '200g de salmao sashimi grade em fatias',
                '100g de cream cheese',
                '1 pepino japones cortado em bastoes finos',
                'Gergelim torrado',
                'Shoyu e wasabi para acompanhar'
            ],
            steps: [
                'Prepare o arroz de sushi seguindo a receita principal. Deixe esfriar ate temperatura ambiente.',
                'Corte o salmao em tiras longas de cerca de 1cm de largura. Corte o pepino em bastoes finos.',
                'Pegue uma meia folha de nori com a parte brilhante para baixo. Com as maos umedecidas, espalhe arroz sobre 2/3 da folha, deixando a ponta superior livre.',
                'No centro do arroz, coloque tiras de salmao, uma filete de cream cheese e 2-3 bastoes de pepino. Salpique gergelim.',
                'Dobre a nori formando um cone: comece pelo canto inferior esquerdo, dobre diagonalmente e continue enrolando ate formar um cone. Umedeca a ponta sem arroz para fechar.',
                'Sirva imediatamente com shoyu e wasabi. Temaki espera por ninguem.'
            ],
            tips: [
                'Montar na hora e regra. A nori amolece rapidamente com a umidade do arroz, perde a crocancia e o cone abre.',
                'Nao exagere no recheio. Menos e mais: o cone precisa fechar firmemente.',
                'Para uma versao mais leve, substitua o cream cheese por abacate em fatias.',
                'Segure o temaki pelo canto inferior (sem arroz) para nao sujar as maos.'
            ]
        },
        {
            title: 'Tiramisu Classico',
            image: 'https://f.i.uol.com.br/livraria/capas/images/11074183.jpeg',
            badge: 'Sobremesa', badgeClass: 'sobremesa',
            time: '40min + 4h geladeira', servings: '8 porcoes', difficulty: 'Medio',
            desc: 'A sobremesa italiana que conquistou o mundo. Camadas de biscoitos savoiardi molhados em cafe expresso, creme de mascarpone com gemas batidas e cacau po por cima. Refriadorado por no minimo 4 horas.',
            ingredients: [
                '6 gemas de ovo grandes',
                '150g de acucar',
                '500g de mascarpone gelado',
                '300ml de creme de leite fresco (bater chantilly)',
                '300ml de cafe expresso (frio)',
                '2 colheres de sopa de licor de amaretto (opcional)',
                '300g de biscoitos savoiardi (ou biscoito champanhe)',
                'Cacau em po para polvilhar',
                'Chocolate amargo ralado para decorar'
            ],
            steps: [
                'Bata as gemas com o acucar por 5 minutos com batedeira ate obter um creme claro e fofo (creme de gemas).',
                'Adicione o mascarpone e misture delicadamente com uma espatula, de baixo para cima, ate ficar homogeneo. Nao bata para nao perder a leveza.',
                'Bata o creme de leite fresco em ponto de chantilly firme. Incorpore ao creme de mascarpone com movimentos suaves.',
                'Misture o cafe frio com o amaretto (se usar). Mergulhe cada biscoito rapidamente no cafe (1-2 segundos de cada lado, nao mais).',
                'Em um refratario, faca uma camada de biscoitos molhados. Cubra com metade do creme. Repita: outra camada de biscoitos e o restante do creme por cima.',
                'Cubra com plastico e leve a geladeira por no minimo 4 horas (ideal: 12 horas). Na hora de servir, polvilhe cacau em po e chocolate ralado.'
            ],
            tips: [
                'O erro mais comum e deixar o biscoito tempo demais no cafe. Ele desmancha e o tiramisu fica aguado. Mergulhe e tire rapido.',
                'Use mascarpone de boa qualidade e gelado. Se estiver morno, o creme desanda.',
                'Tiramisu e sempre melhor no dia seguinte. Planeje fazer de vespera.',
                'Nao use cafe solavel. Use cafe expresso real ou coado bem forte. O cafe e um dos sabores principais.'
            ]
        },
        {
            title: 'Pudim de Leite Condensado',
            image: 'https://s2-receitas.glbimg.com/115DQucrWsNOUxf_ncmMUisprZI=/0x0:1080x819/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_e84042ef78cb4708aeebdf1c68c6cbd6/internal_photos/bs/2020/w/a/cB6VP5QoOByFKEuCleIQ/jonreceitas-109758346-416338779271002-5424220606850697813-n.jpg',
            badge: 'Sobremesa', badgeClass: 'sobremesa',
            time: '1h (+ geladeira)', servings: '10 porcoes', difficulty: 'Facil',
            desc: 'O rei das sobremesas brasileiras. Calda de caramelo dourada, textura sedosa de ovos batidos com leite condensado e leite integral. Cozido em banho-maria para ficar sem furinhos, com a superficie lisa perfeita.',
            ingredients: [
                '1 lata de leite condensado (395g)',
                '1 medida (a lata) de leite integral',
                '3 ovos inteiros',
                '2 gemas adicionais',
                '1 xicara de acucar para o caramelo',
                '3 colheres de sopa de agua para o caramelo'
            ],
            steps: [
                'CARAMELO: Em uma panela, coloque o acucar e a agua. Leve ao fogo medio sem mexer (apenas gire a panela de vez em quando). Quando dourar (cuidado para nao queimar), despeje rapidamente na forma de pudim, espalhando nas laterais.',
                'BLEND: No liquidificador, bata o leite condensado, o leite, os 3 ovos inteiros e as 2 gemas por 1 minuto. Nao bata demais para nao incorporar ar.',
                'Despeje a mistura sobre o caramelo na forma. Cubra com papel-aluminio bem selado.',
                'BANHO-MARIA: Coloque a forma dentro de uma assadeira maior com agua quente (ate a metade da altura da forma de pudim). Asse em forno preaquecido a 180C por 50-60 minutos.',
                'O ponto: ao sacudir a forma, o centro deve tremer levemente, como gelatina. Se ainda estiver liquido, continue assando de 10 em 10 minutos.',
                'Retire do banho-maria, deixe esfriar e leve a geladeira por no minimo 6 horas (ideal: de um dia para o outro). Desenforme passando uma faca nas bordas.'
            ],
            tips: [
                'Bater demais no liquidificador incorpora bolhas de ar, que viram furinhos. Bata o minimo necessario.',
                'O papel-aluminio sobre a forma evita que a agua do banho-maria entre no pudim e que a superficie fique com crosta.',
                'Para desenformar perfeito: passe uma faca nas bordas, coloque um prato por cima e vire de uma vez. Acalme e espere 2 minutos antes de levantar a forma.',
                'Pudim de vespera e infinitamente melhor. A textura firma e o sabor se concentra.'
            ]
        },
        {
            title: 'Omelete de Queijo e Ervas',
            image: 'https://minhasreceitinhas.com.br/wp-content/uploads/2023/07/omelete-queijo-ervas-2.jpg',
            badge: 'Rapida', badgeClass: 'rapida',
            time: '10min', servings: '1 porcao', difficulty: 'Facil',
            desc: 'Perfeita para o cafe da manha ou jantar rapido. Ovos batidos com sal e pimenta, recheada com queijo muccarela derretido, tomate em cubos e ervas frescas. Pronta em minutos, saborosa como em um restaurante.',
            ingredients: [
                '3 ovos grandes',
                '2 colheres de sopa de leite',
                '80g de muccarela ralada',
                '1/2 tomate sem sementes em cubos pequenos',
                'Salsinha e cebolinha frescas picadas',
                'Sal e pimenta-do-reino a gosto',
                '1 colher de chá de manteiga'
            ],
            steps: [
                'Bata os ovos com o leite, sal e pimenta com um garfo (nao batedeira, para nao ficar fofo demais). Nao bata exageradamente.',
                'Em uma frigideira antiaderente, derreta a manteiga em fogo medio-baixo. Quando derreter e espumar, despeje os ovos.',
                'Quando as bordas comecarem a firmar (uns 30 segundos), incline a frigideira e levante as bordas com uma espatula para o liquido escorrer por baixo.',
                'Quando ainda estiver levemente cremosa no topo (nao totalmente seca), adicione o queijo de um lado e o tomate do outro.',
                'Dobre a omelete ao meio com uma espatula, cobrindo o recheio. Deixe por mais 30 segundos para o queijo derreter.',
                'Deslize para o prato e finalize com salsinha e cebolinha frescas por cima.'
            ],
            tips: [
                'Fogo baixo e paciencia sao o segredo. Omelete em fogo alto queima por fora e fica crua por dentro.',
                'O ponto ideal da omelete francesa e dourada por fora e levemente cremosa por dentro. Nunca deixe ficar totalmente seca.',
                'Para uma versao mais leve, use so 2 ovos e queijo cottage no lugar da muccarela.',
                'Variacoes: adiciona presunto, cogumelos salteados, espinafre ou rucula ao recheio.'
            ]
        }
    ];

    // ==============================
    // SISTEMA DE AUTENTICACAO
    // ==============================

    var authScreen = document.getElementById('authScreen');
    var siteContent = document.getElementById('siteContent');
    var loginForm = document.getElementById('loginForm');
    var registerForm = document.getElementById('registerForm');
    var forgotForm = document.getElementById('forgotForm');
    var authTabs = document.querySelectorAll('.auth-tab');
    var togglePasswordBtns = document.querySelectorAll('.toggle-password');
    var forgotLink = document.getElementById('forgotLink');
    var backToLogin = document.getElementById('backToLogin');
    var regPasswordInput = document.getElementById('regPassword');
    var navLogout = document.getElementById('navLogout');
    var navUserName = document.getElementById('navUserName');

    var USERS_KEY = 'saborArte_usuarios';
    var SESSION_KEY = 'saborArte_sessao';

    function initDefaultUser() {
        var users = getUsers();
        if (users.length === 0) {
            users.push({
                nome: 'Philiphe Ferreira',
                email: 'philipheferreira@gmail.com',
                senha: hashSenha('admin123'),
                dataCadastro: new Date().toISOString()
            });
            localStorage.setItem(USERS_KEY, JSON.stringify(users));
        }
    }

    function getUsers() {
        try { return JSON.parse(localStorage.getItem(USERS_KEY)) || []; }
        catch (e) { return []; }
    }

    function hashSenha(senha) {
        var hash = 0;
        for (var i = 0; i < senha.length; i++) {
            var char = senha.charCodeAt(i);
            hash = ((hash << 5) - hash) + char;
            hash = hash & hash;
        }
        return 'sha_' + Math.abs(hash).toString(36) + '_' + senha.length;
    }

    function checkSession() {
        try {
            var session = JSON.parse(localStorage.getItem(SESSION_KEY)) || JSON.parse(sessionStorage.getItem(SESSION_KEY));
            if (session && session.email) {
                var users = getUsers();
                var user = users.find(function(u) { return u.email === session.email; });
                if (user) { showSite(user); return true; }
            }
        } catch (e) {}
        return false;
    }

    function showSite(user) {
        if (navUserName) {
            var partes = user.nome.split(' ');
            navUserName.textContent = partes[0];
        }
        if (authScreen) {
            authScreen.classList.add('hiding');
            setTimeout(function() {
                authScreen.style.display = 'none';
                if (siteContent) {
                    siteContent.style.display = 'block';
                    siteContent.classList.add('entering');
                    setTimeout(function() { siteContent.classList.remove('entering'); }, 600);
                }
                window.scrollTo(0, 0);
                initSiteFeatures();
            }, 500);
        }
    }

    function doLogout() {
        localStorage.removeItem(SESSION_KEY);
        sessionStorage.removeItem(SESSION_KEY);
        window.location.reload();
    }

    // Abas login/registro
    authTabs.forEach(function(tab) {
        tab.addEventListener('click', function() {
            var target = tab.getAttribute('data-tab');
            authTabs.forEach(function(t) { t.classList.remove('active'); });
            tab.classList.add('active');
            loginForm.classList.remove('active');
            registerForm.classList.remove('active');
            forgotForm.classList.remove('active');
            if (target === 'login') loginForm.classList.add('active');
            else if (target === 'register') registerForm.classList.add('active');
            clearAllMessages(); clearAllErrors();
        });
    });

    if (forgotLink) forgotLink.addEventListener('click', function(e) {
        e.preventDefault();
        authTabs.forEach(function(t) { t.classList.remove('active'); });
        loginForm.classList.remove('active'); registerForm.classList.remove('active');
        forgotForm.classList.add('active'); clearAllMessages(); clearAllErrors();
    });

    if (backToLogin) backToLogin.addEventListener('click', function() {
        forgotForm.classList.remove('active'); loginForm.classList.add('active');
        authTabs[0].classList.add('active'); clearAllMessages(); clearAllErrors();
    });

    // Mostrar/ocultar senha
    togglePasswordBtns.forEach(function(btn) {
        btn.addEventListener('click', function() {
            var input = document.getElementById(btn.getAttribute('data-target'));
            if (!input) return;
            var icon = btn.querySelector('i');
            if (input.type === 'password') {
                input.type = 'text'; icon.classList.remove('fa-eye'); icon.classList.add('fa-eye-slash');
            } else {
                input.type = 'password'; icon.classList.remove('fa-eye-slash'); icon.classList.add('fa-eye');
            }
        });
    });

    // Barra de forca da senha
    if (regPasswordInput) {
        regPasswordInput.addEventListener('input', function() {
            var senha = regPasswordInput.value;
            var sc = document.getElementById('passwordStrength');
            var sf = document.getElementById('strengthFill');
            var st = document.getElementById('strengthText');
            if (senha.length === 0) { sc.classList.remove('visible'); return; }
            sc.classList.add('visible');
            var score = 0;
            if (senha.length >= 6) score++;
            if (senha.length >= 8) score++;
            if (/[A-Z]/.test(senha)) score++;
            if (/[0-9]/.test(senha)) score++;
            if (/[^A-Za-z0-9]/.test(senha)) score++;
            sf.className = 'strength-fill'; st.className = 'strength-text';
            if (score <= 1) { sf.classList.add('weak'); st.classList.add('weak'); st.textContent = 'Fraca'; }
            else if (score <= 2) { sf.classList.add('fair'); st.classList.add('fair'); st.textContent = 'Razoavel'; }
            else if (score <= 3) { sf.classList.add('good'); st.classList.add('good'); st.textContent = 'Boa'; }
            else { sf.classList.add('strong'); st.classList.add('strong'); st.textContent = 'Forte'; }
        });
    }

    // Validacao
    function isEmailValid(email) { return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email); }
    function showFieldError(id, msg) {
        var el = document.getElementById(id); if (!el) return;
        el.textContent = msg; el.classList.add('show');
        var inp = el.previousElementSibling; if (inp) { var i = inp.querySelector('input'); if (i) { i.classList.add('input-error'); i.classList.remove('input-success'); } }
    }
    function showFieldSuccess(id) {
        var el = document.getElementById(id); if (!el) return;
        el.textContent = ''; el.classList.remove('show');
        var inp = el.previousElementSibling; if (inp) { var i = inp.querySelector('input'); if (i) { i.classList.remove('input-error'); i.classList.add('input-success'); } }
    }
    function clearFieldError(id) {
        var el = document.getElementById(id); if (!el) return;
        el.textContent = ''; el.classList.remove('show');
        var inp = el.previousElementSibling; if (inp) { var i = inp.querySelector('input'); if (i) { i.classList.remove('input-error', 'input-success'); } }
    }
    function clearAllErrors() {
        document.querySelectorAll('.field-error').forEach(function(el) { el.textContent = ''; el.classList.remove('show'); });
        document.querySelectorAll('.input-wrapper input').forEach(function(inp) { inp.classList.remove('input-error', 'input-success'); });
    }
    function showFormMessage(id, texto, tipo) {
        var el = document.getElementById(id); if (!el) return;
        el.textContent = texto; el.className = 'auth-message ' + tipo + ' show';
    }
    function clearAllMessages() {
        document.querySelectorAll('.auth-message').forEach(function(el) { el.className = 'auth-message'; el.textContent = ''; });
    }
    function setButtonLoading(id, loading) {
        var btn = document.getElementById(id); if (!btn) return;
        if (loading) { btn.classList.add('loading'); btn.disabled = true; }
        else { btn.classList.remove('loading'); btn.disabled = false; }
    }

    // Submit login
    if (loginForm) loginForm.addEventListener('submit', function(e) {
        e.preventDefault(); clearAllErrors(); clearAllMessages();
        var email = document.getElementById('loginEmail').value.trim();
        var password = document.getElementById('loginPassword').value;
        var remember = document.getElementById('rememberMe').checked;
        var valid = true;
        if (!email) { showFieldError('loginEmailError', 'Digite seu e-mail.'); valid = false; }
        else if (!isEmailValid(email)) { showFieldError('loginEmailError', 'Formato de e-mail invalido.'); valid = false; }
        if (!password) { showFieldError('loginPasswordError', 'Digite sua senha.'); valid = false; }
        if (!valid) return;
        setButtonLoading('loginSubmit', true);
        setTimeout(function() {
            setButtonLoading('loginSubmit', false);
            var users = getUsers();
            var user = users.find(function(u) { return u.email.toLowerCase() === email.toLowerCase(); });
            if (!user) { showFieldError('loginEmailError', 'E-mail nao cadastrado.'); return; }
            if (user.senha !== hashSenha(password)) { showFieldError('loginPasswordError', 'Senha incorreta.'); return; }
            var session = { email: user.email, nome: user.nome, timestamp: Date.now() };
            if (remember) localStorage.setItem(SESSION_KEY, JSON.stringify(session));
            else sessionStorage.setItem(SESSION_KEY, JSON.stringify(session));
            showFormMessage('loginMessage', 'Login realizado com sucesso! Redirecionando...', 'success');
            setTimeout(function() { showSite(user); }, 800);
        }, 1200);
    });

    // Submit registro
    if (registerForm) registerForm.addEventListener('submit', function(e) {
        e.preventDefault(); clearAllErrors(); clearAllMessages();
        var nome = document.getElementById('regName').value.trim();
        var email = document.getElementById('regEmail').value.trim();
        var password = document.getElementById('regPassword').value;
        var confirm = document.getElementById('regConfirm').value;
        var terms = document.getElementById('regTerms').checked;
        var valid = true;
        if (!nome) { showFieldError('regNameError', 'Digite seu nome completo.'); valid = false; }
        else if (nome.length < 3) { showFieldError('regNameError', 'Nome deve ter pelo menos 3 caracteres.'); valid = false; }
        if (!email) { showFieldError('regEmailError', 'Digite seu e-mail.'); valid = false; }
        else if (!isEmailValid(email)) { showFieldError('regEmailError', 'Formato de e-mail invalido.'); valid = false; }
        if (!password) { showFieldError('regPasswordError', 'Digite uma senha.'); valid = false; }
        else if (password.length < 6) { showFieldError('regPasswordError', 'Senha deve ter pelo menos 6 caracteres.'); valid = false; }
        if (!confirm) { showFieldError('regConfirmError', 'Confirme sua senha.'); valid = false; }
        else if (password !== confirm) { showFieldError('regConfirmError', 'As senhas nao coincidem.'); valid = false; }
        if (!terms) { showFieldError('regTermsError', 'Voce precisa aceitar os termos.'); valid = false; }
        if (!valid) return;
        var users = getUsers();
        if (users.find(function(u) { return u.email.toLowerCase() === email.toLowerCase(); })) {
            showFieldError('regEmailError', 'Este e-mail ja esta cadastrado.'); return;
        }
        setButtonLoading('registerSubmit', true);
        setTimeout(function() {
            setButtonLoading('registerSubmit', false);
            users.push({ nome: nome, email: email.toLowerCase(), senha: hashSenha(password), dataCadastro: new Date().toISOString() });
            localStorage.setItem(USERS_KEY, JSON.stringify(users));
            showFormMessage('registerMessage', 'Conta criada com sucesso! Voce ja pode fazer login.', 'success');
            registerForm.reset();
            document.getElementById('passwordStrength').classList.remove('visible');
            clearAllErrors();
            setTimeout(function() { authTabs[0].click(); }, 1500);
        }, 1500);
    });

    // Submit recuperar
    if (forgotForm) forgotForm.addEventListener('submit', function(e) {
        e.preventDefault(); clearAllErrors(); clearAllMessages();
        var email = document.getElementById('forgotEmail').value.trim();
        if (!email) { showFieldError('forgotEmailError', 'Digite seu e-mail.'); return; }
        if (!isEmailValid(email)) { showFieldError('forgotEmailError', 'Formato de e-mail invalido.'); return; }
        setButtonLoading('forgotSubmit', true);
        setTimeout(function() {
            setButtonLoading('forgotSubmit', false);
            var users = getUsers();
            var user = users.find(function(u) { return u.email.toLowerCase() === email.toLowerCase(); });
            if (!user) { showFieldError('forgotEmailError', 'E-mail nao encontrado em nossa base.'); return; }
            user.senha = hashSenha('123456');
            localStorage.setItem(USERS_KEY, JSON.stringify(users));
            showFormMessage('forgotMessage', 'Sua senha foi redefinida para: 123456', 'success');
        }, 1500);
    });

    // Validacao em tempo real
    var loginEmailInput = document.getElementById('loginEmail');
    if (loginEmailInput) loginEmailInput.addEventListener('blur', function() {
        var v = loginEmailInput.value.trim();
        if (v && !isEmailValid(v)) showFieldError('loginEmailError', 'Formato de e-mail invalido.');
        else if (v) showFieldSuccess('loginEmailError');
        else clearFieldError('loginEmailError');
    });
    var regEmailInput = document.getElementById('regEmail');
    if (regEmailInput) regEmailInput.addEventListener('blur', function() {
        var v = regEmailInput.value.trim();
        if (v && !isEmailValid(v)) showFieldError('regEmailError', 'Formato de e-mail invalido.');
        else if (v) showFieldSuccess('regEmailError');
        else clearFieldError('regEmailError');
    });
    var regConfirmInput = document.getElementById('regConfirm');
    if (regConfirmInput && regPasswordInput) regConfirmInput.addEventListener('input', function() {
        var v = regConfirmInput.value;
        if (v && v !== regPasswordInput.value) showFieldError('regConfirmError', 'As senhas nao coincidem.');
        else if (v) showFieldSuccess('regConfirmError');
        else clearFieldError('regConfirmError');
    });

    if (navLogout) navLogout.addEventListener('click', function(e) { e.preventDefault(); doLogout(); });

    initDefaultUser();
    if (!checkSession()) {
        if (authScreen) authScreen.style.display = 'flex';
        if (siteContent) siteContent.style.display = 'none';
    }

    // ==============================
    // FUNCIONALIDADES DO SITE
    // ==============================

    var siteInitialized = false;

    function initSiteFeatures() {
        if (siteInitialized) return;
        siteInitialized = true;

        var yearSpan = document.getElementById('year');
        if (yearSpan) yearSpan.textContent = new Date().getFullYear();

        var filterBtns = document.querySelectorAll('.filter-btn');
        var recipeCards = document.querySelectorAll('.recipe-card');
        var searchInput = document.getElementById('searchInput');
        var resultCount = document.getElementById('resultCount');
        var noResults = document.getElementById('noResults');
        var favBtns = document.querySelectorAll('.fav-btn');

        var filtroAtivo = 'todos';
        var termoBusca = '';

        // --- Filtros ---
        filterBtns.forEach(function(btn) {
            btn.addEventListener('click', function() {
                filterBtns.forEach(function(b) { b.classList.remove('active'); });
                btn.classList.add('active');
                filtroAtivo = btn.getAttribute('data-filter');
                aplicarFiltros();
            });
        });

        // --- Busca ---
        if (searchInput) {
            searchInput.addEventListener('input', function() {
                termoBusca = searchInput.value.toLowerCase().trim();
                aplicarFiltros();
            });
        }

        function aplicarFiltros() {
            var visiveis = 0;
            recipeCards.forEach(function(card, index) {
                var categoria = card.getAttribute('data-category');
                var texto = card.textContent.toLowerCase();
                var passaCategoria = (filtroAtivo === 'todos') || (categoria === filtroAtivo);
                var passaBusca = (termoBusca === '') || texto.includes(termoBusca);
                if (passaCategoria && passaBusca) {
                    card.classList.remove('hidden'); card.classList.remove('fade-in');
                    void card.offsetWidth; card.classList.add('fade-in');
                    card.style.animationDelay = (visiveis * 0.06) + 's'; visiveis++;
                } else {
                    card.classList.add('hidden'); card.classList.remove('fade-in');
                }
            });
            if (resultCount) {
                if (termoBusca.length > 0) { resultCount.textContent = visiveis + ' encontrada' + (visiveis !== 1 ? 's' : ''); resultCount.classList.add('visible'); }
                else resultCount.classList.remove('visible');
            }
            if (noResults) { if (visiveis === 0) noResults.classList.add('visible'); else noResults.classList.remove('visible'); }
        }

        // --- Favoritos ---
        var favoritos = JSON.parse(localStorage.getItem('receitasFavoritas') || '[]');
        favBtns.forEach(function(btn, index) {
            if (favoritos.includes(index)) { btn.classList.add('favorited'); btn.innerHTML = '<i class="fas fa-heart"></i>'; }
        });
        favBtns.forEach(function(btn, index) {
            btn.addEventListener('click', function(e) {
                e.stopPropagation(); // Nao abre o modal
                var jaFavoritado = btn.classList.contains('favorited');
                if (jaFavoritado) {
                    btn.classList.remove('favorited'); btn.innerHTML = '<i class="far fa-heart"></i>';
                    favoritos = favoritos.filter(function(i) { return i !== index; });
                    showToast('Receita removida dos favoritos');
                } else {
                    btn.classList.add('favorited'); btn.innerHTML = '<i class="fas fa-heart"></i>';
                    favoritos.push(index); showToast('Receita adicionada aos favoritos');
                }
                localStorage.setItem('receitasFavoritas', JSON.stringify(favoritos));
                // Atualiza botao do modal se estiver aberto
                updateModalFavBtn();
            });
        });

        // ==============================
        // MODAL DE RECEITA
        // ==============================

        var modalOverlay = document.getElementById('recipeModal');
        var modalContent = document.getElementById('recipeModalContent');
        var modalClose = document.getElementById('modalClose');
        var modalTabs = document.querySelectorAll('.modal-tab');
        var modalFavBtn = document.getElementById('modalFavBtn');
        var currentRecipeIndex = -1;

        // Clique no card abre o modal
        recipeCards.forEach(function(card) {
            card.addEventListener('click', function(e) {
                // Nao abre se clicou no botao de favoritar
                if (e.target.closest('.fav-btn')) return;
                var recipeIndex = parseInt(card.getAttribute('data-recipe'));
                if (isNaN(recipeIndex) || !recipesDB[recipeIndex]) return;
                openModal(recipeIndex);
            });
        });

        function openModal(index) {
            currentRecipeIndex = index;
            var recipe = recipesDB[index];

            document.getElementById('modalImage').src = recipe.image;
            document.getElementById('modalImage').alt = recipe.title;
            document.getElementById('modalBadge').textContent = recipe.badge;
            document.getElementById('modalBadge').className = 'recipe-badge ' + recipe.badgeClass;
            document.getElementById('modalTitle').textContent = recipe.title;
            document.getElementById('modalDesc').textContent = recipe.desc;
            document.getElementById('modalTime').textContent = recipe.time;
            document.getElementById('modalServings').textContent = recipe.servings;
            document.getElementById('modalDifficulty').textContent = recipe.difficulty;

            // Ingredientes
            var ingredientsList = document.getElementById('modalIngredients');
            ingredientsList.innerHTML = '';
            recipe.ingredients.forEach(function(ing) {
                var li = document.createElement('li');
                li.textContent = ing;
                ingredientsList.appendChild(li);
            });

            // Passos
            var stepsList = document.getElementById('modalSteps');
            stepsList.innerHTML = '';
            recipe.steps.forEach(function(step) {
                var li = document.createElement('li');
                li.textContent = step;
                stepsList.appendChild(li);
            });

            // Dicas
            var tipsContent = document.getElementById('modalTips');
            tipsContent.innerHTML = '';
            recipe.tips.forEach(function(tip) {
                var p = document.createElement('p');
                p.textContent = tip;
                tipsContent.appendChild(p);
            });

            // Reseta abas para a primeira
            modalTabs.forEach(function(t) { t.classList.remove('active'); });
            modalTabs[0].classList.add('active');
            document.getElementById('tabIngredients').classList.add('active');
            document.getElementById('tabSteps').classList.remove('active');
            document.getElementById('tabTips').classList.remove('active');

            // Atualiza botao de favoritar
            updateModalFavBtn();

            // Scroll do body travado
            document.body.style.overflow = 'hidden';

            // Abre o modal
            modalOverlay.classList.add('open');
        }

        function closeModal() {
            modalOverlay.classList.remove('open');
            document.body.style.overflow = '';
            currentRecipeIndex = -1;
        }

        function updateModalFavBtn() {
            if (!modalFavBtn || currentRecipeIndex < 0) return;
            if (favoritos.includes(currentRecipeIndex)) {
                modalFavBtn.classList.add('favorited');
                modalFavBtn.innerHTML = '<i class="fas fa-heart"></i><span>Remover dos favoritos</span>';
            } else {
                modalFavBtn.classList.remove('favorited');
                modalFavBtn.innerHTML = '<i class="far fa-heart"></i><span>Adicionar aos favoritos</span>';
            }
        }

        // Fechar modal
        if (modalClose) modalClose.addEventListener('click', closeModal);

        // Fechar clicando no overlay (fora do modal)
        if (modalOverlay) modalOverlay.addEventListener('click', function(e) {
            if (e.target === modalOverlay) closeModal();
        });

        // Fechar com ESC
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && modalOverlay.classList.contains('open')) {
                closeModal();
            }
        });

        // Abas do modal
        modalTabs.forEach(function(tab) {
            tab.addEventListener('click', function() {
                var target = tab.getAttribute('data-mtab');
                modalTabs.forEach(function(t) { t.classList.remove('active'); });
                tab.classList.add('active');
                document.getElementById('tabIngredients').classList.remove('active');
                document.getElementById('tabSteps').classList.remove('active');
                document.getElementById('tabTips').classList.remove('active');
                if (target === 'ingredients') document.getElementById('tabIngredients').classList.add('active');
                else if (target === 'steps') document.getElementById('tabSteps').classList.add('active');
                else if (target === 'tips') document.getElementById('tabTips').classList.add('active');
            });
        });

        // Favoritar pelo modal
        if (modalFavBtn) modalFavBtn.addEventListener('click', function() {
            if (currentRecipeIndex < 0) return;
            var idx = currentRecipeIndex;
            if (favoritos.includes(idx)) {
                favoritos = favoritos.filter(function(i) { return i !== idx; });
                showToast('Receita removida dos favoritos');
            } else {
                favoritos.push(idx);
                showToast('Receita adicionada aos favoritos');
            }
            localStorage.setItem('receitasFavoritas', JSON.stringify(favoritos));
            updateModalFavBtn();
            // Atualiza botao do card tambem
            var cardBtn = recipeCards[idx].querySelector('.fav-btn');
            if (cardBtn) {
                if (favoritos.includes(idx)) {
                    cardBtn.classList.add('favorited'); cardBtn.innerHTML = '<i class="fas fa-heart"></i>';
                } else {
                    cardBtn.classList.remove('favorited'); cardBtn.innerHTML = '<i class="far fa-heart"></i>';
                }
            }
        });
    }

    // --- Toast (global) ---
    var toastTimeout = null;
    window.showToast = function(mensagem) {
        var toast = document.getElementById('toast');
        var toastMessage = document.getElementById('toastMessage');
        if (!toast || !toastMessage) return;
        if (toastTimeout) { clearTimeout(toastTimeout); toast.classList.remove('show'); }
        toastMessage.textContent = mensagem;
        requestAnimationFrame(function() { toast.classList.add('show'); });
        toastTimeout = setTimeout(function() { toast.classList.remove('show'); toastTimeout = null; }, 2500);
    };

    // --- Newsletter (global) ---
    window.handleSubscribe = function(event) {
        event.preventDefault();
        var form = event.target;
        var emailInput = form.querySelector('input[type="email"]');
        if (emailInput && emailInput.value) {
            showToast('Inscrito com sucesso! Receba receitas em ' + emailInput.value);
            emailInput.value = '';
        }
    };

});