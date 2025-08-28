'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Play, ExternalLink } from 'lucide-react';

interface GalleryItem {
  type: 'image' | 'video';
  src: string;
  alt?: string;
  title?: string;
  description?: string;
  link?: string;
  thumbnail?: string;
}

interface GalleryProps {
  items: GalleryItem[];
  columns?: 1 | 2 | 3 | 4;
}

const Gallery = ({ items, columns = 3 }: GalleryProps) => {
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  const gridCols = {
    1: 'grid-cols-1',
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4',
  };

  const getYouTubeEmbedUrl = (url: string) => {
    if (!url) return '';
    const videoId = url.match(
      /(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&\n?#]+)/
    )?.[1];
    return videoId ? `https://www.youtube.com/embed/${videoId}` : url;
  };

  const getYouTubeVideoId = (url: string) => {
    if (!url) return null;
    return (
      url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&\n?#]+)/)?.[1] ||
      null
    );
  };

  const isYouTubeUrl = (url: string) => {
    if (!url) return false;
    return url.includes('youtube.com/watch') || url.includes('youtu.be/');
  };

  return (
    <>
      <div className={`grid ${gridCols[columns]} gap-6 mb-8`}>
        {items.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group cursor-pointer"
            onClick={() => setSelectedItem(item)}
          >
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden border border-primary/20 bg-surface/40">
              {item.type === 'image' ? (
                <img
                  src={item.src}
                  alt={item.alt || item.title || 'Gallery image'}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  key={`gallery-${index}-${item.src}`}
                />
              ) : (
                <div className="relative w-full h-full bg-surface/60 flex items-center justify-center">
                  {(() => {
                    // If thumbnail is provided, use it
                    if (item.thumbnail) {
                      return (
                        <img
                          src={item.thumbnail}
                          alt={item.alt || item.title || 'Video thumbnail'}
                          className="w-full h-full object-cover"
                          key={`thumbnail-${index}-${item.thumbnail}`}
                        />
                      );
                    }

                    // Check if it's a YouTube video
                    const videoId = getYouTubeVideoId(item.src);
                    if (videoId) {
                      return (
                        <img
                          src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
                          alt={item.alt || item.title || 'Video thumbnail'}
                          className="w-full h-full object-cover"
                          onError={e => {
                            // Fallback to medium quality if maxresdefault fails
                            const target = e.target as HTMLImageElement;
                            target.src = `https://img.youtube.com/vi/${videoId}/mqdefault.jpg`;
                          }}
                        />
                      );
                    }

                    // For local videos, show a generic video placeholder
                    if (item.src && (item.src.startsWith('/') || item.src.startsWith('./'))) {
                      return (
                        <div className="w-full h-full bg-surface/80 flex items-center justify-center">
                          <div className="text-text-muted text-center">
                            <Play size={32} className="mx-auto mb-2" />
                            <p className="text-sm">Video</p>
                          </div>
                        </div>
                      );
                    }

                    // Fallback for other video types
                    return (
                      <div className="w-full h-full bg-surface/80 flex items-center justify-center">
                        <div className="text-text-muted text-center">
                          <Play size={32} className="mx-auto mb-2" />
                          <p className="text-sm">Video</p>
                        </div>
                      </div>
                    );
                  })()}
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                    <div className="w-16 h-16 bg-primary/90 rounded-full flex items-center justify-center group-hover:bg-primary transition-colors">
                      <Play size={24} className="text-white ml-1" />
                    </div>
                  </div>
                </div>
              )}

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="absolute bottom-4 left-4 right-4">
                  {item.title && (
                    <h4 className="text-white font-semibold text-sm mb-1">
                      {item.title}
                    </h4>
                  )}
                  {item.description && (
                    <p className="text-white/80 text-xs mb-2">
                      {item.description}
                    </p>
                  )}
                  {item.link && (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 bg-primary/90 hover:bg-primary text-white text-xs px-2 py-1 rounded transition-colors"
                      onClick={e => e.stopPropagation()}
                    >
                      <ExternalLink size={12} />
                      View CAD
                    </a>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80"
            onClick={() => setSelectedItem(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-4xl w-full max-h-[90vh] bg-surface/95 rounded-xl overflow-hidden border border-primary/20"
              onClick={e => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/50 rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors"
              >
                <X size={20} />
              </button>

              {/* Content */}
              <div className="relative">
                {selectedItem.type === 'image' ? (
                  <img
                    src={selectedItem.src}
                    alt={
                      selectedItem.alt || selectedItem.title || 'Gallery image'
                    }
                    className="w-full h-auto max-h-[80vh] object-contain"
                    key={`modal-${selectedItem.src}`}
                  />
                ) : (
                  <div className="relative aspect-video">
                    <iframe
                      src={getYouTubeEmbedUrl(selectedItem.src)}
                      title={selectedItem.title || 'YouTube video'}
                      className="w-full h-full"
                      allowFullScreen
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    />
                  </div>
                )}
              </div>

              {/* Caption */}
              {(selectedItem.title ||
                selectedItem.description ||
                selectedItem.link) && (
                <div className="p-6 bg-surface/80">
                  {selectedItem.title && (
                    <h3 className="text-lg font-semibold text-text-base mb-2">
                      {selectedItem.title}
                    </h3>
                  )}
                  {selectedItem.description && (
                    <p className="text-text-muted mb-3">
                      {selectedItem.description}
                    </p>
                  )}
                  {selectedItem.link && (
                    <a
                      href={selectedItem.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
                    >
                      <ExternalLink size={16} />
                      {selectedItem.type === 'image'
                        ? 'View CAD Model'
                        : 'Open Link'}
                    </a>
                  )}
                  {selectedItem.type === 'video' &&
                    selectedItem.src &&
                    isYouTubeUrl(selectedItem.src) && (
                      <a
                        href={selectedItem.src}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mt-3"
                      >
                        <ExternalLink size={16} />
                        Watch on YouTube
                      </a>
                    )}
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Gallery;
