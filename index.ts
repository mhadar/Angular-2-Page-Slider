/*

 ANGULAR 2 PAGE SLIDER COMPONENT
 with DOM recycling and caching
 designed for mobile devices

 Copyright (c) 2016 Keaton Brandt

 Permission is hereby granted, free of charge, to any person obtaining a copy of this
 software and associated documentation files (the "Software"), to deal in the Software
 without restriction, including without limitation the rights to use, copy, modify, merge,
 publish, distribute, sublicense, and/or sell copies of the Software, and to permit
 persons to whom the Software is furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in all copies or
 substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED,
 INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR
 PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE
 FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
 OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
 DEALINGS IN THE SOFTWARE.

 */

import {NgModule}                from "@angular/core";
import {CommonModule}            from '@angular/common';

import {KBPageSliderComponent}    from "./src/components/pageslider.component";
import {KBPagesRendererDirective} from "./src/components/render.component";
import {KBDotIndicatorComponent}    from "./src/components/dotindicator.component";
import {KBNavButtonComponent}    from "./src/components/navbutton.component";

export * from "./src/components/pageslider.component";
export * from "./src/components/render.component";
export * from "./src/components/dotindicator.component";
export * from "./src/components/navbutton.component";

@NgModule({
	imports: [
		CommonModule
	],
	declarations: [
		KBPageSliderComponent,
		KBPagesRendererDirective,
		KBDotIndicatorComponent,
		KBNavButtonComponent
	],
	exports: [
		KBPageSliderComponent,
		KBPagesRendererDirective,
		KBDotIndicatorComponent,
		KBNavButtonComponent
	]
})
export class PageSliderModule {
}