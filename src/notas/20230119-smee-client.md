# 20230119: Smee Client
## Smee
-  [smee.io](https://smee.io/) es un proyecto que permite comunicar github con jenkis cruzando el firewall
	- En smee, se crea un canal
	- En la configuración webhooks de github, se indica el canal smee
	- En la máquina donde corre jenkins, se instala un cliente
		- El cliente nota cuando el canal smee ha sido invocado
		- El cliente toma los datos que recibió el canal y se los pasa a jenkins
- my-smee-client
	- package.json
```json
{
  "name": "my-smee-client",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
	"start": "node index.js",
    "smee": "smee --url https://smee.io/my_chanel_id --target http://127.0.0.1:9090/jenkins/github-webhook/"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "smee-client": "^1.2.3"
  }
}
```
## Smee Client: ECONNREFUSED
- Usando smee-client, obtengo ECONNREFUSED
- Sin embargo, el servicio está corriendo y puedo probarlo, con curl, por ejemplo.
- Lo soluciono reemplazando localhost por 127.0.0.1
	- Al parecer, node no siempre resuelve bien localhost
#### Referencia
- [ECONNREFUSED error with node.js that does not occur in other clients](https://stackoverflow.com/questions/10643965/econnrefused-error-with-node-js-that-does-not-occur-in-other-clients)
	- https://stackoverflow.com/a/10646218/740552