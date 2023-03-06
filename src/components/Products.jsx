import React, { useEffect, useState } from 'react';

export default function Products() {
  const [count, setCount] = useState(0);
  const [products, setProducts] = useState([]);
  const [checked, setChecked] = useState(false);
  const handleChange = () => setChecked(prev => !prev)

  useEffect(() => {
    fetch(`data/${checked ? 'sale_' : ''}products.json`)
      .then((res) => res.json())
      .then((data) => {
        console.log('🔥뜨끈한 데이터를 네트워크에서 받아옴');
        setProducts(data);
      });
    return () => { // useEffect가 unmount될 때 역할을 함
      console.log('🧹 깨끗하게 청소하는 일들을 합니다.');
    };
  }, [checked]); // '이게 변하면 다시 실행해줘' 라고 연관된 dependency를 [] 배열 안에 넣어줌

  return (
    <>
      <input id='checkbox' type='checkbox' value={checked} onChange={handleChange} />
      <label htmlFor='checkbox'>Show only Sale</label>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <article>
              <h3>{product.name}</h3>
              <p>{product.price}</p>
            </article>
          </li>
        ))}
      </ul>
      <button onClick={() => setCount((prev) => prev + 1)}>{count}</button>
    </>
  );
}
