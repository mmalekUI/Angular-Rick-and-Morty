import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent implements OnInit {
  headerComponents: [string, string, string] = [
    "Characters",
    "Locations",
    "Episodes",
  ];

  constructor() {}

  ngOnInit(): void {}
}
