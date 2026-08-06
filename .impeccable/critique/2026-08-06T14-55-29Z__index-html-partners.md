---
target: sessao de parceiros
total_score: 12
max_score: 32
na_heuristics: 7,10
p0_count: 1
p1_count: 2
timestamp: 2026-08-06T14-55-29Z
slug: index-html-partners
---
# Critique — Seção de parceiros (`index.html#partners`)

Method: dual-agent (A: a0eaa7a5-4262-4a38-8e9f-4c217556fd49 · B: 1bfb8717-aa9b-405e-9531-5a6ad056e1f8)

Mode: Persuade (trust/social proof) · Scope: `#partners` / `.partners-section`

## Design Health Score

| # | Heuristic | Score | Key Issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | 1 | Transitions de filter/opacity sem hover/focus |
| 2 | Match System / Real World | 1 | “Parceiros” ≠ clientes ≠ integrações; desalinha do hero |
| 3 | User Control and Freedom | 2 | Logos mortos: sem link ou case |
| 4 | Consistency and Standards | 1 | GOA círculo especial; alturas; opacity CSS vs inline |
| 5 | Error Prevention | 2 | Pair Domínio+Thomson + alt ambíguo |
| 6 | Recognition Rather Than Recall | 1 | Grayscale + opacidade empilhada matam reconhecimento |
| 7 | Flexibility and Efficiency | n/a | Persuade strip |
| 8 | Aesthetic and Minimalist Design | 1 | Mudo demais + exceção GOA |
| 9 | Error Recovery | 3 | Sem fluxo quebrável |
| 10 | Help and Documentation | n/a | Persuade |
| **Total** | | **12/32** | **Poor (~38%)** |

## Design Specificity Verdict

**LLM:** Categoria-intercambiável. Faixa de logos grayscale genérica. Única “especificidade” é o hack GOA (círculo `#E9ECEF`) — não soa TapInOut.

**Deterministic scan:** `detect.mjs --json index.html` → exit 0, **0 findings**.

**Visual overlays:** Skipped — sem browser MCP/tools.

## Cognitive load

Fails **5/8**: single focus, chunking, grouping, hierarchy, working memory (vs hero trust line).

## Emotional journey

Hero promete confiança enterprise → partners deveria consolidar → product prova o painel. Na prática partners abre um **vale**: logos fantasma, GOA em destaque sem motivo. Confiança cai em vez de subir.

## Overall Impression

Posição no funil certa, execução errada. Social proof que quase não se vê. Prioridade: legibilidade dos logos + um tratamento só + clarificar se são parceiros, clientes ou integrações.

## What's Working

1. Semântica `#partners` + `aria-labelledby` + header no padrão da página
2. Posição pós-hero / pré-produto correta
3. Alts + `loading="lazy"` na maioria

## Priority Issues

### P0 — Prova social auto-apagada
- Wrapper `opacity:0.6` × imgs `0.7` + grayscale ≈ ~0.42 de visibilidade
- **Fix:** Remover stack; classes CSS; contraste legível
- **Suggested:** `/impeccable polish` ou `/impeccable colorize`

### P1 — GOA como exceção circular
- Círculo cinza + cor plena rouba hierarquia
- **Fix:** Mesmo tratamento de todos os logos
- **Suggested:** `/impeccable layout`

### P1 — Taxonomia parceiros vs integrações vs clientes
- Hero: SAP/Domínio/SF; aqui mix diferente sob “Parceiros”
- **Fix:** Retitular, agrupar ou alinhar ao claim do hero
- **Suggested:** `/impeccable clarify`

### P2 — Domínio + Thomson colados
- Slot largo, scale 1.15, alt confuso
- **Fix:** Lockup oficial ou dois slots iguais + label
- **Suggested:** `/impeccable clarify`

### P3 — Inline styles + CSS morto
- `.partners-logos` no CSS sem HTML; `opacity:0.85` inútil
- **Suggested:** `/impeccable extract` ou `/impeccable polish`

## Persona Red Flags

**Jordan:** não sabe se são clientes ou integrações; confiança não sobe  
**Riley:** GOA especial + opacity CSS vs inline = semi-quebrado  
**Casey:** wrap irregular, logos minúsculos sob opacidade, possível CLS

## Minor Observations

- `title` redundante com `alt`
- AOS só no header; logos estáticos
- Fundo branco quiet ok se logos legíveis

## Questions to Consider

1. Se remover os logos e deixar só o subtítulo, a landing perde quanto de confiança?  
2. GOA merece o único tratamento em cor — o visitante deveria sair pensando nela ou no TapInOut?  
3. Esta seção prova clientes, parceiros de canal ou integrações enterprise?
