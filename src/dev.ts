import { resolve } from 'pathe'
import { startDevelopmentCycle } from '~/helpers/dev'

async function entry() {
  // Change your target dev subject here:
  const targetDevSubject = resolve(import.meta.dirname, 'roo-rocket-troops/main')
  const fuelDir = resolve(import.meta.dirname, 'roo-rocket-troops/@fuel-garage')
  const devDir = resolve(import.meta.dirname, '../.config-dev')

  await startDevelopmentCycle({
    targetDevSubject,
    fuelDir,
    devDir,
  })
}
await entry()
