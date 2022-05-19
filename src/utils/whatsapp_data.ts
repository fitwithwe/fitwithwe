import { AiOutlineInstagram, AiOutlineWhatsApp } from "react-icons/ai"
import { FaFacebookF } from "react-icons/fa"

export const whatsapp_data = {
    number: 'https://api.whatsapp.com/send?phone=+916395611002',
    phone: 'tel:6395611002'
}

export const icon = [
    {
        img: FaFacebookF,
        link: ''
    },
    {
        img: AiOutlineInstagram,
        link: 'https://www.instagram.com/fitwith.we/?hl=en'
    },
    {
        img: AiOutlineWhatsApp,
        link: whatsapp_data.number
    }
]