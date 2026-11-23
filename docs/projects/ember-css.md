---
title: Ember CSS
---

# Ember CSS

<ul class="tags">
  <li>MTM6407 Web Development IV</li>
  <li>Sass</li>
  <li>CSS framework</li>
  <li>Team leader</li>
</ul>

Ember CSS is a lightweight, warm toned CSS framework built with Sass. Our team made it for MTM6407, and I was the team leader.

The idea is simple: link one CSS file and plain HTML already looks good. Headings, text, lists, buttons, forms and tables all get a consistent theme without adding a single class. On top of that there are utility classes for colour, font size, font weight, spacing and borders.

[View the code on GitHub](https://github.com/gao00147/Custom-CSS-Framework)

## The look

The name comes from the colours. The main colour is an ember orange (`#d9480f`), with a deep navy (`#1f3a5f`) and a warm amber (`#f2a541`) to go with it. Headings use a serif font (Georgia), so it feels a bit warmer and more editorial than most frameworks.

## How it's built

The Sass is split into four folders:

| Folder | What's inside |
| --- | --- |
| `abstracts` | variables, functions, mixins, and the CSS custom properties |
| `base` | the reset and typography |
| `components` | buttons, forms and tables |
| `utilities` | colours, spacing, typography and borders |

One main file, `ember.scss`, loads all 13 partials. Sass compiles it into `ember.css` and a minified `ember.min.css`.

### Sass features we used

- **Maps and `@each` loops** to generate the utility classes. Add a colour to the map and you automatically get `.text-`, `.bg-` and `.border-` classes for it.
- **Custom functions** like `to-rem()`, `shade()` and `fade()`.
- **Mixins** for repeated patterns, like focus rings and button colour variants.
- **`@if` / `@else`** in the spacing utilities, for example to skip `p-auto` since padding can't be auto.

## Easy to customize

Every value has a `!default` flag, so people can change the theme from their own Sass file without editing the framework. And because the values are also CSS custom properties (`--em-primary`, `--em-radius` and so on), you can even restyle it with plain CSS, no compiling needed.

## My role: team leader

As team leader I split the work so everyone had a clear part, kept track of deadlines, and made sure all the pieces fit together as one consistent framework. Clear tasks and regular check-ins mattered more than any one piece of code.

## What I learned

A CSS framework is basically a design system written in code. Picking a type scale, a spacing scale and a colour palette is something I've done for years as a designer. This project is where my design side and my developer side really connected.
