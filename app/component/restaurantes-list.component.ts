// Importar el núcleo de Angular
import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';


import {Restaurante} from "../model/restaurante";
import {RestauranteService} from "../service/restaurante.service";
// Decorador component, indicamos en que etiqueta se va a cargar la plantilla


@Component({
    selector: 'restaurantes-list',
    templateUrl:"app/views/restaurantes-list.html", //Separando template del componente
    providers: [RestauranteService]
    //styleUrls:["../assets/css/style.css"]
    /*template: `<h1>{{titulo}} con Angular 2</h1>
                <ul>
                  <li>Titulo: {{pelicula}}</li>
                  <li>Director: {{director}}</li>
                  <li>Año: {{anio}}</li>
                </ul>`*/
})


// Clase del componente donde iran los datos y funcionalidades
export class RestauranteListComponent {
    public titulo: string = "Listado de restaurantes";
    public status: string;
    public restaurantes: Restaurante [];
    public confirmado;
    public errorMessage;
    public loading;


    constructor(
        private _route: ActivatedRoute,
        private _router: Router,
        private _restaurantesService: RestauranteService){}
    ngOnInit(){
        console.log("restaurante-init cargado");
        this.loading = 'show';
        this.getRestaurantes();
    }

    getRestaurantes(){
       // let box_restaurantes = <HTMLElement>document.querySelector("#restaurantes-list .loading");
	    //	box_restaurantes.style.visibility = "visible";

        this._restaurantesService.getRestaurantes()
        .subscribe(
            result =>{
                this.restaurantes = result.data;
                this.status = result.status;
                 console.log (result.data);
                if(this.status != "success"){
                    alert("Error en el servidor");
                }
          //      box_restaurantes.style.display = "none";
                 this.loading = 'hide';
            },
            error =>{
                this.errorMessage = <any> error;
                 if(this.status !== null){
                     //console.log (this.errorMessage);
                    alert("Error en la peticion");
                     this.loading = 'hide';
                }
            }

        )
       

    }

    onBorrarConfirm(id){
        this.confirmado = id;
    }

    onCancelarConfirm(id){
        this.confirmado = null;
    }


    onBorrarRestaurante(id){
        this._restaurantesService.deleteRestaurante(id)
        .subscribe(
            result =>{
                this.status = result.status;
                if(this.status != "success"){
                    alert("Error en el servidor");
                }
          //      box_restaurantes.style.display = "none";
                 this.getRestaurantes();
            },
            error =>{
                this.errorMessage = <any> error;
                 if(this.status !== null){
                     //console.log (this.errorMessage);
                    alert("Error en la peticion");
                     this.loading = 'hide';
                }
            }

        )
    }
    
 }
