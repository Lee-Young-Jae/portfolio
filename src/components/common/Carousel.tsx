import { useCallback, useMemo, useState } from "react";
import styled from "styled-components";
import { colors } from "../../constants";
import ImageWithLoading from "./ImageWithLoading";

interface CarouselProps {
  images: { src: string; alt: string }[];
}

type Direction = "left" | "right";

const Carousel = ({ images }: CarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const { $theta, $radius } = useMemo(() => {
    const $theta = 360 / images.length;
    const $radius = 250 / Math.tan(Math.PI / images.length);

    return { $theta, $radius };
  }, [images]);

  const moveTo = useCallback(
    (index: number) => {
      setCurrentIndex(index);
    },
    [setCurrentIndex]
  );

  const move = useCallback(
    (direction: Direction) => {
      const nextIndex =
        ((direction === "right" ? 1 : -1) + currentIndex + images.length) %
        images.length;
      setCurrentIndex(nextIndex);
    },
    [currentIndex, images]
  );

  return (
    <Styled.Carousel>
      <Styled.Container
        $theta={$theta}
        $radius={$radius}
        $currentIndex={currentIndex}
      >
        {images.map((image, index) => (
          <Styled.Item
            key={index}
            $theta={$theta}
            $radius={$radius}
            $index={index}
            $currentIndex={currentIndex}
            onClick={() => moveTo(index)}
          >
            <ImageWithLoading
              src={image.src}
              alt={`carousel-${image.alt}`}
              width="400px"
              height="450px"
            />
          </Styled.Item>
        ))}
      </Styled.Container>
      <Styled.NavButton direction="left" onClick={() => move("left")} />
      <Styled.NavButton direction="right" onClick={() => move("right")} />
    </Styled.Carousel>
  );
};

const Styled = {
  Carousel: styled.div`
    position: relative;
    margin: 0 auto;
    padding: 0;
    list-style: none;
    width: 100%;
    height: 500px;
    overflow: hidden;
    perspective: 1700px;
  `,

  Container: styled.ul<{
    $theta: number;
    $radius: number;
    $currentIndex: number;
  }>`
    position: absolute;
    top: 50%;
    left: 50%;
    transform-origin: center center;
    list-style: none;
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    transform-style: preserve-3d;
    transition: transform 1s;
    transform: translate(-50%, -50%) translateZ(-${(props) => props.$radius}px)
      rotateY(${(props) => -props.$theta * props.$currentIndex}deg);
  `,

  Item: styled.li<{
    $theta: number;
    $radius: number;
    $index: number;
    $currentIndex: number;
  }>`
    position: absolute;
    top: 50%;
    left: 50%;
    transform-origin: center center;
    width: 400px;
    height: 450px;
    margin: 0;
    padding: 0;
    transform-style: preserve-3d;
    transition: transform 1s, opacity 1s;
    transform: translate(-50%, -50%)
      rotateY(${(props) => props.$theta * props.$index}deg)
      translateZ(${(props) => props.$radius}px);
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 10px;

    border: 0.6px solid rgba(12, 120, 120, 0.7);
    box-shadow: 0 0 6px rgba(255, 255, 255, 0.3);

    overflow: hidden;
    transition: scale 0.3s;
    &:hover {
      scale: 1.01;
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      /* border-radius: 10px; */
      box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
      opacity: ${(props) => (props.$index === props.$currentIndex ? 1 : 0.5)};
      filter: ${(props) =>
        props.$index === props.$currentIndex ? "none" : "grayscale(70%)"};
    }
  `,

  NavButton: styled.button<{ direction: Direction }>`
    position: absolute;
    top: 50%;
    width: 16px;
    height: 16px;
    border: none;
    cursor: pointer;
    opacity: 0.7;
    transition: opacity 0.3s;
    background-color: transparent;
    z-index: 1;

    &:hover {
      opacity: 1;
    }

    ${(props) => (props.direction === "left" ? `left: 10px;` : `right: 10px;`)}

    &::after {
      content: "";
      border-style: solid;
      border-color: ${colors.MINT_700};
      display: inline-block;
      position: absolute;
      width: 10px;
      height: 10px;
      top: 50%;
      left: 50%;
    }

    ${(props) =>
      props.direction === "left"
        ? `
      &&::after {
        border-width: 3px 3px 0 0;
        transform: translateY(-50%) rotate(-135deg);
      }
    `
        : `
     
      &&::after {
        border-width: 3px 0 0 3px;
        transform: translateY(-50%) rotate(135deg);
      }
    `}
  `,
};

export default Carousel;
