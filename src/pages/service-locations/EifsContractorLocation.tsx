import { eifsContractorData } from '../../data/service-locations/eifs-contractor'
import ServiceLocationTemplate from '../ServiceLocationTemplate'

export default function EifsContractorLocation() {
  return <ServiceLocationTemplate serviceSlug="eifs-contractor" data={eifsContractorData} />
}
