import { Box } from '@mantine/core';
import textureImage from '../assets/OR4EJM0.jpg';

interface TextureBackgroundProps {
  opacity?: number;
  blur?: number;
  scale?: number;
  position?: 'absolute' | 'fixed';
  zIndex?: number;
}

const TextureBackground = ({ 
  opacity = 0.3, 
  blur = 2, 
  scale = 1,
  position = 'absolute',
  zIndex = 0 
}: TextureBackgroundProps) => {
  return (
    <Box
      style={{
        position,
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundImage: `url(${textureImage})`,
        backgroundSize: `${scale * 100}%`,
        backgroundPosition: 'center',
        backgroundRepeat: 'repeat',
        filter: `blur(${blur}px)`,
        opacity,
        zIndex,
        pointerEvents: 'none',
      }}
    />
  );
};

export default TextureBackground; 