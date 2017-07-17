// Importar el núcleo de Angular
import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';

import {Restaurante} from "../model/restaurante";
import {RestauranteService} from "../service/restaurante.service";
// Decorador component, indicamos en que etiqueta se va a cargar la plantilla


@Component({
    selector: 'restaurante-add',
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
export class RestauranteAddComponent implements OnInit {
	public titulo:string = "Crear restaurante";
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
           console.log(this.restaurante);
		 this._restauranteService.addRestaurante(this.restaurante).subscribe(
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

			this._router.navigate(["/"]);
	}

	ngOnInit(){
			this.restaurante = new Restaurante(
								0,
								"",
								"",
								"null",
								"bajo"
								);
	}
    
		public resultUpload;

	fileChangeEvent(fileInput: any){
		this.filesToUpload = <Array<File>>fileInput.target.files;

		this.makeFileRequest("http://localhost/restaurante/restaurantes-api.php/upload-file", [], this.filesToUpload).then((result) => {
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