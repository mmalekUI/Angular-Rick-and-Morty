import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";

@Injectable({ providedIn: "root" })
export class ResetFiltersService {
  public resetFilterObs: Observable<boolean>;
  private resetFilterSubject = new BehaviorSubject<boolean>(false);

  constructor() {
    this.resetFilterObs = this.resetFilterSubject.asObservable();
  }

  updateResetFiltersValue(reset: boolean) {
    this.resetFilterSubject.next(reset);
  }
}
