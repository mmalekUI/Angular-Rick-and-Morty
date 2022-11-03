import { Component, OnInit, Inject } from "@angular/core";
import { MAT_DIALOG_DATA } from "@angular/material/dialog";

interface CharacterInterface {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: { name: string; url: string };
  location: { name: string; url: string };
  image: string;
  episode: [];
  url: string;
  created: string;
}

@Component({
  selector: "app-character-details",
  templateUrl: "./character-details.component.html",
  styleUrls: ["./character-details.component.scss"],
})
export class CharacterDetailsComponent implements OnInit {
  character: CharacterInterface;
  constructor(@Inject(MAT_DIALOG_DATA) public data: CharacterInterface) {
    this.character = data;
  }

  ngOnInit(): void {}
}
