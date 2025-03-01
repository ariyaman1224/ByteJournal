import { IKImage } from "imagekitio-react";

interface ImageProps {
  src: string;
  className?: string;
  w?: number | string;
  h?: number | string;
  alt: string;
}

const Image: React.FC<ImageProps> = ({ src, className, w, h, alt }) => {
  return (
    <IKImage
      urlEndpoint={import.meta.env.VITE_IMAGEKIT_URL_ENDPOINT || ""}
      path={src}
      className={className}
      loading="lazy"
      lqip={{ active: true, quality: 20 }}
      alt={alt}
      width={w}
      height={h}
    />
  );
};

export default Image;
