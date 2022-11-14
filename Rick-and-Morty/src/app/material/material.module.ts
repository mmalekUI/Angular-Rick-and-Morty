import { NgModule } from "@angular/core";
import { MatCardModule } from "@angular/material/card";
import { MatGridListModule } from "@angular/material/grid-list";
import { MatButtonModule } from "@angular/material/button";
import { MatDialogModule } from "@angular/material/dialog";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatRadioModule } from "@angular/material/radio";

const MaterialComponents = [
  MatCardModule,
  MatGridListModule,
  MatButtonModule,
  MatDialogModule,
  MatPaginatorModule,
  MatRadioModule,
];
@NgModule({
  imports: [MaterialComponents],
  exports: [MaterialComponents],
})
export class MaterialModule {}
