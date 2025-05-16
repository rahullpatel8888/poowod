
import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';
import EarthModel from './EarthModel';
import Loading from '../Loading';

export function Earth({ isMobile }) {
  return (
    <>
      {!isMobile && (
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
          enableDamping={true}
          dampingFactor={0.05}
          enablePan={false}
          enableRotate={true}
          makeDefault
        />
      )}
      <Suspense fallback={<Loading />}>
        <EarthModel scale={2.2} position={[0, 0, 0]} />
      </Suspense>
    </>
  );
}

export function EarthContainer({ isMobile }) {
  return (
    <Canvas
      dpr={[1, 2]}
      gl={{
        outputColorSpace: THREE.SRGBColorSpace,
        alpha: true,
      }}
      className="cursor-pointer"
    >
      <Earth isMobile={isMobile} />
    </Canvas>
  );
}
