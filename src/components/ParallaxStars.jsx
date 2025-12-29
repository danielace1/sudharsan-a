import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Stars } from "@react-three/drei";

const ParallaxStars = () => {
  const group = useRef();

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    group.current.rotation.y = t * 0.02;

    const x = state.mouse.x * 0.2;
    const y = state.mouse.y * 0.2;
    group.current.rotation.x = y;
    group.current.rotation.y += x * 0.01;
  });

  return (
    <group ref={group}>
      <Stars
        radius={120}
        depth={60}
        count={18000}
        factor={6}
        saturation={0}
        fade
        speed={1}
      />
    </group>
  );
};

export default ParallaxStars;
