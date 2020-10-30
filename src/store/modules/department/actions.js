export function addDepartmentRequest(name) {
    return {    
        type: '@department/ADD_DEPARTMENT_REQUEST',
        payload: {name} 
    };
}

export function readDepartmentRequest() {
    return {    
        type: '@department/READ_DEPARTMENT'
    };
}

export function returnDepartmentRequest(department) {
    return {    
        type: '@department/RETURN_DEPARTMENT',
        payload: { department } 
    };
}

export function updateDepartmentRequest(name, _id) {
    return {    
        type: '@department/UPDATE_DEPARTMENT',
        payload: { name, _id } 
    };
}

export function deleteDepartmentRequest(_id) {
    return {    
        type: '@department/DELETE_DEPARTMENT',
        payload: { _id } 
    };
}

export function foreignDepartmentRequest() {
    return {    
        type: '@department/FOREIGN_DEPARTMENT',
    };
}

export function returnForeignDepartmentRequest(foreignDepartment) {
    return {    
        type: '@department/RETURNFOREIGN_DEPARTMENT',
        payload: { foreignDepartment } 
    };
}