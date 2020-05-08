import React from 'react';
import Navbar from '../components/navbar';
import Jumbotron from '../components/jumbotron';
import Footer from '../components/footer';
import 'assets/style.css';

const Home = () => (
  <div>
    <Navbar />
    <Jumbotron/>
    <h3 className="frontend">Projects</h3>
    <hr />
    <div className="row">
      <div className="col-md-6">
        <Picture source=".assets/images/trustafarian.jpg" alt="trustafarian" github="https://brennanpredmore.github.io/project_1/"/>
      </div>
      <div className="col-md-6">
        <Picture source="assets/images/password.jpg" alt="password" github="https://ashwinbethala.github.io/generatepassword/"/>
      </div>
      <div className="col-md-6">
        <Picture source="assets/images/quiz.jpeg" alt="quiz" github="https://ashwinbethala.github.io/codingquiz/"/>
      </div>
      <div className="col-md-6">
        <Picture source="assets/images/triforce.png" alt="zelda" github="https://github.com/BrennanPredmore/project2"/>
      </div>
    </div>
    <Footer />
  </div>
);

export default Home;