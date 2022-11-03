import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { map, Observable } from "rxjs";
import { CharacterDetailsComponent } from "./character-details/character-details.component";
import { CharactersDataService } from "../charactersData.service";
import { PageEvent } from "@angular/material/paginator";

@Component({
  selector: "app-characters",
  templateUrl: "./characters.component.html",
  styleUrls: ["./characters.component.scss"],
})

//dodac interfejs
export class CharactersComponent implements OnInit {
  public characters$: Observable<any>;
  public pages$: Observable<any>;

  constructor(
    private charactersDataService: CharactersDataService,
    private matDialog: MatDialog
  ) {
    this.characters$ = this.charactersDataService
      .getAllCaracters()
      .pipe(map((data) => data.results));
    this.pages$ = this.charactersDataService
      .getAllCaracters()
      .pipe(map((data) => data.info.pages));
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

  onPageChange(event: PageEvent) {
    const startIndex = event.pageIndex* event.pageSize
    let endIndex = startIndex + event.pageSize
    if (endIndex>this.pages$.length)
  }

  detailsData() {}

  ngOnInit(): void {}
}
