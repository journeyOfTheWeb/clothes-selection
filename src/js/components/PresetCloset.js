import { Component } from '../core/Component.js';
import Preset from './Preset.js';
import { presetArray } from '../store/Store.js';

export default class PresetCloset extends Component {
  render() {
    this.el.classList.add('preset-closet');
    this.el.append(...presetArray.map(preset => new Preset({ preset }).el));
  }
}