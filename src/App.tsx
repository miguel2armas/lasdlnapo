import { useEffect, useRef } from 'react'
import './App.css'
import { data } from './constants'

function App() {
  const btnTopRef = useRef<HTMLButtonElement>(null);
  const goTopF = () =>{
    if(btnTopRef.current){
      btnTopRef.current.style.display = (window.scrollY > 2000) ? 'flex' : 'none';
    }
  }
  useEffect(() => {
    window.addEventListener('scroll', goTopF);
    return () => {
      window.removeEventListener('scroll', goTopF);
    }
  }, [])
  
  let priceFormat = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits:2,
        maximumFractionDigits:2
    });
    
    const goToDiv = (id:number) =>{
      const element = document.getElementById(`${id}`);
      if(element){
        element.scrollIntoView({behavior: 'smooth' });
      }
  }
  const goTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  return (
    <div className='container-app'>
      <img src='./logo-init.png' alt='logo las dl napo' className='img-logo' />
      <div className='btn-container'>
        {data.map((item)=>{
          return <button key={item.id} className='btn-category' onClick={()=>goToDiv(item.id)}>
                  <span className='btn-text'>{item.btnText}</span>
                </button>
        })}
      </div>
      <section className='container'>
        {data.map((item)=>{
          return <div id={`${item.id}`} key={item.id} className='card-category'>
                  <h3 className='title-category'>{item.category}</h3>
                    <div className='card-list'>
                      {item.subCategory?.map((subCat)=>{
                        return <div key={subCat.name} className='card-product'>
                                  <h4 className='title-sub-category'>{subCat.name}</h4>
                                  {subCat.img && <img className='img-sub-category' src={subCat.img} alt={subCat.name}/>}
                                  <div className='container-item-list'>
                                    {subCat.items.map((itemProduct)=>{
                                      return <div key={itemProduct.name} className='container-item'>
                                              <div className='item-name-price'>
                                                <span className='item-name'>{itemProduct.name}</span>
                                                <span className='item-price'>{priceFormat.format(itemProduct.price)}</span>
                                              </div>
                                              <span className='item-description'>{itemProduct.description}</span>
                                            </div>
                                    })}
                                  </div>
                                </div>
                      })}
                      {item.items?.map((itemUp)=>{
                        return <div key={itemUp.name} className='card-product'>
                                  <img className='img-item-category' src={itemUp.img} alt={itemUp.name}/>
                                  <div className='container-item'>
                                    <div className='item-name-price'>
                                      <span className='item-name'>{itemUp.name}</span>
                                      <span className='item-price'>{priceFormat.format(itemUp.price)}</span>
                                    </div>
                                    <span className='item-description'>{itemUp.description}</span>
                                  </div>
                                </div>
                      })}
                    </div>
                </div>
        })}
      </section>
      <div className='container-top'>
        <button ref={btnTopRef} className='btn-top' onClick={goTop}>
          <img className='btn-img-top' src='./arrow-top.png' alt='top'/>
          <span className='btn-img-text'>Inicio</span>
        </button>
      </div>
      <footer className='footer'>
          <div className='content-redes'>
            <a target='_blank' className='link-redes' href='https://www.instagram.com/lasdelnapo/'>
              <img className='img-redes' alt='instagram' src='./instagram.png'/>
            </a>
            <a target='_blank' className='link-redes' href='https://www.facebook.com/lasdelnapohuequita'>
              <img className='img-redes' alt='facebook' src='./facebook.png'/>
            </a>
            <a target='_blank' className='link-redes' href='https://wa.me/+593979195987'>
              <img className='img-redes' alt='whatsapp' src='./whatsapp.png'/>
            </a>
            <a target='_blank' className='link-redes' href='https://goo.gl/maps/nZAigQuZUZLHk4PC6'>
              <img className='img-redes' alt='whatsapp' src='./location-pin.png'/>
            </a>
          </div>
          <h4 className='footer-text' >LAS dL NAPO 2023 © todos los derechos reservados</h4>
      </footer>
    </div>
  )
}

export default App
