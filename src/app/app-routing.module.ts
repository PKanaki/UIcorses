import { AllcoursesComponent } from './allcourses/allcourses.component';
import { StudentDashboardComponent } from './student-dashboard/student-dashboard.component';
import { TutorDashboardComponent } from './tutor-dashboard/tutor-dashboard.component';
import { ELearningContentComponent } from './e-learning-content/e-learning-content.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ELearningSyllabusComponent } from './e-learning-syllabus/e-learning-syllabus.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { CertificateComponent } from './certificate/certificate.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', component: ELearningContentComponent},
  { path: 'dashboard', component: DashboardComponent },
  { path: 'tutor', component: TutorDashboardComponent },
  { path: 'student', component: StudentDashboardComponent },
  { path: 'allcourses', component: AllcoursesComponent },
  {path:'e-learning-syllabus',component:ELearningSyllabusComponent},
  {path:'aboutus',component:AboutusComponent},
  {path:'certificate', component:CertificateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
