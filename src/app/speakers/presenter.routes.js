"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("./index");
exports.presenterRoutes = [
    { path: 'list', component: index_1.PresentersListComponent },
    { path: 'new/:presenter', component: index_1.CreateSpeakerComponent },
    { path: 'new', component: index_1.CreateSpeakerComponent },
    { path: ':presenter', component: index_1.SpeakerDetailsComponent }
];
//# sourceMappingURL=presenter.routes.js.map