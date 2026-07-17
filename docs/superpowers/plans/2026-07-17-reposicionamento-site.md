# Reposicionamento do site Prática Solutions — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Reposicionar o site institucional da Prática Solutions (`index.html` / `css/style.css` / `js/script.js`) para focar em 4 pilares — Manutenção, Limpeza Preventiva, Criação de Sites, Sistemas Personalizados — removendo toda linguagem de servidor/rede/segurança da informação/suporte técnico/nuvem, seguindo o padrão visual de cards fotográficos por pilar (referência: infotechcampinas.com.br).

**Architecture:** Site estático single-page, sem build step nem framework. Todas as mudanças são edições diretas em 3 arquivos (`index.html`, `css/style.css`, `js/script.js`) mais o descarte de um asset não usado (`assets/img/servidor.jpg`). Duas fotos novas (`assets/img/limpeza.jpg`, `assets/img/criacao-sites.jpg`, Pexels, licença livre) já foram baixadas.

**Tech Stack:** HTML5, CSS puro (custom properties), JS vanilla (IIFE), sem dependências.

## Global Constraints

- Não usar as palavras/temas: servidor, rede/cabeamento estruturado, segurança da informação, suporte técnico (remoto ou presencial), nuvem, SLA, firewall, monitoramento de infraestrutura, governança de TI — em nenhuma seção, meta tag ou JSON-LD.
- Manter a identidade visual atual: paleta de cores (`--accent: #2563eb` e variáveis relacionadas), logo, tipografia Inter, animação `.reveal`, header fixo, menu mobile.
- Manter o site como página única (single-page); não criar páginas novas.
- Este diretório **não é um repositório git** (verificado no ambiente) — os passos não incluem `git commit`. Cada tarefa termina com uma verificação (grep/Select-String) em vez de commit.
- Verificação final (Task 9) é manual, abrindo `index.html` no navegador — não há framework de testes neste projeto.

---

### Task 1: `<head>` — título, meta tags e JSON-LD

**Files:**
- Modify: `index.html:6-16` (title, description, OG tags)
- Modify: `index.html:56-62` (JSON-LD `hasOfferCatalog.itemListElement`)

**Interfaces:** Nenhuma — mudança de conteúdo textual isolada, sem dependência de outras tarefas.

- [ ] **Step 1: Atualizar título e meta description**

Em `index.html`, substituir:

```html
<title>Prática Solutions | TI Corporativa e Desenvolvimento de Sites em Americana/SP</title>
<meta name="description" content="Infraestrutura de TI, redes e segurança da informação + desenvolvimento de sites e sistemas web sob medida para empresas em Americana/SP. Suporte técnico ágil e preventivo.">
```

por:

```html
<title>Prática Solutions | Manutenção de Computadores e Desenvolvimento de Sites em Americana/SP</title>
<meta name="description" content="Manutenção e limpeza preventiva de computadores e notebooks + criação de sites e sistemas web sob medida para empresas e pessoas em Americana/SP.">
```

- [ ] **Step 2: Atualizar Open Graph**

Substituir:

```html
<meta property="og:title" content="Prática Solutions | TI Corporativa e Desenvolvimento de Sites em Americana/SP">
<meta property="og:description" content="Duas frentes, um único parceiro: infraestrutura de TI e segurança que não falham, e sites/sistemas web sob medida. Americana/SP.">
```

por:

```html
<meta property="og:title" content="Prática Solutions | Manutenção de Computadores e Desenvolvimento de Sites em Americana/SP">
<meta property="og:description" content="Duas frentes, um único parceiro: manutenção e limpeza preventiva de computadores, e sites/sistemas web sob medida. Americana/SP.">
```

- [ ] **Step 3: Atualizar o catálogo de serviços no JSON-LD**

Substituir:

```html
    "itemListElement": [
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Infraestrutura de TI e Manutenção de Servidores" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Redes Estruturadas e Cabeamento" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Segurança da Informação" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Suporte Técnico e Helpdesk" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Desenvolvimento de Sites e Sistemas Web" } }
    ]
```

por:

```html
    "itemListElement": [
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Manutenção de Computadores e Notebooks" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Limpeza Preventiva de Computadores" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Criação de Sites" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Sistemas Web Personalizados" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Montagem de PCs sob Medida" } }
    ]
```

- [ ] **Step 4: Verificar**

Run (PowerShell):

```powershell
Select-String -Path index.html -Pattern "TI Corporativa|Infraestrutura de TI|Redes Estruturadas|Segurança da Informação|Suporte Técnico e Helpdesk"
```

Expected: nenhum resultado (sem output).

```powershell
Select-String -Path index.html -Pattern "Manutenção de Computadores e Notebooks|Limpeza Preventiva de Computadores"
```

Expected: 1 ocorrência de cada (dentro do JSON-LD).

