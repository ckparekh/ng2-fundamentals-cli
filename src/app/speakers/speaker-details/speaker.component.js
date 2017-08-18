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
var forms_1 = require("@angular/forms");
var index_1 = require("../index");
var router_1 = require("@angular/router");
var toastr_service_1 = require("../../common/toastr.service");
var CreateSpeakerComponent = (function () {
    function CreateSpeakerComponent(PresenterService, router, aroute, toastr) {
        this.PresenterService = PresenterService;
        this.router = router;
        this.aroute = aroute;
        this.toastr = toastr;
        this.saveNewSpeaker = new core_1.EventEmitter();
        this.cancelAddSpeaker = new core_1.EventEmitter();
        this.editMode = false;
    }
    CreateSpeakerComponent.prototype.ngOnInit = function () {
        var name = this.aroute.snapshot.params['presenter'];
        if (name) {
            this.editMode = true;
            this.speaker = this.PresenterService.getSpeaker(name);
        }
        else {
            this.speaker = {
                id: undefined,
                presenter: "",
                description: "",
                address: ""
            };
        }
        this.presenter = new forms_1.FormControl('', [forms_1.Validators.required, forms_1.Validators.pattern('[a-zA-Z].*')]);
        this.description = new forms_1.FormControl('', [forms_1.Validators.required, forms_1.Validators.minLength(10), forms_1.Validators.maxLength(300)]);
        this.address = new forms_1.FormControl('', forms_1.Validators.required);
        this.newSpeakerForm = new forms_1.FormGroup({
            presenter: this.presenter,
            description: this.description,
            address: this.address,
        });
    };
    CreateSpeakerComponent.prototype.validatePresenter = function () {
        return this.presenter.valid || this.presenter.untouched;
    };
    CreateSpeakerComponent.prototype.validateDescription = function () {
        return this.description.valid || this.description.untouched;
    };
    CreateSpeakerComponent.prototype.validateAddress = function () {
        return this.address.valid || this.address.untouched;
    };
    CreateSpeakerComponent.prototype.saveSpeaker = function (formValues) {
        if (this.newSpeakerForm.valid) {
            var newSpeaker = {
                id: undefined,
                presenter: formValues.presenter,
                description: formValues.description,
                address: formValues.address
            };
            this.PresenterService.addSpeaker(newSpeaker);
            if (this.editMode) {
                this.router.navigate(['/speakers/' + this.speaker.presenter]);
            }
            else {
                this.toastr.success('Profile Saved');
            }
            //this.saveNewSpeaker.emit(speaker);
        }
    };
    CreateSpeakerComponent.prototype.cancel = function () {
        //this.cancelAddSpeaker.emit();
        this.router.navigate(['/speakers/list']);
    };
    return CreateSpeakerComponent;
}());
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], CreateSpeakerComponent.prototype, "saveNewSpeaker", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], CreateSpeakerComponent.prototype, "cancelAddSpeaker", void 0);
CreateSpeakerComponent = __decorate([
    core_1.Component({
        selector: 'create-speaker',
        templateUrl: '/app/speakers/speaker-details/speaker.component.html',
        styles: ["\n    em {float:right; color:#E05C65; padding-left:10px;}\n    .error input, .error select, .error textarea {background-color:#E3C3C5;}\n    .error ::-webkit-input-placeholder { color: #999; } \n    .error :-moz-placeholder { color: #999; }\n    .error ::-moz-placeholder { color: #999; }\n    .error :ms-input-placeholder  { color: #999; }\n  "]
    }),
    __param(3, core_1.Inject(toastr_service_1.TOASTR_TOKEN)),
    __metadata("design:paramtypes", [index_1.PresenterService, router_1.Router,
        router_1.ActivatedRoute, Object])
], CreateSpeakerComponent);
exports.CreateSpeakerComponent = CreateSpeakerComponent;
//# sourceMappingURL=speaker.component.js.map