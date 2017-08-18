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
var PresenterThumbnail = (function () {
    function PresenterThumbnail() {
    }
    return PresenterThumbnail;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], PresenterThumbnail.prototype, "presenter", void 0);
PresenterThumbnail = __decorate([
    core_1.Component({
        selector: 'presenter-thumbnail',
        template: "\n        <div>\n            {{presenter?.presenter}}\n        </div>\n        <div>\n            {{presenter?.Description}}\n        </div>\n    "
    })
], PresenterThumbnail);
exports.PresenterThumbnail = PresenterThumbnail;
//# sourceMappingURL=presenter-thumbnail.js.map