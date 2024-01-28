import { createRouter, createWebHashHistory } from "vue-router"
import Home from '../views/Home.vue'
import Estates from '../views/Estates.vue'
import AgencyForm from '../views/AgencyForm.vue'
import AgencyProfile from '../views/AgencyProfile.vue'
import EstateForm from '../views/EstateForm.vue'


const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home 
    },
    {
        path: '/estates',
        name: 'Estates',
        component: Estates 
    },
    {
        path: '/agency-form',
        name: 'AgencyForm',
        component: AgencyForm
    },
    {
        // 'someroute?id=:id&name=:name`,
        path: '/agency-profile',
        name: 'AgencyProfile',
        component: AgencyProfile,
        // props: true

    },
    {
        path: '/estate-form',
        name: 'EstateForm',
        component: EstateForm,

    },
]

const router = createRouter({
    history: createWebHashHistory(process.env.BASE_URL),
    routes
})

export default router