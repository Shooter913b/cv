# Gallery Feature Usage Guide

The portfolio now supports a powerful gallery feature that can display both images and YouTube videos in your project MDX files.

## Gallery Structure

The gallery is defined in the frontmatter of your MDX file:

```yaml
---
title: 'Your Project'
# ... other frontmatter
gallery:
  - type: 'image'
    src: '/path/to/image.jpg'
    title: 'Image Title'
    description: 'Optional description'
  - type: 'video'
    src: 'https://www.youtube.com/watch?v=VIDEO_ID'
    title: 'Video Title'
    description: 'Video description'
---
```

## Gallery Item Properties

### Image Items

```yaml
- type: 'image'
  src: '/path/to/image.jpg' # Required: Image path
  title: 'Optional Title' # Optional: Display title
  description: 'Optional description' # Optional: Display description
  alt: 'Alt text for accessibility' # Optional: Alt text
```

### Video Items

```yaml
- type: 'video'
  src: 'https://www.youtube.com/watch?v=VIDEO_ID' # Required: YouTube URL
  title: 'Optional Title' # Optional: Display title
  description: 'Optional description' # Optional: Display description
```

## Features

### 🖼️ Image Support

- Local images from `/public` directory
- External image URLs
- Automatic aspect ratio maintenance
- Hover effects and overlays

### 🎥 YouTube Video Support

- Automatic thumbnail generation
- Play button overlay
- Embedded video playback in modal
- Direct link to YouTube

### 🎨 Interactive Features

- **Click to expand**: Click any item to view in full-screen modal
- **Responsive grid**: Automatically adjusts columns based on screen size
- **Smooth animations**: Framer Motion powered transitions
- **Keyboard navigation**: ESC to close modal
- **Touch friendly**: Works great on mobile devices

### 📱 Responsive Design

- 1 column on mobile
- 2 columns on tablet
- 3-4 columns on desktop (configurable)

## Example Usage

### Basic Gallery

```yaml
gallery:
  - type: 'image'
    src: '/projects/my-project/screenshot1.png'
    title: 'Main Interface'
  - type: 'video'
    src: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
    title: 'Demo Video'
    description: 'Watch the full demo'
```

### Advanced Gallery with Descriptions

```yaml
gallery:
  - type: 'image'
    src: '/projects/robot/cad-design.png'
    title: 'CAD Design'
    description: '3D model of the robot chassis'
  - type: 'image'
    src: '/projects/robot/assembly.jpg'
    title: 'Assembly Process'
    description: 'Step-by-step build guide'
  - type: 'video'
    src: 'https://www.youtube.com/watch?v=robot-demo'
    title: 'Robot in Action'
    description: 'Watch the robot complete the challenge'
  - type: 'image'
    src: '/projects/robot/testing.jpg'
    title: 'Testing Setup'
    description: 'Performance testing and validation'
```

## Inline Gallery Components

You can also use the Gallery component directly in your MDX content:

```mdx
## Project Gallery

<Gallery
  items={[
    {
      type: 'image',
      src: '/path/to/image.jpg',
      title: 'Custom Title',
    },
    {
      type: 'video',
      src: 'https://www.youtube.com/watch?v=VIDEO_ID',
      title: 'Demo Video',
    },
  ]}
  columns={2}
/>
```

## Tips

1. **Image Optimization**: Use optimized images (WebP, AVIF) for better performance
2. **Descriptive Titles**: Add meaningful titles and descriptions for better UX
3. **Video Thumbnails**: YouTube videos automatically generate thumbnails
4. **Accessibility**: Include alt text for images when possible
5. **File Organization**: Keep project images in `/public/projects/project-name/` for organization

## Technical Details

- **Modal**: Full-screen modal with backdrop blur
- **YouTube Integration**: Automatic video ID extraction and embed URL generation
- **Performance**: Lazy loading and optimized image handling
- **SEO**: Proper alt tags and semantic HTML structure
- **Accessibility**: Keyboard navigation and screen reader support
