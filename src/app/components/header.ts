import { ChangeDetectionStrategy, Component, ElementRef, HostListener, signal, viewChild } from '@angular/core';
import { CONTENT } from '../content';
import { Icon } from './icon';

@Component({
  selector: 'app-header',
  imports: [Icon],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <a class="skip-link" href="#conteudo">Ir para o conteúdo</a>
    <header class="header">
      <div class="header-inner container">
        <a href="#inicio" class="brand" aria-label="Gêmeo Digital — início"><img src="assets/brand/logo-light.svg" alt="LDT — Gêmeo Digital" width="164" height="46" /></a>
        <button #menuButton class="menu-toggle" type="button" [attr.aria-expanded]="open()" aria-controls="nav-principal" (click)="open.set(!open())">
          <span>{{ open() ? 'Fechar' : 'Menu' }}</span><span class="menu-symbol" aria-hidden="true">{{ open() ? '×' : '☰' }}</span>
        </button>
        <nav id="nav-principal" class="navigation" [class.is-open]="open()" aria-label="Navegação principal">
          @for (link of links; track link.id) { <a [href]="'#' + link.id" (click)="open.set(false)">{{ link.label }}</a> }
          <a class="button nav-cta" href="#preview" (click)="open.set(false)">Conheça o projeto <app-icon /></a>
        </nav>
      </div>
    </header>
  `,
})
export class Header {
  readonly open = signal(false);
  protected readonly links = CONTENT.nav;
  private readonly menuButton = viewChild<ElementRef<HTMLButtonElement>>('menuButton');

  @HostListener('document:keydown.escape') closeOnEscape(): void {
    if (this.open()) { this.open.set(false); this.menuButton()?.nativeElement.focus(); }
  }
  @HostListener('window:resize') closeOnResize(): void { this.open.set(false); }
}
