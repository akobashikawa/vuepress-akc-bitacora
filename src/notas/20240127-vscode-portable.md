---
tags:
  - vscode
  - windows
---
# 20240127: VSCode Portable

- Observo que mis archivos en `C:\Users\KobashikawaA\.vscode` ocupan bastante espacio.
- Quisiera que vscode usara mejor el mayor espacio libre que tengo en el drive `D:`
- Veo que es posible usar vscode de manera portable
	- [Portable Mode in Visual Studio Code](https://code.visualstudio.com/docs/editor/portable)
	- Con soporte oficial
- Instalo el zip en `D:\apps\vscode-portable`
- Creo carpeta `data`
- Podría copiar `C:\Users\KobashikawaA\AppData\Roaming\Code` como `D:\apps\vscode-portable\data\user-data`
- Podría copiar `C:\Users\KobashikawaA\.vscode\extensions` como `D:\apps\vscode-portable\data\extensions`
- Desinstalo vscode
- Agrego `D:\apps\vscode-portable` al PATH
- Decido partir de nuevo desde cero
	- theme
		- Dark Modern
	- extensions
		- WSL
- Para facilitar los updates, creo symlinks

```sh
cd apps
# muevo `vscode-portable\data` como `vscode-portable-data`
move vscode-portable\data vscode-portable-data
# renombro vscode-portable
move vscode-portable vscode-portable_
# creo vscode-portable que apunta a cierta version de vscode portable
mklink /D vscode-portable VSCode-win32-x64-1.85.2
cd vscode-portable
# creo data que apunta a vscode-portable-data
mklink /D data ..\vscode-portable-data
```