import * as esbuild from 'esbuild';

async function build() {
  await esbuild.build({
    entryPoints: ['server.ts'],
    bundle: true,
    platform: 'node',
    format: 'cjs',
    outfile: 'dist/server.cjs',
    external: ['vite', 'express', 'path', 'url'], // Vite and Express are handled in production differently sometimes but for now this is fine
    // However, for Cloud Run, we should bundle everything that isn't in node_modules if possible
    packages: 'external',
  });
}

build().catch((err) => {
  console.error(err);
  process.exit(1);
});
