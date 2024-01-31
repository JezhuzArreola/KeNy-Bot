## KeNy-Bot ✨

<p align="center">
<img src="https://imgur.com/9PUeonC.jpg" alt="KeNy-Bot" width="200"/>
</p>

<a href="https://github.com/DarkSideMoon13/KeNy-Bot"><img title="Stars" src="https://img.shields.io/github/stars/DarkSideMoon13/KeNy-Bot?color=ff4500&style=flat-square" /></a>
<a href="https://github.com/DarkSideMoon13/KeNy-Bot/network/members"><img title="Forks" src="https://img.shields.io/github/forks/DarkSideMoon13/KeNy-Bot?color=ff4500&style=flat-square" /></a>
<a href="https://github.com/DarkSideMoon13/KeNy-Bot/watchers"><img title="Watching" src="https://img.shields.io/github/watchers/DarkSideMoon13/KeNy-Bot?label=watchers&color=ff4500&style=flat-square" /></a> <br>


<a href="https://www.youtube.com/">
<img src="https://img.shields.io/badge/YouTube-FF0000?style=for-the-badge&logo=youtube&logoColor=white" alt="YouTube">
</a>
<a href="https://instagram.com/jezhuzarrs">
<img src="https://img.shields.io/badge/Instagram-E4405F?style=for-the-badge&logo=instagram&logoColor=white">
</a>

### Ejemplo 
En caso de duda, antes de instalar KeNy-Bot, pruebe el bot aquí

<a href="https://chat.whatsapp.com/HGxtrIkJTWi1bWMR64qDSz">
  <img src="https://img.shields.io/badge/KeNy-Bot-0a0a0a?style=for-the-badge&logo=whatsapp&logoColor=white">
</a>

***
#### INSTALACIÓN AUTOMÁTICA POR TERMUX
> **Nota:** Comandos para instalar de forma automática en Termux  
```bash
termux-setup-storage
```
```bash
apt update -y && yes | apt upgrade && pkg install -y bash wget mpv && wget -O - https://raw.githubusercontent.com/DarkSideMoon13/KeNy-Bot/master/update.sh | bash
```

#### ACTIVAR EN TERMUX
> **Nota:** ESCRIBE LOS SIGUIENTES COMANDOS UNO POR UNO:
```bash
termux-setup-storage
```

```bash
apt-get update -y && apt-get upgrade -y
```

```bash
pkg install -y git nodejs ffmpeg imagemagick && pkg install yarn
```

```bash
git clone https://github.com/DarkSideMoon13/KeNy-Bot && cd KeNy-Bot && yarn install && npm install
```

```bash
ls
```
```bash
npm update
```

```bash
npm start
```

### `OBTENER OTRO CODIGO QR`
```bash
ESCRIBE LOS SIGUIENTES COMANDOS UNO POR UNO:
> cd KeNy-Bot
> rm -rf sessions
> npm start
```

### DEJAR TRABAJAR EL BOT EN TERMUX 24/7
EJECUTAR LOS COMANDOS DENTRO DE LA CARPETA
```bash
termux-wake-lock && npm i -g pm2 && pm2 start index.js && pm2 save && pm2 logs 
```
Warning Esto eliminará todo el historial que hayas establecido con PM2:
```bash
pm2 delete index 
```
Si tienes cerrado Termux y quiere ver de nuevo la ejecución use:
```bash
pm2 logs 
```
Si desea detener la ejecución de Termux use:
```bash
pm2 stop index
```
Si desea iniciar de nuevo la ejecución de Termux use:
```bash
pm2 start index
```

### ACTUALIZAR BOT
```bash
grep -q 'bash\|wget' <(dpkg -l) || apt install -y bash wget && wget -O - https://raw.githubusercontent.com/DarkSideMoon13/KeNy-Bot/master/update.sh | bash 
```


### EDITOR & PROPIETARIO DEL BOT
<a href="https://github.com/DarkSideMoon13"><img src="https://github.com/DarkSideMoon13.png" width="100" height="100" alt="Eder"/></a>


<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

