import type { ServiceLocationData } from './serviceLocationTypes'
import { residentialStuccoData } from './service-locations/residential-stucco'
import { commercialStuccoData } from './service-locations/commercial-stucco'
import { stuccoRepairData } from './service-locations/stucco-repair'
import { eifsContractorData } from './service-locations/eifs-contractor'
import { interiorPlasterData } from './service-locations/interior-plaster'
import { thinStoneVeneerData } from './service-locations/thin-stone-veneer'

export type { ServiceLocationData }

export const allServiceLocations: ServiceLocationData[] = [
  ...residentialStuccoData,
  ...commercialStuccoData,
  ...stuccoRepairData,
  ...eifsContractorData,
  ...interiorPlasterData,
  ...thinStoneVeneerData,
]
