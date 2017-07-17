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
var restaurante_service_1 = require("../service/restaurante.service");
// Decorador component, indicamos en que etiqueta se va a cargar la plantilla
var RestauranteListComponent = (function () {
    function RestauranteListComponent(_route, _router, _restaurantesService) {
        this._route = _route;
        this._router = _router;
        this._restaurantesService = _restaurantesService;
        this.titulo = "Listado de restaurantes";
    }
    RestauranteListComponent.prototype.ngOnInit = function () {
        console.log("restaurante-init cargado");
        this.loading = 'show';
        this.getRestaurantes();
    };
    RestauranteListComponent.prototype.getRestaurantes = function () {
        // let box_restaurantes = <HTMLElement>document.querySelector("#restaurantes-list .loading");
        //	box_restaurantes.style.visibility = "visible";
        var _this = this;
        this._restaurantesService.getRestaurantes()
            .subscribe(function (result) {
            _this.restaurantes = result.data;
            _this.status = result.status;
            console.log(result.data);
            if (_this.status != "success") {
                alert("Error en el servidor");
            }
            //      box_restaurantes.style.display = "none";
            _this.loading = 'hide';
        }, function (error) {
            _this.errorMessage = error;
            if (_this.status !== null) {
                //console.log (this.errorMessage);
                alert("Error en la peticion");
                _this.loading = 'hide';
            }
        });
    };
    RestauranteListComponent.prototype.onBorrarConfirm = function (id) {
        this.confirmado = id;
    };
    RestauranteListComponent.prototype.onCancelarConfirm = function (id) {
        this.confirmado = null;
    };
    RestauranteListComponent.prototype.onBorrarRestaurante = function (id) {
        var _this = this;
        this._restaurantesService.deleteRestaurante(id)
            .subscribe(function (result) {
            _this.status = result.status;
            if (_this.status != "success") {
                alert("Error en el servidor");
            }
            //      box_restaurantes.style.display = "none";
            _this.getRestaurantes();
        }, function (error) {
            _this.errorMessage = error;
            if (_this.status !== null) {
                //console.log (this.errorMessage);
                alert("Error en la peticion");
                _this.loading = 'hide';
            }
        });
    };
    RestauranteListComponent = __decorate([
        core_1.Component({
            selector: 'restaurantes-list',
            templateUrl: "app/views/restaurantes-list.html",
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
        __metadata("design:paramtypes", [router_1.ActivatedRoute,
            router_1.Router,
            restaurante_service_1.RestauranteService])
    ], RestauranteListComponent);
    return RestauranteListComponent;
}());
exports.RestauranteListComponent = RestauranteListComponent;
//# sourceMappingURL=restaurantes-list.component.js.map