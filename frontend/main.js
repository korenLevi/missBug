'use strict'

import myRouter from './routes.js'
import myStore from './store/store.js';
import UserMsg from './cmps/UserMsg.js'
import NavBar from './cmps/NavBar.js'

new Vue({
    template: `
        <section>
                <NavBar></NavBar>
                <user-msg></user-msg>
                <router-view></router-view>
        </section>
    `,
    created() {
        console.log('Vue App was created!!!');
    },
    components: {
        UserMsg,
        NavBar
    },
    router: myRouter,
    store: myStore
}).$mount('#app')