// Importar el núcleo de Angular
// Importar el núcleo de Angular
// Importar el núcleo de Angular
import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';

import {Restaurante} from "../model/restaurante";
import {RestauranteService} from "../service/restaurante.service";
// Decorador component, indicamos en que etiqueta se va a cargar la plantilla


@Component({
    selector: 'restaurante-edit',
    templateUrl:"app/views/restaurantes-add.html", //Separando template del componente
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
export class RestauranteEditComponent implements OnInit {
    public titulo:string = "Editar restaurante";
    public parametro;
    public errorMessage;
    public status: string;
    public restaurante: Restaurante;
    public loading:string;
    public filesToUpload: Array<File>;
    
    constructor(
        private _restauranteService: RestauranteService,
     	private _route: ActivatedRoute,
        private _router: Router
    ){}

/*
public id: number,
        public nombre:string,
        public direccion:string,
        public imagen:string,
        public precio:string
*/

callPrecio(value){
		this.restaurante.precio = value;
	}
    
   	onSubmit(){

		    this._route.params.forEach((params: Params) =>{
				 console.log(this.restaurante);
		   		let id= params["id"];
		 		this._restauranteService.editRestaurante(id,this.restaurante).subscribe(
				response => {
					this.status = response.status;
					if(this.status !== "success"){
						alert("Error en el servidor");
					}
				},
				error => {
					this.errorMessage = <any>error;
				
					if(this.errorMessage !== null){
					//	console.log(this.errorMessage);
						alert("Error en la petición");
					}
				}
			);

			});

			this._router.navigate(["/"]);

          
	}

	ngOnInit(){
		
		this.restaurante = new Restaurante(
								0,
								"",
								"",
								"null",
								""
								);
	    this.getRestaurante();
	}

	 getRestaurante(){
		 this._route.params.forEach((params: Params) =>{
				let id = params["id"];
				this._restauranteService.getRestaurante(id)
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
					}

				)
			});
        
    }
    public resultUpload;

    fileChangeEvent(fileInput: any){
		this.filesToUpload = <Array<File>>fileInput.target.files;

		this.makeFileRequest("http://localhost/slim/restaurantes-api.php/upload-file", [], this.filesToUpload).then((result) => {
				this.resultUpload = result;
				this.restaurante.imagen = this.resultUpload.filename;
		}, (error) =>{
			console.log(error);
		});
		
	}


	makeFileRequest(url: string, params: Array<string>, files: Array<File>){
		return new Promise((resolve, reject) => {
				var formData: any = new FormData();
				var xhr = new XMLHttpRequest();

				for(var i = 0; i < files.length; i++){
					formData.append("uploads[]", files[i], files[i].name);
				}

				xhr.onreadystatechange = function(){
					if(xhr.readyState == 4){
						if(xhr.status == 200){
							resolve(JSON.parse(xhr.response));
						}else{
							reject(xhr.response);
						}
					}
				}
				xhr.open("POST", url, true);
				xhr.send(formData);
			});
	}
    
 }