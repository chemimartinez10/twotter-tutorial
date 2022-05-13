import { createRouter, createWebHistory } from "vue-router"
import store from "../store"
import { users } from "../assets/users"

import Home from "../views/Home.vue"

const routes = [
	{ name: "home", path: "/", component: Home },
	{
        name:"profile",
		path: "/user-profile/:userId",
		component: () => import("../views/UserProfile.vue"),
	},
	{
        name:"admin",
		path: "/admin",
		component: () => import("../views/Admin.vue"),
		meta: { requiresAdmin: true },
	},
]

const router = createRouter({
	history: createWebHistory(),
	routes,
})

//Middleware loco

router.beforeEach(async (to, from, next) => {
	const user = store.state.user
    if(!user){
        await store.dispatch('setUser', users[0])
    }
	const requiresAdmin = to.matched.some((record) => record.meta.requiresAdmin)

	if (requiresAdmin && !isAdmin) next({ name: "home" })
	else next()
})

export default router
