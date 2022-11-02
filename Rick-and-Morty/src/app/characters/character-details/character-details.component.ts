import { Component, OnInit, Inject } from "@angular/core";
import { MAT_DIALOG_DATA } from "@angular/material/dialog";

@Component({
  selector: "app-character-details",
  templateUrl: "./character-details.component.html",
  styleUrls: ["./character-details.component.scss"],
})
export class CharacterDetailsComponent implements OnInit {
  character: any;
  constructor(@Inject(MAT_DIALOG_DATA) public data: object) {
    this.character = data;
  }

  ngOnInit(): void {}
}
