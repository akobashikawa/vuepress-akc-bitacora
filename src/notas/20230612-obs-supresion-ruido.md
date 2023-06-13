# 20230612: Supresión de ruido en OBS

## Mic Filter: Noise Suppression

- Seleccionar la fuente Mic/Aux, Filter Add, **Noise Suppression**
- 
![](20230612-obs-supresion-ruido.png)

![](20230612-obs-supresion-ruido-1.png)

- Para monitorear con unos audífonos la salida, elegir la fuente Mic/Aux, Menú de los tres puntos, Advanced Audio Properties

![](20230612-obs-supresion-ruido-7.png)

![](20230612-obs-supresion-ruido-8.png)

## Mic Filter: VST Plugin

- Instalar el plugin VST
	- [VST 2.x Plugin Filter | OBS](https://obsproject.com/kb/vst-2-x-plugin-filter)
- Seleccionar la fuente Mic/Aux, Filter Add, **VST**

![](20230612-obs-supresion-ruido-2.png)

- Elegir **reafir standalone** y abrir la interface

![](20230612-obs-supresion-ruido-3.png)

- Elegir Mode: Substract, marcar el check Automatically build noise profile durante unos 30 segundos (para que almacene la info del ruido de fondo), desmarcar y cerrar la interface

![](20230612-obs-supresion-ruido-4.png)
## NVIDIA RTX Voice

- Instalar el software
	- [NVIDIA RTX Voice: Setup Guide | GeForce News | NVIDIA](https://www.nvidia.com/en-us/geforce/guides/nvidia-rtx-voice-setup-guide/)
	- Se puede instalar directamente en Windows 10
		- En algunos tutoriales se sugiere un truco de instalación que, felizmente ya no es necesario con la nueva versión.

- En NVIDIA RTX Voice, elegir el micrófono y marcar Noise Suppression

![](20230612-obs-supresion-ruido-5.png)

- En OBS, seleccionar la fuente MIc/Aux y elegir como micrófono a NVIDIA RTX Voice

![](20230612-obs-supresion-ruido-6.png)

- En mi caso, se introducía un ruido entrecortado. Lo solucioné entrando a Windows Settings, Graphics Settings y configurando OBS para High performance, en lugar del Power saving que estaba

![](20230612-obs-supresion-ruido-9.png)

![](20230612-obs-supresion-ruido-10.png)

## Krisp.ai

- En Krisp, abrir una cuenta e instalar el software
	- [World’s #1 Noise Cancelling App | Krisp](https://krisp.ai/)
- En la aplicación, elegir el micrófono

![](20230612-obs-supresion-ruido-11.png)

