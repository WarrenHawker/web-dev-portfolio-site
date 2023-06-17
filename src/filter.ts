const filterButtons = document.querySelectorAll('.filter-buttons button');

const filterProjects = (e: Event) => {
  const action = (e.target as HTMLButtonElement).textContent;
  const projects = document.querySelectorAll('.project-container');

  if (action == 'All Projects') {
    projects.forEach((project) => {
      (project as HTMLDivElement).style.display = 'block';
    });
  } else {
    projects.forEach((project) => {
      const technologies = (project as HTMLDivElement).dataset.technology;
      if (technologies?.includes(action!)) {
        (project as HTMLDivElement).style.display = 'block';
      } else {
        (project as HTMLDivElement).style.display = 'none';
      }
    });
  }

  filterButtons.forEach((item) => {
    const button = item as HTMLButtonElement;
    if (button.textContent == action) {
      button.classList.add('active');
    } else {
      button.classList.remove('active');
    }
  });
};

filterButtons.forEach((button) => {
  button.addEventListener('click', filterProjects);
});
