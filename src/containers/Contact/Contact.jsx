import React from 'react';
import Header from '../../components/Header/Header';
import Description from '../../components/AbtDescription/Description';
import ContactInfo from '../../components/ContactInfo/ContactInfo';
import Github from '../../Assets/Github.png';
import Gmail from '../../Assets/Gmail.png';
import LinkedIn from '../../Assets/LinkedIn.png';


const Contact = () => {
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <br />
                        <Description title={"Need To Contact Ashley?"}/>
                        <br />
                        <Header />
                        <br />
                        <ContactInfo platform1={Github} platform2={Gmail} platform3={LinkedIn}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;