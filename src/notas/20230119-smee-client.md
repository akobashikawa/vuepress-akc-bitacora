# 20230119: Smee Client
## Smee Client: ECONNREFUSED
- Usando smee-client, obtengo ECONNREFUSED
- Sin embargo, el servicio está corriendo y puedo probarlo con curl, por ejemplo
- Lo soluciono reemplazando localhost por 127.0.0.1
	- Al parecer, node no siempre resuelve bien localhost
