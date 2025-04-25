# Crypto Exchange Website Template

A ready-to-use Hugo template for creating cryptocurrency exchange websites, originally designed for Monero (XMR) exchanges but adaptable for any cryptocurrency.

## Features

-   Built-in ChangeNOW exchange widget integration
-   Responsive design using PaperMod theme
-   SEO-optimized structure
-   Multiple cryptocurrency support
-   Country-specific exchange information templates
-   Security best practices templates
-   Step-by-step guide templates
-   Regular updates for 2025

## Quick Start

1. Install Hugo (version 0.125.7 or later)
2. Create a new site using this template:
    ```bash
    hugo new site mysite
    cd mysite
    git clone https://github.com/vvmspace/crypto-hugo
    ```
3. Drop .git folder: `rm -rf crypto-hugo/.git`
4. Update your `config.toml`:
   `SITE_NAME="Site Name" DESCRIPTION="Description" KEYWORDS='["crypto", "exchange"]' npx envtemp config.toml.template config.toml`
5. Run `hugo server` to start local development server
6. Visit `http://localhost:1313` to preview the site
7. Create github repo and deploy to netlify

## Customization

1. Edit `config.toml` to set your site's basic information
2. Modify exchange widget parameters in `layouts/partials/exchange-widget.html`
3. Update content in `content/` directory
4. Customize styles in `assets/css/`

## Widget Configuration

The template includes a pre-configured cryptocurrency exchange widget. To customize:

1. Update default parameters in `layouts/partials/exchange-widget.html`:
    - Default FROM currency
    - Default TO currency
    - Default amounts
2. Modify widget styling in `static/css/custom.css`
3. Test widget functionality using built-in test script (`static/js/widget-test.js`)

## Deployment

This template is configured for deployment on Netlify. The deployment process is automated through the `netlify.toml` configuration file.

### Netlify Deployment Steps

1. Push your changes to your repository
2. Connect your repository to Netlify
3. The site will be built and deployed using the configuration in `netlify.toml`

## Contributing

1. Fork the repository
2. Create a new branch for your changes
3. Make your changes
4. Submit a pull request

## License

This template is licensed under the MIT License - see the LICENSE file for details.

## Credits

-   Powered by [AI Log](https://ailog.live/) [Lake](https://lake.ailog.live/)
# ton4org
