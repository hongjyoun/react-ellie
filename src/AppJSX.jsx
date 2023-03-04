import './App.css';

function AppJSX() {
  const name = "hong"
  const list = ['우유', '딸기', '바나나', '요거트']
  return (
    <>
    <div className='hello'>hello {name}</div>
    <h1 style={{fontSize:'36px'}}>hello</h1>
    <ul>
      {list.map(v=>(<li>{v}</li>))}
    </ul>
    <div></div>
    </>
  )
}

export default AppJSX;
