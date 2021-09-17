const state = {
    user: {
        name: '',
        mail: '',
        token: ''
    },
    isConnected: false
    //sessionStorage.getItem('USER') ? JSON.parse(sessionStorage.getItem('USER')) : 
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
    },
    logout(state) {
        state.user = {};
        state.isConnected = false;
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