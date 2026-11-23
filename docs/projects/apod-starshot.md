---
title: APOD Starshot
---

# APOD Starshot

<ul class="tags">
  <li>MTM6302 Capstone</li>
  <li>NASA APOD API</li>
  <li>Vanilla JavaScript</li>
  <li>localStorage</li>
  <li>Figma</li>
</ul>

APOD Starshot is a web app for exploring NASA's Astronomy Picture of the Day (APOD). Users can pick any date, see that day's space photo with its explanation, and save the ones they like to a favourites page.

This was a solo project. I did the wireframe, the visual mockup and the working prototype.

[View the code on GitHub](https://github.com/gao00147/mtm6302-capstone-gao00147)

## 1. Wireframe

I started on paper. The first sketch was a simple mobile screen: a date field, a search button, the photo, and a list of favourites underneath.

![Hand drawn mobile wireframe for APOD Search](/images/apod-wireframe.jpg)

## 2. Visual mockup

In the Figma mockup I changed a few things from the wireframe to make the app easier to use:

- **A calendar instead of a text field.** Nobody wants to type `YYYY-MM-DD`. Clicking a date on a calendar is faster and harder to get wrong.
- **"Today in History" on the home page.** Today's photo loads right away, so the page is never empty on the first visit.
- **A card grid for favourites.** Each card shows the thumbnail, title and date, so people can find a saved photo just by looking.
- **An error screen.** If the NASA API is down, users get a clear message and a way back instead of a broken page.

### Colours and fonts

The whole look is about space. The page background is almost black (`#0A061A`) and the header is deep navy (`#222B59`). Warm gold (`#DEA44C`) is the accent for the logo and buttons, like starlight against the night sky. Headings use **Nunito Bold** and body text uses **Poppins**.

## 3. Working prototype

The prototype is plain HTML, CSS and JavaScript with no libraries. It has four pages: home, results, favourites and error.

- **Custom calendar** built in JavaScript. Click a date and it opens that day's photo.
- **Results page** with the image, title, credit, explanation and date, plus a "Next Photo" button.
- **Favourites** saved in `localStorage`, with an edit mode for deleting cards.
- **Responsive layout.** Two columns on desktop, one column with a hamburger menu on mobile. The favourites grid goes from 3 columns to 2 to 1.

I also used a Git branching workflow, so each feature was built on its own branch and merged into `main` when it worked.

## Problems I had to solve

- **API rate limit.** The NASA demo key only allows 30 requests an hour. I hit that during testing, so any failed request now sends users to the error page.
- **Some APODs are videos.** A small number of entries are YouTube links, not images. The results page checks the media type and shows a video player when needed.
- **Months with 6 rows.** Some months need an extra calendar row. The grid is built in JavaScript and only adds the 6th row when the month actually needs it.
- **Passing data between pages.** Each page is a separate HTML file, so the selected date goes through the URL (`?date=2025-04-20`) instead of being stored in memory.
