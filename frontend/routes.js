import HomePage from './pages/HomePage.js'

import BugApp from './pages/Bug/BugApp.js'
import BugEdit from './pages/Bug/BugEdit.js'
import BugDetails from './pages/Bug/BugDetails.js'

const AboutPage = {
    template: `
    <section class="has-text-centered">
        <p class="title">About Us</p>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit omnis nam veniam repellendus recusandae nisi, illo quia, porro magnam consequatur ab mollitia. Deserunt, delectus consequuntur voluptate dolorum quos quam assumenda.</p>
        <div class="tabs">
            <ul>
                <li class="is-active"><a>Nothing</a></li>
                <li><a>Events</a></li>
                <li><a>Videos</a></li>
            </ul>
        </div>    
    </section>
    `
}


const myRoutes = [
    { path: '/', component: HomePage },
    { path: '/about', component: AboutPage },
    { path: '/bug', component: BugApp },
    { path: '/bug/edit', component: BugEdit },
    { path: '/bug/:bugId/edit', component: BugEdit },
    { path: '/bug/:bugId', component: BugDetails },
];


Vue.use(VueRouter);
const myRouter = new VueRouter({ routes: myRoutes })

export default myRouter;
