import {Component, OnInit} from '@angular/core';
import {Hero} from "../../../model/hero";
import {HeroService} from "../../service/hero/hero.service";
import {MessageService} from "../../service/message/message.service";

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

  selectedHero?: Hero;

  heroes: Hero[] = [];

  constructor(private heroService: HeroService, private messageService: MessageService) {
  }

  ngOnInit(): void {
    this.getHeros();
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    this.messageService.add(`HeroesComponent: Selected hero with id=${hero.id}`);
  }

  private getHeros(): void {
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
  }
}
