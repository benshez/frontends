import axios from 'axios'
import { User } from '~~/models/interfaces/user'
import { IPage } from '~~/models/interfaces/IPage'

export const usePagesStore = defineStore('PagesStore', {
  state: () => {
    return {
      storePages: Array<IPage>,
    };
  },
  getters: {
    storedPages: (state) => state.storePages
  },
  actions: {
    async getPages() {
      const z = useFetch(`/api/pages`)
      console.log(z)
    }
  },
});