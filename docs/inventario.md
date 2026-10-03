# Inventário e inspeção

Base da inspeção: protótipo irmão `lathe-prototype`, repositório Git independente. `test` não é a raiz do repositório original; a landing foi criada como projeto independente. O repositório do protótipo tem alterações externas não relacionadas, preservadas. A cópia local desta landing se chama `lathe-page`.

Antes da criação da landing, `test` continha `frontend`, `lathe-prototype` e `lathe-prototype-standby`. A pasta foi renomeada de `landing-page` para `lathe-page`, sem duplicar arquivos.

## Recursos visuais

Os caminhos de origem abaixo são relativos à raiz do protótipo, exceto onde indicado.

| Recurso / origem | Uso observado / finalidade | Reutilização / destino |
| --- | --- | --- |
| `public/assets/brand/logo-light.svg` | Logo LDT usado em `login-screen.html` e `fleet-selector.html` (o alt original dizia “senai digital”; leitura visual confirma LDT) | Cópia idêntica em `public/assets/brand/logo-light.svg`, header/footer com alt corrigido |
| `public/assets/brand/icon-light.svg` | Símbolo original da marca | Cópia idêntica em `public/assets/brand/icon-light.svg`, disponível para evolução |
| `public/assets/brand/favicon-light.svg` | Favicon original para fundo claro | Cópia idêntica em `public/assets/brand/favicon-light.svg`, documento HTML |
| `public/assets/brand/{logo,icon,favicon}-dark.svg` | Variantes para fundo escuro | Não copiadas; logo da landing está em fundo branco |
| `src/styles/theme.css` | Tokens Carbon White, raios zero, bordas e ausência de sombras | Valores reproduzidos em `src/styles/tokens.css`; arquivo original não copiado nem editado |
| `src/styles/fonts.css` | IBM Plex Sans/Mono via Google Fonts; Atkinson é opção do protótipo | Mesmas famílias Plex, servidas por Fontsource local; Atkinson não necessária nesta versão |
| `src/app/shared/icon/icon.ts` | Carbon, grade 32 px | Linguagem geométrica reproduzida com poucos traços próprios em `components/icon.ts`; sem importar catálogo |
| Foto externa do login / vídeo Pexels do twin | Recursos ilustrativos externos do protótipo | Não copiados; proveniência para publicação não foi validada |
| Kai / mascote | Nenhum arquivo ou referência correspondente encontrado em `test` e `dev-ml/frontend`, excluindo dependências/builds | Ausente; skeleton explícito, sem personagem inventado |
| `lathe-concept.svg` | Novo desenho estático, inspirado nos conjuntos de `digital-twin.ts` (barramento, cabeçote, carro, ferramenta, contraponto e peça) | Criado em `public/assets/lathe-concept.svg`; não é modelo CAD nem representação exata do torno real |

Os três SVG originais copiados foram comparados por SHA-256 com suas origens: conteúdo idêntico. Não houve movimentação dos arquivos de marca. Não foram encontrados arquivos de fonte locais nos projetos inspecionados.

## Capacidades e evidência

| Capacidade | Evidência local | Como aparece na landing |
| --- | --- | --- |
| Telemetria e gráficos | `README.md`, `components/lathe-dashboard/`, `components/lathe-charts/`; README identifica telemetria simulada | Protótipo com dados simulados; prévia estática |
| Visualização 3D | `components/digital-twin/digital-twin.ts`, Babylon.js e criação procedural de meshes | Modelo interativo no protótipo; landing exibe SVG conceitual |
| Histórico e manutenção | `README.md`, `components/maintenance-scheduler/` e dados mock em `core/data/` | Visualização no protótipo / fluxo demonstrativo |
| Detecção de anomalias | documentação do serviço ML, seções de ONNX, treino sintético e contrato | Detector local validado com sintéticos; integração e calibração real pendentes |
| Sensores → MQTT/EMQX → Go/TimescaleDB → interface | Arquitetura fornecida na tarefa; stack frontend confirmada em `package.json`; processamento/séries temporais descritos no README ML | Arquitetura conceitual, sem afirmar validação ponta a ponta |

Não houve execução do hardware, backend, banco ou serviço ML. A evidência de ML é documental; os testes desta entrega validam exclusivamente a landing.

## Mudanças simultâneas preservadas

Durante a implementação, surgiram modificações em `src/app/components/fleet-selector/fleet-selector.html` e `src/styles/theme.css` no protótipo: o diff acrescentava cores de shell azul petróleo. Nenhuma ferramenta desta entrega escreveu nesses arquivos; as alterações externas foram preservadas. A identidade da landing parte dos tokens Carbon lidos na inspeção inicial. Ajustes adicionais para refletir o novo shell podem ser avaliados pelo Victor.
