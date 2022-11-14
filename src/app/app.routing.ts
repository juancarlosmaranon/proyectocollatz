//NECESITAMOS LOS SIGUIENTES MODULOS PARA REALIZAR ROUTING
import { Routes, RouterModule } from "@angular/router";
import {ModuleWithProviders} from "@angular/core";
import { MenucollatzComponent } from "./components/menucollatz/menucollatz.component";
import { HomeComponent } from "./components/home/home.component";
import { CollatzComponent } from "./components/collatz/collatz.component";

//DEFINIMOS UN ARRAY DE OBJETOS Routes
const appRoutes: Routes = [
    {path:"",component: HomeComponent},
    {path:"menucollatz", component: MenucollatzComponent},
    {path:"collatz/:numero",component:CollatzComponent},

]

//DE ESTA CLASE DEBEMOS EXPORTAR DOS ELEMENTOS PARA app.module.ts
export const appRoutingProviders: any[] =[];
export const routing: ModuleWithProviders<any>=
RouterModule.forRoot(appRoutes);