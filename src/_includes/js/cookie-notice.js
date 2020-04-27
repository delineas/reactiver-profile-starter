// Config for cookie-notice
// See https://github.com/AOEpeople/cookie-notice#readme

new cookieNoticeJS({

    // Localizations of the notice message
    'messageLocales': {
        'es': 'Usamos cookies para mejorar la experiencia del usuario.'
    },

    // Localizations of the dismiss button text
    'buttonLocales': {
        'it': 'Cerrar'
    },

    // Position for the cookie-notifier (default=bottom)
    'cookieNoticePosition': 'bottom',

    // Shows the "learn more button (default=false)
    'learnMoreLinkEnabled': true,

    // The href of the learn more link must be applied if (learnMoreLinkEnabled=true)
    'learnMoreLinkHref': '/legal/',

    // Text for optional learn more button
    'learnMoreLinkText': {
        'es': 'Leer más'
    },

    // The message will be shown again in X days
    'expiresIn': 30,

    // Specify a custom font family
    'fontFamily': 'inherit',

    // Dismiss button background color
    'buttonBgColor': '#d35400',

    // Dismiss button text color
    'buttonTextColor': '#fff',

    // Notice background color
    'noticeBgColor': '#000',

    // Notice text color
    'noticeTextColor': '#fff',

    // the learnMoreLink color (default='#009fdd')
    'linkColor': '#f00',

    // The target of the learn more link (default='', or '_blank')
    'linkTarget': '',

    // Print debug output to the console (default=false)
    'debug': false
});