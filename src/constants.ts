export const NCC_TOKEN_AUTH_APP_INDEX = import.meta.env.VITE_NCC_TOKEN_AUTH_APP_INDEX ? parseInt(import.meta.env.VITE_NCC_TOKEN_AUTH_APP_INDEX!) : -1;
export const NCC_TOKEN_INDEX = import.meta.env.VITE_NCC_TOKEN_INDEX ? parseInt(import.meta.env.VITE_NCC_TOKEN_INDEX) : -1;
export const NCC_SLA_INDEX = import.meta.env.VITE_NCC_SLA_INDEX ? parseInt(import.meta.env.VITE_NCC_SLA_INDEX) : -1;

// prod URL for Workers dAPIs
export const APIRootURI = import.meta.env.VITE_ROOT_URI ? import.meta.env.VITE_ROOT_URI : "Undefined ROOT_URI";