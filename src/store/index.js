import {
  createStore
} from 'vuex'

export default createStore({
  state: {
    // 全局loading
    spinning: false,
    // 假装账号相关
    token: "",
    userId: "",
    userRole: "",
    loginName: "",
    modelCodes: [],
  },
  mutations: {
    // 全局loading
    changeSpinning(state, load) {
      state.spinning = load
    },
    // token
    set_token(state, userObj) {
      state.token = userObj.token;
      state.userId = userObj.userId;
      state.userRole = userObj.userRole;
      state.loginName = userObj.loginName;
      state.modelCodes = userObj.modelCodes;
      sessionStorage.setItem('token', userObj.token)
      sessionStorage.setItem('userId', userObj.userId)
      sessionStorage.setItem('userRole', userObj.userRole)
      sessionStorage.setItem('loginName', userObj.loginName)
      sessionStorage.setItem('modelCodes', JSON.stringify(userObj.modelCodes))
    },
    del_token(state) {
      state.token = "";
      state.userId = "";
      state.userRole = "";
      state.loginName = "";
      state.modelCodes = "";
      sessionStorage.removeItem('token')
      sessionStorage.removeItem('userId')
      sessionStorage.removeItem('userRole')
      sessionStorage.removeItem('loginName')
      sessionStorage.removeItem('modelCodes');
    },
  },
  actions: {},
  modules: {}
})