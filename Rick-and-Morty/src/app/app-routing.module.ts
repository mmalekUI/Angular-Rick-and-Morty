import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: "characters/:page",
    loadChildren: () =>
      import("./characters/characters.module").then((m) => m.CharactersModule),
  },
  // {
  //   path: "locations",
  //   loadChildren: () =>
  //     import("./locations/locations.module").then((m) => m.LocationsModule),
  // },
  // {
  //   path: "episodes",
  //   loadChildren: () =>
  //     import("./episodes/episodes.module").then((m) => m.LocationsModule),
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
