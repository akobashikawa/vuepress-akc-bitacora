# 20230119: Smee Client
## Smee Client: ECONNREFUSED
-  [smee.io](https://smee.io/) es un proyecto que permite comunicar github con jenkis cruzando el firewall
	- En smee
	- En la configuración webhooks de github, se indica el canal smee
- Usando smee-client, obtengo ECONNREFUSED
- Sin embargo, el servicio está corriendo y puedo probarlo, con curl, por ejemplo.
- Lo soluciono reemplazando localhost por 127.0.0.1
	- Al parecer, node no siempre resuelve bien localhost
#### Referencia
- [ECONNREFUSED error with node.js that does not occur in other clients](https://stackoverflow.com/questions/10643965/econnrefused-error-with-node-js-that-does-not-occur-in-other-clients)
	- https://stackoverflow.com/a/10646218/740552