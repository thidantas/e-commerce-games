import { GameItemProps } from 'components/GameItem'

const orderListMock: GameItemProps[] = [
  {
    img: '/img/red-dead-img.jpg',
    title: 'Red Dead Redemption 2',
    price: 215.0,
    downloadLink: '',
    paymentInfo: {
      flag: 'mastercard',
      img: '/img/icons/cards/mastercard.png',
      number: '**** **** **** 1234',
      purchaseDate: 'Purchase made on 07/20/2020 at 20:32'
    }
  },
  {
    img: '/img/halo-4.jpg',
    title: 'Halo 4',
    price: 200.0,
    downloadLink: '/',
    paymentInfo: {
      flag: 'visa',
      img: '/img/icons/cards/visa.png',
      number: '**** **** **** 4321',
      purchaseDate: 'Purchase made on 07/20/2020 at 20:12'
    }
  }
]

export default orderListMock
