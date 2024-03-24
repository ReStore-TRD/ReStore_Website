import { ProjectGroup } from "@/app/utils/types";

interface ProjectsMenuProps {
  projectGroups: ProjectGroup[];
  onProjectClicked: () => void;
}

function ProjectsMenu({ projectGroups, onProjectClicked }: ProjectsMenuProps) {
  return (
    <div>
      {projectGroups.map((group, index) => {
        return (
          <p
            key={index}
            className="hover:bg-projects-underline hover:bg-no-repeat hover:bg-bottom hover:cursor-pointer"
          >
            {group.projectName}
          </p>
        );
      })}
    </div>
  );
}

export default ProjectsMenu;