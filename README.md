# MailHog – Drupal 7

## Installation

```sh
cd web/sites/all/modules/contrib
git clone --branch 7.x https://github.com/rimi-itk/drupal-mailhog mailhog
```

```sh
cd «site root»
drush --yes pm-enable mailhog
```

Go to `/admin/config/development/mailhog` and configure the module.

## Development

### Assets

```sh
cd assets
yarn install
```

Build `css` and `js` assets:

```sh
yarn encore production
```

During development:

```sh
yarn encore dev --watch
```
