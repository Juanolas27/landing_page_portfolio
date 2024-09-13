import { Component, AfterViewInit, ViewChild, ElementRef, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass'
})
export class AppComponent{
  title = 'landing_page';
  @ViewChild("proyectos") proyectos!: ElementRef;
  @ViewChild("sobre_mi") sobre_mi!: ElementRef;
  @ViewChild("contacto") contacto!: ElementRef;
  @ViewChild('carouselExampleRide') carousel!: ElementRef;

  
  mostrarProyectos(): void{
    this.sobre_mi.nativeElement.classList.contains("hidden") ? {} : this.sobre_mi.nativeElement.classList.add("hidden");
    this.contacto.nativeElement.classList.contains("hidden") ? {} : this.contacto.nativeElement.classList.add("hidden");
    this.proyectos.nativeElement.classList.remove("hidden")
  };
  mostrarSobreMi(): void{
    this.proyectos.nativeElement.classList.contains("hidden") ? {} : this.proyectos.nativeElement.classList.add("hidden");
    this.contacto.nativeElement.classList.contains("hidden") ? {} : this.contacto.nativeElement.classList.add("hidden");
    this.sobre_mi.nativeElement.classList.remove("hidden")
  };
  mostrarContacto(): void{
    this.proyectos.nativeElement.classList.contains("hidden") ? {} : this.proyectos.nativeElement.classList.add("hidden");
    this.sobre_mi.nativeElement.classList.contains("hidden") ? {} : this.sobre_mi.nativeElement.classList.add("hidden");
    this.contacto.nativeElement.classList.remove("hidden")
  };
  
  mostrar_iberdrola():void{
    
  }
  }
