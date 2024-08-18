import { RecursivePartial } from 'tsparticles-engine';
import { IOptions } from 'tsparticles-engine';

// Define your particles configuration with types
const particlesConfig: RecursivePartial<IOptions> = {
  autoPlay: true,
  background: {
    color: {
      value: '#000',
    },
    image: '',
    position: '',
    repeat: '',
    size: '',
    opacity: 1,
  },
  backgroundMask: {
    composite: 'destination-out',
    cover: {
      color: {
        value: '#fff',
      },
      opacity: 1,
    },
    enable: false,
  },
  clear: true,
  fullScreen: {
    enable: true,
    zIndex: -1,
  },
  detectRetina: true,
  fpsLimit: 120,
  interactivity: {
    detectsOn: 'window',
    events: {
      onClick: {
        enable: false,
        mode: [],
      },
      onDiv: {
        selectors: [],
        enable: false,
        mode: [],
        type: 'circle',
      },
      onHover: {
        enable: false,
        mode: [],
        parallax: {
          enable: false,
          force: 2,
          smooth: 10,
        },
      },
      resize: {
        delay: 0.5,
        enable: true,
      },
    },
    modes: {
      trail: {
        delay: 1,
        pauseOnStop: false,
        quantity: 1,
      },
      // ...other modes
    },
  },
  particles: {
    bounce: {
      horizontal: {
        value: 1,
      },
      vertical: {
        value: 1,
      },
    },
    color: {
      value: '#0ad12b',
      animation: {
        h: {
          count: 0,
          enable: true,
          speed: 10,
          sync: true,
        },
        // ...other animations
      },
    },
    // ...other particles settings
  },
  // ...other settings
};

export default particlesConfig;
