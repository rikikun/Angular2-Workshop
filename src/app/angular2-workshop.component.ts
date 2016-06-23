import { Component } from '@angular/core';
import {Hero,HEROES} from './entity/hero.entity';
import {HeroDetailComponent} from './components/hero-detail';

@Component({
	moduleId: module.id,
	selector: 'angular2-workshop-app',
	templateUrl: 'angular2-workshop.component.html',
	styleUrls: ['angular2-workshop.component.css'],
	directives:[HeroDetailComponent]
})
export class Angular2WorkshopAppComponent {
	title = 'Tour of Heroes';
	heroes = HEROES;

	selectedHero:Hero;

	selectHero(hero:Hero) {
		console.log(hero);
		this.selectedHero=hero;
	}

}