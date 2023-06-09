export type ApiSearchResult = {
    total: number;
    total_pages: number;
    results: ApiPhoto[];
}

/**
 * The important links of a photo that we will use for showing (or maybe even downloading) that photo.
 */
export type ApiPhotoUrls = {
    raw: string;
    full: string;
    regular: string;
    small: string;
    thumb: string;
    small_s3: string;
}

export type ApiPhotoLinks = {
    self: string;
    html: string;
    download: string;
    download_location: string;
}

/**
 * Links about sponsors of a photographer/user.
 */
export type ApiSponsorLinks = {
    self: string;
    html: string;
    photos: string;
    likes: string;
    portfolio: string;
    following: string;
    followers: string;
}

export type ApiSponsorProfileImage = {
    small: string;
    medium: string;
    large: string;
}

export type ApiSponsorSocials = {
    instagram_username: string;
    portfolio_url: string;
    twitter_username: string;
    paypal_email?: any;
}

/**
 * the sponsors of a user.
 */
export type ApiSponsor = {
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
    links: ApiSponsorLinks;
    profile_image: ApiSponsorProfileImage;
    instagram_username: string;
    total_collections: number;
    total_likes: number;
    total_photos: number;
    accepted_tos: boolean;
    for_hire: boolean;
    social: ApiSponsorSocials;
}

export type ApiUserSponsorship = {
    impression_urls: any[];
    tagline: string;
    tagline_url: string;
    sponsor: ApiSponsor;
}

export type ApiTopicSubmission = {}

export type ApiUserLinks = {
    self: string;
    html: string;
    photos: string;
    likes: string;
    portfolio: string;
    following: string;
    followers: string;
}

export type ApiUserProfileImage = {
    small: string;
    medium: string;
    large: string;
}

export type ApiUserSocial = {
    instagram_username: string;
    portfolio_url: string;
    twitter_username: string;
    paypal_email?: any;
}

export type ApiUser = {
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
    links: ApiUserLinks;
    profile_image: ApiUserProfileImage;
    instagram_username: string;
    total_collections: number;
    total_likes: number;
    total_photos: number;
    accepted_tos: boolean;
    for_hire: boolean;
    social: ApiUserSocial;
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

export type ApiPhotoTagsAncestry = {
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

export type ApiPhotoTagsCover = {
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

export type ApiPhotoTagsSource = {
    ancestry: ApiPhotoTagsAncestry;
    title: string;
    subtitle: string;
    description: string;
    meta_title: string;
    meta_description: string;
    cover_photo: ApiPhotoTagsCover;
}

export type ApiPhotoTags = {
    type: string;
    title: string;
    source: ApiPhotoTagsSource;
}

export type ApiPhoto = {
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
    urls: ApiPhotoUrls;
    links: ApiPhotoLinks;
    likes: number;
    liked_by_user: boolean;
    current_user_collections: any[];
    sponsorship: ApiUserSponsorship;
    topic_submissions: ApiTopicSubmission;
    user: ApiUser;
    tags: ApiPhotoTags[];
}