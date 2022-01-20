// import Head from 'next/head'

import Layout from '../components/Layaout'
import Particles from "react-tsparticles";
import { useState } from 'react';
import style from '../styles/ParticlesTheme.module.scss'


export default function particlesTheme() {
  const particlesInit = (main) => {
    console.log(main);

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
  };

  const particlesLoaded = (container) => {
    console.log(container);
  };
  
  const [speed, setSpeed] = useState(5);
  const [opacity, setOpacity] = useState(0.5);
  const [size, setSize] = useState(5);

  return (
    <Layout>
    <div className={style.panel}>
        <label>Speed</label>
        <input
          type="range"
          name=""
          id=""
          onChange={(e) => setSpeed(e.target.value / 10)}
        />
        <label>Opacity</label>
        <input
          type="range"
          name=""
          id=""
          onChange={(e) => setOpacity(e.target.value / 100)}
        />

        <label>Size</label>
        <input
          type="range"
          name=""
          id=""
          onChange={(e) => setSize(e.target.value / 5)}
        />
      </div>
      <div className={style.wrapper}>
      <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        background: {
          color: {
            value: "#278256",
          },
        },
        fpsLimit: 60,
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: "push",
            },
            onHover: {
              enable: true,
              mode: "repulse",
            },
            resize: true,
          },
          modes: {
            bubble: {
              distance: 400,
              duration: 2,
              opacity: 0.8,
              size: 40,
            },
            push: {
              quantity: 4,
            },
            repulse: {
              distance: 200,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: "#ffffff",
          },
          links: {
            color: "#ffffff",
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1,
          },
          collisions: {
            enable: true,
          },
          move: {
            direction: "none",
            enable: true,
            outMode: "bounce",
            random: false,
            speed: speed,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 80,
          },
          opacity: {
            value: opacity,
          },
          shape: {
            type: "circle",
          },
          size: {
            random: true,
            value: size,
          },
        },
        detectRetina: true,
      }}
    />
    </div>
    </Layout>
    

  )
}
