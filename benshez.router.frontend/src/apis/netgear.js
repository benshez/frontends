import axios from "axios";
const host = import.meta.env.VITE_APIHOST;

export default {
  async getAbout() {
    let data = await axios.get(`${host}/discover`);
    return data.data;
  },
  async getAttachedDevices() {
    let data = await axios.get(`${host}/attachedDevices`);
    return data.data;
  },
  async allowOrBlockDevice(payload) {
    let data = await axios.post(`${host}/allowOrBlockDevice`, payload);
    return data.data;
  }  
};
