---
target: sessao de integracoes
total_score: 16
max_score: 32
na_heuristics: 7,10
p0_count: 0
p1_count: 3
timestamp: 2026-08-06T15-50-12Z
slug: index-html-integrations
---
Method: dual-agent (A: 077922be-5f22-4d35-bb10-07593ad56b7f · B: d88c87c6-e707-4d1b-892a-c8f48d0806e0)

## Design Health Score

| # | Heuristic | Score | Key Issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | 2 | Uptime + logos com hover de controle falso |
| 2 | Match System / Real World | 2 | Copy RH ok; visual = teatro de API genérica |
| 3 | User Control and Freedom | 3 | CTA #contact claro |
| 4 | Consistency and Standards | 2 | CTA sem seta; CSS h3 vs HTML h2 |
| 5 | Error Prevention | 2 | Claims (uptime, SDKs, docs) sem prova |
| 6 | Recognition Rather Than Recall | 2 | Comprador monta mapa de capacidades sozinho |
| 7 | Flexibility and Efficiency | n/a | Persuade |
| 8 | Aesthetic and Minimalist Design | 1 | Cards + glow + snippet + tiles + foto + eco |
| 9 | Error Recovery | 2 | Docs/SDKs mencionados sem link |
| 10 | Help and Documentation | n/a | Persuade |
| **Total** | | **16/32** | **Acceptable (50%)** |

## Design Specificity Verdict

**LLM:** Copy cita SAP, Domínio, SuccessFactors, ponto e folha (específico BR). Composição é template SaaS de integrações: card API, ícones FA, JSON fake, tiles 2x2, fundo Unsplash. Troca a marca e a seção sobrevive.

**Deterministic scan:** detect.mjs index.html → exit 0, 0 findings. Detector limpo; não captura ruído narrativo/visual.

**Visual overlays:** Sem overlay (sem automação de browser nesta sessão).

## Overall Impression

Melhor pedaço: subtítulo e parágrafo curto (outcome RH). O resto é parede técnica: showcase + 5 cards que repetem os mesmos nomes. Maior oportunidade: uma prova visual real + ≤4 capacidades, sem teatro de terminal.

## What's Working

1. Âncora de mercado BR (Domínio + SAP/SF + linguagem ponto/folha)
2. Parágrafo outcome-first do topo
3. Base a11y (aria-labelledby, ícones hidden)

## Priority Issues

### [P1] Teatro de integração genérico
- **What:** FA icons, JSON fake, card flutuante, sem UI TapInOut nem logos oficiais
- **Why:** Comprador não vê o produto
- **Fix:** Visual real (sync ponto→ERP) ou marcas oficiais; matar snippet cosmético
- **Suggested command:** /impeccable bolder ou /impeccable distill

### [P1] Hierarquia e IA duplicada
- **What:** Dois H2; showcase e 5 cards ecoam SAP/SF/Webhooks/CPI/API; CSS mira h3, HTML é h2
- **Why:** Scan falha; tipografia do módulo solta
- **Fix:** Um H2; um lead; 3–4 capacidades; alinhar CSS↔HTML
- **Suggested command:** /impeccable distill + /impeccable typeset

### [P1] Wall of equal cards
- **What:** 5 features peer + 4 tiles com hover
- **Why:** >4 decisões; abandono mobile
- **Fix:** ≤4 itens; tiles estáticos ou links reais
- **Suggested command:** /impeccable layout / quieter

### [P2] Affordances e claims sem caminho
- **What:** Hover em non-links; uptime/SDK/docs sem evidência
- **Why:** Desconfiança
- **Fix:** Remover hover falso; linkar docs ou suavizar claims
- **Suggested command:** /impeccable clarify

### [P3] CTA + motion órfã + mobile stack
- **What:** CTA sem seta; dashboardFloat sem keyframes; stack longo
- **Why:** Fim fraco; polish quebrado
- **Fix:** Alinhar CTA; remover animação órfã; encurtar
- **Suggested command:** /impeccable polish / adapt

## Persona Red Flags

**Jordan:** JSON/OAuth/CPI assustam; dois títulos; tiles não clicáveis; Domínio no 5º card.

**Riley:** Uptime/SDKs/docs sem fonte; "Nativas" sem prova; hover falso.

**Casey:** Scroll longo mobile; CTA longe do thumb; fixed background pesa.

**Alex (API buyer):** Snippet teatral sem OpenAPI; logos sem ação; abandona confiança técnica.

## Minor Observations

- left/right classes quase cosméticas
- Badge API REST ecoa card API REST Completa
- Fundo Unsplash genérico
- Timestamp JSON 2025 pode datar mal

## Questions to Consider

1. Se o comprador é DP/RH, por que a primeira coisa é um terminal JSON?
2. O que sobra com 1 frase de outcome + 3 sistemas com logo real?
3. "Nativas" é claim de produto ou adjetivo de marketing?
4. Esta seção vende diferencial TapInOut ou preenche o slot Integrations de template?
