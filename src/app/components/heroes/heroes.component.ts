import { Component, OnInit } from '@angular/core';
import {HeroService} from '../../service/hero.service';
import {Hero} from '../../entity/hero.entity';

@Component({
  moduleId: module.id,
  selector: 'app-heroes',
  templateUrl: 'heroes.component.html',
  styleUrls: ['heroes.component.css']
})
export class HeroesComponent implements OnInit {

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
