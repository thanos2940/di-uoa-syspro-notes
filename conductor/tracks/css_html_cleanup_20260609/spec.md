# Specification: CSS and HTML Cleanup

## Overview
This track focuses on cleaning up the HTML and CSS across the project to adhere to the defined code style guidelines. Specifically, it involves removing inline CSS styles from all topic pages and centralizing them into new categorized CSS files. The visual design will be standardized using existing CSS variables to ensure consistency across the application.

## Functional Requirements
- **Inline Style Removal:** Remove all `style="..."` attributes from HTML elements across all topic pages (`topic1_unix_commands.html` through `topic7_ipc.html`).
- **CSS Centralization:** Extract these inline styles into reusable CSS classes.
- **File Organization:** Create new categorized CSS files (e.g., `layout.css`, `components.css`) and link them appropriately in the HTML headers.
- **Variable Standardization:** Replace hardcoded colors, spacing, and font sizes with existing CSS variables defined in `base.css` (e.g., `var(--surf)`, `var(--border)`, `var(--blue)`).

## Non-Functional Requirements
- **Style Guide Compliance:** Adhere strictly to the Google HTML/CSS Style Guide summarized in `conductor/code_styleguides/html-css.md`.
- **Maintainability:** Ensure the newly created CSS classes have meaningful, generic names separated by hyphens.

## Acceptance Criteria
- All topic HTML files are free of inline `style` attributes.
- New CSS files are created and correctly referenced in all HTML files.
- The visual presentation remains consistent and aligned with the intended design system, utilizing CSS variables.
- The project passes visual inspection without any broken layouts.

## Out of Scope
- Adding new content to the topic pages.
- Modifying JavaScript logic.
- Altering the core quiz functionality.