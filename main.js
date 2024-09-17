import { markup as firstStepMarkup } from "./js/firstStep";
import { markup as secondStepMarkup } from "./js/secondStep";
import { markup as thirdStepMarkup } from "./js/thirdStep";

import "./styles.scss";
import Swiper from "swiper";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

document.addEventListener("DOMContentLoaded", () => {
  let state = {
    step: 1,
    sound: true,
  };

  const initializeSwiper = () => {
    const swiperElement = document.querySelector(".swiper");
    if (swiperElement) {
      new Swiper(swiperElement, {
        modules: [Navigation],
        slidesPerView: "auto",
        loop: true,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });
    }
  };

  const render = () => {
    if (state.step === 1) {
      document.querySelector("#app").innerHTML = `
        <div class='layout'>
          <div class='sound'>
            <img width='100%' height='100%' src='/popovych_ivan/assets/svg/sound.svg'>
          </div>
          ${firstStepMarkup}
        </div>
      `;
    } else if (state.step === 2) {
      document.querySelector("#app").innerHTML = `
        <div class='layout'>
        <div class='sound'>
          <img width='100%' height='100%' src='/popovych_ivan/assets/svg/sound.svg'>
        </div>
        ${secondStepMarkup}
          </div>
      `;
    } else if (state.step === 3) {
      document.querySelector("#app").innerHTML = `
        <div class='layout'>
        <div class='sound'>
          <img width='100%' height='100%' src='/popovych_ivan/assets/svg/sound.svg'>
        </div>
        ${thirdStepMarkup}
          </div>
      `;
    }

    const sound = document.querySelector(".sound");
    if (sound) {
      sound.addEventListener("click", toggleSound);
    }

    const step1Button = document.querySelector("#step1-btn");
    if (step1Button) {
      step1Button.addEventListener("click", gotoStep2);
    }
    const step2Button = document.querySelector("#step2-btn");
    if (step2Button) {
      step2Button.addEventListener("click", gotoStep3);
    }
    initializeSwiper();
  };

  const toggleSound = () => {
    state.sound = !state.sound;
    const sound = document.querySelector(".sound");
    if (sound) {
      sound.classList.toggle("sound_inactive");
    }
  };

  const gotoStep2 = () => {
    state.step = 2;
    render();
  };
  const gotoStep3 = () => {
    state.step = 3;
    render();
  };
  render();
});
