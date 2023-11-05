import React from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_USERS } from '../../utils/queries';
import SignupForm from '../../components/SignupForm';

import { Col, Row } from 'react-bootstrap';
import MeCardOnly from '../../assets/images/MeCardOnly.png';

const Home = () => {
  const { loading, data } = useQuery(QUERY_USERS);
  const user = data?.user || [];

  return (
    <main>
      
        <Row className="flex-row justify-center">
        <Col >
          <img src={MeCardOnly} alt='business-card'>
          </img>
        </Col>
        <Col >
          {loading ? (
            <div>Loading...</div>
          ) : (
            <SignupForm
             user={user}
            />
          )}
          </Col>
        </Row>
 
    </main>
  );
};

export default Home;
