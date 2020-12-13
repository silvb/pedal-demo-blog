import React from "react"
import styled from "styled-components"
import useDemoState from "../helpers/use-demo-state"

import BakelitKnob from "./svg/bakelit-knob"
import KnurledKnob from "./svg/knurled-knob"
import OffsetKnob from "./svg/offset-knob"
import WalrusAudioKnob from "./svg/walrus-audio-knob"

const levelToRotationMap = [
  "-150deg",
  "-120deg",
  "-90deg",
  "-60deg",
  "-30deg",
  "0deg",
  "30deg",
  "60deg",
  "90deg",
  "120deg",
  "150deg",
]

const StyledKnobContainer = styled.div`
  --rotation: ${({ rotation }) => rotation};
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  position: relative;
  z-index: ${props => (props.isSweep ? 1 : 0)};

  svg g {
    transform: rotate(var(--rotation));
    transform-origin: 50% 50%;
    transition: transform 0.2s ease-in;
  }

  > span {
    color: white;
    margin-top: 0.5rem;
  }
`

const StyledDotButton = styled.div`
  --parentSize: ${({ parentSize }) => parentSize}px;
  --dotSize: 0.7rem;
  --rotation: ${({ level }) => level};
  --spreadRadius: 1.8rem;
  --circleSize: 1.2rem;
  border-radius: 50%;
  width: var(--dotSize);
  height: var(--dotSize);
  background: var(--cyan);
  position: absolute;
  top: calc((var(--dotSize) / 2) - var(--spreadRadius));
  left: calc(50% - (var(--dotSize) / 2));
  transform-origin: calc(var(--dotSize) / 2)
    calc((var(--parentSize) - var(--dotSize)) / 2 + var(--spreadRadius));
  transform: rotate(var(--rotation));
  cursor: pointer;
  z-index: 99;
  opacity: ${props => (props.isActive ? 1 : 0.7)};

  :after {
    content: " ";
    border-radius: 50%;
    width: var(--circleSize);
    height: var(--circleSize);
    border: 2px solid var(--cyan);
    box-sizing: border-box;
    position: absolute;
    top: calc((var(--dotSize) - var(--circleSize)) / 2);
    left: calc((var(--dotSize) - var(--circleSize)) / 2);
    animation: var(--blinkAnimation);
    animation-iteration-count: 3;
    z-index: 99;
  }
`

const Knob = ({
  id = "",
  size = 64,
  level = 5,
  type = "bakelit",
  levelOptions = [],
}) => {
  const { sweepSetting, setSweepSetting, setIsPedalOn } = useDemoState()

  return (
    <StyledKnobContainer
      rotation={levelToRotationMap[level]}
      id={id}
      isSweep={levelOptions.length > 0}
    >
      {
        {
          bakelit: <BakelitKnob size={size} />,
          knurled: <KnurledKnob size={size} />,
          offset: <OffsetKnob size={size} />,
          walrus: <WalrusAudioKnob size={size} />,
        }[type]
      }
      {levelOptions.map(levelOption => (
        <StyledDotButton
          key={levelOption}
          parentSize={size}
          isActive={levelOption === sweepSetting[id]}
          onClick={() => {
            setSweepSetting({ [id]: levelOption })
            setIsPedalOn(true)
          }}
          level={levelToRotationMap[levelOption]}
        />
      ))}
    </StyledKnobContainer>
  )
}

export default Knob
