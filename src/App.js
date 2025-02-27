import React from 'react';
import './App.css';
import IdCard from './components/IdCard/IdCard';
import Greetings from './components/Greetings/Greetings';
import CreditCard from './components/CreditCard/CreditCard';
import Random from './components/Random/Random';
import BoxColor from './components/BoxColor/BoxColor';
import Rating from './components/Rating/Rating';
import DriverCard from './components/DriverCard/DriverCard';
import LikeButton from './components/LikeButton/LikeButton';
import ClickablePicture from './components/ClickablePicture/ClickablePicture';
import Dice from './components/Dice/Dice';
import Carousel from './components/Carousel/Carousel';
import NumbersTable from './components/NumbersTable/NumbersTable';
import FaceBook from './components/FaceBook/FaceBook';
import SignupPage from './components/SignupPage/SignupPage';
// import SingleColorPicker from './components/SingleColorPicker/SingleColorPicker';

function App(props) {
  // const { rValue, gValue, bValue } = props;
  return (
    <div className="App">
      <h3>Iteration 1 | Component: IdCard</h3>
      <IdCard
        lastName="Doe"
        firstName="John"
        gender="male"
        height={178}
        birth={new Date('1992-07-14')}
        picture="https://randomuser.me/api/portraits/men/44.jpg"
      />
      <IdCard
        lastName="Delores "
        firstName="Obrien"
        gender="female"
        height={172}
        birth={new Date('1988-05-11')}
        picture="https://randomuser.me/api/portraits/women/44.jpg"
      />

      <h3>Iteration 2 | Component: Greetings</h3>
      <Greetings lang="de">Ludwig</Greetings>
      <Greetings lang="fr">François</Greetings>

      <h3>Iteration 3 | Component: Random</h3>
      <Random min={1} max={6} />
      <Random min={1} max={100} />

      <h3>Iteration 4 | Component: BoxColor</h3>
      {/* I cannot change the color of p to white */}
      <BoxColor r={255} g={0} b={0} />
      <BoxColor r={128} g={255} b={0} />

      <h3>Iteration 5 | Component: CreditCard</h3>
      <CreditCard
        type="Visa"
        number="0123456789018845"
        expirationMonth={3}
        expirationYear={2021}
        bank="BNP"
        owner="Maxence Bouret"
        bgColor="#11aa99"
        color="white"
      />

      <CreditCard
        type="Master Card"
        number="0123456789010995"
        expirationMonth={3}
        expirationYear={2021}
        bank="N26"
        owner="Maxence Bouret"
        bgColor="#eeeeee"
        color="#222222"
      />

      <CreditCard
        type="Visa"
        number="0123456789016984"
        expirationMonth={12}
        expirationYear={2019}
        bank="Name of the Bank"
        owner="Firstname Lastname"
        bgColor="#ddbb55"
        color="white"
      />

      <h3>Iteration 6 | Component: Rating</h3>
      <Rating>0</Rating>
      <Rating>1.49</Rating>
      <Rating>1.5</Rating>
      <Rating>3</Rating>
      <Rating>4</Rating>
      <Rating>5</Rating>

      <h3>Iteration 7 | Component: DriverCard</h3>
      <DriverCard
        name="Travis Kalanick"
        rating={4.2}
        img="https://si.wsj.net/public/resources/images/BN-TY647_37gql_OR_20170621052140.jpg?width=620&height=428"
        car={{
          model: 'Toyota Corolla Altis',
          licensePlate: 'CO42DE',
        }}
      />
      <DriverCard
        name="Dara Khosrowshahi"
        rating={4.9}
        img="https://ubernewsroomapi.10upcdn.com/wp-content/uploads/2017/09/Dara_ELT_Newsroom_1000px.jpg"
        car={{
          model: 'Audi A3',
          licensePlate: 'BE33ER',
        }}
      />

      <h3>Iteration 8 | State: LikeButton</h3>
      <LikeButton />

      <h3>Iteration 9: State: ClickablePicture</h3>
      <ClickablePicture img="maxence.png" imgClicked="maxence-glasses.png" />

      <h3>Iteration 10 | State: Dice</h3>
      <Dice />
      <h3>Iteration 11 | State: Carousel</h3>
      <Carousel
        images={[
          'https://randomuser.me/api/portraits/women/1.jpg',
          'https://randomuser.me/api/portraits/men/1.jpg',
          'https://randomuser.me/api/portraits/women/2.jpg',
          'https://randomuser.me/api/portraits/men/2.jpg',
        ]}
      />
      <h3>Iteration 12 | List and Keys | NumbersTable</h3>
      <NumbersTable limit={12} />
      <h3>Iteration 13 | List and Keys - FaceBook (Simple)</h3>
      <FaceBook />
      <h3>Iteration 14 | List and Keys - FaceBook (Advanced)</h3>
      <FaceBook />
      <h3>Iteration 15 | Form - SignupPage</h3>
      <SignupPage />
      <h3>Iteration 16 | Lifting State Up - RGBColorPicker</h3>
    </div>
  );
}
export default App;
