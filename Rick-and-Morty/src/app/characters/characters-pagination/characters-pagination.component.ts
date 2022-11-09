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
  pageIndex = 1;
  constructor(private router: Router) {}

  handlePageEvent(event: PageEvent) {
    this.router.navigate(["/characters"], {
      queryParams: { page: event.pageIndex },
    });
  }

  ngOnInit(): void {}
}
