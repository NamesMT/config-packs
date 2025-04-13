import { bundleConfigPack } from 'config-rocket'
import { resolve } from 'pathe'

async function entry() {
  const outDir = resolve(import.meta.dirname, '../dist')

  // Add as much `bundleConfigPack` as you want here

  await bundleConfigPack({
    frameDir: resolve(import.meta.dirname, 'roo-rocket-troops/main/frame'),
    fuelDir: resolve(import.meta.dirname, 'roo-rocket-troops/@fuel-garage'),
    outDir,
    outName: 'main',
  })
}
await entry()
