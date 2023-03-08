# 20230308: Primeros pasos con C

## Primeros pasos con C en Windows

- [Introducción a Win32 y C++](https://docs.microsoft.com/es-es/windows/win32/learnwin32/learn-to-program-for-windows)
	- [Using GCC with MinGW](https://code.visualstudio.com/docs/cpp/config-mingw)
		- pacman es el manejador de paquetes
		- pacman -S mingw-w64-ucrt-x86_64-gcc
		- gcc --version
		- Agrego al PATH: `C:\msys64\mingw64\bin`
		- gcc --version
		- g++ --version
		- gdb --version
- VS Code
	- [How to Set up Visual Studio Code for C and C++ Programming](https://www.youtube.com/watch?v=77v-Poud_io&ab_channel=LearningLad)
	- Extensions
		- C/C++
		- Run Code
			- Run in Terminal
	- mkdir `C:\src`
	- cd `C:\src`
	- git clone https://github.com/Microsoft/vcpkg.git
	- `.\vcpkg\bootstrap-vcpkg.bat`
	- Requiere configurar el workspace (.vscode/)
		- tasks.json
			- el compiler
		- launch.json
			- el debugger
		- c_cpp_properties.json
			- el intellisense del editor
	- Como terminal, parece convenir cmd en lugar de bash, y usar la extensión Run Code
- MSYS2
	- https://www.msys2.org/
	- pacman -S mingw-w64-ucrt-x86_64-gcc
- Visual Studio
	- [Getting Started with Visual Studio for C and C++ Development](https://devblogs.microsoft.com/cppblog/getting-started-with-visual-studio-for-c-and-cpp-development/)
	- [Developing C programs on Windows](https://www.cs.auckland.ac.nz/~paul/C/Windows/)
		- Usando el Developer Command Prompt for VS
		- cl helloworld.c
		- Usando Visual Studio
- CodeBlocks IDE
	- Instala Mingw
	- Tuve que agregar manualmente al PATH:
		- `C:\Program Files\CodeBlocks\MinGW\bin`
		- > g++ --version
- vcpkg
	- [vcpkg](https://vcpkg.io/en/index.html)

### Hello World

```c
#include <stdio.h>

int main(int argc, char** argv) {
    printf("Hello, World!");
    puts("Hello, World!");
    return 0;
}
```

- gcc -std=c99 helloworld.c -o helloworld.exe
- helloworld

## Primeros pasos con C en Linux

- sudo apt-get install build-essential
- gcc --version

### Hello World

```c
#include <stdio.h>

int main(int argc, char** argv) {
    printf("Hello, World!");
    puts("Hello, World!");
    return 0;
}
```

- gcc -std=c99 helloworld.c -o helloworld
- ./helloworld