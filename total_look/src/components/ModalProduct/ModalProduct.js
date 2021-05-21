import React, { useState } from 'react';
import { CustomDialog, useDialog } from 'react-st-modal';


import './ModalProduct.css';

import dataImg from '../../assets/pantslino.png';
import SizeGuide from '../../assets/sizeguide.png';
// import { ColorSelect } from '../Select/ColorSelect';
// import {SizeSelect} from '../Select/SizeSelect';
function ModalProduct({product}) {
  const dialog = useDialog();

  const [value, setValue] = useState();

  return (
    <div className ="ModalClothes">
        <div className ="ModalClotheLeft">
        <img src={product.img} className="dataImg" alt="Pants Lino" />
        </div>
            <div className ="ModalClotheRigth">
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <div className ="SizeGuide">
                  <img src={SizeGuide} className="SizeGuide" alt="Size Guide" />
                </div>
                <label>Items:</label>
                <input
                    className ="inputsModalClothe"
                    type="number"
                    onChange={(e) => {
                    setValue(e.target.value);
                    }}
                />          
                <button
                    className ="buttonModal"
                    onClick={() => {
                    // Сlose the dialog and return the value
                    dialog.close(value);
                    }}
                >
                    ADD TO MY CART
                </button>
                <button
                    className ="buttonModal"
                    onClick={() => {
                    // Сlose the dialog and return the value
                    dialog.close(value);
                    }}
                >
                    BUY NOW
                </button>
            </div>
    </div>
  );
}

// function ModalProduct() {
//     return (
//         <div>
//         <button
//             onClick={async () => {
//             const result = await CustomDialog(<ModalPro />, {
//                 // title: 'Welcome back! Sign In your account!',
//                 showCloseIcon: true,
//             });
//             console.log(result);
//             }}
//         >
//         Product
//         </button>
//         </div>
//     );
// }

export default ModalProduct;