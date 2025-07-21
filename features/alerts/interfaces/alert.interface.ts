export interface UserAlertsResponse {
    data: Alert[];
    pagination: AlertPagination
}


export interface Alert {
    id: string;
    uuid: string;
    title: string;
    description: string;
    tickers: {
        ticker: string;
        item_type: TrackedItemType;
    }[];
    sentiment: 'positive' | 'negative' | 'neutral';
    severity: 'low' | 'medium' | 'high';
    popularity: number;
    post_ids: string[];
    platform_type: MediaSubscriptionPlatformType;
    account_identifier: string;
    account_name: string;
    screen_name: string;
    created_at: string;
}

export interface AlertPagination {
    total: number;
    page: number;
    limit: number;
    hasMore: boolean;
}

export interface AlertQuery {
    limit: number;
}

export const TrackedItemTypes = {
    crypto: "crypto",
    stock: "stock",
    commodity: "commodity",
    keyword: "keyword",
} as const;

export const MediaSubscriptionPlatformTypes = {
    twitter: "twitter",
    youtube: "youtube",
    reddit: "reddit",
    news: "news",
} as const;

export type MediaSubscriptionPlatformType = (typeof MediaSubscriptionPlatformTypes)[keyof typeof MediaSubscriptionPlatformTypes];

export type TrackedItemType = (typeof TrackedItemTypes)[keyof typeof TrackedItemTypes];