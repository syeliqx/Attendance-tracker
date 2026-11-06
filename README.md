# Attendance

A single-file, zero-dependency attendance tracker for students. Log theory, practical, and clinical classes per subject, see how you stand against the minimum-attendance rules, and know exactly how many classes you can still miss.

Everything runs in the browser. There is no backend, no build step, and no account. Your data stays on your device.

## Features

- **Per-subject tracking** for Theory, Practical, and Clinical classes
- **Minimum-attendance targets** with a visual marker on every progress bar
  - Theory: 75%
  - Practical: 80%
  - Clinical: 80%
- **Bunk calculator** that tells you, per track:
  - `Can miss N more` when you are above the threshold
  - `On the edge, don't miss` when you are exactly at it
  - `Attend next N in a row` when you are below it
- **Overall summary** across all subjects for each class type
- **Log a day** view to mark a whole day at once (Present / Absent / Skip per track), with a "Mark all present" shortcut
- **Quick marking** from the Subjects view with one-tap Present / Absent buttons
- **History** grouped by date, with the option to remove any entry (counts adjust automatically)
- **Undo** for the last 50 actions
- **Optional clinical track** per subject, toggled on or off at any time
- **Light and dark mode** that follows your system setting
- **Responsive layout** for phones and desktops, with safe-area support for notched devices

## Usage

No installation needed.

1. Download or clone this repo.
2. Open `Attendance.html` in any modern browser.

To host it, drop the file on GitHub Pages, Netlify, or any static host.

### Views

| Tab | What it does |
| --- | --- |
| **Log a day** | Pick a date, set Present / Absent / Skip for each subject and track, then save all entries in one go. |
| **Subjects** | See percentages, progress bars, and bunk status per subject. Add, delete, collapse, or reset subjects. |
| **History** | Review saved entries by date and remove mistakes. |

### Default subjects

The app starts with four sample subjects: Ophthalmology, ENT (both with clinical tracks), Forensic Medicine, and Community Medicine. Delete or add your own from the Subjects tab.

## How the numbers work

For each track, with `a` classes attended out of `t` held and a threshold `T`:

- **Percentage** = `a / t × 100`
- **Can miss** = `floor(a / T − t)` more classes while staying at or above `T`
- **Must attend** = `ceil((T·t − a) / (1 − T))` consecutive classes to get back up to `T`

A subject's headline percentage is the average of its tracked categories that have at least one class logged.

## Data and privacy

State is saved to `localStorage` under the key `attendance-tracker-v2`.

- Data never leaves your browser.
- Clearing site data or switching browsers or devices means starting fresh.
- Undo history lives in memory only and is lost on page reload.
- "Reset all counts" clears every count and the full history. "Delete subject" also removes that subject's history entries. Both ask for a second tap to confirm.

## Customizing

All configuration lives in the script block of `Attendance.html`.

- **Thresholds:** edit the `KINDS` array, for example `["theory","Theory",75]`.
- **Default subjects:** edit the initial `state.subjects` list.
- **Theme:** change the CSS variables in `:root` (and the dark overrides below it).

## Tech

- Plain HTML, CSS, and vanilla JavaScript in one file
- No frameworks, libraries, or network requests
- Works offline once the file is on your device

## License

Add the license of your choice (for example, MIT) here.