---

### Task 2: Copy do WhatsApp CTA + Hero

**Files:**
- Modify: `index.html:85` (header nav CTA href)
- Modify: `index.html:111-134` (hero: eyebrow, h1, lead, hero-actions href, hero-stats)

**Interfaces:** Nenhuma dependência de outras tarefas.

- [ ] **Step 1: Trocar a mensagem padrão do WhatsApp (2 ocorrências: header e hero)**

Usar `replace_all` (a mesma URL aparece idêntica no botão do header e no botão principal do hero). Substituir todas as ocorrências de:

```
https://wa.me/5519994585971?text=Ol%C3%A1!%20Gostaria%20de%20solicitar%20um%20or%C3%A7amento%20de%20TI.
```

por:

```
https://wa.me/5519994585971?text=Ol%C3%A1!%20Gostaria%20de%20solicitar%20um%20or%C3%A7amento%20de%20manuten%C3%A7%C3%A3o%20ou%20site.
```

- [ ] **Step 2: Reescrever eyebrow, h1 e lead do hero**

Substituir:

```html
      <span class="eyebrow reveal">TI Corporativa &amp; Desenvolvimento Web · Americana/SP</span>
      <h1 class="reveal">Infraestrutura de TI e Segurança <span class="grad-text">que não falham</span>. Sites e Sistemas sob medida que fazem sua empresa crescer.</h1>
      <p class="hero-lead reveal">
        Atuamos em duas frentes para o seu negócio: manutenção preventiva, redes estruturadas e
        segurança da informação para empresas que não podem parar — e desenvolvimento de sites e
        sistemas web sob medida para quem quer vender e operar melhor. Um único parceiro de tecnologia.
      </p>
```

por:

```html
      <span class="eyebrow reveal">Manutenção, Limpeza e Desenvolvimento Web · Americana/SP</span>
      <h1 class="reveal">Computador sempre <span class="grad-text">limpo e no ponto certo</span>. Sites e Sistemas sob medida que fazem sua empresa crescer.</h1>
      <p class="hero-lead reveal">
        Atuamos em duas frentes para você e sua empresa: manutenção preventiva e corretiva, com
        limpeza física que evita superaquecimento e perda de desempenho — e desenvolvimento de
        sites e sistemas web sob medida para quem quer vender e operar melhor. Um único parceiro de tecnologia.
      </p>
```

- [ ] **Step 3: Reescrever hero-stats**

Substituir:

```html
      <div class="hero-stats reveal">
        <div class="hero-stat"><span class="dot"></span>Monitoramento 24/7</div>
        <div class="hero-stat"><span class="dot"></span>SLA ágil de atendimento</div>
        <div class="hero-stat"><span class="dot"></span>Atendimento local em Americana/SP</div>
        <div class="hero-stat"><span class="dot"></span>Sites e sistemas sob medida</div>
      </div>
```

por:

```html
      <div class="hero-stats reveal">
        <div class="hero-stat"><span class="dot"></span>Manutenção e limpeza preventiva</div>
        <div class="hero-stat"><span class="dot"></span>Sites e sistemas sob medida</div>
        <div class="hero-stat"><span class="dot"></span>Atendimento local em Americana/SP</div>
        <div class="hero-stat"><span class="dot"></span>Orçamento sem compromisso</div>
      </div>
```

- [ ] **Step 4: Verificar**

```powershell
Select-String -Path index.html -Pattern "Monitoramento 24/7|SLA ágil|Infraestrutura de TI e Segurança|de%20TI\."
```

Expected: nenhum resultado.

```powershell
Select-String -Path index.html -Pattern "manuten%C3%A7%C3%A3o%20ou%20site"
```

Expected: 2 ocorrências (header e hero).

---

### Task 3: Reescrever a seção Sobre

**Files:**
- Modify: `index.html:139-177`

**Interfaces:** Nenhuma dependência de outras tarefas. Não altera o background da seção (`manutencao.jpg` continua fazendo sentido).

- [ ] **Step 1: Reescrever título, lead e check-list**

Substituir:

```html
        <span class="section-tag">Sobre a Prática Solutions</span>
        <h2>Governança de TI e suporte que antecipa problemas, não apenas reage a eles.</h2>
        <p class="section-lead">
          A Prática Solutions nasceu para resolver um problema comum nas empresas de Americana e região:
          infraestrutura de TI tratada como custo, não como parte estratégica do negócio. Trabalhamos com
          manutenção preventiva, monitoramento contínuo e soluções objetivas, sem burocracia e sem enrolação.
        </p>
        <ul class="check-list">
          <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg> Governança de TI orientada a resultado</li>
          <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg> Suporte preventivo, não apenas corretivo</li>
          <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg> Soluções práticas, sem complexidade desnecessária</li>
          <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg> Atendimento local, próximo e ágil</li>
        </ul>
```

