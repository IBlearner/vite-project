import { IGenericObj, IRouteData, IGeneralPageContent, ILanguageSwitch, IServiceContent } from "./interfaces";

export const viewsData: { home: IRouteData; about: IRouteData; services: IRouteData; contact: IRouteData; reviews: IRouteData } = {
    home: {
        name: "home",
        routeName: "home",
        friendlyName: "home"
    },
    about: {
        name: "about",
        routeName: "about",
        friendlyName: "About me"
    },
    services: {
        name: "services",
        routeName: "services",
        friendlyName: "services"
    },
    contact: {
        name: "contact",
        routeName: "contact",
        friendlyName: "Contact me"
    },
    reviews: {
        name: "reviews",
        routeName: "reviews",
        friendlyName: "Reviews"
    }
};

export const supportedLanguages: { english: IGenericObj; vietnamese: IGenericObj; mandarinSimplified: IGenericObj; mandarinTraditional: IGenericObj } = {
    english: {
        name: "en",
        friendlyName: "english"
    },
    vietnamese: {
        name: "vn",
        friendlyName: "vietnamese"
    },
    mandarinSimplified: {
        name: "cn",
        friendlyName: "mandarin-simplified"
    },
    mandarinTraditional: {
        name: "cn2",
        friendlyName: "mandarin-traditional"
    }
};

export const homeSpecificContent: { [property: string]: ILanguageSwitch } = {
    subheading: {
        en: "",
        vn: ""
    },
    text1: {
        en: "See how I can help you today",
        vn: "Xem làm thế nào tôi có thể giúp bạn ngày hôm nay"
    },
    text2: {
        en: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        vn: "Trua co"
    }
};

export const aboutSpecificContent: { [property: string]: ILanguageSwitch } = {
    subheading: {
        en: "",
        vn: ""
    },
    text1: {
        en: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        vn: "Trua co"
    },
    text2: {
        en: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        vn: "Trua co"
    }
};

export const servicesSpecificContent: {
    driving: IServiceContent;
    thanksai: IServiceContent;
    solar: IServiceContent;
    oriflame: IServiceContent;
    herbalife: IServiceContent;
    subheading: ILanguageSwitch;
    contactMeText: ILanguageSwitch;
} = {
    driving: {
        name: "driving",
        friendlyName: "LAM driving safety school",
        description: {
            en: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            vn: "Trua co"
        }
    },
    thanksai: {
        name: "thanksai",
        friendlyName: "ThanksAI",
        description: {
            en: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            vn: "Trua co"
        }
    },
    solar: {
        name: "solar",
        friendlyName: "Diamond Solar",
        description: {
            en: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            vn: "Trua co"
        }
    },
    oriflame: {
        name: "oriflame",
        friendlyName: "Oriflame",
        description: {
            en: "As a Swedish beauty brand we believe that when you look and feel good you have the opportunity to reach your full potential. And together with a passionate and supportive global community anything is possible. That's beauty from a Swedish perspective.",
            vn: "Là một thương hiệu làm đẹp của Thụy Điển, chúng tôi tin rằng khi bạn trông xinh đẹp và cảm thấy thoải mái, bạn sẽ có cơ hội phát huy hết tiềm năng của mình. Và cùng với một cộng đồng toàn cầu đầy nhiệt huyết và hỗ trợ, mọi điều đều có thể xảy ra. Đó là vẻ đẹp từ góc nhìn của Thụy Điển."
        }
    },
    herbalife: {
        name: "herbalife",
        friendlyName: "Herbalife",
        description: {
            en: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            vn: "Trua co"
        }
    },
    subheading: {
        en: "My partnerships",
        vn: "Quan hệ đối tác của tôi"
    },
    contactMeText: {
        en: "Contact me about this",
        vn: "Liên hệ với tôi về điều này"
    }
};

export const contactSpecificContent: { [property: string]: ILanguageSwitch } = {
    subheading: {
        en: "",
        vn: ""
    },
    text1: {
        en: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        vn: "Trua co"
    },
    text2: {
        en: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        vn: "Trua co"
    }
};

export const reviewsSpecificContent: { [property: string]: ILanguageSwitch } = {
    subheading: {
        en: "",
        vn: ""
    },
    text1: {
        en: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        vn: "Trua co"
    },
    text2: {
        en: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        vn: "Trua co"
    }
};

export const pageGeneralContent: {
    home: IGeneralPageContent;
    about: IGeneralPageContent;
    services: IGeneralPageContent;
    contact: IGeneralPageContent;
    reviews: IGeneralPageContent;
} = {
    home: {
        heading: {
            en: "Home",
            vn: "Trang chủ"
        },
        description: {
            en: "Failure is the mother of success",
            vn: "Thất bại là mẹ thành công"
        }
    },
    about: {
        heading: {
            en: "About me",
            vn: "Về tôi"
        },
        description: {
            en: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            vn: "Trua co"
        }
    },
    services: {
        heading: {
            en: "Services",
            vn: "Dịch vụ"
        },
        description: {
            en: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            vn: "Trua co"
        }
    },
    contact: {
        heading: {
            en: "Contact me",
            vn: "Liên hệ với tôi"
        },
        description: {
            en: "Do not hesitate to contact me",
            vn: "Đừng ngần ngại liên hệ với tôi"
        }
    },
    reviews: {
        heading: {
            en: "Reviews",
            vn: "Đánh giá"
        },
        description: {
            en: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            vn: "Trua co"
        }
    }
};
