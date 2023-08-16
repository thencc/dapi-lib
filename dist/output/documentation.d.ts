export declare const documentation: {
    data: ({
        type: string;
        url: string;
        title: string;
        description: string;
        name: string;
        group: string;
        version: string;
        body: {
            group: string;
            type: string;
            optional: boolean;
            field: string;
            isArray: boolean;
            description: string;
        }[];
        success: {
            fields: {
                "Success 200": ({
                    group: string;
                    type: string;
                    optional: boolean;
                    field: string;
                    isArray: boolean;
                    description: string;
                    parentNode?: undefined;
                } | {
                    group: string;
                    type: string;
                    optional: boolean;
                    parentNode: {
                        path: string;
                        field: string;
                        type: string;
                        isArray: boolean;
                    };
                    field: string;
                    isArray: boolean;
                    description: string;
                })[];
            };
        };
        filename: string;
        groupTitle: string;
        query?: undefined;
        header?: undefined;
    } | {
        type: string;
        url: string;
        title: string;
        description: string;
        name: string;
        group: string;
        version: string;
        query: {
            group: string;
            type: string;
            optional: boolean;
            field: string;
            isArray: boolean;
            description: string;
        }[];
        body: {
            group: string;
            type: string;
            optional: boolean;
            field: string;
            isArray: boolean;
            description: string;
        }[];
        success: {
            fields: {
                "Success 200": ({
                    group: string;
                    type: string;
                    optional: boolean;
                    field: string;
                    isArray: boolean;
                    description: string;
                    parentNode?: undefined;
                } | {
                    group: string;
                    type: string;
                    optional: boolean;
                    parentNode: {
                        path: string;
                        field: string;
                        type: string;
                        isArray: boolean;
                    };
                    field: string;
                    isArray: boolean;
                    description: string;
                })[];
            };
        };
        filename: string;
        groupTitle: string;
        header?: undefined;
    } | {
        type: string;
        url: string;
        title: string;
        description: string;
        name: string;
        group: string;
        version: string;
        success: {
            fields: {
                "Success 200": ({
                    group: string;
                    type: string;
                    optional: boolean;
                    field: string;
                    isArray: boolean;
                    description: string;
                    parentNode?: undefined;
                } | {
                    group: string;
                    type: string;
                    optional: boolean;
                    parentNode: {
                        path: string;
                        field: string;
                        type: string;
                        isArray: boolean;
                    };
                    field: string;
                    isArray: boolean;
                    description: string;
                })[];
            };
        };
        filename: string;
        groupTitle: string;
        body?: undefined;
        query?: undefined;
        header?: undefined;
    } | {
        type: string;
        url: string;
        title: string;
        description: string;
        name: string;
        group: string;
        version: string;
        filename: string;
        groupTitle: string;
        body?: undefined;
        success?: undefined;
        query?: undefined;
        header?: undefined;
    } | {
        type: string;
        url: string;
        title: string;
        description: string;
        name: string;
        group: string;
        version: string;
        header: {
            fields: {
                Header: {
                    group: string;
                    type: string;
                    optional: boolean;
                    field: string;
                    isArray: boolean;
                    description: string;
                }[];
            };
        };
        body: {
            group: string;
            type: string;
            optional: boolean;
            field: string;
            isArray: boolean;
            description: string;
        }[];
        success: {
            fields: {
                "Success 200": ({
                    group: string;
                    type: string;
                    optional: boolean;
                    field: string;
                    isArray: boolean;
                    description: string;
                    parentNode?: undefined;
                } | {
                    group: string;
                    type: string;
                    optional: boolean;
                    parentNode: {
                        path: string;
                        field: string;
                        type: string;
                        isArray: boolean;
                    };
                    field: string;
                    isArray: boolean;
                    description: string;
                })[];
            };
        };
        filename: string;
        groupTitle: string;
        query?: undefined;
    })[];
    project: {
        name: string;
        version: string;
        description: string;
        sampleUrl: boolean;
        defaultVersion: string;
        apidoc: string;
        generator: {
            name: string;
            time: string;
            url: string;
            version: string;
        };
    };
    swagDoc: {
        openapi: string;
        info: {
            title: string;
            version: string;
            description: string;
        };
        paths: {
            "/bricks/buy": {
                post: {
                    tags: string[];
                    summary: string;
                    description: string;
                    parameters: never[];
                    requestBody: {
                        required: boolean;
                        content: {
                            "application/json": {
                                schema: {
                                    properties: {
                                        accessToken: {
                                            type: string;
                                            description: string;
                                        };
                                        uuid: {
                                            type: string;
                                            description: string;
                                        };
                                        amount: {
                                            type: string;
                                            description: string;
                                        };
                                    };
                                    type: string;
                                    required: string[];
                                };
                            };
                        };
                    };
                    responses: {
                        "200": {
                            description: string;
                            content: {
                                "application/json": {
                                    schema: {
                                        properties: {
                                            status: {
                                                type: string;
                                                description: string;
                                            };
                                            message: {
                                                type: string;
                                                description: string;
                                            };
                                            result: {
                                                type: string;
                                                properties: {
                                                    message: {
                                                        type: string;
                                                        description: string;
                                                    };
                                                };
                                                required: string[];
                                            };
                                            error: {
                                                type: string;
                                                properties: {
                                                    message: {
                                                        type: string;
                                                        description: string;
                                                    };
                                                };
                                                required: string[];
                                            };
                                        };
                                        type: string;
                                        required: string[];
                                    };
                                };
                            };
                        };
                    };
                };
            };
            "/bricks/buy-ricks": {
                post: {
                    tags: string[];
                    summary: string;
                    description: string;
                    parameters: never[];
                    requestBody: {
                        required: boolean;
                        content: {
                            "application/json": {
                                schema: {
                                    properties: {
                                        accessToken: {
                                            type: string;
                                            description: string;
                                        };
                                        uuid: {
                                            type: string;
                                            description: string;
                                        };
                                        amount: {
                                            type: string;
                                            description: string;
                                        };
                                    };
                                    type: string;
                                    required: string[];
                                };
                            };
                        };
                    };
                    responses: {
                        "200": {
                            description: string;
                            content: {
                                "application/json": {
                                    schema: {
                                        properties: {
                                            status: {
                                                type: string;
                                                description: string;
                                            };
                                            message: {
                                                type: string;
                                                description: string;
                                            };
                                            result: {
                                                type: string;
                                                properties: {
                                                    message: {
                                                        type: string;
                                                        description: string;
                                                    };
                                                };
                                                required: string[];
                                            };
                                            error: {
                                                type: string;
                                                properties: {
                                                    message: {
                                                        type: string;
                                                        description: string;
                                                    };
                                                };
                                                required: string[];
                                            };
                                        };
                                        type: string;
                                        required: string[];
                                    };
                                };
                            };
                        };
                    };
                };
            };
            "/bricks/create": {
                post: {
                    tags: string[];
                    summary: string;
                    description: string;
                    parameters: never[];
                    requestBody: {
                        required: boolean;
                        content: {
                            "application/json": {
                                schema: {
                                    properties: {
                                        accessToken: {
                                            type: string;
                                            description: string;
                                        };
                                        bricksId: {
                                            type: string;
                                            description: string;
                                        };
                                        mediaUuid: {
                                            type: string;
                                            description: string;
                                        };
                                        meta: {
                                            type: string;
                                            description: string;
                                        };
                                        price: {
                                            type: string;
                                            description: string;
                                        };
                                        publicPerformancePrice: {
                                            type: string;
                                            description: string;
                                        };
                                    };
                                    type: string;
                                    required: string[];
                                };
                            };
                        };
                    };
                    responses: {
                        "200": {
                            description: string;
                            content: {
                                "application/json": {
                                    schema: {
                                        properties: {
                                            status: {
                                                type: string;
                                                description: string;
                                            };
                                            message: {
                                                type: string;
                                                description: string;
                                            };
                                            result: {
                                                type: string;
                                                properties: {
                                                    message: {
                                                        type: string;
                                                        description: string;
                                                    };
                                                };
                                                required: string[];
                                            };
                                            error: {
                                                type: string;
                                                properties: {
                                                    message: {
                                                        type: string;
                                                        description: string;
                                                    };
                                                };
                                                required: string[];
                                            };
                                        };
                                        type: string;
                                        required: string[];
                                    };
                                };
                            };
                        };
                    };
                };
            };
            "/bricks/list": {
                post: {
                    tags: string[];
                    summary: string;
                    description: string;
                    parameters: never[];
                    requestBody: {
                        required: boolean;
                        content: {
                            "application/json": {
                                schema: {
                                    properties: {
                                        accessToken: {
                                            type: string;
                                            description: string;
                                        };
                                    };
                                    type: string;
                                    required: string[];
                                };
                            };
                        };
                    };
                    responses: {
                        "200": {
                            description: string;
                            content: {
                                "application/json": {
                                    schema: {
                                        properties: {
                                            status: {
                                                type: string;
                                                description: string;
                                            };
                                            message: {
                                                type: string;
                                                description: string;
                                            };
                                            result: {
                                                type: string;
                                                properties: {
                                                    message: {
                                                        type: string;
                                                        description: string;
                                                    };
                                                };
                                                required: string[];
                                            };
                                            error: {
                                                type: string;
                                                properties: {
                                                    message: {
                                                        type: string;
                                                        description: string;
                                                    };
                                                };
                                                required: string[];
                                            };
                                        };
                                        type: string;
                                        required: string[];
                                    };
                                };
                            };
                        };
                    };
                };
            };
            "/bricks/rick-play": {
                post: {
                    tags: string[];
                    summary: string;
                    description: string;
                    parameters: never[];
                    requestBody: {
                        required: boolean;
                        content: {
                            "application/json": {
                                schema: {
                                    properties: {
                                        accessToken: {
                                            type: string;
                                            description: string;
                                        };
                                        uuid: {
                                            type: string;
                                            description: string;
                                        };
                                        mediaUuid: {
                                            type: string;
                                            description: string;
                                        };
                                    };
                                    type: string;
                                    required: string[];
                                };
                            };
                        };
                    };
                    responses: {
                        "200": {
                            description: string;
                            content: {
                                "application/json": {
                                    schema: {
                                        properties: {
                                            status: {
                                                type: string;
                                                description: string;
                                            };
                                            message: {
                                                type: string;
                                                description: string;
                                            };
                                            result: {
                                                type: string;
                                                properties: {
                                                    message: {
                                                        type: string;
                                                        description: string;
                                                    };
                                                };
                                                required: string[];
                                            };
                                            error: {
                                                type: string;
                                                properties: {
                                                    message: {
                                                        type: string;
                                                        description: string;
                                                    };
                                                };
                                                required: string[];
                                            };
                                        };
                                        type: string;
                                        required: string[];
                                    };
                                };
                            };
                        };
                    };
                };
            };
            "/bricks/send": {
                post: {
                    tags: string[];
                    summary: string;
                    description: string;
                    parameters: never[];
                    requestBody: {
                        required: boolean;
                        content: {
                            "application/json": {
                                schema: {
                                    properties: {
                                        accessToken: {
                                            type: string;
                                            description: string;
                                        };
                                        mediaUuid: {
                                            type: string;
                                            description: string;
                                        };
                                    };
                                    type: string;
                                    required: string[];
                                };
                            };
                        };
                    };
                    responses: {
                        "200": {
                            description: string;
                            content: {
                                "application/json": {
                                    schema: {
                                        properties: {
                                            status: {
                                                type: string;
                                                description: string;
                                            };
                                            message: {
                                                type: string;
                                                description: string;
                                            };
                                            result: {
                                                type: string;
                                                properties: {
                                                    message: {
                                                        type: string;
                                                        description: string;
                                                    };
                                                };
                                                required: string[];
                                            };
                                            error: {
                                                type: string;
                                                properties: {
                                                    message: {
                                                        type: string;
                                                        description: string;
                                                    };
                                                };
                                                required: string[];
                                            };
                                        };
                                        type: string;
                                        required: string[];
                                    };
                                };
                            };
                        };
                    };
                };
            };
            "/bricks/send-rick": {
                post: {
                    tags: string[];
                    summary: string;
                    description: string;
                    parameters: never[];
                    requestBody: {
                        required: boolean;
                        content: {
                            "application/json": {
                                schema: {
                                    properties: {
                                        accessToken: {
                                            type: string;
                                            description: string;
                                        };
                                        mediaUuid: {
                                            type: string;
                                            description: string;
                                        };
                                    };
                                    type: string;
                                    required: string[];
                                };
                            };
                        };
                    };
                    responses: {
                        "200": {
                            description: string;
                            content: {
                                "application/json": {
                                    schema: {
                                        properties: {
                                            status: {
                                                type: string;
                                                description: string;
                                            };
                                            message: {
                                                type: string;
                                                description: string;
                                            };
                                            result: {
                                                type: string;
                                                properties: {
                                                    message: {
                                                        type: string;
                                                        description: string;
                                                    };
                                                };
                                                required: string[];
                                            };
                                            error: {
                                                type: string;
                                                properties: {
                                                    message: {
                                                        type: string;
                                                        description: string;
                                                    };
                                                };
                                                required: string[];
                                            };
                                        };
                                        type: string;
                                        required: string[];
                                    };
                                };
                            };
                        };
                    };
                };
            };
            "/impression/create": {
                post: {
                    tags: string[];
                    summary: string;
                    description: string;
                    parameters: never[];
                    requestBody: {
                        required: boolean;
                        content: {
                            "application/json": {
                                schema: {
                                    properties: {
                                        accessToken: {
                                            type: string;
                                            description: string;
                                        };
                                        uuid: {
                                            type: string;
                                            description: string;
                                        };
                                        creatorAddress: {
                                            type: string;
                                            description: string;
                                        };
                                    };
                                    type: string;
                                    required: string[];
                                };
                            };
                        };
                    };
                    responses: {
                        "200": {
                            description: string;
                            content: {
                                "application/json": {
                                    schema: {
                                        properties: {
                                            status: {
                                                type: string;
                                                description: string;
                                            };
                                            message: {
                                                type: string;
                                                description: string;
                                            };
                                            result: {
                                                type: string;
                                                properties: {
                                                    message: {
                                                        type: string;
                                                        description: string;
                                                    };
                                                };
                                                required: string[];
                                            };
                                            error: {
                                                type: string;
                                                properties: {
                                                    message: {
                                                        type: string;
                                                        description: string;
                                                    };
                                                };
                                                required: string[];
                                            };
                                        };
                                        type: string;
                                        required: string[];
                                    };
                                };
                            };
                        };
                    };
                };
            };
            "/impression/update-all": {
                post: {
                    tags: string[];
                    summary: string;
                    description: string;
                    parameters: never[];
                    requestBody: {
                        required: boolean;
                        content: {
                            "application/json": {
                                schema: {
                                    properties: {
                                        accessToken: {
                                            type: string;
                                            description: string;
                                        };
                                        uuid: {
                                            type: string;
                                            description: string;
                                        };
                                        unique: {
                                            type: string;
                                            description: string;
                                        };
                                        total: {
                                            type: string;
                                            description: string;
                                        };
                                        exposure: {
                                            type: string;
                                            description: string;
                                        };
                                        engagement: {
                                            type: string;
                                            description: string;
                                        };
                                        conversion: {
                                            type: string;
                                            description: string;
                                        };
                                        relevence: {
                                            type: string;
                                            description: string;
                                        };
                                        revenue: {
                                            type: string;
                                            description: string;
                                        };
                                    };
                                    type: string;
                                    required: string[];
                                };
                            };
                        };
                    };
                    responses: {
                        "200": {
                            description: string;
                            content: {
                                "application/json": {
                                    schema: {
                                        properties: {
                                            status: {
                                                type: string;
                                                description: string;
                                            };
                                            message: {
                                                type: string;
                                                description: string;
                                            };
                                            result: {
                                                type: string;
                                                properties: {
                                                    message: {
                                                        type: string;
                                                        description: string;
                                                    };
                                                };
                                                required: string[];
                                            };
                                            error: {
                                                type: string;
                                                properties: {
                                                    message: {
                                                        type: string;
                                                        description: string;
                                                    };
                                                };
                                                required: string[];
                                            };
                                        };
                                        type: string;
                                        required: string[];
                                    };
                                };
                            };
                        };
                    };
                };
            };
            "/impression/update-one": {
                post: {
                    tags: string[];
                    summary: string;
                    description: string;
                    parameters: never[];
                    requestBody: {
                        required: boolean;
                        content: {
                            "application/json": {
                                schema: {
                                    properties: {
                                        accessToken: {
                                            type: string;
                                            description: string;
                                        };
                                        uuid: {
                                            type: string;
                                            description: string;
                                        };
                                        field: {
                                            type: string;
                                            description: string;
                                        };
                                        value: {
                                            type: string;
                                            description: string;
                                        };
                                    };
                                    type: string;
                                    required: string[];
                                };
                            };
                        };
                    };
                    responses: {
                        "200": {
                            description: string;
                            content: {
                                "application/json": {
                                    schema: {
                                        properties: {
                                            status: {
                                                type: string;
                                                description: string;
                                            };
                                            message: {
                                                type: string;
                                                description: string;
                                            };
                                            result: {
                                                type: string;
                                                properties: {
                                                    message: {
                                                        type: string;
                                                        description: string;
                                                    };
                                                };
                                                required: string[];
                                            };
                                            error: {
                                                type: string;
                                                properties: {
                                                    message: {
                                                        type: string;
                                                        description: string;
                                                    };
                                                };
                                                required: string[];
                                            };
                                        };
                                        type: string;
                                        required: string[];
                                    };
                                };
                            };
                        };
                    };
                };
            };
            "/linr/media": {
                post: {
                    tags: string[];
                    summary: string;
                    description: string;
                    parameters: never[];
                    requestBody: {
                        required: boolean;
                        content: {
                            "application/json": {
                                schema: {
                                    properties: {
                                        qText: {
                                            type: string;
                                            description: string;
                                        };
                                        ctx: {
                                            type: string;
                                            description: string;
                                        };
                                        respLength: {
                                            type: string;
                                            description: string;
                                        };
                                    };
                                    type: string;
                                    required: string[];
                                };
                            };
                        };
                    };
                    responses: {
                        "200": {
                            description: string;
                            content: {
                                "application/json": {
                                    schema: {
                                        properties: {
                                            status: {
                                                type: string;
                                                description: string;
                                            };
                                            message: {
                                                type: string;
                                                description: string;
                                            };
                                            result: {
                                                type: string;
                                                properties: {
                                                    message: {
                                                        type: string;
                                                        description: string;
                                                    };
                                                };
                                                required: string[];
                                            };
                                            error: {
                                                type: string;
                                                properties: {
                                                    message: {
                                                        type: string;
                                                        description: string;
                                                    };
                                                };
                                                required: string[];
                                            };
                                        };
                                        type: string;
                                        required: string[];
                                    };
                                };
                            };
                        };
                    };
                };
            };
            "/linr/music": {
                post: {
                    tags: string[];
                    summary: string;
                    description: string;
                    parameters: never[];
                    requestBody: {
                        required: boolean;
                        content: {
                            "application/json": {
                                schema: {
                                    properties: {
                                        qText: {
                                            type: string;
                                            description: string;
                                        };
                                        ctx: {
                                            type: string;
                                            description: string;
                                        };
                                        respLength: {
                                            type: string;
                                            description: string;
                                        };
                                    };
                                    type: string;
                                    required: string[];
                                };
                            };
                        };
                    };
                    responses: {
                        "200": {
                            description: string;
                            content: {
                                "application/json": {
                                    schema: {
                                        properties: {
                                            status: {
                                                type: string;
                                                description: string;
                                            };
                                            message: {
                                                type: string;
                                                description: string;
                                            };
                                            result: {
                                                type: string;
                                                properties: {
                                                    message: {
                                                        type: string;
                                                        description: string;
                                                    };
                                                };
                                                required: string[];
                                            };
                                            error: {
                                                type: string;
                                                properties: {
                                                    message: {
                                                        type: string;
                                                        description: string;
                                                    };
                                                };
                                                required: string[];
                                            };
                                        };
                                        type: string;
                                        required: string[];
                                    };
                                };
                            };
                        };
                    };
                };
            };
            "/rodeo/org/all": {
                post: {
                    tags: string[];
                    summary: string;
                    description: string;
                    parameters: never[];
                    requestBody: {
                        required: boolean;
                        content: {
                            "application/json": {
                                schema: {
                                    properties: {
                                        accessToken: {
                                            type: string;
                                            description: string;
                                        };
                                    };
                                    type: string;
                                    required: string[];
                                };
                            };
                        };
                    };
                    responses: {
                        "200": {
                            description: string;
                            content: {
                                "application/json": {
                                    schema: {
                                        properties: {
                                            status: {
                                                type: string;
                                                description: string;
                                            };
                                            message: {
                                                type: string;
                                                description: string;
                                            };
                                            result: {
                                                type: string;
                                                properties: {
                                                    message: {
                                                        type: string;
                                                        description: string;
                                                    };
                                                };
                                                required: string[];
                                            };
                                            error: {
                                                type: string;
                                                properties: {
                                                    message: {
                                                        type: string;
                                                        description: string;
                                                    };
                                                };
                                                required: string[];
                                            };
                                        };
                                        type: string;
                                        required: string[];
                                    };
                                };
                            };
                        };
                    };
                };
            };
            "/rodeo/org/{id}/add-admin": {
                post: {
                    tags: string[];
                    summary: string;
                    description: string;
                    parameters: {
                        in: string;
                        name: string;
                        description: string;
                        required: boolean;
                        schema: {
                            type: string;
                        };
                    }[];
                    requestBody: {
                        required: boolean;
                        content: {
                            "application/json": {
                                schema: {
                                    properties: {
                                        accessToken: {
                                            type: string;
                                            description: string;
                                        };
                                        uuid: {
                                            type: string;
                                            description: string;
                                        };
                                        adminUUID: {
                                            type: string;
                                            description: string;
                                        };
                                    };
                                    type: string;
                                    required: string[];
                                };
                            };
                        };
                    };
                    responses: {
                        "200": {
                            description: string;
                            content: {
                                "application/json": {
                                    schema: {
                                        properties: {
                                            status: {
                                                type: string;
                                                description: string;
                                            };
                                            message: {
                                                type: string;
                                                description: string;
                                            };
                                            result: {
                                                type: string;
                                                properties: {
                                                    message: {
                                                        type: string;
                                                        description: string;
                                                    };
                                                };
                                                required: string[];
                                            };
                                            error: {
                                                type: string;
                                                properties: {
                                                    message: {
                                                        type: string;
                                                        description: string;
                                                    };
                                                };
                                                required: string[];
                                            };
                                        };
                                        type: string;
                                        required: string[];
                                    };
                                };
                            };
                        };
                    };
                };
            };
            "/rodeo/org/{id}/add-member": {
                post: {
                    tags: string[];
                    summary: string;
                    description: string;
                    parameters: {
                        in: string;
                        name: string;
                        description: string;
                        required: boolean;
                        schema: {
                            type: string;
                        };
                    }[];
                    requestBody: {
                        required: boolean;
                        content: {
                            "application/json": {
                                schema: {
                                    properties: {
                                        accessToken: {
                                            type: string;
                                            description: string;
                                        };
                                        uuid: {
                                            type: string;
                                            description: string;
                                        };
                                        memberUUID: {
                                            type: string;
                                            description: string;
                                        };
                                    };
                                    type: string;
                                    required: string[];
                                };
                            };
                        };
                    };
                    responses: {
                        "200": {
                            description: string;
                            content: {
                                "application/json": {
                                    schema: {
                                        properties: {
                                            status: {
                                                type: string;
                                                description: string;
                                            };
                                            message: {
                                                type: string;
                                                description: string;
                                            };
                                            result: {
                                                type: string;
                                                properties: {
                                                    message: {
                                                        type: string;
                                                        description: string;
                                                    };
                                                };
                                                required: string[];
                                            };
                                            error: {
                                                type: string;
                                                properties: {
                                                    message: {
                                                        type: string;
                                                        description: string;
                                                    };
                                                };
                                                required: string[];
                                            };
                                        };
                                        type: string;
                                        required: string[];
                                    };
                                };
                            };
                        };
                    };
                };
            };
            "/rodeo/org/create": {
                post: {
                    tags: string[];
                    summary: string;
                    description: string;
                    parameters: never[];
                    requestBody: {
                        required: boolean;
                        content: {
                            "application/json": {
                                schema: {
                                    properties: {
                                        orgName: {
                                            type: string;
                                            description: string;
                                        };
                                        url: {
                                            type: string;
                                            description: string;
                                        };
                                        description: {
                                            type: string;
                                            description: string;
                                        };
                                        totalMembers: {
                                            type: string;
                                            description: string;
                                        };
                                        totalAdmins: {
                                            type: string;
                                            description: string;
                                        };
                                        accessToken: {
                                            type: string;
                                            description: string;
                                        };
                                        creatorAddress: {
                                            type: string;
                                            description: string;
                                        };
                                    };
                                    type: string;
                                    required: string[];
                                };
                            };
                        };
                    };
                    responses: {
                        "200": {
                            description: string;
                            content: {
                                "application/json": {
                                    schema: {
                                        properties: {
                                            status: {
                                                type: string;
                                                description: string;
                                            };
                                            message: {
                                                type: string;
                                                description: string;
                                            };
                                            result: {
                                                type: string;
                                                properties: {
                                                    message: {
                                                        type: string;
                                                        description: string;
                                                    };
                                                };
                                                required: string[];
                                            };
                                            error: {
                                                type: string;
                                                properties: {
                                                    message: {
                                                        type: string;
                                                        description: string;
                                                    };
                                                };
                                                required: string[];
                                            };
                                        };
                                        type: string;
                                        required: string[];
                                    };
                                };
                            };
                        };
                    };
                };
            };
            "/rodeo/org/{id}/get": {
                post: {
                    tags: string[];
                    summary: string;
                    description: string;
                    parameters: {
                        in: string;
                        name: string;
                        description: string;
                        required: boolean;
                        schema: {
                            type: string;
                        };
                    }[];
                    requestBody: {
                        required: boolean;
                        content: {
                            "application/json": {
                                schema: {
                                    properties: {
                                        accessToken: {
                                            type: string;
                                            description: string;
                                        };
                                        uuid: {
                                            type: string;
                                            description: string;
                                        };
                                    };
                                    type: string;
                                    required: string[];
                                };
                            };
                        };
                    };
                    responses: {
                        "200": {
                            description: string;
                            content: {
                                "application/json": {
                                    schema: {
                                        properties: {
                                            status: {
                                                type: string;
                                                description: string;
                                            };
                                            message: {
                                                type: string;
                                                description: string;
                                            };
                                            result: {
                                                type: string;
                                                properties: {
                                                    message: {
                                                        type: string;
                                                        description: string;
                                                    };
                                                };
                                                required: string[];
                                            };
                                            error: {
                                                type: string;
                                                properties: {
                                                    message: {
                                                        type: string;
                                                        description: string;
                                                    };
                                                };
                                                required: string[];
                                            };
                                        };
                                        type: string;
                                        required: string[];
                                    };
                                };
                            };
                        };
                    };
                };
            };
            "/rodeo/org/{id}/mint": {
                post: {
                    tags: string[];
                    summary: string;
                    description: string;
                    parameters: {
                        in: string;
                        name: string;
                        description: string;
                        required: boolean;
                        schema: {
                            type: string;
                        };
                    }[];
                    requestBody: {
                        required: boolean;
                        content: {
                            "application/json": {
                                schema: {
                                    properties: {
                                        accessToken: {
                                            type: string;
                                            description: string;
                                        };
                                        uuid: {
                                            type: string;
                                            description: string;
                                        };
                                    };
                                    type: string;
                                    required: string[];
                                };
                            };
                        };
                    };
                    responses: {
                        "200": {
                            description: string;
                            content: {
                                "application/json": {
                                    schema: {
                                        properties: {
                                            status: {
                                                type: string;
                                                description: string;
                                            };
                                            message: {
                                                type: string;
                                                description: string;
                                            };
                                            result: {
                                                type: string;
                                                properties: {
                                                    message: {
                                                        type: string;
                                                        description: string;
                                                    };
                                                };
                                                required: string[];
                                            };
                                            error: {
                                                type: string;
                                                properties: {
                                                    message: {
                                                        type: string;
                                                        description: string;
                                                    };
                                                };
                                                required: string[];
                                            };
                                        };
                                        type: string;
                                        required: string[];
                                    };
                                };
                            };
                        };
                    };
                };
            };
            "/rodeo/org/{id}/super-admin": {
                post: {
                    tags: string[];
                    summary: string;
                    description: string;
                    parameters: {
                        in: string;
                        name: string;
                        description: string;
                        required: boolean;
                        schema: {
                            type: string;
                        };
                    }[];
                    requestBody: {
                        required: boolean;
                        content: {
                            "application/json": {
                                schema: {
                                    properties: {
                                        accessToken: {
                                            type: string;
                                            description: string;
                                        };
                                        uuid: {
                                            type: string;
                                            description: string;
                                        };
                                        adminUUID: {
                                            type: string;
                                            description: string;
                                        };
                                    };
                                    type: string;
                                    required: string[];
                                };
                            };
                        };
                    };
                    responses: {
                        "200": {
                            description: string;
                            content: {
                                "application/json": {
                                    schema: {
                                        properties: {
                                            status: {
                                                type: string;
                                                description: string;
                                            };
                                            message: {
                                                type: string;
                                                description: string;
                                            };
                                            result: {
                                                type: string;
                                                properties: {
                                                    message: {
                                                        type: string;
                                                        description: string;
                                                    };
                                                };
                                                required: string[];
                                            };
                                            error: {
                                                type: string;
                                                properties: {
                                                    message: {
                                                        type: string;
                                                        description: string;
                                                    };
                                                };
                                                required: string[];
                                            };
                                        };
                                        type: string;
                                        required: string[];
                                    };
                                };
                            };
                        };
                    };
                };
            };
            "/rodeo/org/{id}/test-admin": {
                post: {
                    tags: string[];
                    summary: string;
                    description: string;
                    parameters: {
                        in: string;
                        name: string;
                        description: string;
                        required: boolean;
                        schema: {
                            type: string;
                        };
                    }[];
                    requestBody: {
                        required: boolean;
                        content: {
                            "application/json": {
                                schema: {
                                    properties: {
                                        accessToken: {
                                            type: string;
                                            description: string;
                                        };
                                        uuid: {
                                            type: string;
                                            description: string;
                                        };
                                        adminUUID: {
                                            type: string;
                                            description: string;
                                        };
                                    };
                                    type: string;
                                    required: string[];
                                };
                            };
                        };
                    };
                    responses: {
                        "200": {
                            description: string;
                            content: {
                                "application/json": {
                                    schema: {
                                        properties: {
                                            status: {
                                                type: string;
                                                description: string;
                                            };
                                            message: {
                                                type: string;
                                                description: string;
                                            };
                                            result: {
                                                type: string;
                                                properties: {
                                                    message: {
                                                        type: string;
                                                        description: string;
                                                    };
                                                };
                                                required: string[];
                                            };
                                            error: {
                                                type: string;
                                                properties: {
                                                    message: {
                                                        type: string;
                                                        description: string;
                                                    };
                                                };
                                                required: string[];
                                            };
                                        };
                                        type: string;
                                        required: string[];
                                    };
                                };
                            };
                        };
                    };
                };
            };
            "/rodeo/org/{id}/test-member": {
                post: {
                    tags: string[];
                    summary: string;
                    description: string;
                    parameters: {
                        in: string;
                        name: string;
                        description: string;
                        required: boolean;
                        schema: {
                            type: string;
                        };
                    }[];
                    requestBody: {
                        required: boolean;
                        content: {
                            "application/json": {
                                schema: {
                                    properties: {
                                        accessToken: {
                                            type: string;
                                            description: string;
                                        };
                                        memberUUID: {
                                            type: string;
                                            description: string;
                                        };
                                        uuid: {
                                            type: string;
                                            description: string;
                                        };
                                    };
                                    type: string;
                                    required: string[];
                                };
                            };
                        };
                    };
                    responses: {
                        "200": {
                            description: string;
                            content: {
                                "application/json": {
                                    schema: {
                                        properties: {
                                            status: {
                                                type: string;
                                                description: string;
                                            };
                                            message: {
                                                type: string;
                                                description: string;
                                            };
                                            result: {
                                                type: string;
                                                properties: {
                                                    message: {
                                                        type: string;
                                                        description: string;
                                                    };
                                                };
                                                required: string[];
                                            };
                                            error: {
                                                type: string;
                                                properties: {
                                                    message: {
                                                        type: string;
                                                        description: string;
                                                    };
                                                };
                                                required: string[];
                                            };
                                        };
                                        type: string;
                                        required: string[];
                                    };
                                };
                            };
                        };
                    };
                };
            };
            "/rodeo/org/{id}/edit": {
                post: {
                    tags: string[];
                    summary: string;
                    description: string;
                    parameters: {
                        in: string;
                        name: string;
                        description: string;
                        required: boolean;
                        schema: {
                            type: string;
                        };
                    }[];
                    requestBody: {
                        required: boolean;
                        content: {
                            "application/json": {
                                schema: {
                                    properties: {
                                        accessToken: {
                                            type: string;
                                            description: string;
                                        };
                                        uuid: {
                                            type: string;
                                            description: string;
                                        };
                                        edits: {
                                            type: string;
                                            properties: {};
                                            required: never[];
                                        };
                                    };
                                    type: string;
                                    required: string[];
                                };
                            };
                        };
                    };
                    responses: {
                        "200": {
                            description: string;
                            content: {
                                "application/json": {
                                    schema: {
                                        properties: {
                                            status: {
                                                type: string;
                                                description: string;
                                            };
                                            message: {
                                                type: string;
                                                description: string;
                                            };
                                            result: {
                                                type: string;
                                                properties: {
                                                    message: {
                                                        type: string;
                                                        description: string;
                                                    };
                                                };
                                                required: string[];
                                            };
                                            error: {
                                                type: string;
                                                properties: {
                                                    message: {
                                                        type: string;
                                                        description: string;
                                                    };
                                                };
                                                required: string[];
                                            };
                                        };
                                        type: string;
                                        required: string[];
                                    };
                                };
                            };
                        };
                    };
                };
            };
            "/peels/create": {
                post: {
                    tags: string[];
                    summary: string;
                    description: string;
                    parameters: never[];
                    requestBody: {
                        required: boolean;
                        content: {
                            "application/json": {
                                schema: {
                                    properties: {
                                        accessToken: {
                                            type: string;
                                            description: string;
                                        };
                                        name: {
                                            type: string;
                                            description: string;
                                        };
                                        meta: {
                                            type: string;
                                            description: string;
                                        };
                                        url: {
                                            type: string;
                                            description: string;
                                        };
                                        creatorAddress: {
                                            type: string;
                                            description: string;
                                        };
                                    };
                                    type: string;
                                    required: string[];
                                };
                            };
                        };
                    };
                    responses: {
                        "200": {
                            description: string;
                            content: {
                                "application/json": {
                                    schema: {
                                        properties: {
                                            data: {
                                                type: string;
                                                properties: {
                                                    status: {
                                                        type: string;
                                                        description: string;
                                                    };
                                                    message: {
                                                        type: string;
                                                        description: string;
                                                    };
                                                    index: {
                                                        type: string;
                                                        description: string;
                                                    };
                                                    txId: {
                                                        type: string;
                                                        description: string;
                                                    };
                                                    meta: {
                                                        type: string;
                                                        description: string;
                                                    };
                                                    createdIndex: {
                                                        type: string;
                                                        description: string;
                                                    };
                                                };
                                                required: string[];
                                            };
                                            error: {
                                                type: string;
                                                properties: {
                                                    message: {
                                                        type: string;
                                                        description: string;
                                                    };
                                                };
                                                required: never[];
                                            };
                                        };
                                        type: string;
                                        required: string[];
                                    };
                                };
                            };
                        };
                    };
                };
            };
            "/peels/fund-user": {
                post: {
                    tags: string[];
                    summary: string;
                    description: string;
                    parameters: never[];
                    requestBody: {
                        required: boolean;
                        content: {
                            "application/json": {
                                schema: {
                                    properties: {
                                        address: {
                                            type: string;
                                            description: string;
                                        };
                                        contractId: {
                                            type: string;
                                            description: string;
                                        };
                                        challenge: {
                                            type: string;
                                            description: string;
                                        };
                                    };
                                    type: string;
                                    required: string[];
                                };
                            };
                        };
                    };
                    responses: {
                        "200": {
                            description: string;
                            content: {
                                "application/json": {
                                    schema: {
                                        properties: {
                                            status: {
                                                type: string;
                                                description: string;
                                            };
                                            message: {
                                                type: string;
                                                description: string;
                                            };
                                            result: {
                                                type: string;
                                                properties: {
                                                    status: {
                                                        type: string;
                                                        description: string;
                                                    };
                                                    message: {
                                                        type: string;
                                                        description: string;
                                                    };
                                                    index: {
                                                        type: string;
                                                        description: string;
                                                    };
                                                    txId: {
                                                        type: string;
                                                        description: string;
                                                    };
                                                    meta: {
                                                        type: string;
                                                        description: string;
                                                    };
                                                    createdIndex: {
                                                        type: string;
                                                        description: string;
                                                    };
                                                };
                                                required: string[];
                                            };
                                            error: {
                                                type: string;
                                                properties: {
                                                    message: {
                                                        type: string;
                                                        description: string;
                                                    };
                                                };
                                                required: string[];
                                            };
                                        };
                                        type: string;
                                        required: string[];
                                    };
                                };
                            };
                        };
                    };
                };
            };
            "/peels/get": {
                post: {
                    tags: string[];
                    summary: string;
                    description: string;
                    parameters: never[];
                    requestBody: {
                        required: boolean;
                        content: {
                            "application/json": {
                                schema: {
                                    properties: {
                                        accessToken: {
                                            type: string;
                                            description: string;
                                        };
                                        contractId: {
                                            type: string;
                                            description: string;
                                        };
                                    };
                                    type: string;
                                    required: string[];
                                };
                            };
                        };
                    };
                    responses: {
                        "200": {
                            description: string;
                            content: {
                                "application/json": {
                                    schema: {
                                        properties: {
                                            data: {
                                                type: string;
                                                items: {
                                                    type: string;
                                                    properties: {
                                                        id: {
                                                            type: string;
                                                            description: string;
                                                        };
                                                        address: {
                                                            type: string;
                                                            description: string;
                                                        };
                                                        name: {
                                                            type: string;
                                                            description: string;
                                                        };
                                                        meta: {
                                                            type: string;
                                                            description: string;
                                                        };
                                                        url: {
                                                            type: string;
                                                            description: string;
                                                        };
                                                        isMinted: {
                                                            type: string;
                                                            description: string;
                                                        };
                                                        tokenIndex: {
                                                            type: string;
                                                            description: string;
                                                        };
                                                        status: {
                                                            type: string;
                                                            description: string;
                                                        };
                                                        creator_address: {
                                                            type: string;
                                                            description: string;
                                                        };
                                                        creator_token: {
                                                            type: string;
                                                            description: string;
                                                        };
                                                        updatedAt: {
                                                            type: string;
                                                            description: string;
                                                        };
                                                    };
                                                    required: string[];
                                                };
                                            };
                                        };
                                        type: string;
                                        required: string[];
                                    };
                                };
                            };
                        };
                    };
                };
            };
            "/peels/grant": {
                post: {
                    tags: string[];
                    summary: string;
                    description: string;
                    parameters: never[];
                    requestBody: {
                        required: boolean;
                        content: {
                            "application/json": {
                                schema: {
                                    properties: {
                                        accessToken: {
                                            type: string;
                                            description: string;
                                        };
                                        appId: {
                                            type: string;
                                            description: string;
                                        };
                                        grantToAddress: {
                                            type: string;
                                            description: string;
                                        };
                                        totalGrant: {
                                            type: string;
                                            description: string;
                                        };
                                    };
                                    type: string;
                                    required: string[];
                                };
                            };
                        };
                    };
                    responses: {
                        "200": {
                            description: string;
                            content: {
                                "application/json": {
                                    schema: {
                                        properties: {
                                            data: {
                                                type: string;
                                                properties: {
                                                    status: {
                                                        type: string;
                                                        description: string;
                                                    };
                                                    message: {
                                                        type: string;
                                                        description: string;
                                                    };
                                                    index: {
                                                        type: string;
                                                        description: string;
                                                    };
                                                    txId: {
                                                        type: string;
                                                        description: string;
                                                    };
                                                    meta: {
                                                        type: string;
                                                        description: string;
                                                    };
                                                    createdIndex: {
                                                        type: string;
                                                        description: string;
                                                    };
                                                };
                                                required: string[];
                                            };
                                            error: {
                                                type: string;
                                                properties: {
                                                    message: {
                                                        type: string;
                                                        description: string;
                                                    };
                                                };
                                                required: never[];
                                            };
                                        };
                                        type: string;
                                        required: string[];
                                    };
                                };
                            };
                        };
                    };
                };
            };
            "/peels/grant-tokens": {
                post: {
                    tags: string[];
                    summary: string;
                    description: string;
                    parameters: never[];
                    requestBody: {
                        required: boolean;
                        content: {
                            "application/json": {
                                schema: {
                                    properties: {
                                        accessToken: {
                                            type: string;
                                            description: string;
                                        };
                                        appId: {
                                            type: string;
                                            description: string;
                                        };
                                        grantToAddress: {
                                            type: string;
                                            description: string;
                                        };
                                        tokenId: {
                                            type: string;
                                            description: string;
                                        };
                                        totalTokens: {
                                            type: string;
                                            description: string;
                                        };
                                    };
                                    type: string;
                                    required: string[];
                                };
                            };
                        };
                    };
                    responses: {
                        "200": {
                            description: string;
                            content: {
                                "application/json": {
                                    schema: {
                                        properties: {
                                            data: {
                                                type: string;
                                                properties: {
                                                    status: {
                                                        type: string;
                                                        description: string;
                                                    };
                                                    message: {
                                                        type: string;
                                                        description: string;
                                                    };
                                                    index: {
                                                        type: string;
                                                        description: string;
                                                    };
                                                    txId: {
                                                        type: string;
                                                        description: string;
                                                    };
                                                    meta: {
                                                        type: string;
                                                        description: string;
                                                    };
                                                    createdIndex: {
                                                        type: string;
                                                        description: string;
                                                    };
                                                };
                                                required: string[];
                                            };
                                            error: {
                                                type: string;
                                                properties: {
                                                    message: {
                                                        type: string;
                                                        description: string;
                                                    };
                                                };
                                                required: never[];
                                            };
                                        };
                                        type: string;
                                        required: string[];
                                    };
                                };
                            };
                        };
                    };
                };
            };
            "/peels/list-all": {
                post: {
                    tags: string[];
                    summary: string;
                    description: string;
                    parameters: never[];
                    requestBody: {
                        required: boolean;
                        content: {
                            "application/json": {
                                schema: {
                                    properties: {};
                                    type: string;
                                    required: never[];
                                };
                            };
                        };
                    };
                    responses: {
                        "200": {
                            description: string;
                            content: {
                                "application/json": {
                                    schema: {
                                        properties: {
                                            data: {
                                                type: string;
                                                items: {
                                                    type: string;
                                                    properties: {
                                                        id: {
                                                            type: string;
                                                            description: string;
                                                        };
                                                        address: {
                                                            type: string;
                                                            description: string;
                                                        };
                                                        name: {
                                                            type: string;
                                                            description: string;
                                                        };
                                                        meta: {
                                                            type: string;
                                                            description: string;
                                                        };
                                                        url: {
                                                            type: string;
                                                            description: string;
                                                        };
                                                        isMinted: {
                                                            type: string;
                                                            description: string;
                                                        };
                                                        tokenIndex: {
                                                            type: string;
                                                            description: string;
                                                        };
                                                        status: {
                                                            type: string;
                                                            description: string;
                                                        };
                                                        creator_address: {
                                                            type: string;
                                                            description: string;
                                                        };
                                                        creator_token: {
                                                            type: string;
                                                            description: string;
                                                        };
                                                        updatedAt: {
                                                            type: string;
                                                            description: string;
                                                        };
                                                    };
                                                    required: string[];
                                                };
                                            };
                                        };
                                        type: string;
                                        required: string[];
                                    };
                                };
                            };
                        };
                    };
                };
            };
            "/peels/list-mine": {
                post: {
                    tags: string[];
                    summary: string;
                    description: string;
                    parameters: never[];
                    requestBody: {
                        required: boolean;
                        content: {
                            "application/json": {
                                schema: {
                                    properties: {
                                        accessToken: {
                                            type: string;
                                            description: string;
                                        };
                                        contractIds: {
                                            items: {
                                                type: string;
                                                description: string;
                                            };
                                            type: string;
                                        };
                                    };
                                    type: string;
                                    required: string[];
                                };
                            };
                        };
                    };
                    responses: {
                        "200": {
                            description: string;
                            content: {
                                "application/json": {
                                    schema: {
                                        properties: {
                                            data: {
                                                type: string;
                                                items: {
                                                    type: string;
                                                    properties: {
                                                        id: {
                                                            type: string;
                                                            description: string;
                                                        };
                                                        address: {
                                                            type: string;
                                                            description: string;
                                                        };
                                                        name: {
                                                            type: string;
                                                            description: string;
                                                        };
                                                        meta: {
                                                            type: string;
                                                            description: string;
                                                        };
                                                        url: {
                                                            type: string;
                                                            description: string;
                                                        };
                                                        isMinted: {
                                                            type: string;
                                                            description: string;
                                                        };
                                                        tokenIndex: {
                                                            type: string;
                                                            description: string;
                                                        };
                                                        status: {
                                                            type: string;
                                                            description: string;
                                                        };
                                                        creator_address: {
                                                            type: string;
                                                            description: string;
                                                        };
                                                        creator_token: {
                                                            type: string;
                                                            description: string;
                                                        };
                                                        updatedAt: {
                                                            type: string;
                                                            description: string;
                                                        };
                                                    };
                                                    required: string[];
                                                };
                                            };
                                        };
                                        type: string;
                                        required: string[];
                                    };
                                };
                            };
                        };
                    };
                };
            };
            "/peels/list": {
                post: {
                    tags: string[];
                    summary: string;
                    description: string;
                    parameters: never[];
                    requestBody: {
                        required: boolean;
                        content: {
                            "application/json": {
                                schema: {
                                    properties: {
                                        accessToken: {
                                            type: string;
                                            description: string;
                                        };
                                        creatorAddress: {
                                            type: string;
                                            description: string;
                                        };
                                    };
                                    type: string;
                                    required: string[];
                                };
                            };
                        };
                    };
                    responses: {
                        "200": {
                            description: string;
                            content: {
                                "application/json": {
                                    schema: {
                                        properties: {
                                            data: {
                                                type: string;
                                                items: {
                                                    type: string;
                                                    properties: {
                                                        id: {
                                                            type: string;
                                                            description: string;
                                                        };
                                                        address: {
                                                            type: string;
                                                            description: string;
                                                        };
                                                        name: {
                                                            type: string;
                                                            description: string;
                                                        };
                                                        meta: {
                                                            type: string;
                                                            description: string;
                                                        };
                                                        url: {
                                                            type: string;
                                                            description: string;
                                                        };
                                                        isMinted: {
                                                            type: string;
                                                            description: string;
                                                        };
                                                        tokenIndex: {
                                                            type: string;
                                                            description: string;
                                                        };
                                                        status: {
                                                            type: string;
                                                            description: string;
                                                        };
                                                        creator_address: {
                                                            type: string;
                                                            description: string;
                                                        };
                                                        creator_token: {
                                                            type: string;
                                                            description: string;
                                                        };
                                                        updatedAt: {
                                                            type: string;
                                                            description: string;
                                                        };
                                                    };
                                                    required: string[];
                                                };
                                            };
                                        };
                                        type: string;
                                        required: string[];
                                    };
                                };
                            };
                        };
                    };
                };
            };
            "/peels/mint": {
                post: {
                    tags: string[];
                    summary: string;
                    description: string;
                    parameters: never[];
                    requestBody: {
                        required: boolean;
                        content: {
                            "application/json": {
                                schema: {
                                    properties: {
                                        accessToken: {
                                            type: string;
                                            description: string;
                                        };
                                        appId: {
                                            type: string;
                                            description: string;
                                        };
                                        tokenName: {
                                            type: string;
                                            description: string;
                                        };
                                        tokenUrl: {
                                            type: string;
                                            description: string;
                                        };
                                        totalTokens: {
                                            type: string;
                                            description: string;
                                        };
                                    };
                                    type: string;
                                    required: string[];
                                };
                            };
                        };
                    };
                    responses: {
                        "200": {
                            description: string;
                            content: {
                                "application/json": {
                                    schema: {
                                        properties: {
                                            data: {
                                                type: string;
                                                properties: {
                                                    status: {
                                                        type: string;
                                                        description: string;
                                                    };
                                                    message: {
                                                        type: string;
                                                        description: string;
                                                    };
                                                    index: {
                                                        type: string;
                                                        description: string;
                                                    };
                                                    txId: {
                                                        type: string;
                                                        description: string;
                                                    };
                                                    meta: {
                                                        type: string;
                                                        description: string;
                                                    };
                                                    createdIndex: {
                                                        type: string;
                                                        description: string;
                                                    };
                                                };
                                                required: string[];
                                            };
                                            error: {
                                                type: string;
                                                properties: {
                                                    message: {
                                                        type: string;
                                                        description: string;
                                                    };
                                                };
                                                required: never[];
                                            };
                                        };
                                        type: string;
                                        required: string[];
                                    };
                                };
                            };
                        };
                    };
                };
            };
            "/ttm/receive": {
                post: {
                    tags: string[];
                    summary: string;
                    description: string;
                    parameters: never[];
                    requestBody: {
                        required: boolean;
                        content: {
                            "application/json": {
                                schema: {
                                    properties: {
                                        accessToken: {
                                            type: string;
                                            description: string;
                                        };
                                        uuid: {
                                            type: string;
                                            description: string;
                                        };
                                        lastRound: {
                                            type: string;
                                            description: string;
                                        };
                                    };
                                    type: string;
                                    required: string[];
                                };
                            };
                        };
                    };
                    responses: {
                        "200": {
                            description: string;
                            content: {
                                "application/json": {
                                    schema: {
                                        properties: {
                                            status: {
                                                type: string;
                                                description: string;
                                            };
                                            message: {
                                                type: string;
                                                description: string;
                                            };
                                            result: {
                                                type: string;
                                                properties: {};
                                                required: never[];
                                            };
                                            error: {
                                                type: string;
                                                properties: {};
                                                required: never[];
                                            };
                                        };
                                        type: string;
                                        required: string[];
                                    };
                                };
                            };
                        };
                    };
                };
            };
            "/ttm/relay": {
                post: {
                    tags: string[];
                    summary: string;
                    description: string;
                    parameters: never[];
                    requestBody: {
                        required: boolean;
                        content: {
                            "application/json": {
                                schema: {
                                    properties: {};
                                    type: string;
                                    required: never[];
                                };
                            };
                        };
                    };
                    responses: {
                        "200": {
                            schema: {
                                properties: {};
                                type: string;
                                required: never[];
                            };
                        };
                    };
                };
            };
            "/ttm/send": {
                post: {
                    tags: string[];
                    summary: string;
                    description: string;
                    parameters: never[];
                    requestBody: {
                        required: boolean;
                        content: {
                            "application/json": {
                                schema: {
                                    properties: {
                                        accessToken: {
                                            type: string;
                                            description: string;
                                        };
                                        type: {
                                            type: string;
                                            description: string;
                                        };
                                        tokens: {
                                            type: string;
                                            description: string;
                                        };
                                        message: {
                                            type: string;
                                            description: string;
                                        };
                                        files: {
                                            type: string;
                                            description: string;
                                        };
                                        part: {
                                            type: string;
                                            description: string;
                                        };
                                        uri: {
                                            type: string;
                                            description: string;
                                        };
                                        uuid: {
                                            type: string;
                                            description: string;
                                        };
                                    };
                                    type: string;
                                    required: string[];
                                };
                            };
                        };
                    };
                    responses: {
                        "200": {
                            description: string;
                            content: {
                                "application/json": {
                                    schema: {
                                        properties: {
                                            status: {
                                                type: string;
                                                description: string;
                                            };
                                            message: {
                                                type: string;
                                                description: string;
                                            };
                                            result: {
                                                type: string;
                                                properties: {};
                                                required: never[];
                                            };
                                            error: {
                                                type: string;
                                                properties: {};
                                                required: never[];
                                            };
                                        };
                                        type: string;
                                        required: string[];
                                    };
                                };
                            };
                        };
                    };
                };
            };
            "/ttm/send-by-token": {
                post: {
                    tags: string[];
                    summary: string;
                    description: string;
                    parameters: never[];
                    requestBody: {
                        required: boolean;
                        content: {
                            "application/json": {
                                schema: {
                                    properties: {
                                        accessToken: {
                                            type: string;
                                            description: string;
                                        };
                                        type: {
                                            type: string;
                                            description: string;
                                        };
                                        tokens: {
                                            type: string;
                                            description: string;
                                        };
                                        message: {
                                            type: string;
                                            description: string;
                                        };
                                        files: {
                                            type: string;
                                            description: string;
                                        };
                                        part: {
                                            type: string;
                                            description: string;
                                        };
                                        uri: {
                                            type: string;
                                            description: string;
                                        };
                                        uuid: {
                                            type: string;
                                            description: string;
                                        };
                                    };
                                    type: string;
                                    required: string[];
                                };
                            };
                        };
                    };
                    responses: {
                        "200": {
                            description: string;
                            content: {
                                "application/json": {
                                    schema: {
                                        properties: {
                                            status: {
                                                type: string;
                                                description: string;
                                            };
                                            message: {
                                                type: string;
                                                description: string;
                                            };
                                            result: {
                                                type: string;
                                                properties: {};
                                                required: never[];
                                            };
                                            error: {
                                                type: string;
                                                properties: {};
                                                required: never[];
                                            };
                                        };
                                        type: string;
                                        required: string[];
                                    };
                                };
                            };
                        };
                    };
                };
            };
            "/get-access-token": {
                post: {
                    tags: string[];
                    summary: string;
                    description: string;
                    parameters: never[];
                    requestBody: {
                        required: boolean;
                        content: {
                            "application/json": {
                                schema: {
                                    properties: {
                                        address: {
                                            type: string;
                                            description: string;
                                        };
                                        txId: {
                                            type: string;
                                            description: string;
                                        };
                                        signedTx: {
                                            type: string;
                                            description: string;
                                        };
                                    };
                                    type: string;
                                    required: string[];
                                };
                            };
                        };
                    };
                    responses: {
                        "200": {
                            description: string;
                            content: {
                                "application/json": {
                                    schema: {
                                        properties: {
                                            status: {
                                                type: string;
                                                description: string;
                                            };
                                            message: {
                                                type: string;
                                                description: string;
                                            };
                                            result: {
                                                type: string;
                                                properties: {
                                                    token: {
                                                        type: string;
                                                        description: string;
                                                    };
                                                    expires: {
                                                        type: string;
                                                        description: string;
                                                    };
                                                };
                                                required: string[];
                                            };
                                            error: {
                                                type: string;
                                                properties: {
                                                    message: {
                                                        type: string;
                                                        description: string;
                                                    };
                                                };
                                                required: string[];
                                            };
                                        };
                                        type: string;
                                        required: string[];
                                    };
                                };
                            };
                        };
                    };
                };
            };
            "/invite/refeemm": {
                post: {
                    tags: string[];
                    summary: string;
                    description: string;
                    parameters: never[];
                    requestBody: {
                        required: boolean;
                        content: {
                            "application/json": {
                                schema: {
                                    properties: {
                                        address: {
                                            type: string;
                                            description: string;
                                        };
                                        invite: {
                                            type: string;
                                            description: string;
                                        };
                                    };
                                    type: string;
                                    required: string[];
                                };
                            };
                        };
                    };
                    responses: {
                        "200": {
                            description: string;
                            content: {
                                "application/json": {
                                    schema: {
                                        properties: {
                                            status: {
                                                type: string;
                                                description: string;
                                            };
                                            message: {
                                                type: string;
                                                description: string;
                                            };
                                            result: {
                                                type: string;
                                                properties: {};
                                                required: never[];
                                            };
                                            error: {
                                                type: string;
                                                properties: {
                                                    message: {
                                                        type: string;
                                                        description: string;
                                                    };
                                                };
                                                required: string[];
                                            };
                                        };
                                        type: string;
                                        required: string[];
                                    };
                                };
                            };
                        };
                    };
                };
            };
            "/user/deregister": {
                post: {
                    tags: string[];
                    summary: string;
                    description: string;
                    parameters: never[];
                    requestBody: {
                        required: boolean;
                        content: {
                            "application/json": {
                                schema: {
                                    properties: {
                                        accessToken: {
                                            type: string;
                                            description: string;
                                        };
                                        uuid: {
                                            type: string;
                                            description: string;
                                        };
                                    };
                                    type: string;
                                    required: string[];
                                };
                            };
                        };
                    };
                    responses: {
                        "200": {
                            description: string;
                            content: {
                                "application/json": {
                                    schema: {
                                        properties: {
                                            status: {
                                                type: string;
                                                description: string;
                                            };
                                            message: {
                                                type: string;
                                                description: string;
                                            };
                                            result: {
                                                type: string;
                                                properties: {
                                                    message: {
                                                        type: string;
                                                        description: string;
                                                    };
                                                };
                                                required: string[];
                                            };
                                            error: {
                                                type: string;
                                                properties: {
                                                    message: {
                                                        type: string;
                                                        description: string;
                                                    };
                                                };
                                                required: string[];
                                            };
                                        };
                                        type: string;
                                        required: string[];
                                    };
                                };
                            };
                        };
                    };
                };
            };
            "/list-accounts": {
                post: {
                    tags: string[];
                    summary: string;
                    description: string;
                    parameters: {
                        in: string;
                        name: string;
                        description: string;
                        required: boolean;
                        schema: {
                            type: string;
                        };
                    }[];
                    requestBody: {
                        required: boolean;
                        content: {
                            "application/json": {
                                schema: {
                                    properties: {
                                        accessToken: {
                                            type: string;
                                            description: string;
                                        };
                                        creatorAddress: {
                                            type: string;
                                            description: string;
                                        };
                                    };
                                    type: string;
                                    required: string[];
                                };
                            };
                        };
                    };
                    responses: {
                        "200": {
                            description: string;
                            content: {
                                "application/json": {
                                    schema: {
                                        properties: {
                                            status: {
                                                type: string;
                                                description: string;
                                            };
                                            message: {
                                                type: string;
                                                description: string;
                                            };
                                            result: {
                                                type: string;
                                                properties: {
                                                    message: {
                                                        type: string;
                                                        description: string;
                                                    };
                                                };
                                                required: string[];
                                            };
                                            error: {
                                                type: string;
                                                properties: {
                                                    message: {
                                                        type: string;
                                                        description: string;
                                                    };
                                                };
                                                required: string[];
                                            };
                                        };
                                        type: string;
                                        required: string[];
                                    };
                                };
                            };
                        };
                    };
                };
            };
            "/user/opt-into-app": {
                post: {
                    tags: string[];
                    summary: string;
                    description: string;
                    parameters: never[];
                    requestBody: {
                        required: boolean;
                        content: {
                            "application/json": {
                                schema: {
                                    properties: {
                                        accessToken: {
                                            type: string;
                                            description: string;
                                        };
                                        uuid: {
                                            type: string;
                                            description: string;
                                        };
                                        appId: {
                                            type: string;
                                            description: string;
                                        };
                                        appArgs: {
                                            type: string;
                                            description: string;
                                        };
                                    };
                                    type: string;
                                    required: string[];
                                };
                            };
                        };
                    };
                    responses: {
                        "200": {
                            description: string;
                            content: {
                                "application/json": {
                                    schema: {
                                        properties: {
                                            status: {
                                                type: string;
                                                description: string;
                                            };
                                            message: {
                                                type: string;
                                                description: string;
                                            };
                                            result: {
                                                type: string;
                                                properties: {
                                                    message: {
                                                        type: string;
                                                        description: string;
                                                    };
                                                };
                                                required: string[];
                                            };
                                            error: {
                                                type: string;
                                                properties: {
                                                    message: {
                                                        type: string;
                                                        description: string;
                                                    };
                                                };
                                                required: string[];
                                            };
                                        };
                                        type: string;
                                        required: string[];
                                    };
                                };
                            };
                        };
                    };
                };
            };
            "/user/opt-into-token": {
                post: {
                    tags: string[];
                    summary: string;
                    description: string;
                    parameters: never[];
                    requestBody: {
                        required: boolean;
                        content: {
                            "application/json": {
                                schema: {
                                    properties: {
                                        accessToken: {
                                            type: string;
                                            description: string;
                                        };
                                        uuid: {
                                            type: string;
                                            description: string;
                                        };
                                        asaId: {
                                            type: string;
                                            description: string;
                                        };
                                    };
                                    type: string;
                                    required: string[];
                                };
                            };
                        };
                    };
                    responses: {
                        "200": {
                            description: string;
                            content: {
                                "application/json": {
                                    schema: {
                                        properties: {
                                            status: {
                                                type: string;
                                                description: string;
                                            };
                                            message: {
                                                type: string;
                                                description: string;
                                            };
                                            result: {
                                                type: string;
                                                properties: {
                                                    message: {
                                                        type: string;
                                                        description: string;
                                                    };
                                                };
                                                required: string[];
                                            };
                                            error: {
                                                type: string;
                                                properties: {
                                                    message: {
                                                        type: string;
                                                        description: string;
                                                    };
                                                };
                                                required: string[];
                                            };
                                        };
                                        type: string;
                                        required: string[];
                                    };
                                };
                            };
                        };
                    };
                };
            };
            "/user/register": {
                post: {
                    tags: string[];
                    summary: string;
                    description: string;
                    parameters: {
                        in: string;
                        name: string;
                        description: string;
                        required: boolean;
                        schema: {
                            type: string;
                        };
                    }[];
                    requestBody: {
                        required: boolean;
                        content: {
                            "application/json": {
                                schema: {
                                    properties: {
                                        uuid: {
                                            type: string;
                                            description: string;
                                        };
                                        creatorAddress: {
                                            type: string;
                                            description: string;
                                        };
                                    };
                                    type: string;
                                    required: string[];
                                };
                            };
                        };
                    };
                    responses: {
                        "200": {
                            description: string;
                            content: {
                                "application/json": {
                                    schema: {
                                        properties: {
                                            status: {
                                                type: string;
                                                description: string;
                                            };
                                            message: {
                                                type: string;
                                                description: string;
                                            };
                                            result: {
                                                type: string;
                                                properties: {
                                                    message: {
                                                        type: string;
                                                        description: string;
                                                    };
                                                };
                                                required: string[];
                                            };
                                            error: {
                                                type: string;
                                                properties: {
                                                    message: {
                                                        type: string;
                                                        description: string;
                                                    };
                                                };
                                                required: string[];
                                            };
                                        };
                                        type: string;
                                        required: string[];
                                    };
                                };
                            };
                        };
                    };
                };
            };
            "/ttm/deregister": {
                post: {
                    tags: string[];
                    summary: string;
                    description: string;
                    parameters: never[];
                    requestBody: {
                        required: boolean;
                        content: {
                            "application/json": {
                                schema: {
                                    properties: {
                                        accessToken: {
                                            type: string;
                                            description: string;
                                        };
                                        uuid: {
                                            type: string;
                                            description: string;
                                        };
                                    };
                                    type: string;
                                    required: string[];
                                };
                            };
                        };
                    };
                    responses: {
                        "200": {
                            description: string;
                            content: {
                                "application/json": {
                                    schema: {
                                        properties: {
                                            status: {
                                                type: string;
                                                description: string;
                                            };
                                            message: {
                                                type: string;
                                                description: string;
                                            };
                                            result: {
                                                type: string;
                                                properties: {};
                                                required: never[];
                                            };
                                            error: {
                                                type: string;
                                                properties: {};
                                                required: never[];
                                            };
                                        };
                                        type: string;
                                        required: string[];
                                    };
                                };
                            };
                        };
                    };
                };
            };
            "/ttm/dns": {
                get: {
                    tags: string[];
                    summary: string;
                    description: string;
                    parameters: never[];
                    requestBody: {
                        required: boolean;
                        content: {
                            "application/json": {};
                        };
                    };
                    responses: {
                        "200": {
                            schema: {
                                properties: {};
                                type: string;
                                required: never[];
                            };
                        };
                    };
                };
            };
            "/geo/register": {
                post: {
                    tags: string[];
                    summary: string;
                    description: string;
                    parameters: never[];
                    requestBody: {
                        required: boolean;
                        content: {
                            "application/json": {
                                schema: {
                                    properties: {
                                        accessToken: {
                                            type: string;
                                            description: string;
                                        };
                                        uuid: {
                                            type: string;
                                            description: string;
                                        };
                                        wallet: {
                                            type: string;
                                            description: string;
                                        };
                                        url: {
                                            type: string;
                                            description: string;
                                        };
                                        coordinates: {
                                            type: string;
                                            description: string;
                                        };
                                        NORAD: {
                                            type: string;
                                            description: string;
                                        };
                                    };
                                    type: string;
                                    required: string[];
                                };
                            };
                        };
                    };
                    responses: {
                        "200": {
                            description: string;
                            content: {
                                "application/json": {
                                    schema: {
                                        properties: {
                                            status: {
                                                type: string;
                                                description: string;
                                            };
                                            message: {
                                                type: string;
                                                description: string;
                                            };
                                            result: {
                                                type: string;
                                                properties: {};
                                                required: never[];
                                            };
                                            error: {
                                                type: string;
                                                properties: {};
                                                required: never[];
                                            };
                                        };
                                        type: string;
                                        required: string[];
                                    };
                                };
                            };
                        };
                    };
                };
            };
        };
    };
};
