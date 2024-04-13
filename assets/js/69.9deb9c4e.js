(window.webpackJsonp=window.webpackJsonp||[]).push([[69],{353:function(e,a,o){"use strict";o.r(a);var s=o(19),t=Object(s.a)({},(function(){var e=this,a=e._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"_20240127-vscode-portable"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_20240127-vscode-portable"}},[e._v("#")]),e._v(" 20240127: VSCode Portable")]),e._v(" "),a("TagLinks"),e._v(" "),a("ul",[a("li",[e._v("Observo que mis archivos en "),a("code",[e._v("C:\\Users\\KobashikawaA\\.vscode")]),e._v(" ocupan bastante espacio.")]),e._v(" "),a("li",[e._v("Quisiera que vscode usara mejor el mayor espacio libre que tengo en el drive "),a("code",[e._v("D:")])]),e._v(" "),a("li",[e._v("Veo que es posible usar vscode de manera portable\n"),a("ul",[a("li",[a("a",{attrs:{href:"https://code.visualstudio.com/docs/editor/portable",target:"_blank",rel:"noopener noreferrer"}},[e._v("Portable Mode in Visual Studio Code"),a("OutboundLink")],1)]),e._v(" "),a("li",[e._v("Con soporte oficial")])])]),e._v(" "),a("li",[e._v("Instalo el zip en "),a("code",[e._v("D:\\apps\\vscode-portable")])]),e._v(" "),a("li",[e._v("Creo carpeta "),a("code",[e._v("data")])]),e._v(" "),a("li",[e._v("Podría copiar "),a("code",[e._v("C:\\Users\\KobashikawaA\\AppData\\Roaming\\Code")]),e._v(" como "),a("code",[e._v("D:\\apps\\vscode-portable\\data\\user-data")])]),e._v(" "),a("li",[e._v("Podría copiar "),a("code",[e._v("C:\\Users\\KobashikawaA\\.vscode\\extensions")]),e._v(" como "),a("code",[e._v("D:\\apps\\vscode-portable\\data\\extensions")])]),e._v(" "),a("li",[e._v("Desinstalo vscode")]),e._v(" "),a("li",[e._v("Agrego "),a("code",[e._v("D:\\apps\\vscode-portable")]),e._v(" al PATH")]),e._v(" "),a("li",[e._v("Decido partir de nuevo desde cero\n"),a("ul",[a("li",[e._v("theme\n"),a("ul",[a("li",[e._v("Dark Modern")])])]),e._v(" "),a("li",[e._v("extensions\n"),a("ul",[a("li",[e._v("WSL")])])])])]),e._v(" "),a("li",[e._v("Para facilitar los updates, creo symlinks")])]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("cd")]),e._v(" apps\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# muevo `vscode-portable\\data` como `vscode-portable-data`")]),e._v("\nmove vscode-portable"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("data vscode-portable-data\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# renombro vscode-portable")]),e._v("\nmove vscode-portable vscode-portable_\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# creo vscode-portable que apunta a cierta version de vscode portable")]),e._v("\nmklink /D vscode-portable VSCode-win32-x64-1.85.2\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("cd")]),e._v(" vscode-portable\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# creo data que apunta a vscode-portable-data")]),e._v("\nmklink /D data "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("..")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("vscode-portable-data\n")])])])],1)}),[],!1,null,null,null);a.default=t.exports}}]);