import navMutations from "./nav/navMutaion";
import navActions from "./nav/navAction";
export const state = () => ({
    num: 0
}); 
    
export const mutations = navMutations;
export const actions = navActions;
export const getters = {
  getNum: (state) => {
    return state.num
  },
  getLoginInfo(){
    try {    
        return localStorage.getItem('loginInfor');
    } catch (error) {
        return null;

    }
  }
}