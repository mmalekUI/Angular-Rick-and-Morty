import { TestBed } from "@angular/core/testing";

import { ResetFiltersService } from "./reset-filters.service";

describe("ResetFiltersService", () => {
  let service: ResetFiltersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ResetFiltersService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });
});
