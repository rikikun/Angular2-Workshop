import { Component } from '@angular/core';
import {Hero,HEROES} from './entity/hero.entity';

@Component({
	moduleId: module.id,
	selector: 'angular2-workshop-app',
	templateUrl: 'angular2-workshop.component.html',
	styleUrls: ['angular2-workshop.component.css']
})
export class Angular2WorkshopAppComponent {
	title = 'Tour of Heroes';
	heroes = HEROES;

}