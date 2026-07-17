# Reposicionamento do site Prática Solutions

## Contexto e objetivo

O site atual (`index.html`) posiciona a Prática Solutions como uma empresa de TI corporativa
(infraestrutura, servidores, redes, segurança da informação, suporte técnico) que também faz
desenvolvimento de sites. O negócio quer reposicionar o site para focar em 4 pilares apenas:

1. **Manutenção** (de computadores e notebooks)
2. **Limpeza preventiva** (limpeza física de PCs/notebooks)
3. **Criação de sites**
4. **Sistemas personalizados**

Referência de padrão visual/estrutural: https://infotechcampinas.com.br/ — hero direto, 4 cards
principais com foto real por pilar, grid secundário de serviços extras, portfólio, footer.
Não é para copiar o layout pixel a pixel, só o padrão (cards fotográficos por pilar +
grid secundário), mantendo a identidade visual (paleta azul, logo, tipografia Inter) já
existente na Prática Solutions.

Toda menção a servidor, rede/cabeamento estruturado, segurança da informação, suporte técnico
remoto/presencial, nuvem e SLA/monitoramento de infraestrutura sai do site.

## Escopo

### Removido

- Seção **Ferramentas Interativas** inteira (teste de velocidade de rede + simulador de ROI de TI),
  incluindo o JS associado (`speed-test-btn` e handlers, `roi-input` e handlers).
- Seção **Diferenciais** inteira (painel de status servidor/firewall/backup + grid de métricas
  99.9%/24x7/SLA/governança).
- Card "Manutenção de Servidores e Computadores", "Estruturação de Redes e Cabeamento
  Estruturado", "Segurança da Informação", "Suporte Presencial e Leva-e-Traz" (motivo: enquadrado
  como suporte), "Suporte Técnico Remoto", "Soluções em Nuvem" — todos saem da seção Serviços.
- Card "Manutenção de Computadores e Notebooks" dentro da seção `#pcs` (fica redundante com o
  novo pilar "Manutenção").
- `assets/img/servidor.jpg` (fica sem nenhum uso).
- Qualquer texto de "infraestrutura de TI", "governança de TI", "auditoria técnica", "SLA",
  "monitoramento 24/7", "firewall" em hero, sobre, CTA final, footer, meta tags e JSON-LD.

### Mantido

- Estrutura geral de página única (single-page), header fixo com nav + WhatsApp CTA, animação
  reveal-on-scroll, menu mobile.
- Seção Sobre (reescrita, ver abaixo).
- Seção Processo ("Do briefing à publicação") — continua válida para sites/sistemas.
- Seção `#pcs`, renomeada para focar em montagem sob medida (Corporativo + Gamer), com os 2 cards
  que sobram, fundo continua `pc-gamer.jpg`.
- Seção Portfólio, sem mudanças de conteúdo.
- CTA final e footer, com copy ajustada.
- Identidade visual: paleta (`--accent` azul), logo, tipografia Inter, componente `.card` existente
  (para o grid secundário) e para os process-steps.

### Novo

- **4 pilares em destaque** na seção Serviços, em grid 2x2 (1 coluna no mobile), cada um com:
  foto de topo, título, descrição curta, sem CTA individual (o CTA fica no `.section-cta` da seção,
  reaproveitando o padrão já usado em `#pcs`).
  - Manutenção → `assets/img/manutencao.jpg` (já existe)
  - Limpeza preventiva → `assets/img/limpeza.jpg` (baixada do Pexels, licença livre, sem
    atribuição obrigatória — foto de alguém limpando gabinete com ar comprimido)
  - Criação de sites → `assets/img/criacao-sites.jpg` (baixada do Pexels, licença livre — sketch
    de wireframe em caderno)
  - Sistemas personalizados → `assets/img/codigo.jpg` (já existe — editor de código)
- Novo componente CSS `.pillar-grid` / `.pillar-card` (foto + conteúdo), consistente com a
  linguagem visual de `.card` (cantos arredondados, hover com elevação e linha de destaque no
  topo), mas com imagem de topo em vez de ícone.

### Decisão de estrutura: sem grid secundário na seção Serviços

A seção Serviços fica só com os 4 pilares em destaque (sem grid secundário abaixo). Montagem de PC
(Corporativo/Gamer) continua exclusivamente na seção `#pcs`, mais abaixo na página — evitando duas
seções diferentes falando do mesmo assunto (montagem).

## Conteúdo por seção

### Hero

- Eyebrow: `Manutenção, Limpeza e Desenvolvimento Web · Americana/SP`
- H1: reescrito em torno de "computadores sempre limpos e funcionando" + "sites e sistemas sob
  medida", sem menção a infraestrutura/segurança corporativa.
- Lead: duas frentes — cuidado físico com equipamentos (manutenção/limpeza preventiva) e
  desenvolvimento web sob medida (sites/sistemas).
