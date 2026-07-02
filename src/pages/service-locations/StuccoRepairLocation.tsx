import { stuccoRepairData } from '../../data/service-locations/stucco-repair'
import ServiceLocationTemplate from '../ServiceLocationTemplate'

export default function StuccoRepairLocation() {
  return <ServiceLocationTemplate serviceSlug="stucco-repair" data={stuccoRepairData} />
}
