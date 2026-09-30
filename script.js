document.addEventListener('DOMContentLoaded', () => {
    const btnTema = document.getElementById('btnTema');
    const btnAumentar = document.getElementById('btnAumentarFonte');
    const btnDiminuir = document.getElementById('btnDiminuirFonte');
    const btnGerarFato = document.getElementById('btnGerarFato');
    const divResultado = document.getElementById('resultado');
    const textoResultado = document.getElementById('textoResultado');
    const btnOuvir = document.getElementById('btnOuvir');

    let tamanhoFonte = 16;

    if (btnAumentar && btnDiminuir) {
        btnAumentar.addEventListener('click', () => {
            if (tamanhoFonte < 26) {
                tamanhoFonte += 2;
                document.documentElement.style.fontSize = `${tamanhoFonte}px`;
            }
        });

        btnDiminuir.addEventListener('click', () => {
            if (tamanhoFonte > 12) {
                tamanhoFonte -= 2;
                document.documentElement.style.fontSize = `${tamanhoFonte}px`;
            }
        });
    }

    if (btnTema) {
        btnTema.addEventListener('click', () => {
            document.body.classList.toggle('light-mode');
            btnTema.textContent = document.body.classList.contains('light-mode')
                ? 'Modo Escuro'
                : 'Modo Claro';
        });
    }

    const fatosAleatorios = [
        "A caixa postal oficial do Papai Noel no Canadá tem o CEP 'H0H 0H0'.",
        "Existe uma pista de pouso oficial para OVNIs construída em St. Paul, Alberta.",
        "A menor prisão do mundo fica em Cobourg, Ontario, medindo apenas 24 m².",
        "Canadá tem mais lojas de donuts per capita do que qualquer outro país do mundo.",
        "Existe um lugar em Saskatchewan chamado 'Eyebrow' (Sobrancelha).",
        "Uma cidade inteira chamada Pekwachnamaykoskwaskwaypinwanik tem o maior nome de lugar no Canadá.",
        "O Canadá consome mais Macaroni & Cheese (Kraft Dinner) do que qualquer outra nação.",
        "A polícia montada canadense já prendeu um urso por invadir uma loja de doces.",
        "O Canadá possui uma ilha dentro de um lago que fica dentro de uma ilha dentro de um lago.",
        "Em Nunavut, as placas de carro têm o formato de um urso polar.",
        "Mais da metade dos ursos polares do mundo vivem no Canadá.",
        "Em 1967, a Força Aérea Canadense criou um esquadrão de caça a monstros marítimos.",
        "A palavra 'Canadá' quase foi substituída por 'Borealia' durante a confederação.",
        "Existe um festival em Yukon onde as pessoas congelam o cabelo em formas malucas dentro de águas termais.",
        "Você pode encomendar uma carta oficial do governo canadense se cumprir 100 anos de idade.",
        "Os canadenses inventaram o frisbee de neve.",
        "Em Newfoundland, o fuso horário tem uma diferença de 30 minutos em relação ao resto da região.",
        "O maior dinossauro já montado em exibição foi encontrado em Alberta.",
        "Existem 55.000 espécies diferentes de insetos conhecidas no Canadá.",
        "O gelo de algumas geleiras do Canadá é usado para fazer uma marca exclusiva de vodca.",
        "No Canadá, é ilegal pagar uma compra de 5 dólares usando apenas moedas de 5 centavos.",
        "A moeda de $1 dólar é chamada de 'Loonie' porque tem a imagem de uma ave chamada Loon.",
        "A moeda de $2 dólares é chamada de 'Toonie' por combinar 'Two' com 'Loonie'.",
        "Montreal é a segunda maior cidade de língua francesa do mundo, atrás apenas de Paris.",
        "Existe uma lei em Ontario que proíbe andar a cavalo no domingo na rodovia principal.",
        "O Canadá tem a maior reserva natural de água doce do mundo.",
        "No Canadá, você pode encontrar sorvete sabor xarope de bordo com pedacinhos de bacon.",
        "Existe uma cidade em Yukon chamada 'Dildo'.",
        "Canadenses dizem 'Eh' em média 13 vezes por dia.",
        "O Canadá inventou o rolo de pintura de parede.",
        "A invenção do amaciante de roupas moderno aconteceu no Canadá.",
        "A temperatura mais baixa já registrada no Canadá foi -63°C em 1947.",
        "A bandeira atual do Canadá com a folha de bordo foi adotada apenas em 1965.",
        "A folha de bordo da bandeira tem exatamente 11 pontas.",
        "O Canadá possui 6 fusos horários diferentes.",
        "O prédio mais alto do Canadá é a CN Tower em Toronto (553m).",
        "Cerca de 80% do Canadá é desabitado por humanos.",
        "O Canadá tem sua própria versão do Monopólio chamada 'Canadianopoly'.",
        "A maior maçã de plástico do mundo fica na cidade de Colborne, Ontario.",
        "Existe um museu dedicado exclusivamente a batatas em Prince Edward Island.",
        "O Canadá tem o maior número de pistas de boliche por pessoa.",
        "O Superman foi co-criado pelo canadense Joe Shuster.",
        "A invenção da prensa de lenha para lareira (Duraflame) é canadense.",
        "O Canadá exporta água doce engarrafada para mais de 40 países.",
        "O telefone foi inventado no Canadá por Alexander Graham Bell.",
        "O Canadá tem uma reserva estratégica nacional de Maple Syrup caso ocorra uma crise escassez.",
        "Existe um crime específico no Canadá para quem rouba Maple Syrup da reserva nacional.",
        "Em Vancouver, existe uma lei que proíbe matar lagartixas dentro de casa.",
        "Em Calgary, existe uma lei que proíbe soltar rojões sem permissão do prefeito.",
        "O Canadá tem uma cidade chamada 'Head-Smashed-In Buffalo Jump' (Cabeça Esmagada no Pulo do Búfalo).",
        "Existe um bar em Dawson City que serve um drink contendo um dedão do pé humano mumificado de verdade.",
        "O Canadá é o único país a não ganhar medalhas de ouro jogando em casa nos Jogos Olímpicos de Verão (1976).",
        "O esporte de verão oficial do Canadá é o Lacrosse.",
        "O Canadá consome mais refrigerante por pessoa do que a maioria dos países europeus.",
        "Existe um festival anual de corridas de banheiras adaptadas em Nanaimo.",
        "O aeroporto de Calgary tem um serviço de 'cães de terapia' para acalmar passageiros estressados.",
        "No Canadá, leite é vendido em sacos plásticos em vez de caixas de papelão em algumas províncias.",
        "O Canadá foi o primeiro país do mundo a criar um mapa 3D digital de todo seu território.",
        "Existe um tipo de maçã canadense que não fica marrom quando cortada.",
        "A menor fronteira internacional não oficial fica entre o Canadá e a Groenlândia.",
        "O Canadá tem o maior museu de trens da América do Norte.",
        "O famoso ursinho 'Winnie the Pooh' foi inspirado em um urso canadense chamado Winnipeg.",
        "No Canadá, existem passarelas exclusivas acima das rodovias para ursos e alces cruzarem a pista com segurança.",
        "O Canadá consome cerca de 1 bilhão de ovos por ano.",
        "Existe uma competição anual de quem constrói o menor boneco de neve em Edmonton.",
        "O Canadá abriga o maior parque aquático coberto do mundo no West Edmonton Mall.",
        "O maior shopping center da América do Norte fica no Canadá.",
        "Existe um caça-fantasmas oficial registrado pelo governo em Halifax.",
        "No Canadá, é comum encontrar rosquinhas sabor bacon.",
        "A canadense Gladys Johnston jogou boliche até os 100 anos de idade.",
        "O Canadá foi o terceiro país a enviar um satélite para o espaço.",
        "O aplicativo de mensagens BlackBerry foi inventado no Canadá.",
        "O Canadá produz mais de 80% do suprimento mundial de lentilhas.",
        "Há mais telefones celulares do que pessoas na província de Alberta.",
        "O canadense James Naismith usou cestos de pêssego para criar as primeiras cestas de basquete.",
        "Existe uma competição nacional de esculpir esculturas gigantes em blocos de queijo cheddar.",
        "No Canadá, se você achar uma moeda no chão com a imagem do rei, ela pertence teoricamente à coroa.",
        "O Canadá tem a maior quantidade de pistas de patinação no gelo naturais.",
        "A ponte suspensa de Capilano em Vancouver balança vários metros quando ventos fortes passam.",
        "O Canadá possui uma ilha chamada 'Disappointment Island' (Ilha da Decepção).",
        "Em Alberta, não existem ratos selvagens devido a um programa de controle de 70 anos.",
        "O parque provincial Algonquin é maior do que o estado americano de Delaware.",
        "A primeira transmissão de rádio transatlântica foi recebida em St. John's, Canadá.",
        "O famoso microscópio eletrônico foi inventado na Universidade de Toronto.",
        "O Canadá tem a menor taxa de densidade populacional por quilômetro quadrado das Américas.",
        "O Canadá possui o maior recife de água fria do mundo.",
        "Existem hotéis no Canadá que são reconstruídos do zero todos os invernos totalmente com gelo.",
        "O café Tim Hortons vende mais de 5 milhões de xícaras de café por dia no Canadá.",
        "O Canadá tem um lago de água salgada chamado 'Spotted Lake' que forma círculos coloridos no verão.",
        "No Canadá, o feriado de Ação de Graças é comemorado em outubro, e não em novembro como nos EUA.",
        "A cidade canadense de Alert é o povoamento humano permanente mais ao norte do planeta.",
        "O Canadá produz 85% do suprimento mundial de urânio para medicina nuclear.",
        "Em Quebec, é ilegal colocar placas de sinalização apenas em inglês.",
        "O Canadá tem uma colônia de pinguins vivendo sob cuidados especiais em Calgary.",
        "O Canadá foi o primeiro país a banir o uso de mamadeiras de policarbonato com Bisfenol A.",
        "O exército canadense usa bermudas de camuflagem durante patrulhas no verão.",
        "O Canadá tem uma rocha vulcânica que data de mais de 4 bilhões de anos.",
        "Mais de 40% da população canadense tem diploma universitário ou técnico.",
        "O Canadá é a terra natal do famoso circo 'Cirque du Soleil'.",
        "A cidade de Niagara Falls tem o maior número de casamentos de comemoração por ano.",
        "No Canadá, os carteiros às vezes usam carrinhos de neve elétricos para entregar correspondências no inverno.",
        "O Canadá tem o maior festival de comédia do mundo, o 'Just for Laughs' em Montreal.",
        "Mais de 30% da massa terrestre do Canadá é coberta por tundra boreal.",
        "Existe um meteorito antigo cravado que formou um dos maiores reservatórios de minérios em Sudbury.",
        "O Canadá possui cerca de 52.455 ilhas espalhadas por seu território."
      
    ];

    if (btnGerarFato) {
        btnGerarFato.addEventListener('click', () => {
            const indiceAleatorio = Math.floor(Math.random() * fatosAleatorios.length);
            const fatoSelecionado = fatosAleatorios[indiceAleatorio];

            textoResultado.innerHTML = `<strong>Fato #${indiceAleatorio + 1}:</strong> ${fatoSelecionado}`;
            divResultado.classList.remove('hidden');
        });
    }

    if (btnOuvir) {
        btnOuvir.addEventListener('click', () => {
            if ('speechSynthesis' in window) {
                if (window.speechSynthesis.speaking) {
                    window.speechSynthesis.cancel();
                    btnOuvir.textContent = "🔊 Ouvir Texto";
                    return;
                }

                const textoDoSite = document.querySelector('main').innerText;
                
                const mensagem = new SpeechSynthesisUtterance(textoDoSite);
                mensagem.lang = 'pt-BR';
                mensagem.rate = 1.0; 

                mensagem.onend = () => {
                    btnOuvir.textContent = "🔊 Ouvir Texto";
                };

                btnOuvir.textContent = "⏹️ Parar de Ouvir";
                window.speechSynthesis.speak(mensagem);
            } else {
                alert("Seu navegador não suporta a função de leitura de voz.");
            }
        });
    }
});