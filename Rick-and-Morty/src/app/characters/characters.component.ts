import { Component, OnInit } from "@angular/core";
import { map, Observable } from "rxjs";
import { CharactersDataService } from "../charactersData.service";

@Component({
  selector: "app-characters",
  templateUrl: "./characters.component.html",
  styleUrls: ["./characters.component.scss"],
})
export class CharactersComponent implements OnInit {
  public characters$: Observable<any>;

  constructor(private charactersDataService: CharactersDataService) {
    this.characters$ = this.charactersDataService
      .getAllCaracters()
      .pipe(map((data) => data.results));
  }

  onCardClick() {
    console.log("click works");
  }

  ngOnInit(): void {}
}
