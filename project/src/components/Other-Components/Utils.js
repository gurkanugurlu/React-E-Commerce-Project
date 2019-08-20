import namor from 'namor';
import uuid from  'uuid';
import  defaultAxios from '../../api/defaultServer';
const range = len => {
  const arr = [];
  for (let i = 0; i < len; i++) {
    arr.push(i);
  }
  return arr;
};

const newProduct = () => {

  return {
    id:uuid(),
    productName: namor.generate({ words: 1, numbers: 0 }),
    price: Math.floor(Math.random() *150),
    description:namor.generate({words: 2,numbers:0}),
    stockCount: Math.floor(Math.random() * 110),
    instructionForUse:namor.generate({words:4,numbers:0})
  };
};
export const sendDataToServer= () => {
  const data= makeData();
  sendData(data);
}
export const sendData = async (data ) => {
  await  defaultAxios.post("/products",data)

}

 export function makeData(len = 120) {
  return range(len).map(d => {
    return newProduct();
  });
}

// children: range(10).map(newProduct)