const initialState = {
  people: []
};

export const state = () => initialState;

export const mutations = {
  setPeople(state, value) {
    state.people = value;
  }
};

export const actions = {
  async get({ commit }, params) {
    let {
      data: { results }
    } = await this.$axios.get(`https://swapi.dev/api/people`, params);

    commit("setPeople", results);
  }
};
