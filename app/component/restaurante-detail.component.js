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
// Importar el núcleo de Angular
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var restaurante_service_1 = require("../service/restaurante.service");
// Decorador component, indicamos en que etiqueta se va a cargar la plantilla
var RestauranteDetailComponent = (function () {
    function RestauranteDetailComponent(_restauranteService, _route, _router) {
        this._restauranteService = _restauranteService;
        this._route = _route;
        this._router = _router;
    }
    RestauranteDetailComponent.prototype.ngOnInit = function () {
        this.getRestaurante();
    };
    RestauranteDetailComponent.prototype.getRestaurante = function () {
        var _this = this;
        this._route.params.forEach(function (params) {
            var id = params["id"];
            var random = params["random"];
            _this._restauranteService.getRestaurante(id, random)
                .subscribe(function (result) {
                _this.restaurante = result.data;
                _this.status = result.status;
                console.log(result);
                if (_this.status !== "success") {
                    _this._router.navigate(["Home"]);
                    //alert("Error en el servidor");
                }
                //      box_restaurantes.style.display = "none";
                _this.loading = 'hide';
            }, function (error) {
                _this.errorMessage = error;
                _this._router.navigate(["Home"]);
                if (_this.status !== null) {
                    console.log(_this.errorMessage);
                    _this.loading = 'hide';
                }
            });
        });
    };
    RestauranteDetailComponent = __decorate([
        core_1.Component({
            selector: 'restaurante-detail',
            templateUrl: "app/views/restaurantes-detail.html",
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
    ], RestauranteDetailComponent);
    return RestauranteDetailComponent;
}());
exports.RestauranteDetailComponent = RestauranteDetailComponent;
//# sourceMappingURL=restaurante-detail.component.js.map