import Image, { ImageProps } from 'next/image';

export default function ImageServer(props: ImageProps) {
  const alt = props.alt ?? "";
  return <Image {...props} alt={alt} draggable={false} />;
}
