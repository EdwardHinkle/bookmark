export interface GoodreadsAPIResponse {
    Request: [GoodreadsAPIRequest];
    user?: [GoodreadsAPIUser];
    shelves?: [GoodreadsAPIShelvesResponse];
    reviews?: [GoodreadsAPIReviewResponse];
}
export interface GoodreadsAPIShelvesResponse {
    $: GoodreadsAPIPagingData;
    user_shelf: [GoodreadsAPIShelfSummary];
}
export interface GoodreadsAPIShelfSummary {
    id: [GoodreadsAPIId];
    name: [string];
    book_count: [GoodreadsAPICountInfo];
    exclusive_flag: [GoodreadsAPIBooleanInfo];
    description: [GoodreadsAPIDescription];
    sort: [GoodreadsAPISortInfo];
    order: [GoodreadsAPIOrderInfo];
    per_page: [GoodreadsAPIPerPageInfo];
    display_fields: [string];
    featured: [GoodreadsAPIBooleanInfo];
    recommend_for: [GoodreadsAPIBooleanInfo];
    sticky: [GoodreadsAPIStickyInfo];
}
export interface GoodreadsAPIUser {
    id: [string];
    name: [string];
    user_name: [string];
    link: [string];
    image_url: [string];
    small_image_url: [string];
    about: [string];
    age: [string];
    gender: [string];
    location: [string];
    website: [string];
    joined: [string];
    last_active: [string];
    interests: [string];
    favorite_books: [string];
    favorite_authors: [GoodreadsAPIAuthorInfo];
    updates_rss_url: [string];
    reviews_rss_url: [string];
    friends_count: [GoodreadsAPICountInfo];
    groups_count: [string];
    reviews_count: [GoodreadsAPICountInfo];
    user_shelves: [GoodreadsAPIUserShelves];
    updates: [GoodreadsAPIUpdates];
    user_statuses: [GoodreadsAPIUserStatuses];
}
export interface GoodreadsAPIReviewResponse {
    $: GoodreadsAPIPagingData;
    review: [GoodreadsAPIReviewSummary];
}
export interface GoodreadsAPIReviewSummary {
    id: [string];
    book: [GoodreadsAPIBookSummary];
    rating: [string];
    votes: [string];
    spoiler_flag: [string];
    shelves: [{
        shelf: [GoodreadsAPIShelfOptions];
    }];
    recommended_for: [string];
    recommended_by: [string];
    started_at: [string];
    read_at: [string];
    date_added: [string];
    date_updated: [string];
    read_count: [string];
    body: [string];
    comments_count: [string];
    url: [string];
    link: [string];
    owned: [string];
}
export interface GoodreadsAPIBookSummary {
    id: [GoodreadsAPIId];
    isbn: [string];
    isbn13: [string];
    text_reviews_count: [GoodreadsAPICountInfo];
    title: [string];
    title_without_series: [string];
    image_url: [string];
    small_image_url: [string];
    large_image_url: [string];
    link: [string];
    num_pages: [string];
    format: [string];
    edition_information: [string];
    publisher: [string];
    publication_day: [string];
    publication_year: [string];
    publication_month: [string];
    average_rating: [string];
    ratings_count: [string];
    description: [string];
    authors: [GoodreadsAPIAuthorInfo];
    published: [string];
}
export interface GoodreadsAPIShelfOptions {
    $: {
        name: string;
        exclusive: string;
    };
}
export interface GoodreadsAPIId {
    _: string;
    $: [GoodreadsAPINilTypeInfo];
}
export interface GoodreadsAPICountInfo {
    _: string;
    $: [GoodreadsAPINilTypeInfo];
}
export interface GoodreadsAPIDescription {
    $: [GoodreadsAPINilTypeInfo];
}
export interface GoodreadsAPISortInfo {
    $: [GoodreadsAPINilTypeInfo];
}
export interface GoodreadsAPIOrderInfo {
    $: [GoodreadsAPINilTypeInfo];
}
export interface GoodreadsAPIPerPageInfo {
    $: [Object];
}
export interface GoodreadsAPIBooleanInfo {
    _: boolean;
    $: [GoodreadsAPINilTypeInfo];
}
export interface GoodreadsAPINilTypeInfo {
    nil?: string;
    type?: string;
}
export interface GoodreadsAPIStickyInfo {
    $: [GoodreadsAPINilTypeInfo];
}
export interface GoodreadsAPIPagingData {
    start: string;
    end: string;
    total: string;
}
export interface GoodreadsAPIRequest {
    authentication: [string];
    key: [string];
    method: [string];
}
export interface GoodreadsAPIAuthorInfo {
    author: [Object];
}
export interface GoodreadsAPIUserShelves {
    $: [Object];
    user_shelf: [Object];
}
export interface GoodreadsAPIUpdates {
    $: [Object];
    update: [Object];
}
export interface GoodreadsAPIUserStatuses {
    user_status: [Object];
}
