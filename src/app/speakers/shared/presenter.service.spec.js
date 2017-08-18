"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var presenter_service_1 = require("./presenter.service");
var Rx_1 = require("rxjs/Rx");
describe('PresenterService', function () {
    var presenterService, mockHttp;
    beforeEach(function () {
        mockHttp = jasmine.createSpyObj('mockHttp', ['post', 'get']);
        presenterService = new presenter_service_1.PresenterService(mockHttp);
    });
    describe('getAllSpeakers', function () {
        it('should return correct count', function () {
            var speakers = [{ id: 2, presenter: "John Papa", description: "babab", address: 'blabla' },
                { id: 3, presenter: "Peter Bacon Darwin2", description: "babab", address: 'blabla' }];
            mockHttp.get.and.returnValue(Rx_1.Observable.of(speakers));
            presenterService.getAll2();
            expect(speakers.length).toBe(2);
            //expect(mockHttp.get).toHaveBeenCalledWith('/api/speakers');
        });
    });
    describe('GetSessions', function () {
        it('should call http.get with the right URL', function () {
            var sessions = [{ id: 6, voters: ["john"], name: "John Papa" },
                { id: 10, voters: ["john"], name: "vvv Papa" }];
            mockHttp.get.and.returnValue(Rx_1.Observable.of(sessions));
            presenterService.getSessions("John");
            expect(mockHttp.get).toHaveBeenCalledWith('/api/sessions/searchbyspeaker?search=John');
        });
    });
});
//# sourceMappingURL=presenter.service.spec.js.map