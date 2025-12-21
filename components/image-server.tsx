import Image, { ImageProps } from 'next/image';

/**
 * Server component wrapper for Next.js Image
 * Use this instead of ImageSkeleton for static images to reduce client-side JavaScript
 */
export default function ImageServer(props: ImageProps) {
  // Ensure alt prop is always present, use empty string if not provided
  const alt = props.alt ?? "";
  return <Image {...props} alt={alt} />;
}
