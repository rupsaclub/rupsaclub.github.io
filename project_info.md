This document provides a detailed overview of the `rupsaclub` project, intended to be used by a Large Language Model (LLM) to generate a Content Management System (CMS) configuration and a deployment script.

## 1. Project Overview

- **URL (if deployed):** finally the website should be at https://github.com/rupsaclub/rupsaclub.github.io
- **Repository:** The project is managed in a Git repository. Current remote location is unidentified.

## 2. Technologies Used

- **Static Site Generator:** Eleventy (v3.1.2)
- **Templating Language:** Nunjucks (`.njk`)
- **Content Formats:** Markdown (`.md`) for content files, with YAML frontmatter.
- **Styling:** Plain CSS.
- **Package Manager:** npm

### Dependencies:

- **`@11ty/eleventy`**: The core Eleventy static site generator.

## 3. Project Structure

The project is organized into the following main directories:

- **`src/`**: The main source directory for all content, templates, and assets.
- **`site/`**: The output directory where the generated static website is saved.
- **`node_modules/`**: Contains the npm dependencies.

### Detailed File Structure:

```
/Users/crimson/Projects/rupsaclub/
├───.eleventy.js         # Eleventy configuration file
├───.gitignore
├───package-lock.json
├───package.json
├───src/
│   ├───_includes/       # Reusable templates (header, footer, base layout)
│   │   ├───base.njk
│   │   ├───event.njk
│   │   ├───footer.njk
│   │   ├───header.njk
│   │   └───team.njk
│   ├───about.njk        # About page
│   ├───advisory.njk     # Advisory committee page
│   ├───contact.njk      # Contact page
│   ├───events.njk       # Main events listing page
│   ├───faqs.njk         # FAQs page
│   ├───index.njk        # Homepage
│   ├───admin/
│   │   └───index.html   # Placeholder for a CMS
│   ├───committee/       # Committee members content
│   │   ├───2nd/
│   │   ├───3rd/
│   │   ├───3rdW/
│   │   ├───4th/
│   │   └───4thW/
│   ├───contents/        # Static assets
│   │   └───images/
│   ├───css/             # CSS stylesheets
│   └───events/          # Events content
│       ├───2ndEC/
│       ├───3rdEC/
│       └───4thEC/
└───site/                # Build output directory
```

## 4. Content Model

The website content is managed through Markdown files with YAML frontmatter and organized into collections.

### 4.1. Eleventy Collections

The `.eleventy.js` file defines the following collections based on tags in the frontmatter of content files:

- **`events`**: A general collection for all events (not currently used in the main event listing).
- **`events_2ndEC`**: Events tagged with `2nd EC`.
- **`events_3rdEC`**: Events tagged with `3rd EC`.
- **`events_4thEC`**: Events tagged with `4th EC`.

### 4.2. Content Types

#### **Events**

- **Location:** `src/events/{committee_year}/{event_name}/index.md`
- **Structure:** Each event has its own directory containing an `index.md` file and associated images.
- **Frontmatter Fields:**
    - `layout`: (string) The template to use (e.g., `event.njk`).
    - `title`: (string) The title of the event.
    - `date`: (date) The date of the event (e.g., `2025-08-02`).
    - `description`: (string) A short description of the event.
    - `featured`: (array) A list containing the path to the main featured image.
    - `images`: (array) A list of paths to all images for the event.
    - `tags`: (string) The collection tag (e.g., `4th EC`).

**Example Event (`src/events/4thEC/event1/index.md`):**

```yaml
---
layout: event.njk
title: 49th BCS Strategic Short-Term Preparation for Maximum Results
date: 2025-08-02
description: ""
featured:
  - /events/4thEC/event1/525479823_1054655706777751_6641958892061028942_n.jpg
images:
  - /events/4thEC/event1/526614536_1056680773241911_6769224264636090884_n.jpg
tags: 4th EC
---
Event details in Markdown...
```

#### **Committee Members**

- **Location:** `src/committee/{year}/`
- **Structure:** Each committee year has a directory containing images of the members and a markdown file (`{year}.md`) with details about the committee.

#### **Pages**

- **Location:** `src/*.njk`
- **Structure:** Standard Nunjucks templates for the main pages of the site.

## 5. Build and Deployment

### 5.1. Build Commands

The `package.json` file defines the following scripts:

- **`npm start`**: Runs the Eleventy development server with live reloading.
  - Command: `npx eleventy --serve`
- **`npm run build`**: Builds the static website to the `site/` directory.
  - Command: `npx eleventy`

### 5.2. Deployment Information

- The website is built to the `site/` directory.
- This directory has to be deployed to static web hosting provider GitHub Pages.
- The deployment process should run the `npm run build` command and then deploy the contents of the `site/` directory.

## 6. CMS Configuration Requirements

A suitable CMS should be able to:

- **Manage Collections:** Specifically, the "events" collections, allowing users to create, edit, and delete events. and add new year to the event, like "5th year"
- **Handle File Structure:** Create new directories for each event and upload images to the correct location.
- **Edit Frontmatter:** Provide a user-friendly interface for editing the frontmatter fields of the event Markdown files (title, date, description, tags).
- **Image Uploads:** Allow users to upload images for the `featured` and `images` fields.
- **Markdown Editor:** Provide a rich text or Markdown editor for the body content of events.
- **Git Integration:** The CMS should ideally integrate with the Git repository to commit changes made by content editors.
