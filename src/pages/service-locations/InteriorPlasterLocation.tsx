import { interiorPlasterData } from '../../data/service-locations/interior-plaster'
import ServiceLocationTemplate from '../ServiceLocationTemplate'

export default function InteriorPlasterLocation() {
  return <ServiceLocationTemplate serviceSlug="interior-plaster" data={interiorPlasterData} />
}
