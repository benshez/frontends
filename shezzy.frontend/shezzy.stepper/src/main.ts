import process from 'process';
import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

if (process.env) {
}
const parent = document.getElementById("shezzy-stepper-container-script");
const widgetId = "shezzy-stepper";
const widget = document.createElement("div");
const options: any = parent?.dataset.options ? Object.assign({}, JSON.parse(parent.dataset.options)) : {};
const containerId = options.container || "";
const container = document.getElementById(containerId);

widget.id = widgetId;

container?.appendChild(widget);

const app = createApp(App);
app
    .provide("options", options)
    .mount(`#${widgetId}`);
