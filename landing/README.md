# MORPE — Landing page

Landing cyberpunk per il sito personale di **morpe** (Marco Fabre).
Costruita con **Tailwind CSS + HTML + vanilla JS**. Tailwind è salvato in locale
(`assets/js/tailwind.js`): la pagina funziona anche **offline** (i font di Google
caricano dal web quando c'è rete, altrimenti cadono su fallback di sistema).

## Come aprirla

```
cd landing
python3 -m http.server 8000
# poi apri http://localhost:8000
```

Oppure semplicemente doppio click su `index.html`.

## Struttura

```
landing/
├── index.html            # pagina (7 sezioni)
├── css/style.css         # layer custom: neon, glitch, scanlines, ticker, reveal
├── js/main.js            # typing, reveal, menu mobile, parallax, easter egg
└── assets/
    ├── js/tailwind.js    # Tailwind Play CDN vendored (offline)
    ├── img/
    │   ├── morpe-avatar.png               # avatar storico (South Park, 1999)
    │   ├── morpe-ghost.png                # notte — stile Ghost in the Shell
    │   ├── morpe-simp.png                 # giorno — stile Simpson
    │   └── morpe-ripara-macbook-2008.jpg  # upgrade HDD MacBook Pro, ~2008
    └── qr/               # QR dei tre corti (Spazi Vuoti, Inverti, Mamme Fuori Mercato)
```

## Sezioni

1. **Hero** — background notturno (ghost), titolo con effetto glitch, terminale typing
2. **Chi sono** — profilo + avatar storico
3. **Day / Night** — la dualità Simpson / Ghost in the Shell
4. **Le radici** — la foto del MacBook Pro 2008
5. **Esperienze** — timeline lavorativa
6. **Progetti & Audio/Video** — NENO, MediMemo, RUN + i tre corti con QR
7. **Skills & Tools** + contatti

## Easter egg 🥚

Apri la **console del browser** (Cmd+Opt+J su macOS)… c'è un messaggio dedicato.
Il resto di Night City resta dove deve stare: qui non serve.

## Note

- Le immagini ghost/simp sono ~2 MB l'una: se vuoi le ottimizzo (webp/avif +
  fallback jpg) per caricare più veloce il sito.
- I QR puntano a `q.me-qr.com` (redirect a YouTube / esenstudios): volendo si
  possono sostituire con link diretti.
- landing create con deepseek-v4-flash-free per testare Prime-angents
