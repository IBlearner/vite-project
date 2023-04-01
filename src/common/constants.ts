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
        en: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        vn: "Lorem Ipsum chỉ đơn giản là văn bản giả của ngành công nghiệp in ấn và sắp chữ. Lorem Ipsum đã trở thành văn bản giả tiêu chuẩn của ngành kể từ những năm 1500, khi một nhà in không rõ danh tính lấy một bộ sưu tập các loại và xáo trộn nó để tạo thành một cuốn sách mẫu. Nó đã tồn tại không chỉ năm thế kỷ, mà còn là bước nhảy vọt sang sắp chữ điện tử, về cơ bản vẫn không thay đổi. Nó đã được phổ biến vào những năm 1960 với việc phát hành các tờ Letraset chứa các đoạn Lorem Ipsum và gần đây hơn với phần mềm xuất bản trên máy tính để bàn như Aldus PageMaker bao gồm các phiên bản của Lorem Ipsum."
    },
    text2: {
        en: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        vn: "Lorem Ipsum chỉ đơn giản là văn bản giả của ngành công nghiệp in ấn và sắp chữ. Lorem Ipsum đã trở thành văn bản giả tiêu chuẩn của ngành kể từ những năm 1500, khi một nhà in không rõ danh tính lấy một bộ sưu tập các loại và xáo trộn nó để tạo thành một cuốn sách mẫu. Nó đã tồn tại không chỉ năm thế kỷ, mà còn là bước nhảy vọt sang sắp chữ điện tử, về cơ bản vẫn không thay đổi. Nó đã được phổ biến vào những năm 1960 với việc phát hành các tờ Letraset chứa các đoạn Lorem Ipsum và gần đây hơn với phần mềm xuất bản trên máy tính để bàn như Aldus PageMaker bao gồm các phiên bản của Lorem Ipsum."
    }
};

export const aboutSpecificContent: { [property: string]: ILanguageSwitch } = {
    subheading: {
        en: "",
        vn: ""
    },
    text1: {
        en: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        vn: "Lorem Ipsum chỉ đơn giản là văn bản giả của ngành công nghiệp in ấn và sắp chữ. Lorem Ipsum đã trở thành văn bản giả tiêu chuẩn của ngành kể từ những năm 1500, khi một nhà in không rõ danh tính lấy một bộ sưu tập các loại và xáo trộn nó để tạo thành một cuốn sách mẫu. Nó đã tồn tại không chỉ năm thế kỷ, mà còn là bước nhảy vọt sang sắp chữ điện tử, về cơ bản vẫn không thay đổi. Nó đã được phổ biến vào những năm 1960 với việc phát hành các tờ Letraset chứa các đoạn Lorem Ipsum và gần đây hơn với phần mềm xuất bản trên máy tính để bàn như Aldus PageMaker bao gồm các phiên bản của Lorem Ipsum."
    },
    text2: {
        en: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        vn: "Lorem Ipsum chỉ đơn giản là văn bản giả của ngành công nghiệp in ấn và sắp chữ. Lorem Ipsum đã trở thành văn bản giả tiêu chuẩn của ngành kể từ những năm 1500, khi một nhà in không rõ danh tính lấy một bộ sưu tập các loại và xáo trộn nó để tạo thành một cuốn sách mẫu. Nó đã tồn tại không chỉ năm thế kỷ, mà còn là bước nhảy vọt sang sắp chữ điện tử, về cơ bản vẫn không thay đổi. Nó đã được phổ biến vào những năm 1960 với việc phát hành các tờ Letraset chứa các đoạn Lorem Ipsum và gần đây hơn với phần mềm xuất bản trên máy tính để bàn như Aldus PageMaker bao gồm các phiên bản của Lorem Ipsum."
    }
};

