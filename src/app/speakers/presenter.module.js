"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var router_1 = require("@angular/router");
var presenter_routes_1 = require("./presenter.routes");
var presenter_list_component_1 = require("./presenter-list.component");
var presenter_thumbnail_component_1 = require("./presenter-thumbnail.component");
var forms_1 = require("@angular/forms");
var index_1 = require("./index");
var shared_module_1 = require("../shared.module");
var PresenterModule = (function () {
    function PresenterModule() {
    }
    return PresenterModule;
}());
PresenterModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            forms_1.FormsModule,
            shared_module_1.SharedModule,
            forms_1.ReactiveFormsModule,
            router_1.RouterModule.forChild(presenter_routes_1.presenterRoutes)
        ],
        declarations: [
            presenter_list_component_1.PresentersListComponent,
            presenter_thumbnail_component_1.PresenterThumbnailComponent,
            index_1.SpeakerDetailsComponent,
            index_1.SpeakerSessionsComponent,
            index_1.CreateSpeakerComponent
        ],
        providers: [
            index_1.PresenterListResolver
            //{ provide: JQ_TOKEN, useValue: jQuery },
        ]
    })
], PresenterModule);
exports.PresenterModule = PresenterModule;
//# sourceMappingURL=presenter.module.js.map