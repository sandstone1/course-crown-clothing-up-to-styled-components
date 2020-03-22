
import React from 'react';
import MenuItem from '../menu-item/menu-item.component';
import './directory.styles.scss';


// will create a class based component since we need to store state
class Directory extends React.Component {

    state = {
        // sections will be an array that will contain a list of objects

        // -- Mark 1 --
        // lecture 67: withRouter()
        // add a URL parameters to each object below and then pass the linkUrl into
        // our MenuItem component below
        sections : [
            {
                title    : 'hats',
                imageUrl : 'https://i.ibb.co/cvpntL1/hats.png',
                id       : 1,
                linkUrl  : 'hats'
            },
            {
                title    : 'jackets',
                imageUrl : 'https://i.ibb.co/px2tCc3/jackets.png',
                id       : 2,
                linkUrl  : ''                
            },
            {
                title    : 'sneakers',
                imageUrl : 'https://i.ibb.co/0jqHpnp/sneakers.png',
                id       : 3,
                linkUrl  : ''
            },
            {
                title    : 'womens',
                imageUrl : 'https://i.ibb.co/GCCdy8t/womens.png',
                size     : 'large',
                id       : 4,
                linkUrl  : ''
            },
            {
                title    : 'mens',
                imageUrl : 'https://i.ibb.co/R70vBrQ/men.png',
                size     : 'large',
                id       : 5,
                linkUrl  : ''
            }
            // End of -- Mark 1 --
        ]

    };

    render() {

        return (

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

                // -- Mark 1 --
                // lecture 67: withRouter()
                // remember, we could do the below instead since the destructured keys ( which
                // represent the corresponding values in the sections array above ) we are using
                // are the same as the prpperties we using inside the <MenuItem /> component and
                // therefore we can use the spread operator as follows:
                /*
                this.state.sections.map( ( { id, ...otherSectionProps } ) => (
                    <MenuItem
                        key={ id }
                        { ...otherSectionProps }
                    />
                */                

                // however, I prefer to be more explicit in my code so I'm keeping original
                // format below:
                this.state.sections.map( ( { title, imageUrl, size, id, linkUrl } ) => (
                    <MenuItem
                        key     ={ id }
                        title   ={ title }
                        imageUrl={ imageUrl }
                        size    ={ size }
                        linkUrl ={ linkUrl }
                    />
                ) )
                // End of -- Mark 1 --
            }
            </div>

        );

    }

}

export default Directory;