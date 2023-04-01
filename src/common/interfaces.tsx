export interface IContactForm {
    name: string;
    email: string;
    // Phone numbers start with 0 but js doesn't like this as it represents octals so we just make it a string
    phone: string;
    enquiring: string;
    message: string;
}

// Identical interface to contact form to be used for pre-populating fields if they are coming from elsewhere
export interface IContactFormPrefill {
    name?: string;
    email?: string;
    phone?: string;
    enquiring?: string;
    message?: string;
}

export interface IReview {
    id: string;
    message: string;
    name: string;
    stars: number;
}

// Generic interface that only has a name and friendlyName
export interface IGenericObj {
    name: string;
    friendlyName: string;
}

// Content to be fed to each page. The content property for each page is different atm, due to different needs
export interface IGeneralPageContent {
    heading: ILanguageSwitch;
    description: ILanguageSwitch;
}

// Specific content for the service page
export interface IServiceContent extends IGenericObj {
    description: ILanguageSwitch;
}

// Interface for each route
export interface IRouteData extends IGenericObj {
    routeName: string;
}

// Generic interface to accomodate the support languages. Add a new property whenever a language is added (also add to the appropriate enum)
export interface ILanguageSwitch {
    en: string;
    vn: string;
}
