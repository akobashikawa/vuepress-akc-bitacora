---
tags:
  - linux
---

# 20240412: Linux timezone

- Uso Linux Ubuntu 22.04
- La hora estaba siendo expresada según GMT 0
	- Es decir, cuando en Lima son las 07:00 horas, el sistema muestra 5 horas más: 12:00 horas
- Cambio el timezone a America/Lima
	- [4 Ways to Change the Timezone in Linux - wikiHow](https://www.wikihow.com/Change-the-Timezone-in-Linux)

```sh
date
tzselect
# elijo America, Peru
# eso detemina America/Lima
sudo vim /etc/profile
# export TZ='America/Lima'
# vuelvo a hacer login
date
```