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
var Rx_1 = require("rxjs/Rx");
var http_1 = require("@angular/http");
var PresenterService = (function () {
    function PresenterService(http) {
        this.http = http;
    }
    PresenterService.prototype.getAll = function () {
        var subject = new Rx_1.Subject();
        setTimeout(function () { subject.next(PRESENTERS); subject.complete(); }, 100);
        return subject;
    };
    PresenterService.prototype.getAll1 = function () {
        var subject = new Rx_1.Subject();
        setTimeout(function () { subject.next(PRESENTERS); subject.complete(); }, 100);
        return subject.map(function (response) {
            return response;
        });
    };
    PresenterService.prototype.getAll2 = function () {
        return this.http.get("/api/speakers")
            .map(function (response) {
            var resp = response;
            return resp.json();
        }).catch(this.handleError);
    };
    PresenterService.prototype.getSpeaker = function (name) {
        return PRESENTERS.find(function (x) { return x.presenter.toLowerCase().indexOf(name.toLowerCase()) > -1; });
    };
    PresenterService.prototype.getSpeakers = function (name) {
        return PRESENTERS.filter(function (x) { return x.presenter.toLowerCase().indexOf(name.toLowerCase()) > -1; });
    };
    PresenterService.prototype.getSessions = function (name) {
        return this.http.get("/api/sessions/searchbyspeaker?search=" + name)
            .map(function (response) {
            var resp = response;
            return resp.json();
        }).catch(this.handleError);
    };
    PresenterService.prototype.addSpeaker = function (presenter) {
        PRESENTERS.concat(presenter);
    };
    PresenterService.prototype.handleError = function (error) {
        return Rx_1.Observable.throw(error.statusText);
    };
    return PresenterService;
}());
PresenterService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], PresenterService);
exports.PresenterService = PresenterService;
var PRESENTERS = [
    { id: 1, presenter: 'Peter Bacon Darwin', description: 'babab', address: 'blabla' },
    { id: 2, presenter: "John Papa", description: "babab", address: 'blabla' },
    { id: 3, presenter: "Peter Bacon Darwin2", description: "babab", address: 'blabla' },
    { id: 4, presenter: "Peter Bacon Darwin3", description: "babab", address: 'blabla' },
    { id: 5, presenter: "Peter Bacon Darwin4", description: "babab", address: 'blabla' },
    { id: 6, presenter: "Peter Bacon Darwin5", description: "babab", address: 'blabla' },
];
//# sourceMappingURL=presenter.service.js.map