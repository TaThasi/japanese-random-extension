// stores/user.ts
import { defineStore } from 'pinia';

export const useUserStore = defineStore('user', {
  state: () => ({
    user: {
        id: '',
        name: '',
        email: '',
    },
    atToken: '',
    rtToken: '',
  }),
  actions: {
    setUser(user: any) {
      this.user = user;
    },
    setAtToken(token: string) {
      this.atToken = token;
    },
    setRtToken(token: string) {
      this.rtToken = token;
    }
  }
});
