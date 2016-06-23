import { Component, OnInit } from '@angular/core';
import {Hero} from '../../entity/hero.entity';
import {RouteParams} from '@angular/router-deprecated';
import {HeroService} from '../../service/hero.service';

@Component({
	moduleId: module.id,
	selector: 'app-hero-detail',
	templateUrl: 'hero-detail.component.html',
	styleUrls: ['hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

	inputHero:Hero;


	constructor(private routerParam:RouteParams,private heroService:HeroService) {}

	ngOnInit() {
		let id = this.routerParam.get('id');
		this.inputHero=this.heroService.getHeroes().filter(res=>{
			return res.id.toString()===id.toString();
		})[0];
	}

}
