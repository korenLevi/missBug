export default {
    template: `
        <section class="bug-header container flex space-between align-start">
            <div>
                <h1 class="bug-title font-bold base-color" >Bugs store</h1>
            </div>
            <div class="menu-list flex justify-end align-center">
                <router-link exact to="/">Home</router-link> | 
                <router-link exact to="/bug">Bugs</router-link> | 
                <router-link to="/about">About</router-link>
            </div>
        </section>
    `,
}
