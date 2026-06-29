# World Vision typography and contrast audit

## Standards applied

- Root baseline: `html { font-size: 100%; }` (16px at the browser default).
- Body copy and descriptive text: minimum `1rem` (16px).
- Navigation and button text: minimum `0.9375rem` (15px).
- Labels, badges, captions, metadata and compact table text: minimum `0.875rem` (14px).
- Normal text contrast target: WCAG AA `4.5:1`.

The reusable fixes live in `SASS-Components/_accessibility.scss`. The ready-to-run static build uses the matching `Pages/accessibility.css`, loaded after the original stylesheet on every populated page.

## Global and color fixes

| Problem | File / selector | Old value | New value |
|---|---|---:|---:|
| No explicit rem baseline | `SASS-Components/_accessibility.scss` / `html` | Not set | `font-size: 100%` |
| Body text inherited undersized component values | `SASS-Components/_accessibility.scss` / `body` | Not set globally | `font-size: 1rem; line-height: 1.6` |
| Light-theme muted text failed AA on `#e8ecf0` (3.92:1) | `SASS-Components/_colors.scss` / `neu-muted` | `#6b7585` | `#526070` (5.42:1) |
| Dark muted text was only marginally above AA | `SASS-Components/_colors.scss` / dark `neu-muted` | `#7a8aaa` | `#aebbd0` (8.08:1 on `#1e2330`) |
| Pink company subtitle failed AA (2.54:1 on the light background) | `SASS-Components/_header.scss` / `.subtitle` | `#cd79b2` | `#8f3d73` (5.74:1) |
| Semi-transparent secondary text produced inconsistent contrast | `_accessibility.scss` / muted selector group | `rgba(...)` and old `var(--neu-muted)` values | `var(--neu-muted) !important` |
| Semi-transparent white text on blue bands reduced contrast | `_banner.scss`, `_sections.scss` / `.cta-banner .cta-text p`, `.mfg-band-text .eyebrow`, `.mfg-band-text p`, `.mfg-feat span` | `rgba(255,255,255,.65–.82)` | `#fff` |

## Header, navigation and hero

| File / selector | Old value | New value |
|---|---:|---:|
| `_header.scss` / `.nav-item` | `13.5px` (and `12px` at a breakpoint) | `15px` |
| `_header.scss` / `.nav-links a` | `13px` (and `12px` at a breakpoint) | `15px` |
| `_header.scss` / `.nav-cta` | `13px` (and `12px` at a breakpoint) | `15px` |
| `_header.scss` / `.mobile-sub-link` | `13px` | `15px` |
| `_header.scss` / `.neu-dropdown-item` | `13.5px` | `15px` |
| `_header.scss` / `.breadcrumb` | `12px` | `14px` |
| `_mediaQuery.scss` / `.logo-container .subtitle`, `.nav-logo-text .subtitle` | `0.6rem`, `0.7rem`, and `9px !important` | `14px !important` |
| HTML Tailwind mobile menu / `.mobile-view`, `.mobile-drawer-link`, `.mobile-link` | `15px` or inherited | `16px` |
| `_heroSection.scss` / `.hero-tag`, `.hero-eyebrow`, `.toric-hero-eyebrow`, `.hydro-eyebrow` | `11px` | `14px` |
| `_heroSection.scss` / `.hero-sub`, `.hero-desc` | `15px` | `16px` |
| `_heroSection.scss` / `.toric-hero-desc`, `.page-hero-desc` | `14px` | `16px` |
| `_heroSection.scss` / `.hydro-hero-desc` | `14.5px` | `16px` |
| `_heroSection.scss` / `.hero-btn-primary`, `.hero-btn-ghost` | `14px` | `15px` |
| `_heroSection.scss` / `.hero-btn-iol-primary`, `.hero-btn-iol-ghost` | `13.5px` | `15px` |
| `_heroSection.scss` / `.about-chip` | `0.76rem` | `14px` |

## Cards, product pages and general sections

