import logo from './logo.svg';
// import Background from ""
import img1 from './img/car1.jpg'
import img2 from './img/car2.jpg'
import img3 from './img/car3.jpg'
import img4 from './img/car4.jpg'
import img5 from './img/car5.jpg'
import img6 from './img/car6.jpg'

import { Button } from 'antd'


import './App.css';
import { React, useState, useRef, useEffect } from "react"
import TypedInputNumber from 'antd/es/input-number';
function App() {
  const [selectedCar, setSelectedCar] = useState('Toyota');
  const [valuebuy, setvaluebuy] = useState(null);
  const [valuesell, setvaluesell] = useState(null);
  const [radio, setradio] = useState(null);


  console.log(radio)



  const isNumber = (value) => {
    return Number.isInteger(value);
  };
  const handleCarChange = (event) => {
    setSelectedCar(event.target.value);
    // Cập nhật giá xe theo lựa chọn
    // setCarPrice(...);
  };
  const inputFieldBuyRef = useRef(null);
  useEffect(() => {
    // Focus vào ô "Mua vào" ngay khi component load xong
    inputFieldBuyRef.current?.focus();
  }, []);

  const carImages = {
    Toyota: img1,
    KIA: img2,
    Ford: img3,
    Civic: img4,
    Ferrari: img5,
    Mercedes: img6
  };

  const carPrice = {
    Toyota: 35000,
    KIA: 15000,
    Ford: 40000,
    Civic: 32000,
    Ferrari: 50000,
    Mercedes: 45000

  }

  const Update = () => {
    setradio(null)
    if (radio === 1) {
      document.getElementById('sellGold').innerText = valuesell;
      document.getElementById('buyGold').innerText = valuebuy;

    }
    else {
      document.getElementById('sellUsd').innerText = valuesell;
      document.getElementById('buyUsd').innerText = valuebuy;

    }
  }
  return (
    <div className="App">

      <h2> T-SPEED COMPANY</h2>

      <img src="./banner_car.jpg" alt="Header Image" height="100%" width="100%" />


      <div class="container">


        <table>
          <tr>
            <th colspan="2">Bảng tin thị trường</th>
          </tr>
          <tr>
            <td colspan="2" style={{ display: "flex", marginLeft: "100px" }}>Vàng</td>
          </tr>
          <tr>
            <td>Mua vào  <p id='buyGold' style={{ marginLeft: "20px" }}></p></td>

            <td>Bán ra    <p id='sellGold' style={{ marginLeft: "20px" }}></p></td>

          </tr>
          <tr>
            <td colspan="2" style={{ display: "flex", marginLeft: "100px" }}>USD</td>
          </tr>
          <tr>
            <td>Mua vào  <p id='buyUsd' style={{ marginLeft: "20px" }} ></p></td>

            <td>Bán ra    <p id='sellUsd' style={{ marginLeft: "20px" }}></p></td>

          </tr>
        </table>


        <table>
          <tr>
            <th colspan="2">Cập nhật giá thị trường</th>
          </tr>
          <tr>
            <td>Mua vào</td>
            <td> <input type="text" className="input-field" ref={inputFieldBuyRef} onChange={(e) => setvaluebuy(e.target.value)} /></td>
          </tr>
          <tr>
            <td>Bán ra</td>
            <td><input type="text" class="input-field" onChange={(e) => setvaluesell(e.target.value)} /></td>
          </tr>
          <tr>
            <td>Loại xe</td>
            <td>
              <select value={selectedCar} onChange={handleCarChange}>
                <option value="Toyota">Toyota</option>
                <option value="KIA">KIA</option>
                <option value="Ford">Ford</option>
                <option value="Civic">Civic</option>
                <option value="Ferrari">Ferrari</option>
                <option value="Mercedes">Mercedes</option>

              </select>
            </td>
          </tr>
          <div className='form-radio'>
            <input type="radio" id="gold" name="currency" class="radio-button" onChange={() => setradio(1)} />
            <label for="gold">Vàng</label>

            <input type="radio" id="usd" name="currency" class="radio-button" onChange={() => setradio(2)} />
            <label for="usd">USD</label>
          </div>



          <tr>
            <td colspan="2">
              <Button type='primary' class="button-primary" block onClick={() => Update()}>Update</Button>
              <Button type='primary' class="button-primary" disabled={!parseInt(valuebuy) || !radio} block> State</Button>
            </td>
          </tr>
        </table>


        <table>
          <tr>
            <th colspan="2">Bảng báo giá</th>
          </tr>
          <tr>
            <td colspan="2">
              <textarea class="text-area" rows="4">- Với kiểu dáng thể thao sang trọng
                - Nổi bật, ít tốn nhiên liệu
                - Kiểu dáng thể thao</textarea>
            </td>
          </tr>
          <div className="car-info">
            <img src={carImages[selectedCar]} alt={selectedCar} />
            <p>Giá: {carPrice[selectedCar]} USD</p>
          </div>
        </table>

      </div>



    </div>
  );
}

export default App;
