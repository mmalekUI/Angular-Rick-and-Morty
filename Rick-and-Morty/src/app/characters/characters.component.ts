import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { map, Observable } from "rxjs";
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

  constructor(
    private charactersDataService: CharactersDataService,
    private matDialog: MatDialog
  ) {
    this.characters$ = this.charactersDataService
      .getAllCaracters()
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
    this.matDialog.open(CharacterDetailsComponent, { data: character });
    console.log("click works");
    console.log(this.characters$);
  }

  detailsData() {}

  ngOnInit(): void {}
}
