import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FacultyPage } from './faculty';
import{AgmCoreModule} from '@agm/core';
@NgModule({
  declarations: [
    FacultyPage,
  ],
  imports: [
    IonicPageModule.forChild(FacultyPage),
    AgmCoreModule.forRoot({
      apiKey:'AIzaSyCIHg0L8RtTMcAleWqjbJp7nb6DY5PJTrg'
    })
  ],
})
export class FacultyPageModule {}
