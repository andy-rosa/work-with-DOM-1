'use strict';

const buttonThemeLight = document.querySelector('.theme-button-light');
const buttonThemeDark = document.querySelector('.theme-button-dark');
const buttonThemeTexture = document.querySelector('.theme-button-texture');


const buttonThemeLightHandler = () => {
  document.documentElement.dataset['themeName'] = 'light';
};

const buttonThemeDarkHandler = () => {
  document.documentElement.dataset['themeName'] = 'dark';
};

const buttonThemeTextureHandler = () => {
  document.documentElement.dataset['themeName'] = 'texture';
};

const init = () => {
  buttonThemeLight.addEventListener('click', buttonThemeLightHandler);
  buttonThemeDark.addEventListener('click', buttonThemeDarkHandler);
  buttonThemeTexture.addEventListener('click', buttonThemeTextureHandler);
};

init();