import {Component, OnInit} from '@angular/core';
import {Hero} from "../../../model/hero";
import {HeroService} from "../../service/hero/hero.service";

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

  heroes: Hero[] = [];

  constructor(private heroService: HeroService) {
  }

  ngOnInit(): void {
    this.getHeros();
  }

  private getHeros(): void {
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
  }
}
