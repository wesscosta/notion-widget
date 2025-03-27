// Função para exibir saudação com base na hora do dia
function displayGreeting(today) {
    const name = "Weslley!";
    const hours = today.getHours();
    let greeting;

    if (hours < 12) {
        greeting = 'Bom Dia ' + name;
    } else if (hours < 18) {
        greeting = 'Boa Tarde ' + name;
    } else {
        greeting = 'Boa Noite ' + name;
    }

    document.getElementById('greet').textContent = greeting;
}

// Função para formatar a data no formato desejado
function displayDate(today) {

    //Portugues
    // const days = ['Domingo','Segunda','Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];
    // const days = ['Dom','Seg','Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];
    // const monthNames = ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"];

    //Ingles
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    //const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];



    const dayName = days[today.getDay()];
    const monthName = monthNames[today.getMonth()];
    const date = today.getDate();
    const year = today.getFullYear();

    document.getElementById('date').textContent = `${dayName} | ${date} de ${monthName} |`;
}

// Função para formatar a hora e exibir no formato de 12 horas com AM/PM
function displayClock(today) {
    const hour = formatHour(today.getHours());
    const minutes = padZeros(today.getMinutes());
    const period = (today.getHours() >= 12) ? 'PM' : 'AM';

    document.getElementById('hour').textContent = hour;
    document.getElementById('min').textContent = `${minutes} ${period}`;
}

// Função para formatar a hora no formato de 12 horas
function formatHour(hour) {
    if (hour === 0) return 12;
    if (hour > 12) return hour - 12;
    return hour;
}

// Função para adicionar zero à esquerda em números menores que 10
function padZeros(num) {
    return num < 10 ? '0' + num : num;
}

