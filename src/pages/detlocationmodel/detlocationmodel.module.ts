import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DetlocationmodelPage } from './detlocationmodel';
import{AgmCoreModule} from '@agm/core';

@NgModule({
  declarations: [
    DetlocationmodelPage,
  ],
  imports: [
    IonicPageModule.forChild(DetlocationmodelPage),
    AgmCoreModule.forRoot({
      apiKey:'AIzaSyCIHg0L8RtTMcAleWqjbJp7nb6DY5PJTrg'
      
    })
  ],
})
export class DetlocationmodelPageModule {}