por:

```html
        <span class="section-tag">Sobre a Prática Solutions</span>
        <h2>Cuidado de verdade com o seu equipamento, do hardware ao software.</h2>
        <p class="section-lead">
          A Prática Solutions nasceu para resolver um problema comum: computadores e notebooks tratados
          como descartáveis, sem manutenção nem limpeza preventiva — e sites ou sistemas genéricos que não
          atendem ao negócio. Trabalhamos com manutenção, limpeza preventiva e desenvolvimento sob medida,
          sem burocracia e sem enrolação.
        </p>
        <ul class="check-list">
          <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg> Manutenção preventiva, não só corretiva</li>
          <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg> Limpeza que evita superaquecimento e perda de desempenho</li>
          <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg> Sites e sistemas sob medida para o seu negócio</li>
          <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg> Atendimento local, próximo e ágil</li>
        </ul>
```

- [ ] **Step 2: Trocar o painel de números por conteúdo qualitativo**

Substituir:

```html
      <div class="about-panel reveal">
        <div class="panel-line"></div>
        <div class="panel-row">
          <span class="panel-label">Disponibilidade</span>
          <span class="panel-value">99.9%</span>
        </div>
        <div class="panel-row">
          <span class="panel-label">Monitoramento</span>
          <span class="panel-value">24/7</span>
        </div>
        <div class="panel-row">
          <span class="panel-label">Resposta SLA</span>
          <span class="panel-value">&lt; 2h</span>
        </div>
        <div class="panel-row">
          <span class="panel-label">Atuação</span>
          <span class="panel-value">Americana/SP e região</span>
        </div>
      </div>
```

por:

```html
      <div class="about-panel reveal">
        <div class="panel-line"></div>
        <div class="panel-row">
          <span class="panel-label">Atendimento</span>
          <span class="panel-value">Local, em Americana/SP</span>
        </div>
        <div class="panel-row">
          <span class="panel-label">Manutenção</span>
          <span class="panel-value">Preventiva e corretiva</span>
        </div>
        <div class="panel-row">
          <span class="panel-label">Desenvolvimento</span>
          <span class="panel-value">Sites e sistemas sob medida</span>
        </div>
        <div class="panel-row">
          <span class="panel-label">Orçamento</span>
          <span class="panel-value">Sem compromisso</span>
        </div>
      </div>
```

- [ ] **Step 3: Verificar**

```powershell
Select-String -Path index.html -Pattern "Governança de TI|Disponibilidade|99.9%|Resposta SLA"
```

Expected: nenhum resultado.

```powershell
Select-String -Path index.html -Pattern "Cuidado de verdade com o seu equipamento"
```

Expected: 1 ocorrência.

---

### Task 4: Componente CSS `.pillar-grid` / `.pillar-card`

**Files:**
- Modify: `css/style.css` (inserir logo após o bloco `.card` existente, antes do comentário `/* ---------- Ferramentas Interativas ---------- */`)

**Interfaces:**
- Produces: classes `.pillar-grid`, `.pillar-card`, `.pillar-photo`, `.pillar-card-body` — consumidas pela Task 5.

- [ ] **Step 1: Inserir o novo componente**

Em `css/style.css`, localizar o fim do bloco de Serviços (linha que contém `.card p { font-size: 0.94rem; }`) e inserir logo abaixo, antes de `/* ---------- Ferramentas Interativas ---------- */`:

```css
/* ---------- Pilares (Serviços) ---------- */
.pillar-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;
}
@media (min-width: 640px) {
  .pillar-grid { grid-template-columns: repeat(2, 1fr); }
}

.pillar-card {
  position: relative;
  background: var(--bg-elevated);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  overflow: hidden;
  box-shadow: 0 1px 3px rgba(15, 23, 42, 0.04);
  transition: transform var(--ease), border-color var(--ease), box-shadow var(--ease);
}
.pillar-card:hover {
  transform: translateY(-6px);
  border-color: var(--border-strong);
  box-shadow: 0 16px 40px -20px rgba(var(--accent-rgb), 0.35);
}

.pillar-photo {
  width: 100%;
  height: 200px;
  object-fit: cover;
  display: block;
}

.pillar-card-body { padding: 26px 28px 30px; }
.pillar-card-body h3 { margin-bottom: 10px; }
.pillar-card-body p { font-size: 0.94rem; }
```

- [ ] **Step 2: Verificar**

```powershell
Select-String -Path css/style.css -Pattern "\.pillar-card \{"
```

Expected: 1 ocorrência.

---

### Task 5: Reconstruir a seção Serviços com os 4 pilares

**Files:**
- Modify: `index.html:180-278` (seção `id="servicos"` inteira)

**Interfaces:**
- Consumes: `.pillar-grid`, `.pillar-card`, `.pillar-photo`, `.pillar-card-body` (Task 4).

