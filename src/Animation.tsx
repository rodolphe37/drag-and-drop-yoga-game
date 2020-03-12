import * as React from "react";
import useWindowSize from "@rooks/use-window-size";
import ParticleImage, {
  ParticleOptions,
  Vector,
  forces,
  ParticleForce
} from "react-particle-image";
import "./anim-styles.css";

const particleOptions: ParticleOptions = {
  filter: ({ x, y, image }) => {
    // Get pixel
    const pixel = image.get(x, y);
    // Make a particle for this pixel if blue > 50 (range 0-255)
    return pixel.b > 50;
  },
  color: ({ x, y, image }) => "#41a627",
  radius: () => Math.random() * 1.5 + 0.5,
  mass: () => 40,
  friction: () => 0.15,
  initialPosition: ({ canvasDimensions }) => {
    return new Vector(canvasDimensions.width / 2, canvasDimensions.height / 2);
  }
};

const motionForce = (x: number, y: number): ParticleForce => {
  return forces.disturbance(x, y, 5);
};

export default function Animation() {
  const { innerWidth, innerHeight } = useWindowSize();

  return (
    <ParticleImage
      id={"particle"}
      src={"/logo.png"}
      width={Number(innerWidth)}
      height={Number(innerHeight)}
      scale={0.60}
      entropy={20}
      maxParticles={10000}
      particleOptions={particleOptions}
      mouseMoveForce={motionForce}
      touchMoveForce={motionForce}
      backgroundColor= "none"
    />
  );
}
