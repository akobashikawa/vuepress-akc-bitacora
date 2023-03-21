# 20230321: Bootsrap Toast con Vue

- Implementando un toast con bootstrap en vue.

```html
<div class="toast-container bottom-0 start-50 translate-middle-x">
  <div id="myToast" class="toast align-items-center text-bg-dark border-0" role="alert" aria-live="assertive"
	aria-atomic="true">
	<div class="d-flex">
	  <div class="toast-body">
		{{ toastText }}
	  </div>
	  <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast"
		aria-label="Close"></button>
	</div>
  </div>
</div>
```

```js
//...
data() {
  return {
    //...
    myToast: null,
    toastText: '',
    //...
  }
},

methods: {
	async copyToClipboard(text) {
	  try {
		await navigator.clipboard.writeText(text);
		this.showToast('Texto copiado');
		console.log('Content copied to clipboard');
	  } catch (err) {
		console.error('Fallo al copiar al clipboard: ', err);
	  }
	},
},

mounted() {
	//...
	this.myToast = new bootstrap.Toast('#myToast');
	//...
}
```