- hero-stats (4 pills, sem métricas percentuais): "Manutenção e limpeza preventiva",
  "Sites e sistemas sob medida", "Atendimento local em Americana/SP", "Orçamento sem compromisso".

### Sobre

- Copy reescrita: tira "governança de TI"/"infraestrutura tratada como custo"; foca em cuidar do
  equipamento do cliente (manutenção/limpeza) e em entregar sites/sistemas sob medida, sem
  burocracia.
- check-list (4 itens) trocada para algo como: "Manutenção preventiva, não só corretiva",
  "Limpeza que evita superaquecimento e perda de desempenho", "Sites e sistemas sob medida para o
  seu negócio", "Atendimento local, próximo e ágil".
- Painel lateral (`about-panel`) vira qualitativo, 4 linhas sem %/tempo, ex: "Atendimento" →
  "Local, em Americana/SP", "Manutenção" → "Preventiva e corretiva", "Desenvolvimento" → "Sites e
  sistemas sob medida", "Orçamento" → "Sem compromisso".
- Fundo da seção continua `manutencao.jpg` (ainda faz sentido, é imagem de reparo/manutenção).

### Serviços (4 pilares, ver Escopo > Novo)

### Processo

- Sem mudança de conteúdo (já fala de briefing → design → dev → testes → publicação, aplicável a
  sites/sistemas).

### `#pcs` (Montagem)

- Título: manter foco em montagem sob medida (ajustar `<h2>` se necessário para não repetir
  "sempre no ponto certo", que já ficou em outro lugar — mas texto atual serve, revisar só se
  ficar redundante com Sobre).
- Cards: remove "Manutenção de Computadores e Notebooks" (redundante). Mantém "PC Corporativo sob
  Medida" e "PC Gamer de Alta Performance".

### Portfólio

- Sem mudanças.

### CTA Final

- Título/parágrafo trocam "elevar o nível da infraestrutura de TI" / "auditoria técnica gratuita"
  por algo como "Pronto para colocar seu site no ar ou dar uma manutenção completa no seu PC?" +
  "Solicite um orçamento sem compromisso".
- Fundo continua `codigo.jpg`.

### Footer

- Tagline troca "Infraestrutura de TI e suporte técnico corporativo em Americana/SP" por algo como
  "Manutenção, limpeza preventiva e desenvolvimento web em Americana/SP".
- Nav links do footer seguem os mesmos anchors da nav principal (ajustar se algum anchor mudar de
  nome).

### `<head>` / SEO / JSON-LD

- `<title>` e meta description trocam "TI Corporativa" por algo como "Manutenção de Computadores e
  Desenvolvimento de Sites em Americana/SP".
- Open Graph description ajustada no mesmo sentido.
- `hasOfferCatalog.itemListElement` no JSON-LD passa a listar só: Manutenção de Computadores e
  Notebooks, Limpeza Preventiva de Computadores, Desenvolvimento de Sites, Sistemas Web
  Personalizados, Montagem de PCs sob Medida — removendo os itens de servidor/rede/segurança/
  suporte/nuvem.

## Componentes técnicos

- **HTML**: editar `index.html` nas seções Hero, Sobre, Serviços, `#pcs`, CTA Final, Footer,
  `<head>`. Remover completamente as seções Ferramentas Interativas e Diferenciais.
- **CSS** (`css/style.css`): adicionar `.pillar-grid` (grid 2x2 responsivo, 1 coluna abaixo de
  760px) e `.pillar-card` (foto de topo com `border-radius` só no topo, padding no corpo,
  reaproveitando cores/hover do `.card` existente). Remover regras específicas de
  `.tools-grid`/`.speed-*`/`.roi-*` (mortas) e de `#diferenciais`/`.metrics-grid`/`.status-*`
  (mortas). Trocar o `background-image` de `#diferenciais` (removida) — não aplicável, seção
  inteira sai.
- **JS** (`js/script.js`): remover o bloco do teste de velocidade (`speed-test-btn` e tudo
  relacionado) e o bloco do simulador de ROI (`roi-input` e tudo relacionado) e o ticker de status
  (`status-time`) já que a seção Diferenciais some. Mantém: scroll header, menu mobile,
  reveal-on-scroll, footer year.
- **Assets**: já baixadas `assets/img/limpeza.jpg` e `assets/img/criacao-sites.jpg` (Pexels,
  licença livre, sem atribuição obrigatória). Apagar `assets/img/servidor.jpg` por ficar sem uso.

## Fora de escopo

- Não migrar para múltiplas páginas (o site continua single-page, só o infotech usa nav
  multi-página — não é isso que foi pedido, só o padrão visual de cards por pilar).
- Não adicionar prova social (avaliações Google) — não foi pedido e não há dados reais disponíveis
  agora.
- Não alterar logo, paleta de cores ou fonte.
