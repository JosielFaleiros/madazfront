export function addUserRequest(name, password, email, type, company, office, gender, birth) {
    return {    
        type: '@user/ADD_USER_REQUEST',
        payload: {name, password, email, type, company, office, gender, birth} 
    };
}

export function readUserRequest() {
    return {    
        type: '@user/READ_USER'
    };
}

export function returnUserRequest(user) {
    return {    
        type: '@user/RETURN_USER',
        payload: { user } 
    };
}

export function updateUserRequest(name, password, email, type, company, office, gender, birth, _id) {
    return {    
        type: '@user/UPDATE_USER',
        payload: { name, password, email, type, company, office, gender, birth, _id } 
    };
}

export function deleteUserRequest(_id) {
    return {    
        type: '@user/DELETE_USER',
        payload: { _id } 
    };
}

export function foreignUserRequest() {
    return {    
        type: '@user/FOREIGN_USER',
    };
}

export function returnForeignUserRequest(foreignUser) {
    return {    
        type: '@user/RETURNFOREIGN_USER',
        payload: { foreignUser } 
    };
}