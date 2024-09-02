import {useRef, useEffect} from 'react'
import birdScene from '../assets/3d/bird.glb'
import { useGLTF, useAnimations } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

export const Bird = () => {
  const {scene, animations} = useGLTF(birdScene)
  const BirdRef = useRef()
  const {actions} = useAnimations(animations, BirdRef)

  useEffect(() => {
    actions['Take 001'].play()
  }, [])

 
  useFrame(({ clock, camera }) => {
    // Update the Y position to simulate bird-like motion using a sine wave
    BirdRef.current.position.y = Math.sin(clock.elapsedTime) * 0.2 + 2;

    // Check if the bird reached a certain endpoint relative to the camera
    if (BirdRef.current.position.x > camera.position.x + 10) {
      // Change direction to backward and rotate the bird 180 degrees on the y-axis
      BirdRef.current.rotation.y = Math.PI;
    } else if (BirdRef.current.position.x < camera.position.x - 10) {
      // Change direction to forward and reset the bird's rotation
      BirdRef.current.rotation.y = 0;
    }

    // Update the X and Z positions based on the direction
    if (BirdRef.current.rotation.y === 0) {
      // Moving forward
      BirdRef.current.position.x += 0.05;
      BirdRef.current.position.z -= 0.05;
    } else {
      // Moving backward
      BirdRef.current.position.x -= 0.05;
      BirdRef.current.position.z += 0.05;
    }
  });


  return (
    <mesh position={[-5,2,1]} scale={[0.003, 0.003,0.003]} ref={BirdRef} >
      <primitive object={scene} />
      
    </mesh>
  )
}
