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

export type ApiUserSponsorship = {
    impression_urls: any[];
    tagline: string;
    tagline_url: string;
    sponsor: ApiUser;
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

export type ApiUserSocials = {
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
    social: ApiUserSocials;
}

export type ApiSlug = {
    slug: string;
    pretty_slug: string;
}

export type ApiPhotoTagsAncestry = {
    type: ApiSlug;
    category: ApiSlug;
    subcategory: ApiSlug;
}

export type ApiCoverPhotoUrls = {
    raw: string;
    full: string;
    regular: string;
    small: string;
    thumb: string;
    small_s3: string;
}

export type ApiCoverPhotoTopicSubmissions = {}

export type ApiCoverPhotoUserLinks = {
    self: string;
    html: string;
    photos: string;
    likes: string;
    portfolio: string;
    following: string;
    followers: string;
}

export type ApiCoverPhotoUserProfileImage = {
    small: string;
    medium: string;
    large: string;
}

export type ApiCoverPhotoUserSocial = {
    instagram_username: string;
    portfolio_url: string;
    twitter_username: string;
    paypal_email?: any;
}

export type ApiCoverPhotoUser = {
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
    links: ApiCoverPhotoUserLinks;
    profile_image: ApiCoverPhotoUserProfileImage;
    instagram_username: string;
    total_collections: number;
    total_likes: number;
    total_photos: number;
    accepted_tos: boolean;
    for_hire: boolean;
    social: ApiCoverPhotoUserSocial;
}

export type ApiCoverPhoto = {
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
    urls: ApiCoverPhotoUrls;
    links: ApiPhotoLinks;
    likes: number;
    liked_by_user: boolean;
    current_user_collections: any[];
    sponsorship?: any;
    topic_submissions: ApiCoverPhotoTopicSubmissions;
    premium: boolean;
    plus: boolean;
    user: ApiCoverPhotoUser;
}

export type ApiPhotoTagsSource = {
    ancestry: ApiPhotoTagsAncestry;
    title: string;
    subtitle: string;
    description: string;
    meta_title: string;
    meta_description: string;
    cover_photo: ApiCoverPhoto;
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