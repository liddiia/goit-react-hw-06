const initialState = {
    contacts: JSON.parse(localStorage.getItem("contacts"))??[]
   
     }; 

export const contactsReducer=( state = initialState, action)=>{
    switch(action.type) {
case "contacts/addContact": {
    return {
    ...state,
    contacts: [...state.contacts, action.payload ],
   
};
    }
case "contacts/deleteContact": {
            return{...state,
                contacts: state.contacts.filter((contact)=> contact.id !== action.payload)
            };
        }
            
            default:
return state;
    }
};



