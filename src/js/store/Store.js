import Preset from "../models/Preset.js";

// export const presetArray = localStorage.getItem("presetArray");
export const clothesArray = localStorage.getItem("clothesArray");

export const presetArray = JSON.parse(JSON.stringify([new Preset([1, 2, 3], 'Paris', 'Preset for Paris'), new Preset([4, 5, 6], 'Tokyo', 'Preset for Tokyo'), new Preset([7, 8, 9], 'New York', 'Preset for New York')]));