- [ ] **Step 1: Trocar o cabeçalho da seção**

Substituir:

```html
      <div class="section-head reveal">
        <span class="section-tag">Portfólio</span>
        <h2>Soluções completas de TI, em um único parceiro</h2>
        <p class="section-lead">Do cabeamento à nuvem: tudo o que sua operação precisa para rodar sem interrupções.</p>
      </div>
```

por:

```html
      <div class="section-head reveal">
        <span class="section-tag">O que fazemos</span>
        <h2>Manutenção, limpeza e desenvolvimento sob medida</h2>
        <p class="section-lead">Cuidamos do seu equipamento e construímos o site ou sistema que o seu negócio precisa.</p>
      </div>
```

- [ ] **Step 2: Trocar os 7 cards de `.services-grid` pelos 4 pilares em `.pillar-grid`**

Substituir todo o bloco (do `<div class="services-grid">` de abertura até o `</div>` de fechamento correspondente, que contém os 7 `<article class="card reveal">`) por:

```html
      <div class="pillar-grid">

        <article class="pillar-card reveal">
          <img src="assets/img/manutencao.jpg" alt="Técnico realizando manutenção em componente eletrônico" class="pillar-photo">
          <div class="pillar-card-body">
            <h3>Manutenção</h3>
            <p>Diagnóstico, manutenção preventiva e corretiva de computadores e notebooks, reduzindo falhas e prolongando a vida útil dos equipamentos.</p>
          </div>
        </article>

        <article class="pillar-card reveal">
          <img src="assets/img/limpeza.jpg" alt="Limpeza interna de computador com ar comprimido" class="pillar-photo">
          <div class="pillar-card-body">
            <h3>Limpeza Preventiva</h3>
            <p>Limpeza interna e externa de PCs e notebooks, remoção de poeira e troca de pasta térmica — computador roda mais frio, silencioso e dura mais.</p>
          </div>
        </article>

        <article class="pillar-card reveal">
          <img src="assets/img/criacao-sites.jpg" alt="Esboço de wireframe de site em caderno" class="pillar-photo">
          <div class="pillar-card-body">
            <h3>Criação de Sites</h3>
            <p>Sites institucionais e landing pages rápidos, responsivos e profissionais, prontos para apresentar seu negócio e converter visitantes em clientes.</p>
          </div>
        </article>

        <article class="pillar-card reveal">
          <img src="assets/img/codigo.jpg" alt="Tela de editor de código" class="pillar-photo">
          <div class="pillar-card-body">
            <h3>Sistemas Personalizados</h3>
            <p>Sistemas web sob medida para as regras do seu negócio, do levantamento de requisitos à publicação.</p>
          </div>
        </article>

      </div>
```

- [ ] **Step 3: Verificar**

```powershell
Select-String -Path index.html -Pattern "Manutenção de Servidores e Computadores|Estruturação de Redes|Segurança da Informação|Suporte Presencial|Suporte Técnico Remoto|Soluções em Nuvem"
```

Expected: nenhum resultado.

```powershell
Select-String -Path index.html -Pattern "class=\"pillar-card reveal\""
```

Expected: 4 ocorrências.

---

### Task 6: Reduzir a seção `#pcs` (só Montagem) e renomear o item de nav

**Files:**
- Modify: `index.html:81` (nav do header)
- Modify: `index.html:428-486` (seção `#pcs`)
- Modify: `index.html:614` (nav do footer)
- Modify: `css/style.css` (após o bloco `#pcs`, ~linha 542)

**Interfaces:** Nenhuma dependência de outras tarefas (independente de Task 5, ainda que ambas toquem a página).

- [ ] **Step 1: Renomear o link de navegação "PCs" para "Montagem" (header e footer)**

Em `index.html`, substituir (aparece 2 vezes, uma no header e uma no footer, com `replace_all`):

```html
      <a href="#pcs" class="nav-link">PCs</a>
```

Atenção: o footer usa a mesma âncora mas sem a classe `nav-link`. Editar cada ocorrência individualmente:

Header (linha 81) — substituir:
```html
      <a href="#pcs" class="nav-link">PCs</a>
```
por:
```html
      <a href="#pcs" class="nav-link">Montagem</a>
```

Footer (linha 614) — substituir:
```html
      <a href="#pcs">PCs</a>
```
por:
```html
      <a href="#pcs">Montagem</a>
```

- [ ] **Step 2: Trocar o cabeçalho da seção `#pcs`**

Substituir:

```html
      <div class="section-head reveal">
        <span class="section-tag">Manutenção e Montagem de PCs</span>
        <h2>Seu computador <span class="grad-text">sempre no ponto certo</span></h2>
        <p class="section-lead">Manutenção de desktops, notebooks e impressoras, e montagem de PCs sob medida — para a empresa ou para o setup gamer dos sonhos.</p>
      </div>
```

