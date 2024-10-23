'use client'

import React, { useEffect } from 'react'
import PhotoSwipeLightbox from 'photoswipe/lightbox'
//import PhotoSwipeDynamicCaption from 'photoswipe-dynamic-caption-plugin'
import 'photoswipe/style.css'
import 'photoswipe-dynamic-caption-plugin/photoswipe-dynamic-caption-plugin.css'

export default function SimpleGallery(props) {
  useEffect(() => {
    let lightbox = new PhotoSwipeLightbox({
      gallery: '#' + props.galleryID,
      children: 'div',      
      pswpModule: () => import('photoswipe'),
      paddingFn: () => {
        return {
          top: 30,
          bottom: 30,
          left: 70,
          right: 70,
        }
      },
    })

    /*const captionPlugin = new PhotoSwipeDynamicCaption(lightbox, {
      // Plugins options, for example:
      type: 'auto',
    })*/

    lightbox.init()

    return () => {
      lightbox.destroy()
      lightbox = null
    }
  }, [])

  //const flexBasis = (1 / Math.min(props.images.length, props.maxWidth)) * 95;

  return (
    <div className="pswp-gallery flex flex-col md:flex-row gap-8 flex-wrap" id={props.galleryID}>
      {props.images.map((image, index) => (
        <div
          className={`flex flex-col w-fit`}
          key={props.galleryID + '-' + index}
        >
          <a
            href={image.largeURL}
            data-pswp-width={image.width}
            data-pswp-height={image.height}
            target="_blank"
            rel="noreferrer"
          >
            <img src={image.thumbnailURL} alt={image.captionContent} width={image.thumbnailWidth} height={image.thumbnailHeight}/>
            {image.captionContent && (
              <p className="text-sm mt-1 italic">{image.captionContent}</p>              
            )}
          </a>
          {image.figcaption && (
            <figcaption itemProp="caption description">
              {image.figcaption}
            </figcaption>
          )}
        </div>
      ))}
    </div>
  )
}
