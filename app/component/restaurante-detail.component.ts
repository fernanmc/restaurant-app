// Importar el núcleo de Angular
// Importar el núcleo de Angular
import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';

import {Restaurante} from "../model/restaurante";
import {RestauranteService} from "../service/restaurante.service";
// Decorador component, indicamos en que etiqueta se va a cargar la plantilla


@Component({
    selector: 'restaurante-detail',
    templateUrl:"app/views/restaurantes-detail.html", //Separando template del componente
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
export class RestauranteDetailComponent implements OnInit {
    public parametro;
    public errorMessage;
    public status: string;
    public restaurante: Restaurante;
    public loading:string;

    constructor(
        private _restauranteService: RestauranteService,
         private _route: ActivatedRoute,
        private _router: Router,
    ){}

    ngOnInit(){
        this.getRestaurante();
    }
    
    getRestaurante(){
        this._route.params.forEach((params: Params) =>{
            let id = params["id"];
            let random = params["random"];
            this._restauranteService.getRestaurante(id, random)
            .subscribe(
                result =>{
                    this.restaurante = result.data;
                    this.status = result.status;
                    console.log (result);
                    if(this.status !== "success"){
                    this._router.navigate(["Home"]);
                        //alert("Error en el servidor");
                    }
            //      box_restaurantes.style.display = "none";
                    this.loading = 'hide';
                },
                error =>{
                    this.errorMessage = <any> error;
                    this._router.navigate(["Home"]);
                    if(this.status !== null){
                        console.log (this.errorMessage);
                        
                        this.loading = 'hide';
                    }
        });
     });
    }  
    


     
    
} 

