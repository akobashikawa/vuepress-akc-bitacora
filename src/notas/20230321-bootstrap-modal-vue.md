---
tags: ["vue", "bootstrap"]
---

# 20230321: Bootstrap Modal en Vue

- Implementando un modal con bootstrap en vue.

```html
<div class="modal fade" id="myModal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
	<div class="modal-dialog">
		<div class="modal-content">
			<div class="modal-header">
				<h1 class="modal-title fs-5" id="staticBackdropLabel">Título Modal</h1>
				<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
			</div>
			<div class="modal-body">
				<!-- cuerpo del modal -->
			</div>
			<div class="modal-footer">
				<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
				<button type="button" class="btn btn-primary" @click="guardar">Guardar</button>
			</div>
		</div>
	</div>
</div>
```

```js
//...
data() {
	return {
		//...
		myModal: null,
		//...
	};
},

methods: {
	abrirModal(persona) {
		//...
		this.myModal.show();
		//...
	},
},

mounted() {
	//...
	this.myModal = new bootstrap.Modal('#myModal', {});
	//...
}
```