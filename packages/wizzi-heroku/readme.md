# Wizzi Hub

The public Wizzi Web App


### How to deploy
In wizzi-cli\.wizzi\resources\create\templators\ts-express\contexts\wizzi-heroku.json.ittf set:

```javascript
var isLocal = false
```
then execute

```sh
wizzi
node create ts-express-wizzi-heroku
```
In C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi.editor execute

```sh
wizzi
npm run build:client
```
In C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi.pageforms execute

```sh
wizzi
npm run build:client
```
In C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi-heroku execute

```sh
wizzi
wizzi override
npm run build
npm run copyfiles
```
In C:\My\wizzi\stfnbssl\wizzi.apps.deploy\wizzi-heroku execute

```sh
npm i
```
Then commit and push C:\My\wizzi\stfnbssl\wizzi.apps.deploy\wizzi-heroku to github