por:

```html
      <div class="section-head reveal">
        <span class="section-tag">Montagem de PCs sob Medida</span>
        <h2>Seu próximo computador, <span class="grad-text">montado sob medida</span></h2>
        <p class="section-lead">Montagem de PCs sob medida — para a empresa ou para o setup gamer dos sonhos.</p>
      </div>
```

- [ ] **Step 3: Remover o card "Manutenção de Computadores e Notebooks" (redundante com o pilar Manutenção)**

Remover este bloco inteiro (primeiro `<article>` dentro de `.services-grid` da seção `#pcs`):

```html
        <article class="card reveal">
          <div class="card-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
              <rect x="2.5" y="4" width="19" height="12" rx="1.5"></rect>
              <line x1="8" y1="20" x2="16" y2="20"></line>
              <line x1="12" y1="16" x2="12" y2="20"></line>
              <circle cx="12" cy="10" r="2.3"></circle>
              <path d="M12 6.2v1M12 12.8v1M15.8 10h-1M9.2 10h-1M14.7 7.3l-.7.7M10 12l-.7.7M14.7 12.7l-.7-.7M10 8l-.7-.7"></path>
            </svg>
          </div>
          <h3>Manutenção de Computadores e Notebooks</h3>
          <p>Diagnóstico, limpeza e manutenção preventiva, corretiva e detectiva de desktops, notebooks e impressoras, com atendimento presencial ou leva e traz.</p>
        </article>

```

(Os cards "PC Corporativo sob Medida" e "PC Gamer de Alta Performance" continuam sem alteração.)

- [ ] **Step 4: Ajustar o grid de 2 cards para não sobrar coluna vazia em telas largas**

Em `css/style.css`, logo após o bloco `#pcs .card-icon { ... }` (fim do bloco `#pcs`), adicionar:

```css
#pcs .services-grid { max-width: 780px; }
@media (min-width: 640px) {
  #pcs .services-grid { grid-template-columns: repeat(2, 1fr); }
}
```

- [ ] **Step 5: Verificar**

```powershell
Select-String -Path index.html -Pattern "Manutenção de Computadores e Notebooks"
```

Expected: nenhum resultado (o card saiu; a frase só existia aqui, já que o JSON-LD usa o texto diferente "Manutenção de Computadores e Notebooks" também — checar que restam 0, já que a Task 1 usa essa frase no JSON-LD).

> Nota: a Task 1 introduz a frase "Manutenção de Computadores e Notebooks" no JSON-LD. Se essa tarefa rodar depois da Task 1, o grep acima vai encontrar 1 ocorrência (a do JSON-LD) — isso é esperado, não é regressão. Ajuste a expectativa para "1 ocorrência, dentro do `<script type=\"application/ld+json\">`".

```powershell
Select-String -Path index.html -Pattern "class=\"nav-link\">Montagem<"
```

Expected: 1 ocorrência.

```powershell
Select-String -Path index.html -Pattern ">PC Corporativo sob Medida<|>PC Gamer de Alta Performance<"
```

Expected: 1 ocorrência de cada (cards mantidos).

---

### Task 7: Remover Ferramentas Interativas e Diferenciais (HTML + CSS + JS) e apagar `servidor.jpg`

**Files:**
- Modify: `index.html:83-84` / `84` (nav do header — remover link `#diferenciais`)
- Modify: `index.html:280-347` (remover seção Ferramentas Interativas inteira)
- Modify: `index.html:533-583` (remover seção Diferenciais inteira)
- Modify: `index.html:616-617` (footer — remover link `#diferenciais`)
- Modify: `js/script.js:43-112` (remover 3 blocos: teste de velocidade, simulador de ROI, ticker de status)
- Modify: `css/style.css` (remover blocos `.tools-grid`/`.tool-card`/`.speed-*`/`.roi-*`, `.status-panel`/`.status-item`/`.status-updated`, `#diferenciais`/`.metrics-grid`/`.metric`/`.status-dot`/`@keyframes pulseGreen`, e os usos de `.metrics-grid` e `.status-dot` nos media queries)
- Delete: `assets/img/servidor.jpg`

**Interfaces:** Nenhuma dependência de outras tarefas.

- [ ] **Step 1: Remover o link de nav "Diferenciais" (header)**

Substituir (removendo a linha):

```html
      <a href="#pcs" class="nav-link">Montagem</a>
      <a href="#portfolio" class="nav-link">Portfólio</a>
      <a href="#diferenciais" class="nav-link">Diferenciais</a>
      <a href="#contato" class="nav-link">Contato</a>
```

por:

```html
      <a href="#pcs" class="nav-link">Montagem</a>
      <a href="#portfolio" class="nav-link">Portfólio</a>
      <a href="#contato" class="nav-link">Contato</a>
```

