import App from '../App.vue'
const home = r => require.ensure([], () => r(require('../page/home/index.vue')), 'home');
const login = r => require.ensure([], () => r(require('../page/login/index.vue')), 'login');
const userManage = r => require.ensure([], () => r(require('../page/manage/userSet.vue')), 'userManage');
const permissionSet = r => require.ensure([], () => r(require('../page/manage/permissionSetting.vue')), 'permissionSet');

const table1Mode = r => require.ensure([], () => r(require('../components/table1Mode.vue')), 'table1Mode');

export default [{
    path: '/',
    component: App,
    children: [
        {
        path: '/home',
        // 使用vue-route + Webpack 的 code splitting feature 把组件按组分块
        component: home,
            children: [
                {
                    path: '/userManage',
                    // 使用vue-route + Webpack 的 code splitting feature 把组件按组分块
                    component: userManage
                },
                {
                    path: '/permissionSet',
                    // 使用vue-route + Webpack 的 code splitting feature 把组件按组分块
                    component: permissionSet
                },
                {
                    path: '/table1Mode',
                    // 使用vue-route + Webpack 的 code splitting feature 把组件按组分块
                    component: table1Mode
                },
            ]
         },

        {
            path: '/',
            // 使用vue-route + Webpack 的 code splitting feature 把组件按组分块
            component: login
        }
    ]
}
]
