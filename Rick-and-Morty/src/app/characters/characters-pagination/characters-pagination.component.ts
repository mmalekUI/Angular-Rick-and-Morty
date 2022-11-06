import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { PageEvent } from "@angular/material/paginator";

@Component({
  selector: "app-characters-pagination",
  templateUrl: "./characters-pagination.component.html",
  styleUrls: ["./characters-pagination.component.scss"],
})
export class CharactersPaginationComponent implements OnInit {
  @Input() info: any;
  @Output() pageChanger = new EventEmitter<number>();

  length: any;
  pageIndex = 0;

  constructor() {}

  handlePageEvent(event: PageEvent) {
    this.length = event.length;
    this.pageIndex = event.pageIndex;
    this.pageChanger.emit(this.pageIndex);
  }

  ngOnInit(): void {
    length = this.info.pages;
  }
}
