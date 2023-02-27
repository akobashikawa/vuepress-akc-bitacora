# 20230226: Cómo usar el script de Bootstrap en Angular

- Declarar el **script de bootstrap** en alguna parte. Por ejemplo en `index.html`
	- El script de bootstrap es el que viene por default. Por ejemplo [https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js](https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js)
- En el componente que requiere usar el script, declarar la variable.

```ts
//...
declare var bootstrap: any;
//...
ngOnInit() {
	this.myModal = new bootstrap.Modal('#myModal', { });
	//...
}
```