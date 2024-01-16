import Header from '@/Components/modules/Header'
import ReservationComponent from '@/Components/templates/Index/Reservation'
import React from 'react'

export default function Reservation() {
  return (
   <>
   <Header prevPage="Home" currentPage="Reservation" />
   <ReservationComponent />
   </>
  )
}
