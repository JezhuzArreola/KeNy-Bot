KeNy-Bot ✨
<p align="center"> <img src="https://imgur.com/9PUeonC.jpg" alt="KeNy-Bot" width="200"/> </p> <p align="center"> <a href="https://github.com/DarkSideMoon13/KeNy-Bot/stargazers"> <img src="https://img.shields.io/github/stars/DarkSideMoon13/KeNy-Bot?color=ff4500&style=flat-square" alt="Stars"> </a> <a href="https://github.com/DarkSideMoon13/KeNy-Bot/network/members"> <img src="https://img.shields.io/github/forks/DarkSideMoon13/KeNy-Bot?color=ff4500&style=flat-square" alt="Forks"> </a> <a href="https://github.com/DarkSideMoon13/KeNy-Bot/watchers"> <img src="https://img.shields.io/github/watchers/DarkSideMoon13/KeNy-Bot?label=Watching&color=ff4500&style=flat-square" alt="Watching"> </a> </p> <p align="center"> <a href="https://www.youtube.com/@KeNy_Dev"> <img src="https://img.shields.io/badge/YouTube-FF0000?style=for-the-badge&logo=youtube&logoColor=white" alt="YouTube"> </a> <a href="https://instagram.com/jezhuzarrs"> <img src="https://img.shields.io/badge/Instagram-E4405F?style=for-the-badge&logo=instagram&logoColor=white" alt="Instagram"> </a> </p>
🔹 Prueba el Bot

Antes de instalar KeNy-Bot, prueba el bot aquí:

<p align="center"> <a href="https://chat.whatsapp.com/HGxtrIkJTWi1bWMR64qDSz"> <img src="https://img.shields.io/badge/KeNy-Bot-0a0a0a?style=for-the-badge&logo=whatsapp&logoColor=white" alt="KeNy-Bot"> </a> </p>
💻 Instalación & Uso
<details> <summary>📱 Termux</summary>
🚀 Instalación automática
termux-setup-storage
apt update -y && yes | apt upgrade
pkg install -y bash wget mpv
wget -O - https://raw.githubusercontent.com/DarkSideMoon13/KeNy-Bot/master/update.sh | bash
⚡ Activar KeNy-Bot
termux-setup-storage
apt-get update -y && apt-get upgrade -y
pkg install -y git nodejs ffmpeg imagemagick yarn
git clone https://github.com/DarkSideMoon13/KeNy-Bot
cd KeNy-Bot
yarn install && npm install
npm update
npm start
🔑 Obtener otro código QR
cd KeNy-Bot
rm -rf sessions
npm start
🌙 Mantener el bot 24/7
termux-wake-lock
npm i -g pm2
pm2 start index.js
pm2 save
pm2 logs

Advertencias PM2:

Ver logs: pm2 logs

Detener: pm2 stop index

Iniciar de nuevo: pm2 start index

⬆️ Actualizar KeNy-Bot
grep -q 'bash\|wget' <(dpkg -l) || apt install -y bash wget
wget -O - https://raw.githubusercontent.com/DarkSideMoon13/KeNy-Bot/master/update.sh | bash
</details> <details> <summary>🖥️ PC / Linux</summary>
✅ Requisitos

Node.js ≥ 16

Git

FFmpeg

Yarn

🚀 Instalación
git clone https://github.com/DarkSideMoon13/KeNy-Bot
cd KeNy-Bot
yarn install && npm install
npm update
npm start
🌙 Mantener 24/7
npm i -g pm2
pm2 start index.js
pm2 save
pm2 logs
</details> <details> <summary>📲 Android / Otros</summary>

Para otros entornos Android con Termux-like o Linux deploy, sigue los pasos de Termux.
Asegúrate de tener permisos de almacenamiento y ejecución, y de mantener el bot activo con pm2 para 24/7.

</details>
✍️ Editor & Propietario del Bot
<p align="center"> <a href="https://github.com/DarkSideMoon13"> <img src="https://github.com/DarkSideMoon13.png" width="100" height="100" alt="Eder"> </a> </p> ---

