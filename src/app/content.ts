// Textos da proposta inicial. Revisar com o Victor antes de publicar.
export const CONTENT = {
  nav: [
    { label: 'Visão geral', id: 'visao-geral' },
    { label: 'Como funciona', id: 'como-funciona' },
    { label: 'Recursos', id: 'recursos' },
    { label: 'Tecnologias', id: 'tecnologias' },
  ],
  hero: {
    eyebrow: 'PROJETO INTEGRADOR · SENAI LIMEIRA',
    title: 'O mundo físico.',
    accent: 'Uma nova leitura.',
    description: 'Gêmeo Digital do Torno Convencional. Sensores, dados e uma representação digital para explorar o monitoramento industrial.',
  },
  steps: [
    { number: '01', icon: 'sensor', title: 'Captar', description: 'Sensores acompanham os sinais físicos do equipamento.', tech: 'ESP32 + sensores' },
    { number: '02', icon: 'connect', title: 'Conectar', description: 'As leituras percorrem um canal de comunicação entre máquina e sistema.', tech: 'MQTT / EMQX' },
    { number: '03', icon: 'process', title: 'Interpretar', description: 'Os dados são organizados para histórico e análise de comportamento.', tech: 'Go · TimescaleDB · ONNX' },
    { number: '04', icon: 'screen', title: 'Visualizar', description: 'A interface traduz os sinais em uma visão acessível da operação.', tech: 'Angular + Babylon.js' },
  ],
  features: [
    { icon: 'sensor', title: 'Os sinais, em perspectiva.', text: 'RPM, temperatura e vibração reunidos em um painel de telemetria.', status: 'Protótipo com dados simulados', className: 'telemetry' },
    { icon: 'chart', title: 'Uma operação com contexto.', text: 'Gráficos e histórico ajudam a explorar como os indicadores variam ao longo do tempo.', status: 'Visualização no protótipo', className: 'history' },
    { icon: 'process', title: 'Um olhar para as anomalias.', text: 'Detector local ONNX validado com dados sintéticos. A integração e a calibração com o torno são próximas etapas.', status: 'Integração em desenvolvimento', className: 'anomaly' },
    { icon: 'tool', title: 'Manutenção mais organizada.', text: 'Uma proposta de interface para agendar intervenções e acompanhar registros.', status: 'Fluxo demonstrativo', className: 'maintenance' },
  ],
  technologies: [
    { name: 'ESP32', layer: 'Aquisição', detail: 'Sensores e sinais físicos' },
    { name: 'MQTT / EMQX', layer: 'Comunicação', detail: 'Transporte das leituras' },
    { name: 'Go', layer: 'Processamento', detail: 'Serviços e telemetria' },
    { name: 'TimescaleDB', layer: 'Histórico', detail: 'Séries temporais' },
    { name: 'Python / ONNX', layer: 'Análise', detail: 'Inferência local' },
    { name: 'Angular', layer: 'Interface', detail: 'Visualização com Babylon.js' },
  ],
  provisional: {
    title: 'A identidade também ganha voz.',
    description: 'Este espaço está reservado para o Kai, o mascote do projeto. O recurso visual original será incorporado após sua disponibilização.',
    label: 'Composição provisória · Kai',
  },
} as const;
