---
tags: ["clojure", "lisp"]
---

# 20230318: Clojure Tadam

- **Tadam** es un framework simple para desarrollar web con *Clojure*
- **Clojure** es un lenguaje de programación funcional, dialecto de *Lisp*, que funciona apoyado en la *JVM*
- **Leiningen** es un manejador de proyectos Clojure

## Instalación en Ubuntu

- `curl -O https://download.clojure.org/install/linux-install-1.11.1.1252.sh`
- `chmod +x linux-install-1.11.1.1252.sh`
- `sudo ./linux-install-1.11.1.1252.sh`
- `clj --version`
- `clojure --version`
- `clj`
	- REPL
	- CTRL + D para salir
- `wget https://raw.githubusercontent.com/technomancy/leiningen/stable/bin/lein`
- `chmod +x lein`
- `sudo cp lein /usr/local/bin/`
- `lein`

## Instalación en Windows

- Descargar https://raw.githubusercontent.com/technomancy/leiningen/stable/bin/lein.bat y guardarla en alguna ruta del PATH
- `lein self-install`
- `lein repl`

## Creando un proyecto
- `lein new tadam-lite tadam-personas`

```
# gitignore for leiningen projects
pom.xml
pom.xml.asc
*.jar
*.class
/lib/
/classes/
/target/
/checkouts/
.lein-deps-sum
.lein-repl-history
.lein-plugins/
.lein-failures
.nrepl-port
.cpcache/

.clj-kondo/
.lsp/
```

- `lein run`
- http://localhost:7404/

## Primeros pasos

- [Tadam Personas](https://github.com/akobashikawa/tadam-personas)
	- Repositorio donde voy desarrollando una serie de casos de desarrollo web de dificultad progresiva, esta vez usando tadam.