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

// Função para pegar e mostrar uma frase aleatória
async function generateRandomQuote() {
    try {
        // Obtém as citações de um arquivo JSON
        const response = await fetch('frases.json');
        const data = await response.json();

        // Seleciona uma citação aleatória
        const randomIndex = Math.floor(Math.random() * data.quotes.length);
        document.getElementById("quote-text").textContent = data.quotes[randomIndex];
    } catch (error) {
        console.error('Erro ao buscar citação:', error);
    }
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
