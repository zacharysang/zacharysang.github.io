# Jekyll Instagram Portfolio Theme

Clean, minimalistic and responsive portfolio theme for Jekyll powered by Bootstrap 4.
For the portfolio section is used Instagram widget, but you can easily update it with another content source.


## Powered by

- [Jekyll](https://jekyllrb.com/)
- [Bootstrap 4](http://v4-alpha.getbootstrap.com/)
- [jQuery](https://jquery.com/)
- [SnapWidget](https://snapwidget.com)
- [Google Fonts: Lobster](https://fonts.google.com/specimen/Lobster)
- [Font Awesome](http://fontawesome.io/)

## Installation
Install Jekyll:

```
gem install jekyll bundler
```

Install bundle dependiencies:

```
bundle install
```

When finished, run the dev server:

```
bundle exec jekyll serve
```

or just:

```
jekyll serve

```
To stop the server, use `CTRL+C`.

## Building front-end assets: styles and scripts

Install module dependencies:

```
npm install
```

Run the build script to generate updated front-end assets:

```
npm run build
```

Watch for changes and automatically rebuild assets (`CTRL+C` to stop):
```
npm run watch
```

##File Structure

├/_includes : All sections for page (classname of section important for datalink in navbar)
├/_layouts : Has default.html which lays out all sections from _includes dir
├/_site : Build directory for Jekyll
├/_web-src : Lots of sass definitions for the theme and bootstrap
├/css : Basic sass definitions like fonts and background color
├/web-dist
	├/css : CSS to tie in all sass code
	├/images : Images used in site
	├/js : App and Bootstrap js code


