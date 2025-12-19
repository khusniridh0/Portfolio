import Image, { ImageProps } from 'next/image';

/**
 * Server component wrapper for Next.js Image
 * Use this instead of ImageSkeleton for static images to reduce client-side JavaScript
 */
export default function ImageServer(props: ImageProps) {
  return <Image {...props} />;
}
