import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CharactersComponent } from "./characters.component";
import { CharactersRoutingModule } from "./characters-routing.module";
import { CharactersDataService } from "../charactersData.service";
import { MaterialModule } from "../material/material.module";
import { CharacterDetailsComponent } from "./character-details/character-details.component";

@NgModule({
  declarations: [CharactersComponent, CharacterDetailsComponent],
  imports: [CommonModule, CharactersRoutingModule, MaterialModule],
  providers: [CharactersDataService],
})
export class CharactersModule {}
