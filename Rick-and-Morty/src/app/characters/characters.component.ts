import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { map, Observable } from "rxjs";
import { ActivatedRoute } from "@angular/router";
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
    private route: ActivatedRoute
  ) {
    this.info$ = this.getInfoObs();
    this.characters$ = this.getCharactersObs();
  }

  getInfoObs() {
    return this.charactersDataService
      .getCaracters()
      .pipe(map((data) => data.info));
  }

  getCharactersObs(pageIndex?: number) {
    return this.charactersDataService
      .getCaracters(pageIndex)
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
    console.log("click works");
    console.log(this.characters$);
  }

  updatePage(pageIndex: number) {
    this.characters$ = this.getCharactersObs(pageIndex);
  }

  //Przerobić na router, dane pobierane z url i przekazywane do geta, query paramsm, router query params w angularze (subscriber)

  detailsData() {}

  ngOnInit(): void {}
}
