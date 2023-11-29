import { InfoCard } from './InfoCard'
import imagen1 from '../assets/icon-1.avif'
import imagen2 from '../assets/icon-2.avif'
import imagen3 from '../assets/icon-3.avif'


export const InfoSection = () => {
  return (
    <div class="flex flex-col items-center container mx-auto text-center mt-2">

    <div class="flex flex-wrap container mx-auto mt-2">
    <div class="w-full md:w-1/3 px-4 mb-4 shadow p-4">
        <img src={imagen1} className='lg:w-[40%] mx-auto mb-3'></img>
        <div class="ml-4">
            <h3 class="text-xl lg:text-3xl font-semibold">Reduce Assembly Time</h3>
            <p class="text-lg text-justify mt-2">Don't waste time putting products together! Rely on 3D printing to make complex geometries that can be printed as one piece—or consolidated in one build.</p>
        </div>
    </div>

    <div class="w-full md:w-1/3 px-4 mb-4 shadow p-4">
        <img src={imagen2} className='lg:w-[40%] mx-auto mb-3'></img>
        <div class="ml-4">
            <h3 class="text-2xl lg:text-3xl font-semibold">Fast Turnaround</h3>
            <p class="text-lg text-justify mt-2" >Working on a project for a customer that has to be just right? Get models back fast, and 3D print new iterations, if needed, for final feedback and production.</p>
        </div>
    </div>

    <div class="w-full md:w-1/3 px-4 mb-4 shadow p-4">
        <img src={imagen3} className='lg:w-[40%] mx-auto mb-3'></img>
        <div class="ml-4">
            <h3 class="text-2xl lg:text-3xl font-semibold">Reliable Quality</h3>
            <p class="text-lg text-justify mt-2">Proprietary processes, expert 3D printing operators, and inspections are our secrets to delivering exceptional, quality products every time.</p>
        </div>
    </div>
</div>



</div>

  )
}