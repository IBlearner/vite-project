export interface IContactForm {
    name: string;
    email: string;
    // Phone numbers start with 0 but js doesn't like this as it represents octals so we just make it a string
    phone: string;
    enquiring: string;
    message: string;
}

export interface IReview {
    id: string;
    message: string;
    name: string;
    stars: number;
}

export interface IGenericPageContent {
    heading: string;
    subheading1?: string;
    subheading2?: string;
    subheading3?: string;
    text1: string;
    text2?: string;
    text3?: string;
}

export interface ILanguage {
    name: string;
    shortName: string;
}