> Nota: usa o texto "Montagem" (resultado da Task 6). Se esta tarefa rodar antes da Task 6, usar "PCs" no lugar de "Montagem" no trecho acima.

- [ ] **Step 2: Remover a seção "Ferramentas Interativas" inteira**

Remover do comentário `<!-- ===== Ferramentas Interativas ===== -->` até o `</section>` correspondente (linhas 280-347 do arquivo original), incluindo todo o `<div class="tools-grid">` com os 2 `tool-card`.

- [ ] **Step 3: Remover a seção "Diferenciais" inteira**

Remover do comentário `<!-- ===== Diferenciais ===== -->` até o `</section>` correspondente (linhas 533-583 do arquivo original), incluindo `.status-panel` e `.metrics-grid`.

- [ ] **Step 4: Remover o link de nav "Diferenciais" (footer)**

Substituir:

```html
      <a href="#pcs">Montagem</a>
      <a href="#portfolio">Portfólio</a>
      <a href="#diferenciais">Diferenciais</a>
      <a href="#contato">Contato</a>
```

por:

```html
      <a href="#pcs">Montagem</a>
      <a href="#portfolio">Portfólio</a>
      <a href="#contato">Contato</a>
```

- [ ] **Step 5: Remover os blocos de JS mortos**

Em `js/script.js`, substituir:

```js
  // Footer year
  document.getElementById('year').textContent = new Date().getFullYear();

  // Teste de conexão (simulado/ilustrativo)
  const speedBtn = document.getElementById('speed-test-btn');
  if (speedBtn) {
    const results = document.getElementById('speed-results');
    const barPing = document.getElementById('bar-ping');
    const barDownload = document.getElementById('bar-download');
    const valPing = document.getElementById('val-ping');
    const valDownload = document.getElementById('val-download');
    const valSecurity = document.getElementById('val-security');
    const message = document.getElementById('speed-message');

    speedBtn.addEventListener('click', () => {
      speedBtn.disabled = true;
      speedBtn.textContent = 'Testando...';
      results.hidden = false;
      barPing.style.width = '0%';
      barDownload.style.width = '0%';
      valPing.textContent = '--';
      valDownload.textContent = '--';
      valSecurity.textContent = '--';
      message.textContent = '';

      setTimeout(() => {
        const ping = Math.round(6 + Math.random() * 34); // 6-40ms
        valPing.textContent = `${ping} ms`;
        barPing.style.width = `${Math.max(10, 100 - (ping / 45) * 100)}%`;
      }, 400);

      setTimeout(() => {
        const download = Math.round(80 + Math.random() * 400); // 80-480 Mbps
        valDownload.textContent = `${download} Mbps`;
        barDownload.style.width = `${Math.min(100, (download / 500) * 100)}%`;
      }, 1100);

      setTimeout(() => {
        valSecurity.textContent = 'Protegido';
        message.textContent = 'Sua conexão está segura para home office. Nenhuma porta suspeita detectada nesta simulação.';
        speedBtn.disabled = false;
        speedBtn.textContent = 'Testar novamente';
      }, 1800);
    });
  }

  // Simulador de ROI de TI (estimativa ilustrativa)
  const roiInput = document.getElementById('roi-input');
  if (roiInput) {
    const roiHours = document.getElementById('roi-hours');
    const roiProtection = document.getElementById('roi-protection');

    const updateRoi = () => {
      const computers = Math.min(500, Math.max(1, Number(roiInput.value) || 1));
      roiHours.textContent = `${Math.round(computers * 1.8)}h`;
      // ponytail: tiering simplificado para estimativa de marketing, não é um score real
      roiProtection.textContent = computers <= 3 ? 'Baixo' : computers <= 15 ? 'Médio' : 'Máximo';
    };

    roiInput.addEventListener('input', updateRoi);
    updateRoi();
  }

  // Ticker do painel de status de monitoramento
  const statusTime = document.getElementById('status-time');
  if (statusTime) {
    let seconds = 0;
    setInterval(() => {
      seconds += 5;
      statusTime.textContent = seconds >= 60 ? 'agora' : `há ${seconds}s`;
      if (seconds >= 60) seconds = 0;
    }, 5000);
  }

})();
```

por:

```js
  // Footer year
  document.getElementById('year').textContent = new Date().getFullYear();

})();
```

- [ ] **Step 6: Remover CSS de Ferramentas Interativas**

Em `css/style.css`, remover o bloco inteiro (do comentário `/* ---------- Ferramentas Interativas ---------- */` até o fim da regra `.roi-label`):

