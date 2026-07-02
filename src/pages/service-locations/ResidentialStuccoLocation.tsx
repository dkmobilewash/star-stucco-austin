import { residentialStuccoData } from '../../data/service-locations/residential-stucco'
import ServiceLocationTemplate from '../ServiceLocationTemplate'

export default function ResidentialStuccoLocation() {
  return <ServiceLocationTemplate serviceSlug="residential-stucco" data={residentialStuccoData} />
}
