export type RootObject = {
    total: number;
    total_pages: number;
    results: RootObjectResults[];
}
export type RootObjectResultsUrls = {
    raw: string;
    full: string;
    regular: string;
    small: string;
    thumb: string;
    small_s3: string;
}
export type RootObjectResultsLinks = {
    self: string;
    html: string;
    download: string;
    download_location: string;
}
export type RootObjectResultsSponsorshipSponsorLinks = {
    self: string;
    html: string;
    photos: string;
    likes: string;
    portfolio: string;
    following: string;
    followers: string;
}
export type RootObjectResultsSponsorshipSponsorProfile_image = {
    small: string;
    medium: string;
    large: string;
}
export type RootObjectResultsSponsorshipSponsorSocial = {
    instagram_username: string;
    portfolio_url: string;
    twitter_username: string;
    paypal_email?: any;
}
export type RootObjectResultsSponsorshipSponsor = {
    id: string;
    updated_at: string;
    username: string;
    name: string;
    first_name: string;
    last_name?: any;
    twitter_username: string;
    portfolio_url: string;
    bio: string;
    location: string;
    links: RootObjectResultsSponsorshipSponsorLinks;
    profile_image: RootObjectResultsSponsorshipSponsorProfile_image;
    instagram_username: string;
    total_collections: number;
    total_likes: number;
    total_photos: number;
    accepted_tos: boolean;
    for_hire: boolean;
    social: RootObjectResultsSponsorshipSponsorSocial;
}
export type RootObjectResultsSponsorship = {
    impression_urls: any[];
    tagline: string;
    tagline_url: string;
    sponsor: RootObjectResultsSponsorshipSponsor;
}
export type RootObjectResultsTopic_submissions = {}
export type RootObjectResultsUserLinks = {
    self: string;
    html: string;
    photos: string;
    likes: string;
    portfolio: string;
    following: string;
    followers: string;
}
export type RootObjectResultsUserProfile_image = {
    small: string;
    medium: string;
    large: string;
}
export type RootObjectResultsUserSocial = {
    instagram_username: string;
    portfolio_url: string;
    twitter_username: string;
    paypal_email?: any;
}
export type RootObjectResultsUser = {
    id: string;
    updated_at: string;
    username: string;
    name: string;
    first_name: string;
    last_name?: any;
    twitter_username: string;
    portfolio_url: string;
    bio: string;
    location: string;
    links: RootObjectResultsUserLinks;
    profile_image: RootObjectResultsUserProfile_image;
    instagram_username: string;
    total_collections: number;
    total_likes: number;
    total_photos: number;
    accepted_tos: boolean;
    for_hire: boolean;
    social: RootObjectResultsUserSocial;
}
export type RootObjectResultsTagsSourceAncestryType = {
    slug: string;
    pretty_slug: string;
}
export type RootObjectResultsTagsSourceAncestryCategory = {
    slug: string;
    pretty_slug: string;
}
export type RootObjectResultsTagsSourceAncestrySubcategory = {
    slug: string;
    pretty_slug: string;
}
export type RootObjectResultsTagsSourceAncestry = {
    type: RootObjectResultsTagsSourceAncestryType;
    category: RootObjectResultsTagsSourceAncestryCategory;
    subcategory: RootObjectResultsTagsSourceAncestrySubcategory;
}
export type RootObjectResultsTagsSourceCover_photoUrls = {
    raw: string;
    full: string;
    regular: string;
    small: string;
    thumb: string;
    small_s3: string;
}
export type RootObjectResultsTagsSourceCover_photoLinks = {
    self: string;
    html: string;
    download: string;
    download_location: string;
}
export type RootObjectResultsTagsSourceCover_photoTopic_submissions = {}
export type RootObjectResultsTagsSourceCover_photoUserLinks = {
    self: string;
    html: string;
    photos: string;
    likes: string;
    portfolio: string;
    following: string;
    followers: string;
}
export type RootObjectResultsTagsSourceCover_photoUserProfile_image = {
    small: string;
    medium: string;
    large: string;
}
export type RootObjectResultsTagsSourceCover_photoUserSocial = {
    instagram_username: string;
    portfolio_url: string;
    twitter_username: string;
    paypal_email?: any;
}
export type RootObjectResultsTagsSourceCover_photoUser = {
    id: string;
    updated_at: string;
    username: string;
    name: string;
    first_name: string;
    last_name?: any;
    twitter_username: string;
    portfolio_url: string;
    bio: string;
    location: string;
    links: RootObjectResultsTagsSourceCover_photoUserLinks;
    profile_image: RootObjectResultsTagsSourceCover_photoUserProfile_image;
    instagram_username: string;
    total_collections: number;
    total_likes: number;
    total_photos: number;
    accepted_tos: boolean;
    for_hire: boolean;
    social: RootObjectResultsTagsSourceCover_photoUserSocial;
}
export type RootObjectResultsTagsSourceCover_photo = {
    id: string;
    slug: string;
    created_at: string;
    updated_at: string;
    promoted_at?: any;
    width: number;
    height: number;
    color: string;
    blur_hash: string;
    description?: any;
    alt_description: string;
    urls: RootObjectResultsTagsSourceCover_photoUrls;
    links: RootObjectResultsTagsSourceCover_photoLinks;
    likes: number;
    liked_by_user: boolean;
    current_user_collections: any[];
    sponsorship?: any;
    topic_submissions: RootObjectResultsTagsSourceCover_photoTopic_submissions;
    premium: boolean;
    plus: boolean;
    user: RootObjectResultsTagsSourceCover_photoUser;
}
export type RootObjectResultsTagsSource = {
    ancestry: RootObjectResultsTagsSourceAncestry;
    title: string;
    subtitle: string;
    description: string;
    meta_title: string;
    meta_description: string;
    cover_photo: RootObjectResultsTagsSourceCover_photo;
}
export type RootObjectResultsTags = {
    type: string;
    title: string;
    source: RootObjectResultsTagsSource;
}
export type RootObjectResults = {
    id: string;
    slug: string;
    created_at: string;
    updated_at: string;
    promoted_at?: any;
    width: number;
    height: number;
    color: string;
    blur_hash: string;
    description?: any;
    alt_description: string;
    urls: RootObjectResultsUrls;
    links: RootObjectResultsLinks;
    likes: number;
    liked_by_user: boolean;
    current_user_collections: any[];
    sponsorship: RootObjectResultsSponsorship;
    topic_submissions: RootObjectResultsTopic_submissions;
    user: RootObjectResultsUser;
    tags: RootObjectResultsTags[];
}