# 20230612: Supresión de ruido en OBS

## Mic Filter: Noise Suppression

- Seleccionar la fuente Mic/Aux, Filter Add, **Noise Suppression**
- 
![](20230612-obs-supresion-ruido.png)

![](20230612-obs-supresion-ruido-1.png)

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
