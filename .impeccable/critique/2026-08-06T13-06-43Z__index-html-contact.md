---
target: CTA de contato e formulario
total_score: 18
max_score: 32
na_heuristics: 7,10
p0_count: 0
p1_count: 3
timestamp: 2026-08-06T13-06-43Z
slug: index-html-contact
---
# Critique — CTA de contato e formulário (`index.html#contact`)

Method: dual-agent (A: f0e01b97-211e-404f-8997-989006f21aeb · B: e2e9dcb4-5562-4083-a67a-52e335e639c8)

Mode: Persuade · Scope: `#contact`, CTAs `href="#contact"`, form `#contactLeadForm`, CSS `.contact*`, float WhatsApp

## Design Health Score

| # | Heuristic | Score | Key Issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | 3 | Loading ok; `#contactFormMessage` sem `aria-live`; sucesso + `reset()` apaga o formulário |
| 2 | Match System / Real World | 2 | Agendar ≠ Solicitar ≠ Contato; banner “suporte” no funil de demo; e-mail `elevatebr.org` |
| 3 | User Control and Freedom | 3 | Muitos escapes (tel/WA); após sucesso sem revisão do pedido |
| 4 | Consistency and Standards | 2 | Vocabulário do CTA diverge; amarelo de conversão vs verde WhatsApp |
| 5 | Error Prevention | 2 | Só `required` + máscara; sem validação inline por campo |
| 6 | Recognition Rather Than Recall | 3 | Labels ok; float icon-only (salva `aria-label`) |
| 7 | Flexibility and Efficiency | n/a | Persuade landing |
| 8 | Aesthetic and Minimalist Design | 1 | Form + 4 canais + banner + float + assurances = bloco inchado |
| 9 | Error Recovery | 2 | Erro genérico cita WhatsApp sem link acionável; sem erro por campo |
| 10 | Help and Documentation | n/a | Persuade; privacy microcopy basta |
| **Total** | | **18/32** | **Acceptable (~56%)** |

## Design Specificity Verdict

**LLM assessment:** Categoria-intercambiável com copy local. Kit B2B SaaS padrão: card com barra azul, lista de canais, banner verde WhatsApp, assurances com hover. Troca o logo e serve outro produto. Ancoragem TapInOut vem da copy (painel, conformidade, azul `#0D6EFD`, CTA amarelo `#FACC15`), não da composição.

**Deterministic scan:** `detect.mjs --json index.html` → exit 0, **0 findings**. Nenhum hit específico de contact/form/CTA.

**Visual overlays:** Skipped — sem browser MCP/tools nesta sessão. Sem overlay inventado.

## Cognitive load (bloco `#contact`)

Fails **5/8**: single focus, hierarchy, one thing at a time, minimal choices, progressive disclosure. Chunking/grouping/working memory passam. Carga cognitiva **alta** no momento de conversão.

## Emotional journey (peak–end no submit)

Chegada aliviadora (demo + “1 dia útil” / “Sem compromisso”). Preenchimento ok, mas canais laterais competem. Peak do “Enviando…” funciona. **End fraco:** `reset()` + “em breve” dilui a promessa de prazo; sem próximo passo concreto.

## Overall Impression

O form curto e a promessa de demo são o melhor do bloco. O problema não é o formulário em si — é tudo o que cerca o submit: quatro canais, banner de suporte, float e assurances transformam a conversão em helpdesk + mapa + chat. Unificar verbo, limpar canais e consertar o estado de sucesso é a maior alavanca.

## What's Working

1. **Copy de demo alinhada ao produto** — `#contact-title` + subtítulos (“1 dia útil”, “Sem compromisso”) falam linguagem de RH.
2. **Form enxuto** — 4 campos, LGPD (`.contact-form-privacy`), máscara em `#contactPhone`.
3. **CTA amarelo consistente com a página** — `.contact-form-button` alinhado aos `.btn-primary` que levam a `#contact`.

## Priority Issues

### P1 — Conversão poluída por canais e “suporte”
- **What:** Form + 4 `.contact-method-row` + `.contact-cta-banner` (“Precisando de suporte?”) + `.support-whatsapp-float`.
- **Why:** O job “agendar demo” perde single focus no momento de maior intenção.
- **Fix:** Um primary (form); um secondary (WhatsApp comercial); telefone/e-mail em disclosure; remover/reescrever banner de suporte; endereço fora do funil.
- **Suggested:** `/impeccable distill` (alvo `#contact`)

### P1 — Vocabulário do CTA inconsistente
- **What:** Hero “Agendar demonstração gratuita” → botão “Solicitar demonstração” → footer “Contato” e “Demonstração” no mesmo `#contact`.
- **Why:** Modelo mental e tracking quebram; Jordan hesita se ainda é gratuita.
- **Fix:** Um verbo em toda a jornada; reiterar “gratuita”/“sem compromisso” no form; unificar footer.
- **Suggested:** `/impeccable clarify`

### P1 — Peak–end do submit fraco
- **What:** Sucesso reseta o form; mensagem vaga; sem `aria-live`; sem próximo passo.
- **Why:** Riley perde prova do envio; Sam pode não ouvir status; lead vira “mensagem enviada” genérica.
- **Fix:** Resumo do lead; `aria-live="polite"`; copy com prazo; CTA pós-envio; não limpar até confirmação estável.
- **Suggested:** `/impeccable harden` (+ `/impeccable clarify` para microcopy)

### P2 — Hierarquia visual: verde > amarelo
- **What:** `.contact-cta-banner` full-bleed verde + pulse compete com `.contact-form-button`.
- **Why:** Em Persuade o submit amarelo deveria ser o pico visual da seção.
- **Fix:** Acalmar/remover banner; WhatsApp secundário tipográfico sob o form.
- **Suggested:** `/impeccable quieter` ou `/impeccable layout`

### P2 — Endereço como canal de conversão
- **What:** Row de mapa com peso igual a telefone/WhatsApp.
- **Why:** Aumenta scroll sem fechar lead digital.
- **Fix:** Endereço no footer; no bloco só canais que fecham demo.
- **Suggested:** `/impeccable distill`

## Persona Red Flags

**Jordan (First-Timer):** “Gratuita” some no form; “suporte?” soa helpdesk; footer Contato vs Demonstração; sucesso vazio + “em breve” → abandona ou duplica no WhatsApp.

**Riley (Stress):** Erro sem link acionável; sucesso + reset perde prova; máscara de telefone corta >11 dígitos; e-mail `elevatebr.org` vs marca TapInOut.

**Casey (Mobile):** Stack longo (form → 4 rows → banner → assurances); float 58×58 compete com amarelo; alvos apertados nas method rows; sem draft se sair do app.

## Minor Observations

- `.contact-two-columns` é sempre 1 coluna; nome engana.
- Assurances com hover lift após o CTA alongam o scroll.
- CTA “Falar sobre integrações” aterrissa no form genérico sem contexto.
- `outline: none` no focus do input depende só do box-shadow.
- Float `aria-label` ok; visualmente icon-only.

## Questions to Consider

1. Se o único job de `#contact` fosse uma demonstração agendada, o que sobraria além do form amarelo e **um** WhatsApp comercial?
2. Por que o momento de maior intenção pergunta “Precisando de suporte?” em vez de “Quer falar com um especialista agora?”?
3. O end do submit deveria parecer recibo + próximo passo — ou a página trata o lead como “mensagem enviada” genérica?
