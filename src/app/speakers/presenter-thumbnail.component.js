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
var PresenterThumbnailComponent = (function () {
    function PresenterThumbnailComponent() {
    }
    return PresenterThumbnailComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], PresenterThumbnailComponent.prototype, "presenter", void 0);
PresenterThumbnailComponent = __decorate([
    core_1.Component({
        selector: 'presenter-thumbnail',
        template: "\n    <div [routerLink]=\"['/speakers', presenter.presenter]\" class=\"well hoverwell thumbnail\">\n        <div>\n            {{presenter?.presenter}}\n        </div> \n        <div>\n            {{presenter?.description}}\n        </div>\n    </div>\n    "
    })
], PresenterThumbnailComponent);
exports.PresenterThumbnailComponent = PresenterThumbnailComponent;
//# sourceMappingURL=presenter-thumbnail.component.js.map