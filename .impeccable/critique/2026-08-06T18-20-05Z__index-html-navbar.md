---
target: navbar
total_score: 18
max_score: 32
na_heuristics: 7,10
p0_count: 0
p1_count: 3
timestamp: 2026-08-06T18-20-05Z
slug: index-html-navbar
---
Method: dual-agent (A: 7f4d71fc-7a3f-41be-a683-134b23f91aa6 · B: e5ca992e-f3cb-4819-a3c2-b719209fa8a6)

## Design Health Score

| # | Heuristic | Score | Key Issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | 2 | Sem seção ativa / aria-current; scroll só muda sombra |
| 2 | Match System / Real World | 3 | Labels em PT claros; Produto vs Recursos ainda ambíguo |
| 3 | User Control and Freedom | 3 | Escape + toggle ok; sem click-outside / focus trap |
| 4 | Consistency and Standards | 2 | Entrar duplicado (CTA vs link mobile); aria-pressed em links |
| 5 | Error Prevention | 2 | CTA primário do chrome manda prospect para login |
| 6 | Recognition Rather Than Recall | 2 | Links de peso igual; sem "você está aqui" no scroll |
| 7 | Flexibility and Efficiency | n/a | Não se aplica a nav Persuade |
| 8 | Aesthetic and Minimalist Design | 2 | Superfície limpa, IA lotada; login domina |
| 9 | Error Recovery | 2 | Escape fecha menu; hash inválido falha em silêncio |
| 10 | Help and Documentation | n/a | Não esperado em nav Persuade |
| **Total** | | **18/32** | **Acceptable (56%)** |

## Design Specificity Verdict

**LLM assessment**: Chrome SaaS genérico — sticky frosted, links cinza, pill de idioma, CTA azul de login. Só o logo (pin + relógio + wordmark) é inconfundível TapInOut. Trocar o logo e a barra serve em qualquer landing de RH/fintech.

**Deterministic scan**: `detect.mjs --json index.html` → `[]`, exit 0. Zero findings no arquivo inteiro (incluindo região da navbar).

**Visual overlays**: Sem overlay confiável. Browser automation indisponível nesta sessão; live-server/inject não executados.

## Overall Impression

Barra competente e corporativa, mas desalinhada do job Persuade da landing. O maior gap: o único botão sólido no chrome é **Entrar**, enquanto o hero vende **demonstração**.

## What's Working

1. **Logo** — único sinal de marca claramente autoral na barra.
2. **Toggle mobile** — aria-expanded/controls, Escape, scroll lock, hamburger→X bem feitos.
3. **Lang switcher sempre visível** — PT/EN/ES acessíveis no mobile sem abrir o drawer.

## Priority Issues

### [P1] CTA errado: `.nav-cta` "Entrar"
- **Why**: Chrome compete com o hero; prospect cai em login em vez de demo.
- **Fix**: Elevar Demonstração/Agendar como primário; Entrar como link secundário.
- **Suggested command**: `/impeccable clarify` (+ `/impeccable layout`)

### [P1] Seis `.nav-link` de peso igual
- **Why**: Ultrapassa chunking (≤4); Blog/Depoimentos diluem conversão.
- **Fix**: Cortar para ≤4 itens top; aninhar ou tirar Blog da primary.
- **Suggested command**: `/impeccable distill`

### [P1] Squeeze tablet 769–1100px
- **Why**: Nav horizontal + font xs; Entrar/actions estouram antes do hamburger (768).
- **Fix**: Subir breakpoint do toggle (ex. ≤1024) ou colapsar mais cedo.
- **Suggested command**: `/impeccable adapt`

### [P2] Sem estado de seção atual
- **Why**: Página longa sem "você está aqui".
- **Fix**: Scroll-spy + aria-current / .is-active.
- **Suggested command**: `/impeccable harden`

### [P2] Mobile: Entrar só no menu; sem scrim
- **Why**: Login exige hamburger; drawer sem backdrop fraco.
- **Fix**: CTA compacto persistente + backdrop + click-outside.
- **Suggested command**: `/impeccable adapt`

## Persona Red Flags

**Jordan (First-Timer)**: Entrar parece a ação principal; Produto vs Recursos confuso; Demonstração tem o mesmo peso que Blog.

**Casey (Mobile)**: Toggle no canto superior (thumb-hostile); Entrar atrás do menu; sem backdrop no drawer aberto.

**Sam (A11y)**: Sem skip-link; aria-pressed em `<a class="lang-btn">`; Entrar `target="_blank"` sem anúncio; sem focus trap no menu.

## Minor Observations

- `role="navigation"` redundante em `<nav>`
- `title` duplica propósito visível (tooltip noise)
- Comentário em main.js desatualizado vs `is-scrolled`
- Sem skip-to-content

## Questions to Consider

1. Se o job do primeiro viewport é agendar demo, por que o único botão sólido da navbar é Entrar?
2. Quais 3 de Produto/Recursos/Depoimentos/Integrações/Blog/Demonstração o comprador notaria se sumissem amanhã?
3. O seletor de idioma merece chrome permanente ao lado da marca, ou é secundário demais para o primeiro olhar?
