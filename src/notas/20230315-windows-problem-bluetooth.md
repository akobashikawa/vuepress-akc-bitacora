---
tags: ["windows", "troubleshooting"]
---

# 20230315: Problema con Bluetooth en Windows 10

<TagLinks />

- Estaba apagado y no aparecía el control para encenderlo
- Win + X (*Device Manager*) y en la lista no aparece *Bluetooth*
- En *Services*, encuentro que los items correspondientes a *Bluetooth* está apagados
	- Los enciendo pero no parece funcionar
	- Cambio el inicio de *Bluetooth Support Service* a *Automático*
- Reinstalo los drivers
	- [Fix Bluetooth problems in Windows](https://support.microsoft.com/en-us/windows/fix-bluetooth-problems-in-windows-723e092f-03fa-858b-5c80-131ec3fba75c)
	- De la página de Intel
- Apago la PC y **espero unos segundos**
- Enciendo
- Device Manager ahora sí muestra el ícono