'use strict';

const SettingType = {
  ATTRIBUTE: 'attribute',
  CLASS: 'class',
};

const containers = document.querySelectorAll('.js-buttons-container');

const settingButtons = document.querySelectorAll('[data-setting-name]');

const setDataAttribute = ({settingTarget}, params) => {
  const element = document.querySelector(settingTarget);
  for (const [key, value] of Object.entries(params)) {
    element.dataset[key] = value;
  }
};

const setClass = ({settingTarget}, params) => {
  const element = document.querySelector(settingTarget);

  for (const [key, value] of Object.entries(params)) {
    const elements = Array.from(settingButtons)
      .filter((element) => element.dataset['settingName'] === key);
    elements.forEach((item) => element.classList.remove(item.dataset.settingValue));

    element.classList.add(value);
  }
};

const setButtonActive = (params) => {
  for (const [key, value] of Object.entries(params)) {
    const activeButton = Array.from(settingButtons)
      .find((element) => element.dataset['settingName'] === key && element.classList.contains('active'));

    const setButton = Array.from(settingButtons)
      .find((element) => element.dataset['settingName'] === key && element.dataset['settingValue'] === value);

    activeButton.classList.remove('active');
    setButton.classList.add('active');
  }
};

const applySetting = (setting, params) => {
  if (setting.settingType === SettingType.CLASS) {
    setClass(setting, params);
  } else if (setting.settingType === SettingType.ATTRIBUTE) {
    setDataAttribute(setting, params);
  }

  setButtonActive(params);
};

const settingButtonClickHandler = (evt, setting) => {
  const button = evt.target.closest('button');

  if (!button) {
    return;
  }

  const params = {};

  const {settingName, settingValue}  = button.dataset;
  params[settingName] = settingValue;

  applySetting(setting, params);
};

const init = () => {
  containers.forEach((container) => {
    const setting = container.dataset;

    container.addEventListener('click', (evt) => {
      settingButtonClickHandler(evt, setting);
    });
  });
};

init();