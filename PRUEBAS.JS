// Ejemplo de solicitud a la API de League of Legends usando fetch
const apiKey = 'RGAPI-c4485210-e709-494c-8510-5eeaadd422cc';
const summonerName = 'ARDUI1';
const region = 'euw1'; // Código de región para Europa Occidental

// URL para obtener datos del invocador
const summonerUrl = `https://${region}.api.riotgames.com/lol/summoner/v4/summoners/by-name/${summonerName}?api_key=${apiKey}`;

// Selecciona el elemento #app del HTML
const appDiv = document.getElementById('app');

// Realiza la solicitud a la API de League of Legends
fetch(summonerUrl)
    .then(response => response.json())
    .then(data => {
        // Crear elementos HTML para mostrar la información del invocador
        const summonerInfo = document.createElement('div');
        summonerInfo.innerHTML = `
            <h1>Información del Invocador:</h1>
            <p>Nombre: ${data.name}</p>
            <p>Nivel: ${data.summonerLevel}</p>
        `;
        
        // Agrega el contenido al elemento #app en el HTML
        appDiv.appendChild(summonerInfo);
    })
    .catch(error => console.error('Error al obtener datos:', error));
