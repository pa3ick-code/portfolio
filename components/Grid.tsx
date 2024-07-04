import { gridItems } from '@/data';
import { BentoGrid, BentoGridItem } from './ui';

export default function Grid() {
  return (
    <section id="about">
      <BentoGrid className="w-full py-20">
        {
          gridItems.map( ({id, title, titleClassName, description, className, img, imgClassName, spareImg}) =>(
            <BentoGridItem 
                key={id}
                id={id}
                title={title}
                description={description}
                className={className}
                img={img}
                imgClassName={imgClassName}
                titleClassName={titleClassName}
                spareImg={spareImg}
            />
          ))
        }
      </BentoGrid>
    </section>
  );
}
