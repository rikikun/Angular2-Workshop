import { Component, OnInit } from '@angular/core';
import {Hero} from './entity/hero.entity';
import {HeroDetailComponent} from './components/hero-detail';
import {HeroService} from './service/hero.service';

@Component({
	moduleId: module.id,
	selector: 'angular2-workshop-app',
	templateUrl: 'angular2-workshop.component.html',
	styleUrls: ['angular2-workshop.component.css'],
	directives:[HeroDetailComponent],
	providers:[HeroService]
})
export class Angular2WorkshopAppComponent implements OnInit {
	title = 'Tour of Heroes';
	heroes:Hero[];

	constructor(private heroService:HeroService) {}

	ngOnInit() {
		this.heroes=this.heroService.getHeroes();
	}

	selectedHero:Hero;

	selectHero(hero:Hero) {
		console.log(hero);
		this.selectedHero=hero;
	}

}