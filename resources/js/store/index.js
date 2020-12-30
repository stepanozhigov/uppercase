import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        modal: false,
        success: false,
        locale: "en",
        ipLocation: null,
        geoLocation: null,
        redirectTo: "http://uppercase.group/",
        utm: {
            utm_source: false,
            utm_campaign: false,
            utm_medium: false,
            utm_content: false,
            utm_term: false, 
        }
    },
    getters: {
        isModal: state => state.modal,
        isSuccess: state => state.success,
        ipLocation: state => state.ipLocation,
        geoLocation: state => state.geoLocation,
        locale: state => state.locale,
        redirectTo: state => state.redirectTo,
        utm : state=>state.utm
    },
    mutations: {
        SET_MODAL: state => (state.modal = true),
        UNSET_MODAL: state => (state.modal = false),
        SET_SUCCESS: state => (state.success = true),
        UNSET_SUCCESS: state => (state.success = false),
        SET_IP_LOCATION: (state, ipLocation) => (state.ipLocation = ipLocation),
        SET_GEO_LOCATION: (state, geoLocation) =>
            (state.geoLocation = geoLocation),
        SET_LOCALE: (state, locale) => (state.locale = locale),
        SET_UTM: (state,payload) => {
            state.utm.utm_source = payload.utm_source,
            state.utm.utm_content = payload.utm_source,
            state.utm.utm_campaign = payload.utm_campaign,
            state.utm.utm_medium = payload.utm_medium,
            state.utm.utm_term = payload.utm_term
        }
    },
    actions: {
        setUtm: (context,utm) => {
            context.commit('SET_UTM',utm);
        },
        setModal: context => context.commit("SET_MODAL"),
        unsetModal: context => context.commit("UNSET_MODAL"),
        setSuccess: context => context.commit("SET_SUCCESS"),
        unsetSuccess: context => context.commit("UNSET_SUCCESS"),
        setIpLocation: (context, payload) =>
            context.commit("SET_IP_LOCATION", payload),
        setGeoLocation: (context, payload) =>
            context.commit("SET_GEO_LOCATION", payload),
        setLocale: (context, payload) => context.commit("SET_LOCALE", payload)
    }
});
