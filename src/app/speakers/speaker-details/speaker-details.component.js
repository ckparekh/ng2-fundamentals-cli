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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var index_1 = require("../index");
var jQuery_service_1 = require("../../common/jQuery.service");
var SpeakerDetailsComponent = (function () {
    function SpeakerDetailsComponent(presenterService, route, $) {
        this.presenterService = presenterService;
        this.route = route;
        this.$ = $;
        this.filterBy = 'all';
    }
    SpeakerDetailsComponent.prototype.ngOnInit = function () {
        this.$('.modal-backdrop').remove();
        var name = this.route.snapshot.params['presenter'];
        this.presenter = this.presenterService.getSpeaker(name);
    };
    return SpeakerDetailsComponent;
}());
SpeakerDetailsComponent = __decorate([
    core_1.Component({
        templateUrl: '/app/speakers/speaker-details/speaker-details.component.html',
        styles: ["\n    .container { padding-left:20px; padding-right:20px; }\n    .event-image { height:100px; }\n    a {cursor:pointer}\n  "]
    }),
    __param(2, core_1.Inject(jQuery_service_1.JQ_TOKEN)),
    __metadata("design:paramtypes", [index_1.PresenterService, router_1.ActivatedRoute, Object])
], SpeakerDetailsComponent);
exports.SpeakerDetailsComponent = SpeakerDetailsComponent;
//# sourceMappingURL=speaker-details.component.js.map