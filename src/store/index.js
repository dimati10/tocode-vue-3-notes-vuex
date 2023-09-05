import { createStore } from 'vuex'

export const store = createStore({
  state: {
    user: null,
    users: [
      { id: 1, name: 'evgenii', admin: true },
      { id: 2, name: 'alex', admin: true },
      { id: 3, name: 'garry', admin: false }
    ]

  },
  mutations: {
    // чтобы задать значение в стейте
    // ...
    // -> res -> setState.user(res)
    // мутации не поддерживают асинхронные действия

    setUser(state, user) {
      // console.log('called mutation setUser');
      state.user = user;
    }
  },
  actions: {
    // сделать запросы на сервер, фильтры, условия, изменить какую-нибудь data (которая с сервера приходит)
    // вызывают мутации
    //...
    // res -> mutations(res)

    // для того чтоб обратится к мутации из экшена, нам нужно передать контекст

    // setUser(context) {
    setUser({ commit }) {
      setTimeout(() => {
        const fakeUser = {
          id: 1239214,
          name: 'denis',
          admin: false
        };
        // console.log('called action setUser');
        // context.commit('setUser', fakeUser) //здесь вызываем название мутации
        commit('setUser', fakeUser)
      }, 1000);
    }
  },
  getters: {
    isUserLogged(state) {
      return state.user ? true : false;
    },
    getUser(state) {
      return state.user;
    },
    getAllUsers(state) {
      return state.users;
    },
    getUsers(state) {
      return state.users.filter(user => !user.admin);
    },
    getUserById: state => id => state.users.find(user => user.id === id),
    getUsersLength(state, getters) {
      const suffix = 'Кол-во пользователей';
      return `${suffix} ${getters.getAllUsers.length}`;
    }
  }
})