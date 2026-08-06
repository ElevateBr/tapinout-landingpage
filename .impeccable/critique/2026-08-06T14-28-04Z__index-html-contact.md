---
target: formulario de demonstracao
total_score: 20
max_score: 32
na_heuristics: 7,10
p0_count: 0
p1_count: 3
timestamp: 2026-08-06T14-28-04Z
slug: index-html-contact
---
# Critique — Formulário de demonstração (`index.html#contact`)

Method: dual-agent (A: 403dc9c5-aab1-4529-b1c1-a985561c4f2a · B: f3bdc89d-693f-46d7-badf-1cf5242cc61e)

Mode: Persuade · Scope: `#contactLeadForm` / `.contact-form-panel` + coluna de canais / WA banner / assurances

## Design Health Score

| # | Heuristic | Score | Key Issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | 3 | Loading/sucesso ok; falta `aria-busy` e erro visual por campo |
| 2 | Match System / Real World | 3 | Copy RH boa; “Pedido” vs “demonstração”; endereço fraco p/ demo digital |
| 3 | User Control and Freedom | 2 | Pós-sucesso sem reenvio sem refresh |
| 4 | Consistency and Standards | 2 | CTA amarelo vs WA verde como dois primários |
| 5 | Error Prevention | 2 | Só `required` + máscara; sem validação inline |
| 6 | Recognition Rather Than Recall | 3 | Labels/trust ok; kicker do form fraco |
| 7 | Flexibility and Efficiency | n/a | Persuade |
| 8 | Aesthetic and Minimalist Design | 2 | Atmosfera hero ok; caminhos de contato ainda saturam |
| 9 | Error Recovery | 3 | Mensagem + unlock + link WA |
| 10 | Help and Documentation | n/a | Persuade |
| **Total** | | **20/32** | **Acceptable (~63%)** |

## Design Specificity Verdict

**LLM:** Parcialmente específico. Headline, lead RH, trust LGPD, CTA amarelo e gradiente no padrão hero ancoram TapInOut. O painel do form em si ainda é lead B2B genérico. Canais restaurados (telefone Resende, endereço) dão localidade — o problema não é tê-los, é hierarquia (WA verde como segundo primário + endereço no funil).

**Deterministic scan:** `detect.mjs --json index.html` → exit 0, **0 findings**.

**Visual overlays:** Skipped — sem browser MCP/tools.

## Cognitive load

Fails **4/8**: single focus, hierarchy, one thing at a time, minimal choices, progressive disclosure (5 listed in A but count said 4 — A table shows 5 fails: 1,4,5,6,8). Recheck: A said fails 4 but listed 5 FAILs. Use 5/8 from table.

Actually Assessment A said "Fails: 4" but checklist has FAIL on 1,4,5,6,8 = 5. I'll report 5/8 as the table shows.

## Emotional journey

Entrada clara (demo gratuita). Vale: form vs WhatsApp. Peak de sucesso forte (nome + 1 dia útil + WA). Fim limpo (locked). Atrito está antes do submit.

## Overall Impression

O layout no padrão do hero e o estado de sucesso subiram a nota vs a critique anterior (18→20). Canais restaurados estão mais limpos que o legado. O gargalo agora é **dois primários** (amarelo vs verde) e a **ordem mobile** (form depois dos canais).

## What's Working

1. Headline + accent + gradiente alinhados ao hero
2. Sucesso do form bem escrito (recibo + prazo + WA)
3. Canais em lista leve, assurances sem cards pesados

## Priority Issues

### P1 — Dois CTAs primários (amarelo vs verde)
- **What:** `.contact-form-button` e `.contact-wa-banner-btn` competem
- **Why:** Dilui conversão e medição
- **Fix:** Form = único primário; WA muted/secundário
- **Suggested:** `/impeccable layout` ou `/impeccable quieter`

### P1 — Demais opções na mesma decisão (não apagar canais)
- **What:** tel + WA + email + mapa + banner + submit
- **Why:** Hesitação; endereço alonga funil digital
- **Fix:** Manter canais; endereço footer/colapsado; unificar paths WA
- **Suggested:** `/impeccable distill` (re-hierarquizar, não remover pedido do usuário)

### P1 — Mobile: form abaixo de canais + banner
- **What:** Ordem DOM atrasa digitação
- **Fix:** Form primeiro no mobile ou âncora sticky
- **Suggested:** `/impeccable adapt`

### P2 — Validação só nativa
- **What:** Sem `.is-invalid` / aria por campo
- **Fix:** Erros inline + `aria-invalid`
- **Suggested:** `/impeccable harden`

### P3 — LGPD triplicada + CSS morto
- **Fix:** Uma menção LGPD; limpar `.contact-methods-*` morto
- **Suggested:** `/impeccable clarify` + `/impeccable polish`

## Persona Red Flags

**Jordan:** kicker vs “Conversar agora”; endereço gera “preciso ir aí?”  
**Riley:** sucesso some no refresh; máscara tel + paste;  
**Casey:** rola muito até o amarelo; três alvos WhatsApp na prática

## Minor Observations

- “Pedido” vs “demonstração” no loading/sucesso  
- Kicker fraco  
- Assurances repetem trust  
- Botão disabled cinza após sucesso

## Questions to Consider

1. Por que “Conversar agora” tem o mesmo peso do amarelo se o hero já promete agendar demo?  
2. Endereço no funil digital convence ou só alonga até o form?  
3. Banner WA antes do submit é rede de segurança ou fuga da conversão?
