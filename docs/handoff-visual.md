# Handoff visual — proposta 01

A direção parte do Carbon White observado no protótipo: superfícies brancas/cinza, azul como acento, geometria reta, bordas de 1 px e profundidade obtida por camadas, sem blur ou sombras decorativas. O logo é usado sem alterações de proporção ou conteúdo.

| Token | Valor | Aplicação |
| --- | --- | --- |
| `--primary` | `#0f62fe` | CTAs, links, gráfico e ilustração |
| `--foreground` | `#161616` | Texto, faixa e barra do mockup |
| `--card` | `#f4f4f4` | Cards e camadas secundárias |
| `--background` | `#ffffff` | Base e superfície do dashboard |
| `--border` | `#e0e0e0` | Separação visual |
| `--text-secondary` | `#525252` | Descrições |
| `--blue-light` / `--blue-border` | `#edf5ff` / `#a6c8ff` | Blueprint e preview (paleta Carbon) |

**Tipografia:** IBM Plex Sans 300/400/500/600, IBM Plex Mono 400 para legendas técnicas e métricas. Fontes locais via Fontsource. Headlines leves, sem palavras em caixa alta além das etiquetas curtas. `h1` tem 40–62 px em desktop, 35–50 px em smartphone; títulos de seção, 30–42 px. Conteúdo ocupa até 1280 px; gutters 48/32/20 px. Tokens de espaçamento seguem a escala do protótipo.

**Composição:** hero dividido entre mensagem e blueprint do torno; faixa de transição escura; explicação editorial; sequência de quatro passos; cards com variação de cor e um card largo de representação digital; preview em superfície azul clara; matriz de tecnologias; espaço do Kai; CTA azul e footer branco. O desenho vetorial é conceitual e deve permanecer identificado como tal.

**Componentes compartilháveis:** `Header` (menu e acessibilidade), `Icon` (grade geométrica 32 px), `FeatureCard` (conteúdo via input), `Dashboard` (mockup independente), `Skeleton` (estrutura decorativa reutilizável). Não transportar os valores fixos do dashboard para a interface operacional como se fossem dados reais.

**Responsividade:** menu recolhido até 900 px; hero empilha; fluxo vira 2 e depois 1 coluna; cards de recursos viram 1 coluna em até 600 px; tecnologias preservam 2 colunas no mobile. Dashboard remove a barra lateral e empilha métricas/painéis. Âncoras consideram a altura do header.

**Skeleton:** placeholder intencional e sem shimmer. O bloco decorativo usa `aria-hidden`, mas a descrição “Espaço reservado” permanece acessível e visível. Não é um carregamento. Substituir pelo Kai original quando disponibilizado, preservando proporções e fisionomia.

**Interações:** apenas links reais para seções e menu. Foco azul de 3 px; no CTA azul, foco branco. `prefers-reduced-motion` remove scroll suave e transições. O preview não possui botões falsos ou leituras em tempo real.

**Pendências visuais:** aprovar textos; fornecer Kai; revisar autorização institucional; decidir se uma imagem real autorizada substituirá o SVG; avaliar os ajustes do shell que apareceram no protótipo durante esta execução. Screenshots em `docs/screenshots/` registram a proposta entregue.
