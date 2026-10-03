import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { Icon } from './icon';

export interface Feature { readonly icon: string; readonly title: string; readonly text: string; readonly status: string; readonly className: string }

@Component({
  selector: 'app-feature-card',
  imports: [Icon],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<article class="feature-card" [class]="'feature-card ' + feature().className"><app-icon [name]="feature().icon" /><span class="feature-status">{{ feature().status }}</span><h3>{{ feature().title }}</h3><p>{{ feature().text }}</p><ng-content /></article>`,
})
export class FeatureCard { readonly feature = input.required<Feature>(); }