```css
/* ---------- Ferramentas Interativas ---------- */
.tools-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;
}
@media (min-width: 760px) {
  .tools-grid { grid-template-columns: repeat(2, 1fr); }
}

.tool-card p { margin-bottom: 20px; }

.speed-results { margin-top: 22px; display: flex; flex-direction: column; gap: 16px; }
.speed-metric { display: flex; flex-direction: column; gap: 8px; }
.speed-label { display: flex; justify-content: space-between; font-size: 0.85rem; color: var(--text-secondary); }
.speed-value { font-weight: 700; color: var(--text-primary); }
.speed-bar { height: 8px; border-radius: 999px; background: var(--bg-secondary); overflow: hidden; }
.speed-bar-fill {
  height: 100%; width: 0%;
  border-radius: 999px;
  background: var(--accent);
  transition: width 0.9s ease;
}
.speed-message {
  margin-top: 4px;
  padding: 12px 14px;
  border-radius: 10px;
  background: rgba(34, 197, 94, 0.08);
  border: 1px solid rgba(34, 197, 94, 0.25);
  color: #15803d;
  font-size: 0.86rem;
  font-weight: 600;
}

.roi-input-group { display: flex; flex-direction: column; gap: 8px; margin: 20px 0; }
.roi-input-group label { font-size: 0.85rem; color: var(--text-secondary); font-weight: 500; }
.roi-input {
  padding: 12px 16px;
  border-radius: 10px;
  border: 1px solid var(--border);
  font-size: 1rem;
  font-family: inherit;
  max-width: 180px;
  background: var(--bg-elevated);
  color: var(--text-primary);
}
.roi-input:focus { outline: none; border-color: var(--border-strong); }
.roi-results { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; }
.roi-result { background: var(--bg-secondary); border-radius: 10px; padding: 16px 10px; text-align: center; }
.roi-value { display: block; font-size: 1.5rem; font-weight: 800; color: var(--accent); }
.roi-label { display: block; margin-top: 6px; font-size: 0.76rem; color: var(--text-secondary); line-height: 1.3; }
```

- [ ] **Step 7: Remover CSS do painel de status de monitoramento**

Remover:

```css
/* ---------- Status de Monitoramento ---------- */
.status-panel {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 14px 32px;
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(8px);
  border-radius: var(--radius);
  padding: 20px 26px;
  margin-bottom: 40px;
}
.status-item { display: flex; align-items: center; gap: 10px; font-size: 0.9rem; color: #e2e8f0; }
.status-item strong { color: #fff; }
.status-pct { color: #4ade80; font-weight: 700; }
.status-updated { font-size: 0.78rem; color: #94a3b8; margin-left: auto; }
```

- [ ] **Step 8: Remover CSS de Diferenciais**

Remover o bloco inteiro (do comentário `/* ---------- Diferenciais ---------- */` até o fim de `@keyframes pulseGreen`):

```css
/* ---------- Diferenciais ---------- */
#diferenciais {
  position: relative;
  background:
    linear-gradient(180deg, rgba(15, 23, 42, 0.86), rgba(15, 23, 42, 0.92)),
    url('../assets/img/servidor.jpg') center / cover no-repeat;
  color: #e2e8f0;
}
#diferenciais h2 { color: #fff; }

.metrics-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
}

.metric {
  background: var(--bg-elevated);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 28px 22px;
  text-align: center;
  transition: border-color var(--ease);
}
.metric:hover { border-color: var(--border-strong); }
#diferenciais .metric {
  background: rgba(255, 255, 255, 0.06);
  border-color: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(8px);
}
#diferenciais .metric-value { color: #fff; }
#diferenciais .metric-label { color: #94a3b8; }
#diferenciais .metric svg { color: var(--accent-light); }
.metric svg { width: 30px; height: 30px; color: var(--accent); margin: 0 auto 14px; }

.metric-value {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  font-size: 1.9rem;
  font-weight: 800;
  color: var(--text-primary);
}

.metric-label { display: block; margin-top: 8px; color: var(--text-secondary); font-size: 0.88rem; }

.status-dot {
  width: 9px; height: 9px;
  border-radius: 50%;
  background: #22c55e;
  box-shadow: 0 0 0 rgba(34, 197, 94, 0.6);
  animation: pulseGreen 1.8s infinite;
}
@keyframes pulseGreen {
  0% { box-shadow: 0 0 0 0 rgba(34, 197, 94, 0.6); }
  70% { box-shadow: 0 0 0 8px rgba(34, 197, 94, 0); }
  100% { box-shadow: 0 0 0 0 rgba(34, 197, 94, 0); }
}
```

- [ ] **Step 9: Limpar as referências órfãs de `.metrics-grid` e `.status-dot` nos media queries**

Substituir:

```css
@media (min-width: 640px) {
  .services-grid { grid-template-columns: repeat(2, 1fr); }
  .metrics-grid { grid-template-columns: repeat(4, 1fr); }
}
```

por:

```css
@media (min-width: 640px) {
  .services-grid { grid-template-columns: repeat(2, 1fr); }
}
```

