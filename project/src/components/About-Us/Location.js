import React from 'react';
import GoogleMap from '../Footer/GoogleMap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhone, faEnvelope} from '@fortawesome/free-solid-svg-icons';

const Location = props => (
    <div className="location">
    <div className="location-container">
    
    <h2 className="location-container--header">Contact Now!</h2>
    <p><FontAwesomeIcon icon={faMapMarkerAlt} className="location-container--icon"    />Yinelenen bir sayfa içeriğinin okuyucunun dikkatini dağıttığı bilinen bir gerçektir. Lorem Ipsum kullanmanın amacı, sürekli 'buraya metin gelecek, buraya metin gelecek'</p>
    <p><FontAwesomeIcon icon={faPhone} className="location-container--icon"  />0502 944 49 25</p>
    <p><FontAwesomeIcon icon={faEnvelope}  className="location-container--icon"/>lorem-ipsum@asdfgh.com</p>
    </div>
    <div className="google-map-container">
        <GoogleMap />
    </div>
    </div>
)

export default Location;