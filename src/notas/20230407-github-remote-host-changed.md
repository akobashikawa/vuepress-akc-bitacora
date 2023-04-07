# 20230407: Github "Remote Host Identification Has Changed"

- Al intentar una operación con github, devuelve un mensaje que incluye: WARNING: REMOTE HOST IDENTIFICATION HAS CHANGED!
- Al parecer, hacia marzo 24, github habría cambiado sus claves.
- Para renovarlas, sigo estos pasos:
	- [How To Deal With the “Remote Host Identification Has Changed” Message With GitHub](https://levelup.gitconnected.com/how-to-deal-with-the-remote-host-identification-has-changed-message-with-github-1dea015dae8d)
- En el git bash:
	- `ssh-keygen -R github.com`
		- Esto elimina la actual clave registrada para github localmente
	- `git fetch --all`
		- Esto intenta traer nueva información de github y dispara la aceptación de la nueva clave
