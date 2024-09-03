import { ImgHTMLAttributes, useState } from "react";
import styled, { keyframes } from "styled-components";
import { colors } from "../../constants";

interface ImageWithPlaceholderProps
  extends ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  width?: string;
  height?: string;
}

const ImageWithLoading = ({
  src,
  alt,
  width,
  height,
  ...props
}: ImageWithPlaceholderProps) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <Styled.ImageWithPlaceholder>
      {!isLoaded && (
        <Styled.Loading $width={width} $height={height}>
          <Styled.LoadingIndicator />
        </Styled.Loading>
      )}
      <Styled.Image
        src={src}
        alt={alt}
        onLoad={() => setIsLoaded(true)}
        isLoaded={isLoaded}
        width={width}
        height={height}
        {...props}
      />
    </Styled.ImageWithPlaceholder>
  );
};

const Keyframes = {
  spin: keyframes`
    to {
      transform: rotate(360deg);
    }
  `,
};

const Styled = {
  ImageWithPlaceholder: styled.div`
    /* position: relative; */
  `,

  Loading: styled.div<{ $width?: string; $height?: string }>`
    position: absolute;
    inset: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    width: ${({ $width }) => $width || "100%"};
    height: ${({ $height }) => $height || "100%"};
  `,

  LoadingIndicator: styled.div`
    width: 50px;
    height: 50px;
    border: 4px solid ${colors.WHITE};
    border-top-color: transparent;
    border-radius: 50%;
    animation: ${Keyframes.spin} 1s linear infinite;
  `,

  Image: styled.img<{ isLoaded: boolean }>`
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: opacity 0.5s;
    opacity: ${({ isLoaded }) => (isLoaded ? 1 : 0)};
  `,
};

export default ImageWithLoading;
