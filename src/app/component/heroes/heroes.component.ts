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

  add(name: string) {
    name = name.trim();
    if (!name) {
      return;
    }

    this.heroService.addHero({name} as Hero).subscribe(hero => this.heroes.push(hero));

  }

  delete(hero: any) {
    this.heroes = this.heroes.filter(h => h !== hero);
    this.heroService.deleteHero(hero.id).subscribe();
  }
}
