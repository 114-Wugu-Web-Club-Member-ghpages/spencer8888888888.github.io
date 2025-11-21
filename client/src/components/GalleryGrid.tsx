import { useState } from "react";
import { X } from "lucide-react";

interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  caption?: string;
}

interface GalleryGridProps {
  images: GalleryImage[];
}

export default function GalleryGrid({ images }: GalleryGridProps) {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {images.map((image) => (
          <div
            key={image.id}
            className="group relative aspect-square overflow-hidden rounded-2xl cursor-pointer hover:shadow-xl transition-all duration-300"
            onClick={() => setSelectedImage(image)}
            data-testid={`image-gallery-${image.id}`}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {image.caption && (
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="text-white text-sm font-medium">{image.caption}</p>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
          data-testid="lightbox-overlay"
        >
          <button
            className="absolute top-4 right-4 p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
            onClick={() => setSelectedImage(null)}
            data-testid="button-close-lightbox"
          >
            <X className="w-6 h-6 text-white" />
          </button>
          <div className="max-w-4xl max-h-[90vh] relative">
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="max-w-full max-h-[90vh] object-contain rounded-lg"
            />
            {selectedImage.caption && (
              <p className="text-white text-center mt-4">{selectedImage.caption}</p>
            )}
          </div>
        </div>
      )}
    </>
  );
}
