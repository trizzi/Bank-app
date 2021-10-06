import { useContext, useEffect } from 'react';
import AuthContext from '../../context/auth/authContext';

const Home = () => {
	const authContext = useContext(AuthContext);

	useEffect(() => {
		authContext.loadUser();
		// eslint-disable-next-line
	}, []);

	return (
		<div>
			<h1>Welcome Message</h1>
			<p className='my-1 bg-dark p'>
				Hello folks. Thanks for joining us. Do bear with us
				for this weird looking page. We will update it as
				soon as we receive intructions to do so. Thanks and
				Best Regards.
			</p>
		</div>
	);
};

export default Home;
