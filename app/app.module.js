"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var http_1 = require("@angular/http");
var forms_1 = require("@angular/forms");
var app_component_1 = require("./app.component");
var app_routing_1 = require("./app.routing");
var restaurantes_list_component_1 = require("./component/restaurantes-list.component");
var restaurante_detail_component_1 = require("./component/restaurante-detail.component");
var restaurante_add_component_1 = require("./component/restaurante-add.component");
var restaurante_edit_component_1 = require("./component/restaurante-edit.component");
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, http_1.HttpModule, forms_1.FormsModule, app_routing_1.routing],
            declarations: [
                app_component_1.AppComponent,
                restaurantes_list_component_1.RestauranteListComponent,
                restaurante_detail_component_1.RestauranteDetailComponent,
                restaurante_edit_component_1.RestauranteEditComponent,
                restaurante_add_component_1.RestauranteAddComponent
            ],
            providers: [app_routing_1.appRoutingProviders],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map