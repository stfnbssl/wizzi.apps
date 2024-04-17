# wizzi.hub

Wizzi hub website


### How to deploy
In VsCode open the folder C:/My/wizzi/stfnbssl/wizzi.apps/packages/wizzi.hub and execute:

```sh
wz heroku
```
The dest folder of the production is ../packages/wizzi.hub/dist_herohu, execute

```sh
cd dist_heroku
npm run build
npm run distfiles
```
The dest folder of the build is C:/My/wizzi/stfnbssl/wizzi.apps.deploy/packages/wizzi-heroku. Open it in VsCode and execute:

```sh
npm i
```
Then commit and push C:/My/wizzi/stfnbssl/wizzi.apps.deploy/wizzi-heroku to github.

