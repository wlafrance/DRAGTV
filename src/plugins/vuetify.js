import Vue from 'vue';
import Vuetify from 'vuetify/lib';

import 'material-design-icons-iconfont/dist/material-design-icons.css' // Ensure you are using css-loader
//import light from './theme'

Vue.use(Vuetify);
// https://vuetifyjs.com/en/customization/theme/
export default new Vuetify({
    icons:{
        iconfont:'md',
    },
    theme:{dark:true},
    // theme:{
    //     themes:{light},
        
    // },
});
