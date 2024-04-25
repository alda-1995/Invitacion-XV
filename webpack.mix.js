const mix = require('laravel-mix');
mix.disableNotifications();
mix.postCss('resources/css/theme.css', 'src/css', [
	require('tailwindcss'),
	require('postcss-nested')
])
.options({
	processCssUrls: false
});