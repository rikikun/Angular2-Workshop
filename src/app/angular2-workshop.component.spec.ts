import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { Angular2WorkshopAppComponent } from '../app/angular2-workshop.component';

beforeEachProviders(() => [Angular2WorkshopAppComponent]);

describe('App: Angular2Workshop', () => {
  it('should create the app',
      inject([Angular2WorkshopAppComponent], (app: Angular2WorkshopAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'angular2-workshop works!\'',
      inject([Angular2WorkshopAppComponent], (app: Angular2WorkshopAppComponent) => {
    expect(app.title).toEqual('angular2-workshop works!');
  }));
});
