export interface IContactForm {
    name: string;
    email: string;
    // Phone numbers start with 0 but js doesn't like this as it represents octals so we just make it a string
    phone: string;
    enquiring: string;
    message: string;
};