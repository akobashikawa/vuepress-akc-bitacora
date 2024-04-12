---
tags: ["programming", "batch", "windows"]
---

# 20231003: Windows: Referencia rápida para programar batch scripts

<TagLinks />

- `cmd`
	- abre la consola de comandos
- crear `script_name.bat`
	- Windows ejecuta los archivos con extensión bat
- `echo expresion`
	- muestra la expresión en pantalla
- `@echo off`
	- oculta los comandos que se están ejecutando
- `title cmd_titulo`
	- Cambia el título de la ventana cmd
- `color 0f`
	- Cambia el color del background y el foreground
- `pause`
	- Pausa el script mostrando un mensaje predeterminado
- `pause > null`
	- Pausa pero no muestra el mensaje predeterminado
- `rem texto comentado`
- `start http://algun-url.com`
	- Abre la página especificada
- `start c:\algun-archivo.txt`
	- Abre el archivo especificado
- `set var_name=var_value`
	- Establece el valor de la variable `var_name` a `var_value`
- `set/p var_name=Ingresa un valor`
	- Muestra `Ingresa un valor` como prompt y guarda la entrada del usuario en `var_name`
- `set/a var_name=math_expression`
	- Resuelve la expresión matemática y guarda el resultado en `var_name`
	- Soporta operadores aritméticos: `+ - * /`
		- Solamente maneja enteros
- `echo %var_name%`
	- imprime el valor de la variable `var_name`
- `if %var_name% neq %var_name_2% comando`
	- si` var_name != var_name_2` ejecuta el comando
	- `neq`: no equal
	- `equ`: equal
	- `leq`: less or equal
	- `geq`: greater or equal
	- `lss`: less than
	- `gtr`: greater than
- `:target_tag`
	- Define una etiqueta de destino
- `goto target_tag`
	- Salta la ejecución hasta `target_tag`

## Ejemplo

- Hola.bat
```bat
@echo off
title Hola BAT
Color 0f
echo Hola BAT
echo Pulsa una tecla...
pause > null
rem start https://akc-bitacora.netlify.app/
set/p name=Tu nombre? 
set greeting=Hola %name%!
echo %greeting%
rem msg * %greeting%
:askbirthyear
set/p birthyear=Anio de nacimiento? 
set/a birthyear1=1*%birthyear%
if %birthyear1% neq %birthyear% goto askbirthyear
set/a age=2023-%birthyear%
echo Tienes, o vas a cumplir, %age% anios
```