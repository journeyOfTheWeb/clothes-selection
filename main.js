import Preset from './src/js/models/Preset.js';

const clothArr = [1, 2, 3];

const newPreset = new Preset(clothArr, 'Paris', 'Preset for Paris');

console.log(JSON.stringify(newPreset));