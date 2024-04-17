/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.ts\lib\artifacts\ts\module\gen\main.js
    package: wizzi.plugin.ts@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi.heroku-1010.client\.wizzi\src\config\routes.tsx.ittf
    utc time: Sat, 09 Mar 2024 07:50:51 GMT
*/
import IRoute from '../interfaces/route';
import AboutPage from '../pages/about';
import HomePage from '../pages/home';
import App from '../pages/App';
const routes: IRoute[] = [
    {
        path: '/', 
        name: 'Home Page', 
        component: App, 
        exact: true
     }, 
    {
        path: '/about', 
        name: 'About Page', 
        component: AboutPage, 
        exact: true
     }, 
    {
        path: '/about/:number', 
        name: 'About Page', 
        component: AboutPage, 
        exact: true
     }
];
export default routes;
