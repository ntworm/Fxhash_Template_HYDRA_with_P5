# FXHASH Template: Hydra.js + p5.js

> [!NOTE]
> Historical project from 2022. Kept online as a record of an early generative-art experiment; no active maintenance is planned.
> Dependencies are preserved at their historical versions; do not use this repository as a new production starter.

A small FXHASH/Webpack template for combining **Hydra.js** visuals with a **p5.js** canvas. It renders Hydra into an off-screen canvas and uses that output as a texture inside p5.js.

## Run locally

```bash
npm install
npm start
```

Create a production build with:

```bash
npm run build
```

The main example lives in [`public/index.js`](public/index.js). Canvas dimensions and the Hydra/p5 sketches can be changed there.

## Credits

Created by [Gabriel Worm](https://github.com/ntworm) for the xDeads PFP project on FXHASH. The original Hydra example was adapted from work by `@dead_marcelo`.

Vendored copies of p5.js, Hydra.js, and other dependencies remain subject to their respective licenses.

## License

The original template code and documentation are source-available under the [PolyForm Noncommercial License 1.0.0](LICENSE): use, modification, and redistribution are permitted for noncommercial purposes.

See more generative work at [fxhash.xyz/u/nt_worm](https://www.fxhash.xyz/u/nt_worm).
