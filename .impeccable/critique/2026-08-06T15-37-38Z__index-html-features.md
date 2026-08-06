---
target: sessao O que o TapInOut resolve no dia a dia
total_score: 18
max_score: 32
na_heuristics: 7,10
p0_count: 0
p1_count: 2
timestamp: 2026-08-06T15-37-38Z
slug: index-html-features
---
Method: dual-agent (A: a0fdadd4-bb48-4d8c-92e5-35653f7388ac · B: c00915fe-eb32-456a-9cf2-fab2b4630ed9)

## Design Health Score

| # | Heuristic | Score | Key Issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | 2 | Hover em card não clicável sugere ação inexistente |
| 2 | Match System / Real World | 2 | Título promete dia a dia; H3s são nomes de módulo |
| 3 | User Control and Freedom | 3 | CTA claro para #contact; sem armadilha |
| 4 | Consistency and Standards | 2 | Sobreposição com #produto / product-capabilities |
| 5 | Error Prevention | 2 | Affordance falsa no hover lift |
| 6 | Recognition Rather Than Recall | 2 | DSR / AES-256 pedem recall de domínio |
| 7 | Flexibility and Efficiency | n/a | Bloco Persuade; sem power paths esperados |
| 8 | Aesthetic and Minimalist Design | 2 | Limpa na seção, mas template SaaS + redundância com #produto |
| 9 | Error Recovery | 3 | Sem estados de erro; fluxo benigno |
| 10 | Help and Documentation | n/a | Landing Persuade; docs fora do job desta seção |
| **Total** | | **18/32** | **Acceptable (56%)** |

## Design Specificity Verdict

**LLM assessment**: Grade de features SaaS genérica (ícone em círculo primary-50 + card soft + hover lift). A copy de corpo tem domínio TapInOut (biometria, GPS, DSR, filiais/obras), mas a composição sobrevive a um swap de marca. A especificidade do produto está em #produto (screenshot); aqui a seção recua para inventário.

**Deterministic scan**: detect.mjs em index.html → exit 0, 0 findings. Detector limpo; não contradiz a review, só não detecta problemas de narrativa/especificidade.

**Visual overlays**: Sem overlay. Browser automation não disponível nesta sessão; live detect.js não injetado.

## Overall Impression

Quatro cards bem restritos e um CTA único — estrutura disciplinada. O problema é que a seção não avança a persuasão depois do painel: repete claims, parece template B2B e o hover mente sobre interatividade. Maior oportunidade: ou complementar #produto com ângulo novo (ponto no celular vs painel RH), ou cortar/reformatar.

## What's Working

1. **Restrição**: 4 cards + 1 CTA, grid 4→2→1 explícito — melhor que wall-of-features.
2. **Domínio na copy body**: biometria, banco de horas/DSR, multi-local concreto.
3. **A11y estrutural**: aria-labelledby, role=list/listitem, ícones aria-hidden.

## Priority Issues

### [P1] Composição SaaS genérica
- **What**: Círculo FA + card branco 16px + soft shadow + grid igual.
- **Why**: Em Persuade, "Recursos" deveria carregar identidade TapInOut; hoje é intercambiável.
- **Fix**: Artefatos reais (crop app, alerta painel) ou 1 card âncora diferenciado.
- **Suggested command**: /impeccable bolder ou /impeccable distill

### [P1] Redundância com #produto
- **What**: Alertas/banco de horas e multi-local já aparecem acima.
- **Why**: Visitante sente "já li" e pula o CTA.
- **Fix**: Eliminar, ou reposicionar só o que #produto não cobriu (colaborador vs RH).
- **Suggested command**: /impeccable distill + /impeccable clarify

### [P2] Título vs labels de módulo
- **What**: H2 "resolve no dia a dia" vs H3s "App mobile", "Segurança".
- **Why**: Expectativa de outcome; entrega ficha técnica.
- **Fix**: H3s como situações ("Bater ponto no canteiro") ou mudar o H2.
- **Suggested command**: /impeccable clarify

### [P2] Hover lift em article não clicável
- **What**: transform/shadow no hover sem link.
- **Why**: Affordance falsa; gera desconfiança.
- **Fix**: Remover hover ou tornar cards links reais.
- **Suggested command**: /impeccable polish

### [P3] Branco sobre branco
- **What**: Cards e seção ambos --white; só sombra define.
- **Why**: Em telas claras os cards somem.
- **Fix**: Fundo gray-50 na seção OU borda sutil nos cards.
- **Suggested command**: /impeccable layout / colorize

## Persona Red Flags

**Jordan (First-Timer)**: H3s não dizem para quem (RH vs colaborador); DSR/AES-256/IA sem contexto; 4 cards iguais sem "comece por aqui"; hover sem clique.

**Riley (Stress Tester)**: Detecta overlap com capabilities; cards "vivos" visualmente e mortos funcionalmente; CSS legado de carousel vs grid-static; CTA duplicado sem oferta diferente.

**Casey (Mobile)**: Em ≤600px, 4 cards empilhados alongam scroll repetido; área do card parece alvo mas só o botão amarelo funciona.

## Minor Observations

- Sem subtítulo: ok se H2 cumprir a promessa (hoje não).
- Micro-inconsistência: CTA features sem seta; CTA produto tem.
- prefers-reduced-motion não cobre lift dos cards.
- Testimonial abaixo não resgata o vale emocional desta seção.

## Questions to Consider

1. Se apagássemos #features, a página perderia prova que #produto + hero já não deram?
2. Esta seção é "recursos do produto" ou "um dia na vida do RH"?
3. Por que reler multi-local e alertas em ícone depois do screenshot do painel?
4. Se os cards não levam a lugar nenhum, o hover lift existe para quê?
