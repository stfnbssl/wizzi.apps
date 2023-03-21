/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.14
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.demo\packages\wizzi.demo.server\data\packages\demo.express.hello\.wizzi\src\examples\promise\services\userService.ts.ittf
*/
const users = [
    {
        id: '1', 
        fullName: 'User The First'
     }, 
    {
        id: '2', 
        fullName: 'User The Second'
     }
];
const getAll = () => 

    Promise.resolve(users)
;
const getById = (id: string) => 

    Promise.resolve(users.find(u => 
    
        u.id == id
    ))
;
const getUserProfilePicUrl = (id: string) => 

    Promise.resolve(`/img/${id}`)
;
export const userService = {
    getAll, 
    getById, 
    getUserProfilePicUrl
 };