| File / selector group | Old value | New value |
|---|---:|---:|
| `_products.scss` / `.section-eyebrow` | `11px` | `14px` |
| `_products.scss` / `.section-sub` | `15px` | `16px` |
| `_products.scss` / `.product-card-body p` | `13px` | `16px` |
| `_products.scss` / `.product-tag`, `.model-tab-type`, `.card-tag`, `.a-const-label`, `.a-const-key`, `.card-visual-label`, `.model-tag` | `10px` | `14px` |
| `_products.scss` / `.product-link`, `.model-card-cta` | `13px` | `15px` |
| `_products.scss` / `.card-subtitle`, `.highlight-chip-text`, `.spec-row-label`, `.spec-row-val`, `.a-const-val`, `.dl-btn`, `.ace-bullet-text`, `.compare-row` | `12–12.5px` | `14–16px` according to text role |
| `_products.scss` / `.card-desc`, `.model-desc` | `13–13.5px` | `16px` |
| `_products.scss` / `.variant-badge`, `.spec-head-sub`, `.spec-model-btn`, `.graph-caption`, `.graph-legend-item`, `.model-lens-chip` | `11–11.5px` | `14px` |
| `_cards.scss` / `.card-badge`, `.card-tag`, `.a-const-label` | `10px` | `14px` |
| `_cards.scss` / `.card-sub`, `.spec-item`, `.compare-row` | `12.5px` | `16px` |
| `_cards.scss` / `.card-desc`, `.mf-desc`, `.val-card p` | `13px`, `13.5px`, `0.84rem` | `16px` |
| `_cards.scss` / `.card-cta`, `.back-btn-learn`, `.back-btn-flip` | `12px` | `15px` |
| `_statsBar.scss` / `.stat-label`, `.spec-pill-label`, `.au-stat-lbl` | `11px`, `0.78rem` | `14px` |
| `_statsBar.scss` / `.feature-card p` | `13px` | `16px` |
| `_statsBar.scss` / `.feature-card h3` | `15px` | `16px` |
| `_sections.scss` / `.section-title`, `.ifu-link-text span`, `.hero-chip`, `.cc-label`, `.office-hours-badge`, `.social-btn`, `.event-tag`, `.event-badge` | `10–11.5px` | `14px` |
| `_sections.scss` / `.flip-hint`, `.ifu-sub`, `.qr-card-desc`, `.subject-chip`, `.review-card-location` | `12–12.5px` | `14–16px` according to text role |
| `_sections.scss` / `.trust-card p`, `.form-card-sub`, `.office-detail-row`, `.faq-a`, `.event-desc`, `.team-info p`, `.tl-desc` | `12.5px–0.88rem` | `16px` |
| `_sections.scss` / `.contact-hero-desc`, `.au-sub`, `.story-text p` | `14.5px–0.95rem` | `16px` |
| `_sections.scss` / `.form-label`, `.team-role`, `.scard-lbl`, `.story-yr .yrlbl`, `.tl-yr`, `.au-eyebrow` | `0.65rem–0.72rem` or `11px` | `14px` |
| `_sections.scss` / `.review-card-role`, `.review-card-location` | `13px` / `12px` plus low-alpha color | `14px` plus AA muted token |
| `_banner.scss` / `.au-cta p` | `0.97rem` | `16px` |
| `_banner.scss` / `.au-cta-btns a` | `0.88rem` | `15px` |
| `_banner.scss` / `.eye-badge` | `0.72rem` | `14px` |

## Forms and Toric calculator

| File / selector | Old value | New value |
|---|---:|---:|
| `_sections.scss` / `.form-input`, `.form-select`, `.form-textarea` | `13.5px !important` | `16px !important` |
| `_sections.scss` / `.form-label` | `11px` | `14px` |
| `_sections.scss` / `.form-submit` | `14px` | `15px` |
| `_toric-calculator.scss` / `.sp-tab` | `12.5px` | `14px` |
| `_toric-calculator.scss` / `.field-label` | `12px` | `14px` |
| `_toric-calculator.scss` / `.field-hint`, `.cyl-table th`, `.result-highlight-label` | `10px` | `14px` |
| `_toric-calculator.scss` / `.neu-input`, `.neu-select` | `13.5px` | `16px` |
| `_toric-calculator.scss` / `.eye-btn`, `.results-empty p`, `.result-row` | `13px` | `14–16px` according to text role |
| `_toric-calculator.scss` / `.error-msg`, `.result-section-title`, `.axis-diagram-label` | `11px` | `14px` |
| `_toric-calculator.scss` / `.cyl-table`, `.cyl-table td` | `12–12.5px` | `14px` |
| `_toric-calculator.scss` / `.btn-calc`, `.btn-clear` | `14px` | `15px` |
| `_toric-calculator.scss` / `.btn-print`, `.btn-email` | `13px` | `15px` |
| `nextPage.js` / methodology description inline style | `14px` | `16px` |
| `nextPage.js` / rotation helper inline style | `12px` | `14px` |
| `nextPage.js` / `small` range hints with `opacity:0.6` | inherited small text + 60% opacity | `14px`, full-opacity AA muted token |
| `contactUs.html` / form success description | `13px` | `16px` |
| `contactUs.html` / “Send another” button | `13px` | `15px` |

## Footer and gallery

| File / selector | Old value | New value |
|---|---:|---:|
| `_footer.scss` / `.footer-bottom`, `.footer-bottom-f` | `12px` | `14px` |
| `_footer.scss` / `.footer-link` | `13px` and `rgba(30,50,80,.7)` | `16px`, AA muted token |
| `_footer.scss` / footer column headings | `0.75rem–0.78rem` | `14px` |
| `_footer.scss` / `.au-footer-brand-sub` | `0.7rem` | `14px` |
| `_footer.scss` / `.au-footer-tagline`, `.au-footer-link`, `.au-footer-contact-item span` | `0.82rem–0.83rem` | `16px` |
| `_footer.scss` / `.au-footer-bottom` | `0.75rem` | `14px` |
| `index.html` Tailwind footer `.text-sm` | `14px` | `16px` |
| `_sections.scss` / `.col-scroll__title` | `12px` (and `11px` mobile) | `14px` |
| `_sections.scss` / `.col-scroll__tag` | `9.5px` (and `8px` mobile) | `14px` |
| `_sections.scss` / `.lb-meta-counter` | `11px` | `14px` |
| all populated HTML pages / WhatsApp tooltip `.text-xs` | `12px` | `14px` |

## Coverage and verification

- Added `Pages/accessibility.css` after the original stylesheet on all 19 populated HTML pages.
- Updated both Sass entry points so future Sass builds retain the same fixes.
- Updated both compiled CSS files with the corrected color tokens.
- Confirmed the home page, Toric calculator, and accessibility stylesheet return HTTP 200 from the local project server.
- Confirmed both JavaScript files pass `node --check`.
- `blog.html` is empty and `otherProducts.html` is only a placeholder, so neither contains rendered typography to remediate.

