import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { Loader } from '../componentes/Loader'
import Island from '../models/Island'
import { Point } from '@react-three/drei'
import { Sky } from '../models/Sky'

{/*   <div className='absolute top-28 left-0 right-0 z-10 flex items-center justify-center' >
        ASDASD
      </div>
 */}

export const Home = () => {
  const adjustIsIslandForScreenSize = () => {
    let screenScale = null;
    let screenPosition = [0, -6.5, -43];
    let rotation = [0.1, 4.7, 0];

    if (window.innerWidth < 768) {
      screenScale = [0.9, 0.9, 0.9];
    } else {
      screenScale = [1, 1, 1];

    }
    return [screenScale, screenPosition, rotation];
  }

  const [islandScale, islandPosition, islandRotation] = adjustIsIslandForScreenSize();


  return (
    <section className='w-full h-screen relative' >
      <Canvas
        className="w-full h-screen bg-transparent"
        camara={{ near: 0.1, far: 1000 }}
      >
        <Suspense fallback={<Loader />}>
          <ambientLight intensity={0.5}/>
          <directionalLight position={[1,1,1]} intensity={2} />
          <hemisphereLight skyColor="#b1e1ff" groundColor={"#000000" } intensity={1} />


          <Sky />
          <Island
            position={islandPosition}
            scale={islandScale}
            rotation={islandRotation}
          />

        </Suspense>

      </Canvas>



    </section>
  )
}
