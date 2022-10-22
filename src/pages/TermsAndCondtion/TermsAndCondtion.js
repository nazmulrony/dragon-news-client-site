import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const TermsAndCondtion = () => {
    return (
        <div>
            <h3>All terms and conditios</h3>
            <h5>Use of this site is provided by Demos subject to the following Terms and Conditions:</h5>
            <p>1. Your use constitutes acceptance of these Terms and Conditions as at the date of your first use of the site.</p>
            <p>2. Demos reserves the rights to change these Terms and Conditions at any time by posting changes online. Your continued use of this site after changes are posted constitutes your acceptance of this agreement as modified.</p>
            <p>3. You agree to use this site only for lawful purposes, and in a manner which does not infringe the rights, or restrict, or inhibit the use and enjoyment of the site by any third party.</p>
            <p> 4. This site and the information, names, images, pictures, logos regarding or relating to Demos are provided “as is” without any representation or endorsement made and without warranty of any kind whether express or implied. In no event will Demos be liable for any damages including, without limitation, indirect or consequential damages, or any damages whatsoever arising from the use or in connection with such use or loss of use of the site, whether in contract or in negligence.</p>
            <p>5. Demos does not warrant that the functions contained in the material contained in this site will be uninterrupted or error free, that defects will be corrected, or that this site or the server that makes it available are free of viruses or bugs or represents the full functionality, accuracy and reliability of the materials.
                6. Copyright restrictions: please refer to our Creative Commons license terms governing the use of material on this site.</p>
            <p>7. Demos takes no responsibility for the content of external Internet Sites.
                8. Any communication or material that you transmit to, or post on, any public area of the site including any data, questions, comments, suggestions, or the like, is, and will be treated as, non-confidential and non-proprietary information.
                9. If there is any conflict between these Terms and Conditions and rules and/or specific terms of use appearing on this site relating to specific material then the latter shall prevail.</p>
            <p>10. These terms and conditions shall be governed and construed in accordance with the laws of England and Wales. Any disputes shall be subject to the exclusive jurisdiction of the Courts of England and Wales.
                11. If these Terms and Conditions are not accepted in full, the use of this site must be terminated immediately.</p>
            <Button variant='primary' as={Link} to="/register"> Go back to register</Button>
        </div>
    );
};

export default TermsAndCondtion;