const elixir = require('laravel-elixir');

// elixir.config.assetsPath = 'site/templates/assets';
// elixir.config.publicPath = 'assets/';

elixir(mix => {
  mix.less('app.less');
  mix.version([
    '*.png',
    'css/*.css',
  ]);
});
