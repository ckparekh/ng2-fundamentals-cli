"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var presenter_list_component_1 = require("./presenter-list.component");
var Rx_1 = require("rxjs/Rx");
describe('PresentersListComponent', function () {
    var component;
    var mockPresenterService, mockActivatedRoute;
    beforeEach(function () {
        mockPresenterService = jasmine.createSpyObj('mockPresenterService', ['getAll1', 'getSpeakers']);
        component = new presenter_list_component_1.PresentersListComponent(mockPresenterService, mockActivatedRoute);
    });
    describe('ngOnInit', function () {
        it('should return presenters', function () {
            var speakers = [{ id: 2, presenter: "John Papa", description: "babab", address: 'blabla' },
                { id: 3, presenter: "Peter Bacon Darwin2", description: "babab", address: 'blabla' }];
            mockPresenterService.getAll1.and.returnValue(Rx_1.Observable.of(speakers));
            component.ngOnInit();
            expect(speakers.length).toBe(2);
        });
    });
    describe('SearchSpeakers', function () {
        it('should return filtered presenter(s)', function () {
            var speakers = [{ id: 2, presenter: "John Papa", description: "babab", address: 'blabla' },
                { id: 3, presenter: "Peter Bacon Darwin2", description: "babab", address: 'blabla' }];
            mockPresenterService.getSpeakers.and.returnValue(Rx_1.Observable.of(speakers));
            component.searchTerm = "John";
            component.searchSpeakers();
            expect(speakers.length).toBe(2);
        });
    });
});
//# sourceMappingURL=presenter-list.component.isolated.spec.js.map