import { ChangeDetectionStrategy, Component, input } from '@angular/core';

// Traços próprios, grade 32 px e linguagem geométrica alinhada aos ícones Carbon.
const PATHS: Record<string, string> = {
  arrow: 'M4 16H27M18 7L27 16L18 25',
  sensor: 'M3 16H8L12 6L19 26L24 16H29',
  connect: 'M5 12C11 5 21 5 27 12M9 17C13 12 19 12 23 17M13 22C15 20 17 20 19 22M16 26H16.1',
  process: 'M9 9H23V23H9ZM13 3V9M19 3V9M13 23V29M19 23V29M3 13H9M3 19H9M23 13H29M23 19H29M13 13H19V19H13Z',
  screen: 'M3 5H29V23H3ZM10 29H22M16 23V29M8 17L13 12L18 16L24 10',
  chart: 'M4 4V28H28M9 23V16M16 23V10M23 23V5',
  tool: 'M21 4L18 10L22 14L28 11C29 17 24 22 18 20L8 29L3 24L13 14C11 8 15 3 21 4Z',
  cube: 'M16 3L29 10V23L16 30L3 23V10ZM3 10L16 17L29 10M16 17V30M9 6L22 13',
};

@Component({
  selector: 'app-icon',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<svg viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round" aria-hidden="true"><path [attr.d]="paths[name()] || paths['arrow']" /></svg>`,
  styles: ':host { display: inline-flex; width: 24px; height: 24px; flex-shrink: 0; } svg { width: 100%; height: 100%; }',
})
export class Icon {
  readonly name = input('arrow');
  protected readonly paths = PATHS;
}
