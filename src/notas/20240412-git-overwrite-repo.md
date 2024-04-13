---
tags: ["git"]
---

# 20240412: Git overwrite repository

<TagLinks />

- Se desea que https://github.com/userx/A (default rama main) sobrescriba a https://github.com/userx/B (default rama master)

```sh
git clone --mirror git@github.com:userx/A.git
cd A.git/
git remote set-url --push origin git@github.com:userx/B.git
git push --mirror
---
To github.com:userx/B.git
 ! [remote rejected] master (refusing to delete the current branch: refs/heads/master)
error: failed to push some refs to 'github.com:userx/B.git'
---
```

- El error se debe a que no se puede eliminar la rama `master`, que es la default, para colocar como default a `main`.
- Voy a https://github.com/userx/B, _Settings_, y cambio la rama por default a `main`

```sh
git push --mirror
To github.com:userx/B.git
 - [deleted]         master
```

- Luego de eso, ya puedo eliminar A.git y clonar B

```sh
cd ..
rm -rf A.git
git clone git@github.com:userx/B.git
```

- Aquí he usado las direcciones SSH. Funciona igual usando las direcciones HTTPS.