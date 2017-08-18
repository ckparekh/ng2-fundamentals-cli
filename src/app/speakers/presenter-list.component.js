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
var core_1 = require("@angular/core");
var presenter_service_1 = require("./shared/presenter.service");
var router_1 = require("@angular/router");
var PresentersListComponent = (function () {
    function PresentersListComponent(presenterService, route) {
        this.presenterService = presenterService;
        this.route = route;
    }
    PresentersListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.presenterService.getAll1().subscribe(function (x) {
            _this.presenters = x;
        });
        //this.presenters = this.route.snapshot.data['presenters']
    };
    PresentersListComponent.prototype.searchSpeakers = function () {
        this.presenters = this.presenterService.getSpeakers(this.searchTerm);
    };
    return PresentersListComponent;
}());
PresentersListComponent = __decorate([
    core_1.Component({
        template: "\n    <div>\n    <h1>Presenters</h1>\n    <div class=\"row\">\n      <form id=\"searchFormSpeaker\" (ngSubmit)=\"searchSpeakers(searchTerm)\">\n        <div class=\"col-md-5 form-group\">\n          <input [(ngModel)]=\"searchTerm\" name=\"searchTerm\" type=\"text\" class=\"form-control\" placeholder=\"Search Speakers\" >\n        </div>\n        <button class=\"btn btn-default\" modal-trigger=\"searchSpeakers\">\n          Search\n        </button>\n      </form>\n    </div>\n    <hr/>\n    <div class=\"row\">\n      <div *ngFor=\"let pr of presenters\" class=\"col-md-5\">\n        <presenter-thumbnail [presenter]=\"pr\"></presenter-thumbnail>\n      </div>\n    </div> \n    <simple-modal closeOnBodyClick=\"true\" elementId=\"searchSpeakers\" title=\"Matching Speakers\">\n    <div class=\"list-group\">\n      <a class=\"list-group-item\" *ngFor=\"let pr of presenters\" \n      [routerLink]=\"['/speakers', pr.presenter]\">{{pr.presenter}}</a>\n    </div>\n    </simple-modal> \n  ",
        styles: ["\n    #searchFormSpeaker {margin-right:100px; } \n    @media (max-width: 1200px) {#searchFormSpeaker {display:none}}\n    li > a.active { color: #F97924; }\n  "]
    }),
    __metadata("design:paramtypes", [presenter_service_1.PresenterService,
        router_1.ActivatedRoute])
], PresentersListComponent);
exports.PresentersListComponent = PresentersListComponent;
//# sourceMappingURL=presenter-list.component.js.map