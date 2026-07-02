import { commercialStuccoData } from '../../data/service-locations/commercial-stucco'
import ServiceLocationTemplate from '../ServiceLocationTemplate'

export default function CommercialStuccoLocation() {
  return <ServiceLocationTemplate serviceSlug="commercial-stucco" data={commercialStuccoData} />
}
