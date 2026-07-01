# GEMINI Project Analysis

## Directory Overview

This directory appears to be for a non-code project, likely a static website for "RUPSA" (presumably Rajshahi University Philosophy Students' Association). It serves as a repository for events organized by the 3rd Executive Committee (EC). The structure is organized by event, with each event having its own folder containing images and a markdown file with event details.

## Key Files

The most important files in this directory are the `index.md` files within each event's subdirectory. These files contain metadata about each event in YAML front matter, including:

*   `layout`: Specifies the template to use (e.g., `event.njk`).
*   `title`: The title of the event.
*   `date`: The date of the event.
*   `description`: A brief description of the event.
*   `featured`: The main image for the event.
*   `images`: A list of all images for the event.
*   `tags`: Tags associated with the event (e.g., `3rd EC`).

The body of the markdown file provides a brief description of the event.

## Usage

The contents of this directory are likely used by a static site generator (such as Eleventy) to build a website. The `index.md` files are processed, and the data is used to populate the event pages of the website.

To add a new event, you would create a new directory, add the images, and create an `index.md` file with the appropriate metadata.