// Função para gerar uma citação aleatória
function generateRandomQuote() {
    const quotes = [
            "Três coisa que eu não posso perder: TEMPO, FÉ E OPORTUNIDADE",
            "Atitude e Diciplina",
            "O Segredo da vida é: 'Vaca não da Leite!'",
            "A distância entre o sonho e a realidade chama-se disciplina.",
            "Poderás viver, então, do trabalho de tuas mãos, serás feliz e terás bem-estar.",
            "Quando tudo parece está indo contra você lembre-se que o avião decola contra o vento e não a favor dele - Henry Ford",
            "O mal é não ter dinheiro, o mal é não conseguir alcançar seus objetivos, o mal é não ser capaz de realizar seus sonhos, porque o dinheiro está em falta.",
            "O ingênuo acredita em tudo que ouve, o prudente examina seus passos com cuidado. O sábio é cauteloso e evita o mal, mas o tolo é impetuoso e irresponsável. - Provérbios 14:15,16",
            "Todo trabalho árduo traz lucro, mas a mera conversa leva apenas à pobreza. (Provérbios 14:23)",
            "O dinheiro desonesto vai diminuindo, mas quem vai juntando dinheiro aos poucos vai crescendo. (Provérbios 13:11)",
            "Você comerá do fruto do seu trabalho; bênçãos e prosperidade serão suas. (Salmo 128:2)",
            "E tudo o que você fizer, seja por palavra ou por ação, faça-o em nome do Senhor Jesus, dando graças a Deus Pai por meio dele. (Colossenses 3:17)",
            "Olhe para os pássaros do ar; eles não semeiam, colhem ou armazenam em celeiros, mas seu Pai celestial os alimenta. Você não é muito mais valioso que eles? (Mateus 6:26)",
            "O sucesso é a soma de pequenos esforços repetidos diariamente.",
            "Acredite em si mesmo e todo o resto acontecerá.",
            "Você é capaz de coisas incríveis.",
            "A persistência é o caminho do êxito.",
            "Acredite que você pode e você já está no meio do caminho.",
            "Lembre-se, 'Decisões definem destinos'",
            "Só você é responsavel pelo teu futuro! faça suas escolhas",
            "ESCOLHAS",
            "Destrua a Ponte!",
            "Queime os navios!",
            "Não Tenhas medo!",
            "Sem Dor, sem Ganho",
            "Cumprir o que você fala para si mesmo. Se falou que vai fazer, faça. (Mateus 5:38)",
            "Não demore em resolver problemas. Crie o hábito de focar em soluções para resolver seus problemas. (1 Timóteo 6:11)",
            "É normal nos chatermos ou nos decepcionarmos com as pessoas, portanto crie o hábito da reconciliação. (Mateus 5:23-24)",
            "Tenha sempre uma visão clara de no minimo 3meses, Clareza no caminho determinar as suas ações. (Proverbios 21:5)",
            "Crie o hábito de modelar o que ja deu certo. certamente você deve ter alguem em quem se espelha, extraia desta pessoa comportamentos e atitudes que a fizeram chegar onde chegou. (Efésios 5:1-2)",
            "A frase motivacional de hoje é: Dá teus pulos.",
            "Seja forte e corajoso! (Josue 1:9)",
            "Primeiro, coloque a mente na coisa, que dá certo. — Pai",
          
            // Frases de grandes autores e filósofos:
            "A única maneira de fazer um excelente trabalho é amar o que você faz. — Steve Jobs",
            "A vida é o que acontece enquanto estamos ocupados fazendo outros planos. — John Lennon",
            "O sucesso é ir de fracasso em fracasso sem perder o entusiasmo. — Winston Churchill",
            "A única verdadeira sabedoria está em saber que você não sabe nada. — Sócrates",
            "O que não nos mata nos torna mais fortes. — Friedrich Nietzsche",
            "A felicidade não é algo pronto. Ela vem das suas próprias ações. — Dalai Lama",
            "Não é o que você faz, mas como você faz. — Henry Ford",
            "Tudo o que você pode fazer é o melhor que pode, e às vezes isso é suficiente. — Maya Angelou",
            "Quem tem um porquê para viver pode suportar quase qualquer como. — Friedrich Nietzsche",
          
            // Frases de filmes:
            "A vida é feita de escolhas. Você escolhe o que você quer ser. — Batman",
            "Não importa o que aconteça, sempre escolha a esperança. — O Homem de Aço",
            "É o que fazemos agora que define quem somos. — Gladiador",
            "A única coisa que temos a temer é o próprio medo. — O Corvo",
            "As melhores coisas da vida são as mais simples. — O Clube da Luta",
            "Você não pode mudar o passado, mas pode aprender com ele. — O Rei Leão",
            "A maior aventura que você pode ter é viver a vida dos seus sonhos. — A Vida é Bela",
            "As escolhas que fazemos definem quem somos. — As Crônicas de Nárnia: O Leão, a Feiticeira e o Guarda-Roupa",
            "O sucesso não é final, o fracasso não é fatal: o que conta é a coragem de continuar. — O Grande Desafio",
            "O futuro é incerto, mas isso não deve nos impedir de tentar. — Interestelar",
            "Com grandes poderes, vem grandes responsabilidades. — Tio Ben (Spider-Man)",
          
            // Outras frases inspiradoras:
            "A única maneira de fazer um excelente trabalho é amar o que você faz. — Steve Jobs",
            "Não se preocupe com falhas; se preocupe com as chances que você perde quando não tenta. — Jack Canfield",
            "Você nunca será velho o suficiente para estabelecer outro objetivo ou sonhar um novo sonho. — C.S. Lewis",
            "A vida não é medida pelo número de respirações que tomamos, mas pelos momentos que nos tiram a respiração. — George Carlin",
            "Não espere. O tempo nunca será o certo. — Napoleon Hill",
            "O único lugar onde o sucesso vem antes do trabalho é no dicionário. — Vidal Sassoon",
            "Não importa quantas vezes você falha, o importante é quantas vezes você se levanta. — Mary Kay Ash",
            "Viver é a coisa mais rara do mundo. A maioria das pessoas apenas existe. — Oscar Wilde",
            "Nós não somos derrotados quando somos derrubados, mas quando recusamos a nos levantar. — Paulo Coelho",
            "Acredite que você pode, e você já está no meio do caminho. — Theodore Roosevelt",
          
            // Frases de grandes pessoas da tecnologia:
            "A inovação distingue um líder de um seguidor. — Steve Jobs",
            "Foque na experiência do usuário e o dinheiro virá. A experiência do usuário é tudo. — Bill Gates",
            "A tecnologia é apenas uma ferramenta. As pessoas usam as ferramentas para mudar o mundo. — Bill Gates",
            "A maior parte das pessoas vive uma vida curta, sem perceber que a tecnologia pode mudar tudo. — Mark Zuckerberg",
            "Se você não está disposto a arriscar o incomum, terá que se contentar com o comum. — Jim Rohn",
            "Quando você chega ao topo, há sempre algo mais. A jornada nunca termina. — Larry Page (Google)",
            "Se você está trabalhando em algo importante, sempre haverá obstáculos, e você precisa continuar. — Elon Musk",
            "Nós vamos viver em um mundo em que as máquinas terão a capacidade de aprender de maneira autônoma. — Sundar Pichai (CEO do Google)",
            "Os clientes não querem produtos genéricos, eles querem produtos feitos sob medida para eles. — Jeff Bezos (Amazon)",
            "O maior risco é não correr nenhum risco… Em um mundo que muda muito rapidamente, a única estratégia que está garantida a falhar é não assumir riscos. — Mark Zuckerberg",
            

        // Adicione mais frases motivacionais conforme necessário
    ];

    const randomIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById("quote-text").textContent = quotes[randomIndex];
}

// Função para atualizar o widget a cada minuto
function updateWidget() {
    const today = new Date();
    displayGreeting(today);
    displayDate(today);
    displayClock(today);
    generateRandomQuote();

    // Atualiza a cada 60 segundos
    setTimeout(updateWidget, 60000);
}

// Função para ajustar o tema (dark mode ou light mode)
function setTheme() {
    const prefersDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
    document.body.classList.toggle("dark-mode", prefersDarkMode);
    document.body.classList.toggle("light-mode", !prefersDarkMode);
}

// Inicializa o widget e define o tema
function init() {
    setTheme();
    updateWidget();
    generateRandomQuote();

    // Detecta mudanças no tema do sistema
    window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", setTheme);
}

// Inicializa o widget
init();