export const servicesSpecificContent: {
    driving: IServiceContent;
    thanksai: IServiceContent;
    solar: IServiceContent;
    quiari: IServiceContent;
    herbalife: IServiceContent;
    subheading: ILanguageSwitch;
    contactMeText: ILanguageSwitch;
} = {
    driving: {
        name: "driving",
        friendlyName: "LAM driving safety school",
        description: {
            en: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            vn: "Lorem Ipsum chỉ đơn giản là văn bản giả của ngành công nghiệp in ấn và sắp chữ. Lorem Ipsum đã trở thành văn bản giả tiêu chuẩn của ngành kể từ những năm 1500, khi một nhà in không rõ danh tính lấy một bộ sưu tập các loại và xáo trộn nó để tạo thành một cuốn sách mẫu. Nó đã tồn tại không chỉ năm thế kỷ, mà còn là bước nhảy vọt sang sắp chữ điện tử, về cơ bản vẫn không thay đổi. Nó đã được phổ biến vào những năm 1960 với việc phát hành các tờ Letraset chứa các đoạn Lorem Ipsum và gần đây hơn với phần mềm xuất bản trên máy tính để bàn như Aldus PageMaker bao gồm các phiên bản của Lorem Ipsum."
        }
    },
    thanksai: {
        name: "thanksai",
        friendlyName: "ThanksAI",
        description: {
            en: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            vn: "Lorem Ipsum chỉ đơn giản là văn bản giả của ngành công nghiệp in ấn và sắp chữ. Lorem Ipsum đã trở thành văn bản giả tiêu chuẩn của ngành kể từ những năm 1500, khi một nhà in không rõ danh tính lấy một bộ sưu tập các loại và xáo trộn nó để tạo thành một cuốn sách mẫu. Nó đã tồn tại không chỉ năm thế kỷ, mà còn là bước nhảy vọt sang sắp chữ điện tử, về cơ bản vẫn không thay đổi. Nó đã được phổ biến vào những năm 1960 với việc phát hành các tờ Letraset chứa các đoạn Lorem Ipsum và gần đây hơn với phần mềm xuất bản trên máy tính để bàn như Aldus PageMaker bao gồm các phiên bản của Lorem Ipsum."
        }
    },
    solar: {
        name: "solar",
        friendlyName: "Diamond Solar",
        description: {
            en: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            vn: "Lorem Ipsum chỉ đơn giản là văn bản giả của ngành công nghiệp in ấn và sắp chữ. Lorem Ipsum đã trở thành văn bản giả tiêu chuẩn của ngành kể từ những năm 1500, khi một nhà in không rõ danh tính lấy một bộ sưu tập các loại và xáo trộn nó để tạo thành một cuốn sách mẫu. Nó đã tồn tại không chỉ năm thế kỷ, mà còn là bước nhảy vọt sang sắp chữ điện tử, về cơ bản vẫn không thay đổi. Nó đã được phổ biến vào những năm 1960 với việc phát hành các tờ Letraset chứa các đoạn Lorem Ipsum và gần đây hơn với phần mềm xuất bản trên máy tính để bàn như Aldus PageMaker bao gồm các phiên bản của Lorem Ipsum."
        }
    },
    quiari: {
        name: "quiari",
        friendlyName: "QuiAri",
        description: {
            en: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            vn: "Lorem Ipsum chỉ đơn giản là văn bản giả của ngành công nghiệp in ấn và sắp chữ. Lorem Ipsum đã trở thành văn bản giả tiêu chuẩn của ngành kể từ những năm 1500, khi một nhà in không rõ danh tính lấy một bộ sưu tập các loại và xáo trộn nó để tạo thành một cuốn sách mẫu. Nó đã tồn tại không chỉ năm thế kỷ, mà còn là bước nhảy vọt sang sắp chữ điện tử, về cơ bản vẫn không thay đổi. Nó đã được phổ biến vào những năm 1960 với việc phát hành các tờ Letraset chứa các đoạn Lorem Ipsum và gần đây hơn với phần mềm xuất bản trên máy tính để bàn như Aldus PageMaker bao gồm các phiên bản của Lorem Ipsum."
        }
    },
    herbalife: {
        name: "herbalife",
        friendlyName: "Herbalife",
        description: {
            en: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            vn: "Lorem Ipsum chỉ đơn giản là văn bản giả của ngành công nghiệp in ấn và sắp chữ. Lorem Ipsum đã trở thành văn bản giả tiêu chuẩn của ngành kể từ những năm 1500, khi một nhà in không rõ danh tính lấy một bộ sưu tập các loại và xáo trộn nó để tạo thành một cuốn sách mẫu. Nó đã tồn tại không chỉ năm thế kỷ, mà còn là bước nhảy vọt sang sắp chữ điện tử, về cơ bản vẫn không thay đổi. Nó đã được phổ biến vào những năm 1960 với việc phát hành các tờ Letraset chứa các đoạn Lorem Ipsum và gần đây hơn với phần mềm xuất bản trên máy tính để bàn như Aldus PageMaker bao gồm các phiên bản của Lorem Ipsum."
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
        vn: "Lorem Ipsum chỉ đơn giản là văn bản giả của ngành công nghiệp in ấn và sắp chữ. Lorem Ipsum đã trở thành văn bản giả tiêu chuẩn của ngành kể từ những năm 1500, khi một nhà in không rõ danh tính lấy một bộ sưu tập các loại và xáo trộn nó để tạo thành một cuốn sách mẫu. Nó đã tồn tại không chỉ năm thế kỷ, mà còn là bước nhảy vọt sang sắp chữ điện tử, về cơ bản vẫn không thay đổi. Nó đã được phổ biến vào những năm 1960 với việc phát hành các tờ Letraset chứa các đoạn Lorem Ipsum và gần đây hơn với phần mềm xuất bản trên máy tính để bàn như Aldus PageMaker bao gồm các phiên bản của Lorem Ipsum."
    },
    text2: {
        en: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        vn: "Lorem Ipsum chỉ đơn giản là văn bản giả của ngành công nghiệp in ấn và sắp chữ. Lorem Ipsum đã trở thành văn bản giả tiêu chuẩn của ngành kể từ những năm 1500, khi một nhà in không rõ danh tính lấy một bộ sưu tập các loại và xáo trộn nó để tạo thành một cuốn sách mẫu. Nó đã tồn tại không chỉ năm thế kỷ, mà còn là bước nhảy vọt sang sắp chữ điện tử, về cơ bản vẫn không thay đổi. Nó đã được phổ biến vào những năm 1960 với việc phát hành các tờ Letraset chứa các đoạn Lorem Ipsum và gần đây hơn với phần mềm xuất bản trên máy tính để bàn như Aldus PageMaker bao gồm các phiên bản của Lorem Ipsum."
    }
};

export const reviewsSpecificContent: { [property: string]: ILanguageSwitch } = {
    subheading: {
        en: "",
        vn: ""
    },
    text1: {
        en: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        vn: "Lorem Ipsum chỉ đơn giản là văn bản giả của ngành công nghiệp in ấn và sắp chữ. Lorem Ipsum đã trở thành văn bản giả tiêu chuẩn của ngành kể từ những năm 1500, khi một nhà in không rõ danh tính lấy một bộ sưu tập các loại và xáo trộn nó để tạo thành một cuốn sách mẫu. Nó đã tồn tại không chỉ năm thế kỷ, mà còn là bước nhảy vọt sang sắp chữ điện tử, về cơ bản vẫn không thay đổi. Nó đã được phổ biến vào những năm 1960 với việc phát hành các tờ Letraset chứa các đoạn Lorem Ipsum và gần đây hơn với phần mềm xuất bản trên máy tính để bàn như Aldus PageMaker bao gồm các phiên bản của Lorem Ipsum."
    },
    text2: {
        en: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        vn: "Lorem Ipsum chỉ đơn giản là văn bản giả của ngành công nghiệp in ấn và sắp chữ. Lorem Ipsum đã trở thành văn bản giả tiêu chuẩn của ngành kể từ những năm 1500, khi một nhà in không rõ danh tính lấy một bộ sưu tập các loại và xáo trộn nó để tạo thành một cuốn sách mẫu. Nó đã tồn tại không chỉ năm thế kỷ, mà còn là bước nhảy vọt sang sắp chữ điện tử, về cơ bản vẫn không thay đổi. Nó đã được phổ biến vào những năm 1960 với việc phát hành các tờ Letraset chứa các đoạn Lorem Ipsum và gần đây hơn với phần mềm xuất bản trên máy tính để bàn như Aldus PageMaker bao gồm các phiên bản của Lorem Ipsum."
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
            en: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            vn: "Lorem Ipsum chỉ đơn giản là văn bản giả của ngành công nghiệp in ấn và sắp chữ. Lorem Ipsum đã trở thành văn bản giả tiêu chuẩn của ngành kể từ những năm 1500, khi một nhà in không rõ danh tính lấy một bộ sưu tập các loại và xáo trộn nó để tạo thành một cuốn sách mẫu. Nó đã tồn tại không chỉ năm thế kỷ, mà còn là bước nhảy vọt sang sắp chữ điện tử, về cơ bản vẫn không thay đổi. Nó đã được phổ biến vào những năm 1960 với việc phát hành các tờ Letraset chứa các đoạn Lorem Ipsum và gần đây hơn với phần mềm xuất bản trên máy tính để bàn như Aldus PageMaker bao gồm các phiên bản của Lorem Ipsum."
        }
    },
    about: {
        heading: {
            en: "About me",
            vn: "Về tôi"
        },
        description: {
            en: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            vn: "Lorem Ipsum chỉ đơn giản là văn bản giả của ngành công nghiệp in ấn và sắp chữ. Lorem Ipsum đã trở thành văn bản giả tiêu chuẩn của ngành kể từ những năm 1500, khi một nhà in không rõ danh tính lấy một bộ sưu tập các loại và xáo trộn nó để tạo thành một cuốn sách mẫu. Nó đã tồn tại không chỉ năm thế kỷ, mà còn là bước nhảy vọt sang sắp chữ điện tử, về cơ bản vẫn không thay đổi. Nó đã được phổ biến vào những năm 1960 với việc phát hành các tờ Letraset chứa các đoạn Lorem Ipsum và gần đây hơn với phần mềm xuất bản trên máy tính để bàn như Aldus PageMaker bao gồm các phiên bản của Lorem Ipsum."
        }
    },
    services: {
        heading: {
            en: "Services",
            vn: "Dịch vụ"
        },
        description: {
            en: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            vn: "Lorem Ipsum chỉ đơn giản là văn bản giả của ngành công nghiệp in ấn và sắp chữ. Lorem Ipsum đã trở thành văn bản giả tiêu chuẩn của ngành kể từ những năm 1500, khi một nhà in không rõ danh tính lấy một bộ sưu tập các loại và xáo trộn nó để tạo thành một cuốn sách mẫu. Nó đã tồn tại không chỉ năm thế kỷ, mà còn là bước nhảy vọt sang sắp chữ điện tử, về cơ bản vẫn không thay đổi. Nó đã được phổ biến vào những năm 1960 với việc phát hành các tờ Letraset chứa các đoạn Lorem Ipsum và gần đây hơn với phần mềm xuất bản trên máy tính để bàn như Aldus PageMaker bao gồm các phiên bản của Lorem Ipsum."
        }
    },
    contact: {
        heading: {
            en: "Contact me",
            vn: "Liên hệ với tôi"
        },
        description: {
            en: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            vn: "Lorem Ipsum chỉ đơn giản là văn bản giả của ngành công nghiệp in ấn và sắp chữ. Lorem Ipsum đã trở thành văn bản giả tiêu chuẩn của ngành kể từ những năm 1500, khi một nhà in không rõ danh tính lấy một bộ sưu tập các loại và xáo trộn nó để tạo thành một cuốn sách mẫu. Nó đã tồn tại không chỉ năm thế kỷ, mà còn là bước nhảy vọt sang sắp chữ điện tử, về cơ bản vẫn không thay đổi. Nó đã được phổ biến vào những năm 1960 với việc phát hành các tờ Letraset chứa các đoạn Lorem Ipsum và gần đây hơn với phần mềm xuất bản trên máy tính để bàn như Aldus PageMaker bao gồm các phiên bản của Lorem Ipsum."
        }
    },
    reviews: {
        heading: {
            en: "Reviews",
            vn: "Đánh giá"
        },
        description: {
            en: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            vn: "Lorem Ipsum chỉ đơn giản là văn bản giả của ngành công nghiệp in ấn và sắp chữ. Lorem Ipsum đã trở thành văn bản giả tiêu chuẩn của ngành kể từ những năm 1500, khi một nhà in không rõ danh tính lấy một bộ sưu tập các loại và xáo trộn nó để tạo thành một cuốn sách mẫu. Nó đã tồn tại không chỉ năm thế kỷ, mà còn là bước nhảy vọt sang sắp chữ điện tử, về cơ bản vẫn không thay đổi. Nó đã được phổ biến vào những năm 1960 với việc phát hành các tờ Letraset chứa các đoạn Lorem Ipsum và gần đây hơn với phần mềm xuất bản trên máy tính để bàn như Aldus PageMaker bao gồm các phiên bản của Lorem Ipsum."
        }
    }
};
