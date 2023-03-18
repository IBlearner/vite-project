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
    subheading4?: string;
    subheading5?: string;
    subheading6?: string;
    subheading7?: string;
    subheading8?: string;
    subheading9?: string;
    subheading10?: string;
    text1: string;
    text2?: string;
    text3?: string;
    text4?: string;
    text5?: string;
    text6?: string;
    text7?: string;
    text8?: string;
    text9?: string;
    text10?: string;
    text11?: string;
}

export interface ILanguage {
    name: string;
    shortName: string;
}
