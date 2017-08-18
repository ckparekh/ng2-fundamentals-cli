import { PresentersListComponent } from './presenter-list.component'
import { IPresenter } from './presenter.model'
import { Observable } from 'rxjs/Rx'

describe('PresentersListComponent', () => {
  let component: PresentersListComponent;
  let mockPresenterService, mockActivatedRoute;

  beforeEach(() => {
    mockPresenterService = jasmine.createSpyObj('mockPresenterService', ['getAll1', 'getSpeakers'])
    component = new PresentersListComponent(mockPresenterService, mockActivatedRoute);
  })

  describe('ngOnInit', () => {
    it('should return presenters', () => {
          var speakers = [{ id: 2, presenter: "John Papa", description: "babab", address: 'blabla'},
                    { id: 3, presenter: "Peter Bacon Darwin2", description: "babab", address: 'blabla'}]

          mockPresenterService.getAll1.and.returnValue(Observable.of(speakers));

          component.ngOnInit();
          expect(speakers.length).toBe(2);
     })
  })

  describe('SearchSpeakers', () => {
    it('should return filtered presenter(s)', () => {
          var speakers = [{ id: 2, presenter: "John Papa", description: "babab", address: 'blabla'},
                    { id: 3, presenter: "Peter Bacon Darwin2", description: "babab", address: 'blabla'}]

          mockPresenterService.getSpeakers.and.returnValue(Observable.of(speakers));

          component.searchTerm = "John"
          component.searchSpeakers();
          expect(speakers.length).toBe(2);
     })
  })

})