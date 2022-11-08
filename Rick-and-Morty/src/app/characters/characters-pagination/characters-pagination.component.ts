import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { PageEvent } from "@angular/material/paginator";
import { Router } from "@angular/router";

@Component({
  selector: "app-characters-pagination",
  templateUrl: "./characters-pagination.component.html",
  styleUrls: ["./characters-pagination.component.scss"],
})
export class CharactersPaginationComponent implements OnInit {
  @Input() info: any;
  @Output() pageChanger = new EventEmitter<number>();

  length: any;
  pageIndex = 1;

  constructor(private router: Router) {}

  handlePageEvent(event: PageEvent) {
    this.length = event.length;
    this.pageIndex = event.pageIndex;
    this.pageChanger.emit(this.pageIndex);
    // this.router.
  }

  ngOnInit(): void {
    length = this.info.pages;
  }
}
