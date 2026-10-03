import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { Icon } from './icon';

@Component({
  selector: 'app-dashboard',
  imports: [Icon],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="dashboard" [class.compact]="compact()">
      <div class="dash-top"><span class="dash-brand"><app-icon name="cube" /> GÊMEO DIGITAL</span><span class="demo-label">Demonstração visual</span></div>
      <div class="dash-main">
        <aside class="dash-sidebar" aria-hidden="true"><app-icon name="screen" /><app-icon name="chart" /><app-icon name="tool" /></aside>
        <div class="dash-content">
          <div class="dash-heading"><div><span class="micro">VISÃO DO EQUIPAMENTO</span><h3>Torno convencional</h3></div><span class="status"><span></span> Operação ilustrativa</span></div>
          <div class="metrics">
            @for (metric of metrics; track metric.label) {
              <div class="metric"><span>{{ metric.label }}</span><p>{{ metric.value }} <small>{{ metric.unit }}</small></p><div class="metric-track" aria-hidden="true"><span [style.width]="metric.width"></span></div></div>
            }
          </div>
          <div class="dash-panels">
            <div class="chart-panel"><div class="panel-heading"><span>Rotação do eixo</span><span class="micro">RPM / TEMPO</span></div>
              <svg class="line-chart" viewBox="0 0 480 165" role="img" aria-label="Gráfico ilustrativo de rotação, sem dados reais">
                <path class="chart-grid" d="M35 20H465M35 60H465M35 100H465M35 140H465" />
                <g class="chart-labels"><text x="0" y="24">1500</text><text x="0" y="64">1000</text><text x="7" y="104">500</text><text x="24" y="144">0</text><text x="35" y="163">00:00</text><text x="223" y="163">00:30</text><text x="430" y="163">01:00</text></g>
                <path class="chart-area" d="M35 105L55 105L65 90L80 94L98 66L113 72L132 45L150 48L167 38L185 44L202 32L220 43L238 38L253 53L268 40L287 45L302 36L320 41L336 34L354 47L374 40L395 44L413 37L432 45L449 40L465 44V140H35Z" />
                <path class="chart-line" d="M35 105L55 105L65 90L80 94L98 66L113 72L132 45L150 48L167 38L185 44L202 32L220 43L238 38L253 53L268 40L287 45L302 36L320 41L336 34L354 47L374 40L395 44L413 37L432 45L449 40L465 44" />
              </svg>
            </div>
            <div class="twin-panel"><span class="panel-heading">Representação digital <app-icon name="cube" /></span><img src="assets/lathe-concept.svg" alt="Representação conceitual de um torno com cabeçote, barramento e contraponto" width="600" height="420" loading="lazy" /><span class="micro">ILUSTRAÇÃO ESTÁTICA · SEM RENDERIZAÇÃO 3D</span></div>
          </div>
          <p class="dash-footnote">Valores sintéticos para apresentação. Nenhuma conexão com o equipamento.</p>
        </div>
      </div>
    </div>
  `,
})
export class Dashboard {
  readonly compact = input(false);
  protected readonly metrics = [
    { label: 'Rotação', value: '1.240', unit: 'rpm', width: '68%' },
    { label: 'Temperatura', value: '42,8', unit: '°C', width: '42%' },
    { label: 'Vibração', value: '0,32', unit: 'mm/s', width: '24%' },
  ];
}