E substituir:

```css
@media (prefers-reduced-motion: reduce) {
  .status-dot, .reveal { animation: none !important; transition: none !important; }
  .reveal { opacity: 1; transform: none; }
}
```

por:

```css
@media (prefers-reduced-motion: reduce) {
  .reveal { opacity: 1; transform: none; animation: none !important; transition: none !important; }
}
```

- [ ] **Step 10: Apagar o asset não usado**

```powershell
Remove-Item "assets/img/servidor.jpg" -Confirm:$false
```

- [ ] **Step 11: Verificar**

```powershell
Select-String -Path index.html -Pattern "ferramentas|diferenciais|speed-test-btn|roi-input|status-time"
```

Expected: nenhum resultado.

```powershell
Select-String -Path css/style.css -Pattern "tools-grid|roi-input|status-panel|metrics-grid|status-dot|servidor.jpg"
```

Expected: nenhum resultado.

```powershell
Select-String -Path js/script.js -Pattern "speed-test-btn|roi-input|status-time"
```

Expected: nenhum resultado.

```powershell
Test-Path "assets/img/servidor.jpg"
```

Expected: `False`.

---

### Task 8: CTA Final e Footer — copy final

**Files:**
- Modify: `index.html:586-595` (seção `.cta-final`)
- Modify: `index.html:605` (footer tagline)

**Interfaces:** Nenhuma dependência de outras tarefas.

- [ ] **Step 1: Reescrever a CTA final**

Substituir:

```html
      <h2>Pronto para elevar o nível da sua infraestrutura de TI?</h2>
      <p>Fale agora com nossa equipe e solicite uma auditoria técnica gratuita para sua empresa.</p>
      <a href="https://wa.me/5519994585971?text=Ol%C3%A1!%20Gostaria%20de%20solicitar%20uma%20auditoria%20t%C3%A9cnica%20de%20TI." target="_blank" rel="noopener" class="btn btn-primary btn-lg glow">
        Solicitar orçamento agora
      </a>
```

por:

```html
      <h2>Pronto para colocar seu site no ar ou dar uma manutenção completa no seu PC?</h2>
      <p>Fale agora com nossa equipe e solicite um orçamento sem compromisso.</p>
      <a href="https://wa.me/5519994585971?text=Ol%C3%A1!%20Gostaria%20de%20solicitar%20um%20or%C3%A7amento%20de%20manuten%C3%A7%C3%A3o%20ou%20site." target="_blank" rel="noopener" class="btn btn-primary btn-lg glow">
        Solicitar orçamento agora
      </a>
```

- [ ] **Step 2: Reescrever a tagline do footer**

Substituir:

```html
      <p class="footer-tagline">Infraestrutura de TI e suporte técnico corporativo em Americana/SP.</p>
```

por:

```html
      <p class="footer-tagline">Manutenção, limpeza preventiva e desenvolvimento web em Americana/SP.</p>
```

- [ ] **Step 3: Verificar**

```powershell
Select-String -Path index.html -Pattern "elevar o nível|auditoria técnica|suporte técnico corporativo"
```

Expected: nenhum resultado.

```powershell
Select-String -Path index.html -Pattern "colocar seu site no ar ou dar uma manutenção completa"
```

Expected: 1 ocorrência.

---

### Task 9: Verificação final manual no navegador

**Files:** Nenhuma modificação — só verificação.

- [ ] **Step 1: Varredura final por qualquer termo banido restante**

```powershell
Select-String -Path index.html,css/style.css,js/script.js -Pattern "servidor|cabeamento|segurança da informação|suporte técnico|nuvem|SLA|firewall|governança de TI" -CaseSensitive:$false
```

Expected: nenhum resultado (exceto, se aparecer, teria que ser investigado — não deveria sobrar nada).

- [ ] **Step 2: Abrir no navegador e conferir visualmente**

```powershell
Start-Process "index.html"
```

Checklist manual:
- Os 4 cards de pilares aparecem com foto, em grid 2x2 (desktop) / 1 coluna (mobile), na seção "O que fazemos".
- Seção de Montagem mostra só 2 cards (PC Corporativo, PC Gamer), sem coluna vazia em tela larga.
- Não existem mais as seções "Ferramentas Interativas" nem "Diferenciais" (nav não tem mais "Diferenciais").
- O nav mostra "Montagem" no lugar de "PCs".
- Botões do WhatsApp abrem com a nova mensagem (inspecionar o `href` ou clicar e conferir o texto pré-preenchido).
- Console do navegador (F12) sem erros JS (confirma que a remoção dos blocos de teste de velocidade/ROI/status não deixou referência quebrada).

- [ ] **Step 3: Marcar o plano como concluído**

Sem commit (projeto não é um repositório git) — apenas confirmar que todos os checkboxes deste plano estão marcados.
