import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { map, Observable } from "rxjs";
import { ActivatedRoute, Params, Router } from "@angular/router";
import { CharacterDetailsComponent } from "./character-details/character-details.component";
import { CharactersDataService } from "../charactersData.service";

@Component({
  selector: "app-characters",
  templateUrl: "./characters.component.html",
  styleUrls: ["./characters.component.scss"],
})

//dodac interfejs
export class CharactersComponent implements OnInit {
  public characters$: Observable<any>;
  public info$: Observable<any>;

  constructor(
    private charactersDataService: CharactersDataService,
    private matDialog: MatDialog,
    private route: Router,
    private aroute: ActivatedRoute
  ) {
    this.info$ = this.getInfoObs();
    this.characters$ = this.getCharactersObs();
  }

  getInfoObs() {
    return this.charactersDataService
      .getCharacters()
      .pipe(map((data) => data.info));
  }

  getCharactersObs(queryParams?: Params) {
    return this.charactersDataService
      .getCharacters(queryParams)
      .pipe(map((data) => data.results));
  }

  getCharacterStatusColor(characterStatus: string) {
    switch (characterStatus) {
      case "Alive":
        return "primary";

      case "Dead":
        return "warn";

      default:
        return "accent";
    }
  }

  onCardClick(character: any) {
    this.matDialog.open(CharacterDetailsComponent, {
      data: character,
    });
    this.route.navigate(["/characters"]);
  }

  //Przerobić na router, dane pobierane z url i przekazywane do geta, query paramsm, router query params w angularze (subscriber)

  detailsData() {}

  // funkcja dodajaca query params

  ngOnInit(): void {
    this.aroute.queryParams.subscribe((queryParams: Params) => {
      this.characters$ = this.getCharactersObs(queryParams);
    });
  }
}
