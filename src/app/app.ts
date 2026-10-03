import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CONTENT } from './content';
import { Header } from './components/header';
import { Icon } from './components/icon';
import { Dashboard } from './components/dashboard';
import { FeatureCard } from './components/feature-card';
import { Skeleton } from './components/skeleton';

@Component({
  selector: 'app-root',
  imports: [Header, Icon, Dashboard, FeatureCard, Skeleton],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './app.html',
})
export class App { protected readonly content = CONTENT; }
