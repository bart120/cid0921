const state = {
    /*user: {
        name: '',
        mail: '',
        token: ''
    },
    isConnected: false*/

    user: sessionStorage.getItem('USER') ? JSON.parse(sessionStorage.getItem('USER')) : null,
    isConnected: sessionStorage.getItem('USER') != null
}

const getters = {
    user(state) {
        return state.user;
    },
    isConnected(state) {
        return state.isConnected;
    }
}

const mutations = {
    login(state, payload) {
        state.user = payload;
        state.isConnected = true;
        sessionStorage.setItem('USER', JSON.stringify(payload));
    },
    logout(state) {
        state.user = {};
        state.isConnected = false;
        sessionStorage.removeItem('USER');
    }
}

const actions = {
    login: async (context, login, password) => {
        //appel serveur async
        const u = { name: 'Bob', mail: login, token: 'DSGQFGZ356Y4ERHGF' };
        //sessionStorage.setItem('USER', JSON.stringify(u));
        context.commit('login', u);
    },
    logout: async ({ commit }) => {
        commit('logout');
    }
}

export default {
    state, getters, mutations, actions
}