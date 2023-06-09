
function dispalyGreetings(today){
        hrs = today.getHours();
        name="Weslley!"
        if (hrs < 12)
            greet = 'Bom Dia  '+name;
        else if (hrs >= 12 && hrs <= 17)
            greet = 'Boa Tarde  '+name;
        else if (hrs >= 17 && hrs <= 24)
            greet = 'Boa Noite  '+name;
        document.getElementById('greet').innerHTML = greet;

    }

    function dispalyDate(today) {  
       
        // const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
        const days = ['Domingo','Segunda','Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];
        const monthNames = ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun","Jul", "Ago", "Set", "Out", "Nov", "Dez"];

        var dayName = days[today.getDay()];
        var monthName = monthNames[today.getMonth()];
        var date = today.getDate();
        var year = today.getFullYear();
        document.getElementById('date').innerHTML =dayName+", "+date+"/"+monthName+"/"+year;

    }

    function dispalyClock(today) {

        var hour = padZeros(twelveHour(today.getHours()));
        var minutes = padZeros(today.getMinutes());
        var seconds = padZeros(today.getSeconds());
       
        if(today.getHours() >=12){
            minutes+=" pm"
        }
        else{
            minutes+=" am"
        }
       
        document.getElementById('hour').innerHTML = hour;
        document.getElementById('min').innerHTML = minutes;
//         document.getElementById('sec').innerHTML = seconds;
    }

    function twelveHour(hour) {
        if (hour > 12) {
            return hour -= 12
        } else if (hour === 0) {
            return hour = 12;
        } else {
            return hour
        }
    }
    function padZeros(num) {
        if (num < 13) {
            num = '0' + num
        };
        return num;
    }

    function dispalyWidget() {
        var today = new Date();
        dispalyGreetings(today);
        dispalyDate(today);
        dispalyClock(today);
        setTimeout(dispalyWidget, 500);
    }

    dispalyWidget()



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
"Acredite que você pode e você já está no meio do caminho."
    // Adicione mais frases motivacionais conforme necessário
];

function generateRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const quoteElement = document.getElementById("quote-text");
  quoteElement.textContent = quotes[randomIndex];
}

// Chame a função para gerar uma frase aleatória ao carregar a página
generateRandomQuote();
