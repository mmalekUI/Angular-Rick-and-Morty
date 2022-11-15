import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params, Router } from "@angular/router";
import { map } from "rxjs/operators";
import { ResetFiltersService } from "../../reset-filters.service";

@Component({
  selector: "app-characters-filters",
  templateUrl: "./characters-filters.component.html",
  styleUrls: ["./characters-filters.component.scss"],
})
export class CharactersFiltersComponent implements OnInit {
  statuses: string[] = ["Alive", "Dead", "Unknown"];
  genders: string[] = ["Female", "Male", "Genderless", "Unknown"];
  species: string[] = [
    "Alien",
    "Animal",
    "Cronenberg",
    "Disease",
    "Human",
    "Humanoid",
    "Mythological Creature",
    "Poopybutthole",
    "Robot",
    "Unknown",
  ];

  status: string = "";

  constructor(
    private router: Router,
    private filterService: ResetFiltersService,
    private aroute: ActivatedRoute
  ) {}

  setStatus(characterStatus: string) {
    this.router.navigate(["/characters"], {
      queryParams: { status: characterStatus },
      queryParamsHandling: "merge",
    });
  }

  setGender(characterGender: string) {
    this.router.navigate(["/characters"], {
      queryParams: { gender: characterGender },
      queryParamsHandling: "merge",
    });
  }

  setSpecies(characterSpecies: string) {
    this.router.navigate(["/characters"], {
      queryParams: { species: characterSpecies },
      queryParamsHandling: "merge",
    });
  }

  isChecked(value: string, paramName: string) {
    return this.aroute.queryParams.pipe(
      map((queryParams) => queryParams[paramName] === value)
    );
  }

  resetFilters() {
    this.setGender("");
    this.setStatus("");
    this.setSpecies("");
  }

  ngOnInit(): void {
    //   this.filterService.resetFilterObs.subscribe((resetState) => {
    //     if (resetState) {
    //       this.resetFilters();
    //     }
    //   });
    // }
    this.aroute.queryParams.subscribe((queryParams: Params) => {
      this.status = queryParams["status"] ?? "";
    });
  }
}
