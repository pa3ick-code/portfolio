import { projects } from "@/data";
import { PinContainer } from "./ui/3dPin";
import ProjectPin from "./ui/ProjectPin";

export default function RecentProjects() {
  return (
    <section className='py-20' id="projects">
      <h1 className="heading">
        A Few Highlights from My {' '}
        <span className="text-purple">
          Recent Projects
        </span>
      </h1>
      <div className="flex flex-wrap justify-center items-center p-4 gap-24 mt-10">
        {projects.map(({id, title, des, iconLists, img, link, tag}) => (
            <div 
              key={id} 
              className="w-[80vh] sm:w-[570px] h-[25rem] lg:min-h-[32.5rem] flex item-center justify-center"
              onClick={()=> window.open(`${link}`)}
            >
              <PinContainer title={tag} href={link}>
                <ProjectPin 
                title={title}
                des={des}
                iconLists={iconLists}
                img={img}
                link={link}
                />
              </PinContainer>
            </div>
        ))}
      </div>
    </section>
  );
}
