import { Component, OnInit } from '@angular/core';
import {HeroService} from '../../service/hero.service';
import {Hero} from '../../entity/hero.entity';
import {Router} from '@angular/router-deprecated';

@Component({
  moduleId: module.id,
  selector: 'app-heroes',
  templateUrl: 'heroes.component.html',
  styleUrls: ['heroes.component.css']
})
export class HeroesComponent implements OnInit {

	heroes:Hero[];

  	constructor(private heroService:HeroService,private router:Router) {}

	ngOnInit() {
		this.heroes=this.heroService.getHeroes();
	}

	selectHero(hero:Hero) {
		this.router.navigate(['HeroDetail',{id:hero.id}]);
	}

}
