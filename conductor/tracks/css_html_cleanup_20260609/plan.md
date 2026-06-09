# Implementation Plan: CSS and HTML Cleanup

## Phase 1: CSS Architecture Setup
- [x] Task: Create new CSS files `styles/layout.css` and `styles/components.css`. 7c6a041
- [x] Task: Add `<link>` tags for the new CSS files to the `<head>` of all HTML files (`index.html`, `interactive_quiz.html`, `topic1_unix_commands.html` through `topic7_ipc.html`). a2915cb
- [~] Task: Conductor - User Manual Verification 'Phase 1: CSS Architecture Setup' (Protocol in workflow.md)

## Phase 2: Refactor Topic Pages 1-3
- [ ] Task: Extract inline styles from `topic1_unix_commands.html` into appropriate classes in the new CSS files.
- [ ] Task: Extract inline styles from `topic2_bash.html` into appropriate classes in the new CSS files.
- [ ] Task: Extract inline styles from `topic3_io_signals.html` into appropriate classes in the new CSS files.
- [ ] Task: Conductor - User Manual Verification 'Phase 2: Refactor Topic Pages 1-3' (Protocol in workflow.md)

## Phase 3: Refactor Topic Pages 4-7
- [ ] Task: Extract inline styles from `topic4_fork_pipes.html` into appropriate classes.
- [ ] Task: Extract inline styles from `topic5_sockets.html` into appropriate classes.
- [ ] Task: Extract inline styles from `topic6_threads.html` into appropriate classes.
- [ ] Task: Extract inline styles from `topic7_ipc.html` into appropriate classes.
- [ ] Task: Conductor - User Manual Verification 'Phase 3: Refactor Topic Pages 4-7' (Protocol in workflow.md)

## Phase 4: Standardization and Review
- [ ] Task: Review the newly created CSS files and standardize all hardcoded values to use `base.css` variables.
- [ ] Task: Conduct a visual review to ensure all pages render correctly and consistently.
- [ ] Task: Conductor - User Manual Verification 'Phase 4: Standardization and Review' (Protocol in workflow.md)