/* eslint-disable react/no-unknown-property */
import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";

function GradientPlane() {
  const materialRef = useRef();

  useFrame(({ clock }) => {
    materialRef.current.uniforms.time.value = clock.getElapsedTime();
  });

  return (
    <mesh scale={[20, 20, 1]}>
      <planeGeometry args={[2, 2]} />
      <shaderMaterial
        ref={materialRef}
        uniforms={{
          time: { value: 0 },
        }}
        vertexShader={`
          varying vec2 vUv;
          void main() {
            vUv = uv;
            gl_Position = vec4(position, 1.0);
          }
        `}
        fragmentShader={`
          uniform float time;
          varying vec2 vUv;

          void main() {
            // Soft but slightly more visible pastel tones
            vec3 color1 = vec3(0.90, 0.94, 1.0); // light sky blue
            vec3 color2 = vec3(1.0, 0.92, 0.95); // soft pinkish ivory
            vec3 color3 = vec3(0.88, 0.98, 0.94); // pale mint

            // Gentle animation
            float wave1 = sin(vUv.x * 2.0 + time * 0.15) * 0.5 + 0.5;
            float wave2 = cos(vUv.y * 2.0 + time * 0.2) * 0.5 + 0.5;

            // Increase blend intensity a bit
            vec3 color = mix(color1, color2, wave1 * 0.6);
            color = mix(color, color3, wave2 * 0.6);

            gl_FragColor = vec4(color, 1.0);
          }
        `}
      />
    </mesh>
  );
}

const GradientBackground = () => {
  return (
    <Canvas
      className="absolute inset-0"
      camera={{ position: [0, 0, 1], fov: 75 }}
    >
      <GradientPlane />
    </Canvas>
  );
};

export default GradientBackground;
