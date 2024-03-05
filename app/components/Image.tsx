export const Image = ({ src, alt }: { src: string; alt: string }) => {
  return <img src={src} alt={alt} className="bg-cover" />;
};
