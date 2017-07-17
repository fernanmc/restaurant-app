"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
// Importar el núcleo de Angular
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var restaurante_1 = require("../model/restaurante");
var restaurante_service_1 = require("../service/restaurante.service");
// Decorador component, indicamos en que etiqueta se va a cargar la plantilla
var RestauranteAddComponent = (function () {
    function RestauranteAddComponent(_restauranteService, _route, _router) {
        this._restauranteService = _restauranteService;
        this._route = _route;
        this._router = _router;
        this.titulo = "Crear restaurante";
    }
    /*
    public id: number,
            public nombre:string,
            public direccion:string,
            public imagen:string,
            public precio:string
    */
    RestauranteAddComponent.prototype.callPrecio = function (value) {
        this.restaurante.precio = value;
    };
    RestauranteAddComponent.prototype.onSubmit = function () {
        var _this = this;
        console.log(this.restaurante);
        this._restauranteService.addRestaurante(this.restaurante).subscribe(function (response) {
            _this.status = response.status;
            if (_this.status !== "success") {
                alert("Error en el servidor");
            }
        }, function (error) {
            _this.errorMessage = error;
            if (_this.errorMessage !== null) {
                //	console.log(this.errorMessage);
                alert("Error en la petición");
            }
        });
        this._router.navigate(["/"]);
    };
    RestauranteAddComponent.prototype.ngOnInit = function () {
        this.restaurante = new restaurante_1.Restaurante(0, "", "", "null", "bajo");
    };
    RestauranteAddComponent.prototype.fileChangeEvent = function (fileInput) {
        var _this = this;
        this.filesToUpload = fileInput.target.files;
        this.makeFileRequest("http://localhost/restaurante/restaurantes-api.php/upload-file", [], this.filesToUpload).then(function (result) {
            _this.resultUpload = result;
            _this.restaurante.imagen = _this.resultUpload.filename;
        }, function (error) {
            console.log(error);
        });
    };
    RestauranteAddComponent.prototype.makeFileRequest = function (url, params, files) {
        return new Promise(function (resolve, reject) {
            var formData = new FormData();
            var xhr = new XMLHttpRequest();
            for (var i = 0; i < files.length; i++) {
                formData.append("uploads[]", files[i], files[i].name);
            }
            xhr.onreadystatechange = function () {
                if (xhr.readyState == 4) {
                    if (xhr.status == 200) {
                        resolve(JSON.parse(xhr.response));
                    }
                    else {
                        reject(xhr.response);
                    }
                }
            };
            xhr.open("POST", url, true);
            xhr.send(formData);
        });
    };
    RestauranteAddComponent = __decorate([
        core_1.Component({
            selector: 'restaurante-add',
            templateUrl: "app/views/restaurantes-add.html",
            providers: [restaurante_service_1.RestauranteService]
            //styleUrls:["../assets/css/style.css"]
            /*template: `<h1>{{titulo}} con Angular 2</h1>
                        <ul>
                          <li>Titulo: {{pelicula}}</li>
                          <li>Director: {{director}}</li>
                          <li>Año: {{anio}}</li>
                        </ul>`*/
        })
        // Clase del componente donde iran los datos y funcionalidades
        ,
        __metadata("design:paramtypes", [restaurante_service_1.RestauranteService,
            router_1.ActivatedRoute,
            router_1.Router])
    ], RestauranteAddComponent);
    return RestauranteAddComponent;
}());
exports.RestauranteAddComponent = RestauranteAddComponent;
//# sourceMappingURL=restaurante-add.component.js.map