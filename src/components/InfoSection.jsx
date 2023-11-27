import { InfoCard } from './InfoCard'
import imagen1 from '../assets/icon-1.avif'
import imagen2 from '../assets/icon-2.avif'
import imagen3 from '../assets/icon-3.avif'


export const InfoSection = () => {
  return (
    <div className="grid grid-cols-1 container mx-auto md:grid-cols-3 gap-8 to-gray-800 pb-10 text-white animate__animated animate__fadeInDown z-10">

        <InfoCard
            title="Reduce Assembly Time"
            image={imagen1}
            desc="Don't waste time putting products together! Rely on 3D printing to make complex geometries that can be printed as one piece—or consolidated in one build.">
        </InfoCard>

        <InfoCard
            title="Fast Turnaround"
            image={imagen2}
            desc="Working on a project for a customer that has to be just right? Get models back fast, and 3D print new iterations, if needed, for final feedback and production.">
        </InfoCard>

        <InfoCard
            title="Reliable Quality"
            image={imagen3}
            desc="Proprietary processes, expert 3D printing operators, and inspections are our secrets to delivering exceptional, quality products every time.">
        </InfoCard>
    </div>
  )
}