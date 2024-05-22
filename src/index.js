import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
import StarRating from './star';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		{/* <App /> */}
		<StarRating />
    <StarRating size={36} message={['veryBad','bad','average','good','awesome']} maxLength={5} color={'violet'}/>
	</React.StrictMode>
);

