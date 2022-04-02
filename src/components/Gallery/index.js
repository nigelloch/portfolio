import { React, useState } from 'react';
import ProjectList from '../ProjectList';
import { capitalizeFirstLetter } from '../../utils/helpers';


function Gallery(props) {
  // const { currentCategory } = props.props;
  // const category = props.props
  const [categories] = useState([
    {
      name: 'projects', description: 'A collection of my work' },
    { name: 'portraits', description: 'Portraits of people in my life' },
    { name: 'food', description: 'Delicious delicacies' },
    { name: 'landscape', description: 'Fields, farmhouses, waterfalls, and the beauty of nature' },
  ]);
  return (
    <div>
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

          // {{categories.map((category) => (
          //   <li
          //       className={`mx-1 ${
          //         currentCategory.name === category.name && !contactSelected && `navActive`
          //         }`}
          //       key={category.name}
          //     >
          //     <span onClick={() => {
          //         setCurrentCategory(category);
          //         setContactSelected(false);
          //       }}
          //     >
          //       {capitalizeFirstLetter(category.name)}
          //     </span>
          //   </li>
          // ))}}