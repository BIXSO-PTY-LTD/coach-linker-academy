import { _mock } from './_mock';

export const _testimonials = [...Array(8)].map((_, index) => ({
    id: _mock.id(index),
    name: _mock.fullName(index),
    role: _mock.role(index),
    avatarUrl: _mock.image.avatar(index),
    createdAt: _mock.time(index),
    ratingNumber: 5,
    review: 'Amazing experience i love it a lot. Thanks to the team that dreams come true, great! I appreciate there attitude and approach.',
}));

export const _socials = [
    {
        value: 'facebook',
        label: 'FaceBook',
        icon: 'carbon:logo-facebook',
        color: '#1877F2',
    },
    {
        value: 'instagram',
        label: 'Instagram',
        icon: 'carbon:logo-instagram',
        color: '#E02D69',
    },
    {
        value: 'linkedin',
        label: 'Linkedin',
        icon: 'carbon:logo-linkedin',
        color: '#007EBB',
    },
    {
        value: 'twitter',
        label: 'Twitter',
        icon: 'carbon:logo-twitter',
        color: '#00AAEC',
    },
];

const BRANDS_NAME = [
    'airbnb',
    'dropbox',
    'facebook',
    'google',
    'heroku',
    'lenovo',
    'microsoft',
    'netflix',
    'slack',
    'spotify',
    'tripadvisor',
    'vimeo',
];

export const _brands = BRANDS_NAME.map((brand, index) => ({
    id: _mock.id(index),
    name: brand,
    image: `/assets/logo/${brand}.svg`,
}));

export const _brandsColor = BRANDS_NAME.map((brand, index) => ({
    id: _mock.id(index),
    name: brand,
    image: `/assets/logo/${brand}_original.svg`,
}));
