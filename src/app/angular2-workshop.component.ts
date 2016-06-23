import { Component, OnInit } from '@angular/core';
import {RouteConfig,ROUTER_DIRECTIVES,ROUTER_PROVIDERS} from '@angular/router-deprecated';
import {Hero} from './entity/hero.entity';
import {HeroDetailComponent} from './components/hero-detail';
import {HeroService} from './service/hero.service';
import {HeroesComponent} from './components/heroes';


@Component({
	moduleId: module.id,
	selector: 'angular2-workshop-app',
	templateUrl: 'angular2-workshop.component.html',
	styleUrls: ['angular2-workshop.component.css'],
	directives:[HeroDetailComponent,ROUTER_DIRECTIVES],
	providers:[HeroService,ROUTER_PROVIDERS]
})
@RouteConfig([
	{path:'/heroes', component: HeroesComponent, name: 'Heroes'},
	{path: '/detail/:id',name: 'HeroDetail',component: HeroDetailComponent}
	])


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