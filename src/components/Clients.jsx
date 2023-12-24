import React from 'react'
import { clients } from '../constants'
import styles from '../style'

const Clients = () => {
  return (
    <section className={`${styles.flexCenter} my-4`}>
      <div className={`${styles.flexCenter} flex-wrap w-full`}>
        {clients.map((val,i)=>{
          return(
            <div key={val.id} className={`flex-1 ${styles.flexCenter} sm:min-w-[192px] min-w-[120px]`}>
              <img src={val.logo} alt="client" className='sm:w-[192px] w-[100px] object-contain' />
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Clients