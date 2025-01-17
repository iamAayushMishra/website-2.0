import React from 'react';


interface DottedButtonProps {
  src: string;
  alt: string;
  href?: string;
  className?: string;
  target?: string;
  size?: string; // Optional size prop to control the image size dynamically
}

const DottedButton: React.FC<DottedButtonProps> = ({ src, alt, href, className = '', size = 'w-32 h-32' }) => {
  const imageContent = (
    <img
      src={src}
      alt={alt}
      className={`rounded-2xl border-2 border-dashed border-black bg-transparent transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_black] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none object-contain ${size} ${className}`}
    />
  );

  // If an href is provided, wrap the image in an anchor tag with target="_blank"
  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer">
        {imageContent}
      </a>
    );
  }

  // If no href, just return the image
  return imageContent;
};

export default DottedButton;
