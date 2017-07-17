// Importar el núcleo de Angular
import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';


// Decorador component, indicamos en que etiqueta se va a cargar la plantilla
@Component({
    selector: 'my-app',
    templateUrl:"app/views/home.html", //Separando template del componente
    //styleUrls:["../assets/css/style.css"]
    /*template: `<h1>{{titulo}} con Angular 2</h1>
                <ul>
                  <li>Titulo: {{pelicula}}</li>
                  <li>Director: {{director}}</li>
                  <li>Año: {{anio}}</li>
                </ul>`*/
})



// Clase del componente donde iran los datos y funcionalidades
export class AppComponent {
    public titulo: string = "Restaurantes";
    

    
 }
