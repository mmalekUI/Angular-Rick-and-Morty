import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CharactersComponent } from "./characters.component";
import { CharactersRoutingModule } from "./characters-routing.module";
import { CharactersDataService } from "./services/charactersData.service";
import { MaterialModule } from "../material/material.module";
import { CharacterDetailsComponent } from "./character-details/character-details.component";
import { CharactersFiltersComponent } from "./characters-filters/characters-filters.component";
import { CharactersPaginationComponent } from "./characters-pagination/characters-pagination.component";
import { CharactersStartComponent } from "./characters-start/characters-start.component";

@NgModule({
  declarations: [
    CharactersComponent,
    CharacterDetailsComponent,
    CharactersFiltersComponent,
    CharactersPaginationComponent,
    CharactersStartComponent,
  ],
  imports: [CommonModule, CharactersRoutingModule, MaterialModule],
  providers: [CharactersDataService],
})
export class CharactersModule {}
