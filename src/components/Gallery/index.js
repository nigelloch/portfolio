import { React, useState } from 'react';
import ProjectList from '../ProjectList';
import { capitalizeFirstLetter } from '../../utils/helpers';


function Gallery() {
  const [categories] = useState([
    {
      name: 'projects', description: 'A collection of my work' }
  ]);
  return (
    <div className='projects'>
    {categories.map((category) => {
        return( <section>

      <h1 data-testid="h1tag">{capitalizeFirstLetter(category.name)}</h1>
      <p>{category.description}</p>
      <ProjectList category={category.name} />
    </section>)
    } )}
    </div>

  );
}
export default Gallery;
