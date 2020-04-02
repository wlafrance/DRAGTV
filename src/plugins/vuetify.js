import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import light from './theme'

Vue.use(Vuetify);
// https://vuetifyjs.com/en/customization/theme/
export default new Vuetify({
    theme:{
        themes:{light},
        
    },
});
