# 20230226: Compartir data entre componentes Angular

- Se puede usar un data service para compartir data entre componentes no relacionados.
- En mi caso, deseo compartir el url base de un backend (`backendBaseUrl`) entre distintos componentes.
- ng generate service data
- Creo en el data service la variable que deseo compartir y su valor por default. Además un método que me permite modificar su valor.

	```ts
// data.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private backendBaseUrlSource = new BehaviorSubject('http://localhost:3000');
  backendBaseUrl = this.backendBaseUrlSource.asObservable();

  constructor() { }

  setBackendBaseUrl(url: string) {
    this.backendBaseUrlSource.next(url)
  }
}
```

- En el componente que requiere la data compartida, indico que use el service.

```html
<!-- backend-base-url.component.html -->
<p class="input-group">
  <input type="text" class="form-control" placeholder="Base URL del backend" [(ngModel)]="backendBaseUrl">
  <button class="btn btn-warning" (click)="setBackendBaseUrl()">Cambiar</button>
</p>
```

```ts
// backend-base-url.component.ts
import { Component, OnDestroy, OnInit } from '@angular/core';
import { DataService } from "../data.service";
import { Subscription } from 'rxjs';
//...
export class BackendBaseUrlComponent implements OnInit, OnDestroy {
  backendBaseUrl: string = '';
  subscription: Subscription = new Subscription;

  constructor(private data: DataService) { }

  ngOnInit() {
    this.subscription = this.data.backendBaseUrl.subscribe(url => this.backendBaseUrl = url)
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  setBackendBaseUrl() {
    this.data.setBackendBaseUrl(this.backendBaseUrl);
  }
}
```

```ts
// holamundo.component.ts
import { Component, OnDestroy, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataService } from "../data.service";
import { Subscription } from 'rxjs';
//...
export class HolamundoComponent implements OnInit, OnDestroy {
	backendBaseUrl: string = '';
	subscription: Subscription = new Subscription;
	//...
	constructor(private http: HttpClient, private data: DataService) { }
	ngOnInit() {
	    this.subscription = this.data.backendBaseUrl.subscribe(url => this.backendBaseUrl = url)
	}

	ngOnDestroy() {
	    this.subscription.unsubscribe();
	}
	//...
}
```