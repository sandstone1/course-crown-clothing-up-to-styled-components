
import React from 'react';
import MenuItem from '../menu-item/menu-item.component';
import './directory.styles.scss';


// will create a class based component since we need to store state
class Directory extends React.Component {

    state = {
        // sections will be an array that will contain a list of objects
        sections : [
            {
                title    : 'hats',
                imageUrl : 'https://i.ibb.co/cvpntL1/hats.png',
                id       : 1
            },
            {
                title    : 'jackets',
                imageUrl : 'https://i.ibb.co/px2tCc3/jackets.png',
                id       : 2
            },
            {
                title    : 'sneakers',
                imageUrl : 'https://i.ibb.co/0jqHpnp/sneakers.png',
                id       : 3
            },
            {
                title    : 'womens',
                imageUrl : 'https://i.ibb.co/GCCdy8t/womens.png',
                size     : 'large',
                id       : 4
            },
            {
                title    : 'mens',
                imageUrl : 'https://i.ibb.co/R70vBrQ/men.png',
                size     : 'large',
                id       : 5
            }

        ]

    };

    render() {

        return(

            <div className="directory-menu">
            {
                // instead of:
                /*
                state.sections.map( ( section ) => (
                    <MenuItem 
                        key={ section.id }
                        title={ section.title }
                        imageUrl={ section.imageUrl }
                        size={ section.size }               
                    />
                ) )
                */
                // were going to destructure the title, imageURL, size, id values off of section
                // or we'll type the following as the argument to the arrow function below:
                // { title, imageURL, size, id } and then we'll use those destructured values
                // inside <MenuItem />
                this.state.sections.map( ( { title, imageUrl, size, id } ) => (
                    <MenuItem
                        key={ id }
                        title={ title }
                        imageUrl={ imageUrl }
                        size={ size }
                    />
                ) )
            }
            </div>

        );

    }

}

export default Directory;