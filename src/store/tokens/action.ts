export type Action = {type: "ADD_TOKEN"; payload: string};

//tipo da Action e a informação que a Action está levando

// ação relaciona ao token

export const addToken = (token: string): Action => ({
    type: "ADD_TOKEN", 
    payload: token,
}); //ele vai enviar a nossa ação 