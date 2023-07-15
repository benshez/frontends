
import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import IOptions from './interfaces/options/IOptions'


const parent = document.getElementById("shezzy-stepper-container-script");
const widgetId = "shezzy-stepper";
const widget = document.createElement("div");
const options: IOptions = parent?.dataset.options ? Object.assign({}, JSON.parse(parent.dataset.options)) : {};
const containerId = options.container || "";
const container = document.getElementById(containerId);

widget.id = widgetId;

container?.appendChild(widget);

const app = createApp(App);
app
    .provide("options", options)
    .mount(`#${widgetId}`);
