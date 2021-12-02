#!/usr/bin/env node
import esbuild from 'esbuild';
import { sassPlugin } from 'esbuild-sass-plugin';

esbuild
    .build({
      plugins: [
        sassPlugin({
          includePaths: [ 'scss_utils', ],
        }),
      ],
      outdir: 'dist',
      entryPoints: ['src/a.scss'],
      sourcemap: true,
      metafile: true,
    })
    .catch((e) => console.error('esbuild', e.message));