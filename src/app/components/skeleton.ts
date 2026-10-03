import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-skeleton',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<div class="skeleton-composition" aria-hidden="true"><div class="skeleton-portrait"><span class="skeleton-square"></span><span class="skeleton-line short"></span></div><div class="skeleton-copy"><span class="skeleton-line"></span><span class="skeleton-line"></span><span class="skeleton-line short"></span></div></div>`,
})
export class Skeleton {}
