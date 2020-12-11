import React from "react"
import styled from "styled-components"

const StyledGradientBackground = styled.div`
  position: relative;
  --size: ${props => props.size - 4}px;

  &:before {
    position: absolute;
    content: " ";
    width: var(--size);
    height: var(--size);
    top: 2px;
    left: 2px;
    background: conic-gradient(
      from 120deg,
      #8a8a8a,
      #fff,
      #fff,
      #8a8a8a,
      #fff,
      #fff,
      #8a8a8a
    );
    border-radius: 50%;
    z-index: -1;
  }
`

const BakelitKnob = ({ size = 64 }) => (
  <StyledGradientBackground size={size}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 64 64"
    >
      <g fill="none">
        <path
          fill="#131313"
          stroke="#444"
          d="M38.8870712,1.95097987 C40.3239471,2.89663916 41.9920518,3.43139794 43.7109255,3.49740462 L43.7488508,3.49886099 C45.4094041,3.5626281 46.960309,4.34478483 47.9987217,5.64216786 C49.0680993,6.9782382 50.4848977,7.99386678 52.0936044,8.57757491 L52.1423883,8.59527584 C53.6966874,9.15924255 54.9258473,10.3759028 55.505671,11.9243565 C56.1030689,13.5197432 57.1323614,14.9175678 58.4785131,15.9616074 L58.5149093,15.9898353 C59.8178765,17.000382 60.6077916,18.5349774 60.6730867,20.1826013 C60.7403984,21.8811105 61.2823171,23.526772 62.2373811,24.932943 L62.2500293,24.9515654 C63.1770496,26.316447 63.4500258,28.0225414 62.9951461,29.6085279 C62.5260191,31.2441891 62.5260191,32.9787696 62.9951461,34.6144308 C63.4500258,36.2004172 63.1770496,37.9065117 62.2500293,39.2713933 L62.2373811,39.2900156 C61.2823171,40.6961867 60.7403984,42.3418482 60.6730867,44.0403573 C60.6077916,45.6879813 59.8178765,47.2225767 58.5149093,48.2331234 L58.4785131,48.2613513 C57.1323614,49.3053908 56.1030689,50.7032154 55.505671,52.2986022 C54.9258473,53.8470558 53.6966874,55.0637161 52.1423883,55.6276828 L52.0936044,55.6453837 C50.4848977,56.2290919 49.0680993,57.2447205 47.9987217,58.5807908 C46.960309,59.8781738 45.4094041,60.6603305 43.7488508,60.7240977 L43.7109255,60.725554 C41.9920518,60.7915607 40.3239471,61.3263195 38.8870712,62.2719788 C37.4914918,63.1904594 35.7669921,63.4607975 34.1572985,63.0134331 L34.1479932,63.0108469 C32.4843987,62.5485025 30.7262259,62.5485025 29.0626315,63.0108469 L29.0533262,63.0134331 C27.4436325,63.4607975 25.7191328,63.1904594 24.3235534,62.2719788 C22.8866776,61.3263195 21.2185729,60.7915607 19.4996992,60.725554 L19.4617739,60.7240977 C17.8012206,60.6603305 16.2503156,59.8781738 15.211903,58.5807908 C14.1425253,57.2447205 12.725727,56.2290919 11.1170203,55.6453837 L11.0682363,55.6276828 C9.51393722,55.0637161 8.28477731,53.8470558 7.70495365,52.2986022 C7.10755574,50.7032154 6.07826327,49.3053908 4.73211152,48.2613513 L4.69571535,48.2331234 C3.39274816,47.2225767 2.60283311,45.6879813 2.53753796,44.0403573 C2.47022625,42.3418482 1.92830755,40.6961867 0.973243599,39.2900156 L0.960595398,39.2713933 C0.0335750225,37.9065117 -0.239401128,36.2004172 0.21547856,34.6144308 C0.684605551,32.9787696 0.684605551,31.2441891 0.21547856,29.6085279 C-0.239401128,28.0225414 0.0335750225,26.316447 0.960595398,24.9515654 L0.973243599,24.932943 C1.92830755,23.526772 2.47022625,21.8811105 2.53753796,20.1826013 C2.60283311,18.5349774 3.39274816,17.000382 4.69571535,15.9898353 L4.73211152,15.9616074 C6.07826327,14.9175678 7.10755574,13.5197432 7.70495365,11.9243565 C8.28477731,10.3759028 9.51393722,9.15924255 11.0682363,8.59527584 L11.1170203,8.57757491 C12.725727,7.99386678 14.1425253,6.9782382 15.211903,5.64216786 C16.2503156,4.34478483 17.8012206,3.5626281 19.4617739,3.49886099 L19.4996992,3.49740462 C21.2185729,3.43139794 22.8866776,2.89663916 24.3235534,1.95097987 C25.7191328,1.03249923 27.4436325,0.762161149 29.0533262,1.20952558 L29.0626315,1.21211171 C30.7262259,1.67445618 32.4843987,1.67445618 34.1479932,1.21211171 L34.1572985,1.20952558 C35.7669921,0.762161149 37.4914918,1.03249923 38.8870712,1.95097987 Z M31.6053123,6.15592377 C17.1879973,6.15592377 5.50045422,17.697028 5.50045422,31.9337015 C5.50045422,46.1703751 17.1879973,57.7114793 31.6053123,57.7114793 C46.0226274,57.7114793 57.7101704,46.1703751 57.7101704,31.9337015 C57.7101704,17.697028 46.0226274,6.15592377 31.6053123,6.15592377 Z"
        />
        <rect width="3" height="6" x="32" y="1" fill="#FFF" />
      </g>
    </svg>
  </StyledGradientBackground>
)

export default BakelitKnob