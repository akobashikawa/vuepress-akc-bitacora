---
tags:
  - linux
---

# 20240412: Linux timezone

- Uso Linux Ubuntu 22.04
- La hora está expresada según GMT 0
	- Por ejemplo, cuando en Lima son las 07:00 horas, el comando `date` muestra 5 horas más: 12:00 horas
- Cambio el timezone a America/Lima
	- [4 Ways to Change the Timezone in Linux - wikiHow](https://www.wikihow.com/Change-the-Timezone-in-Linux)

```sh
date
sudo tzselect
# elijo America, Peru
# eso detemina America/Lima
# me indica que establezca en el profile
# la variable de entorno TZ con ese valor
sudo vim /etc/profile
# export TZ='America/Lima'
# vuelvo a hacer login
date
```

- Luego de volver a ingresar, el comando `date` muestra la hora expresada en mi timezone local.