Act as a Staff Product Designer, Senior UX Designer, GitHub UI expert, and Design System Architect.

Your task is to design a modern, beautiful, developer-focused web application called "RepoDocs".

The application transforms any GitHub repository into an enhanced documentation experience.

---------------------------------------------------------
PRODUCT OVERVIEW
---------------------------------------------------------

Users replace a GitHub repository URL

Example

https://github.com/facebook/react

with

https://repodocs.app/facebook/react

The application fetches repository information using GitHub APIs and renders all Markdown documentation in an immersive documentation experience.

The product is similar to:

• GitHub
• Notion
• GitBook
• Mintlify
• Docusaurus
• VSCode.dev
• GitHub1s

The experience should feel premium, modern, and polished.

Avoid looking like GitHub.

Instead combine:

• Linear
• Vercel
• Stripe Dashboard
• Notion
• Raycast
• GitBook

---------------------------------------------------------
DESIGN PRINCIPLES
---------------------------------------------------------

Minimal

Developer First

Fast

Elegant

Premium

Modern SaaS

Excellent typography

Generous spacing

Smooth animations

Accessible

Responsive

---------------------------------------------------------
COLOR PALETTE
---------------------------------------------------------

Dark mode first.

Primary background:
#0D1117

Secondary background:
#161B22

Surface:
#1F2937

Primary Text:
#F8FAFC

Secondary Text:
#94A3B8

Accent:
#3B82F6

Success:
#10B981

Warning:
#F59E0B

Error:
#EF4444

Use subtle gradients.

Glassmorphism only where appropriate.

Soft shadows.

Rounded corners (12–16px).

---------------------------------------------------------
TYPOGRAPHY
---------------------------------------------------------

Inter

or

Geist

Use a clear visual hierarchy.

Large page titles

Comfortable reading width

Readable markdown

Excellent code typography

---------------------------------------------------------
APPLICATION LAYOUT
---------------------------------------------------------

Desktop Layout

---------------------------------------------------------

+-----------------------------------------------------------+
| Global Header                                              |
+-----------------------------------------------------------+

+-------------+---------------------------------------------+
|             |                                             |
| Sidebar     | Markdown Viewer                            |
|             |                                             |
|             |                                             |
|             |                                             |
+-------------+---------------------------------------------+

---------------------------------------------------------

Sidebar width

320px

Content width

900px maximum

Centered content

---------------------------------------------------------
HEADER
---------------------------------------------------------

Left

Logo

RepoDocs

Repository Name

Owner

Repository Visibility

Right

Search

Theme Toggle

GitHub Button

User Avatar (placeholder)

---------------------------------------------------------
REPOSITORY HEADER
---------------------------------------------------------

Repository Avatar

Repository Name

Description

Topics

Language

Stars

Forks

Watchers

License

Default Branch

Last Updated

Primary CTA

Open on GitHub

Secondary CTA

Copy URL

---------------------------------------------------------
LEFT SIDEBAR
---------------------------------------------------------

Search Documentation

Tree View

README.md

CONTRIBUTING.md

CHANGELOG.md

LICENSE

docs/

installation.md

deployment.md

faq.md

api.md

Current page highlighted

Expandable folders

Icons for markdown files

Sticky sidebar

Scrollable independently

---------------------------------------------------------
MAIN CONTENT
---------------------------------------------------------

Render markdown beautifully.

Support

Tables

Task Lists

Images

Mermaid diagrams

Footnotes

Callouts

Code blocks

Syntax Highlighting

Math (future)

Wide tables

Inline code

Anchor links

Auto-generated table of contents

Sticky TOC on right side

---------------------------------------------------------
MARKDOWN EXPERIENCE
---------------------------------------------------------

Beautiful typography.

Large H1

Comfortable line height

Readable paragraphs

Nice spacing

Beautiful blockquotes

Professional tables

GitHub-flavored markdown

Code blocks with

Copy button

Language badge

Line numbers

Collapse long code

Image zoom

Responsive tables

---------------------------------------------------------
EMPTY STATES
---------------------------------------------------------

Repository not found

Private repository

No markdown files

API rate limit exceeded

Loading skeletons

---------------------------------------------------------
LOADING EXPERIENCE
---------------------------------------------------------

Skeleton Loader

Animated shimmer

Repository Header Skeleton

Sidebar Skeleton

Markdown Skeleton

Avoid spinners whenever possible.

---------------------------------------------------------
SEARCH EXPERIENCE
---------------------------------------------------------

Instant search

Command Palette

Ctrl + K

Search

Markdown titles

Headings

Paragraphs

---------------------------------------------------------
RESPONSIVE DESIGN
---------------------------------------------------------

Desktop

Tablet

Mobile

On mobile

Sidebar becomes drawer

TOC collapses

Sticky header

Bottom navigation if necessary

---------------------------------------------------------
COMPONENTS
---------------------------------------------------------

Buttons

Cards

Breadcrumbs

Tabs

Dropdown

Tooltip

Popover

Accordion

Tree View

Search Box

Command Palette

Toast

Modal

Skeleton

Alert

Badge

Avatar

Pagination

---------------------------------------------------------
MICRO INTERACTIONS
---------------------------------------------------------

Hover animations

Smooth page transitions

Sidebar animations

Expand/collapse folders

Code copy animation

Link hover

Image zoom

Button ripple

Soft shadows

---------------------------------------------------------
ACCESSIBILITY
---------------------------------------------------------

WCAG AA

Keyboard Navigation

Focus States

Screen Reader Support

Proper Contrast

---------------------------------------------------------
DESIGN SYSTEM
---------------------------------------------------------

Follow an 8px spacing system.

Create reusable components.

Consistent border radius.

Consistent elevation.

Use semantic colors.

---------------------------------------------------------
OUTPUT
---------------------------------------------------------

Generate a complete high-fidelity UI including:

1. Landing Page

2. Repository Viewer

3. Loading State

4. Empty State

5. Error State

6. Search Overlay

7. Mobile View

8. Tablet View

9. Dark Theme

10. Light Theme

Include realistic repository data.

Use modern icons.

Create production-quality layouts suitable for React + Tailwind CSS implementation.

The final design should feel like a premium developer tool that developers would enjoy using every day.