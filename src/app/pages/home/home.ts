import { Component } from '@angular/core';
import { HeroSection } from "../../components/hero-section/hero-section";
import { NavBar } from "../../components/nav-bar/nav-bar";

@Component({
    selector: 'home',
    imports: [HeroSection, NavBar],
    templateUrl: './home.html',
})
export class Home {}
