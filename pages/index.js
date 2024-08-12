import About from "@/Components/templates/Index/About";
import Menu from "@/Components/templates/Index/Menu";
import Offer from "@/Components/templates/Index/Offer";
import Reservation from "@/Components/templates/Index/Reservation";
import Services from "@/Components/templates/Index/Services";
import Slider from "@/Components/templates/Index/Slider";
import Testimonial from "@/Components/templates/Index/Testimonial";


export default function Home({data}) {
  return (
    <>
     <Slider />
      <About />
      <Services services={data.services} />
      <Offer />
      <Menu products={data.menu} />

      <Reservation />
      <Testimonial comments={data.comments} />
    </>
  );
}


export async function getStaticProps (){
const res = await fetch("https://json-server-vercel-liart-iota.vercel.app/menu")
const menu = await res.json()
const res1 = await fetch("https://json-server-vercel-liart-iota.vercel.app/services")
const services = await res1.json()
const res2 = await fetch("https://json-server-vercel-liart-iota.vercel.app/comments")
const comments = await res2.json()
  return{
    props:{
      data:{
        menu, services, comments
      }
    },
    revalidate: 60 * 60 * 12 //per 12 hrs
  }
}
