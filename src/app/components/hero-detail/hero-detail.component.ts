import { Component, OnInit, Input } from '@angular/core';
import {Hero} from '../../entity/hero.entity';

@Component({
  moduleId: module.id,
  selector: 'app-hero-detail',
  templateUrl: 'hero-detail.component.html',
  styleUrls: ['hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

	@Input('hero') inputHero:Hero;

  constructor() {}

  ngOnInit() {
  }

}
