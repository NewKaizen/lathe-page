# Validação — 03/10/2026

## Resultados executados

| Verificação | Resultado |
| --- | --- |
| Diretório independente no destino solicitado | Confirmado: `lathe-page` em `test` |
| Instalação de dependências | Concluída; lockfile gerado |
| `npm run build` após os últimos ajustes | Aprovado, saída `dist/lathe-page/browser` |
| Bundle inicial de produção | 166,67 kB; transferência estimada pelo Angular 48,41 kB (JS + CSS; assets/fontes não incluídos nesse total) |
| `npm run lint` após os últimos ajustes | Aprovado, sem diagnósticos |
| `npm test` | 4 testes aprovados, Chromium / Playwright 1.63.0 |
| Desktop 1440 px, tablet 768 px, smartphone 375 px | Testados com viewport de 1000 px de altura e captura da página completa |
| Rolagem horizontal | Ausente nas três larguras testadas |
| Menu mobile | Abertura, estado expandido, Escape/foco e fechamento após navegação aprovados em 768 e 375 px |
| Âncoras / CTAs | Destinos existentes; navegação e posição abaixo do header verificados |
| Assets / fontes | Imagens carregadas, IBM Plex local carregada e nenhuma requisição externa observada |
| Console / runtime | Nenhum erro de console ou exceção de página observado nas três larguras |
| Acessibilidade básica | Um h1, idioma pt-BR, link de salto operado por teclado, rótulos da demonstração e skeleton decorativo oculto verificados |
| Movimento reduzido | Scroll suave desativado ao emular `prefers-reduced-motion: reduce` |
| Revisão visual | Capturas desktop/tablet/mobile inspecionadas; logo LDT original, Plex, azul Carbon, cantos retos e layouts empilhados confirmados |
| Cópias da identidade | Logo, símbolo e favicon comparados por SHA-256: idênticos aos originais |

URL efetivamente acessada nos testes: **http://127.0.0.1:4300/**. O servidor de desenvolvimento foi mantido em execução para revisão local. Build de produção compilado, mas a suíte de navegador utiliza o servidor de desenvolvimento; não equivale a validação de hospedagem.

## Capturas

- `screenshots/landing-1440.png`, `screenshots/landing-768.png`, `screenshots/landing-375.png`: página inteira.
- `screenshots/hero-1440.png`, `screenshots/hero-768.png`, `screenshots/hero-375.png`: primeira viewport.

## Correções durante a validação

A primeira tentativa de teste não lançou o navegador porque o Chromium correspondente à versão do Playwright não estava instalado. Foi instalado e os testes repetidos. Na primeira execução com navegador, o seletor de teste do menu deixou de localizá-lo ao mudar seu texto de “Menu” para “Fechar”; o teste passou a usar o vínculo estável `aria-controls`. A suíte final passou nas quatro verificações. A inspeção visual também confirmou que o logo representa LDT, corrigindo o alt herdado da referência (“senai digital”) apenas na landing.

O npm reportou scripts opcionais de instalação bloqueados; build, lint, servidor e testes funcionaram sem habilitá-los. Não foi necessário alterar políticas ou configurações globais.

## Preservação e limites

Não foram editados o protótipo, os arquivos originais da identidade, o backend, o banco ou o ML. Não foram lidas variáveis de ambiente ou usados dados reais. Não houve commit, push, merge, PR ou publicação. As alterações simultâneas surgidas no protótipo estão registradas no inventário e permanecem preservadas. A alteração previamente existente de workflow em `dev-ml` também permanece.

Os testes usam Chromium, sem afirmar cobertura Safari/Firefox, auditoria WCAG completa ou desempenho medido em dispositivos físicos. O estado do backend/ML foi analisado por documentação local, sem reexecutar aqueles subsistemas. A arquitetura completa com hardware não foi validada por esta entrega.

## Pendências justificadas

- Kai original ausente: espaço provisório explícito no lugar do personagem.
- Aprovação editorial e institucional, recurso visual definitivo e eventual adaptação ao shell atualizado: continuidade do Victor.
- Telemetria real, integração do ML, câmera e 3D interativo: fora do escopo da landing estática.

A versão inicial está pronta para revisão local da sprint, com conteúdo demonstrativo e pendências identificados.
