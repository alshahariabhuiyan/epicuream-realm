import { useLoaderData } from 'react-router-dom';
import IconSection from '../IconSection/iconSection';
import Legend from '../Legend/Legend';
import Navbar from '../Navbar/Navbar';
import SectionTitle from '../SectionTitle/SectionTitle';
import Banner from './Banner/Banner';
import ChefCart from './ChefCart/ChefCart';
import Footer from '../Footer/Footer';
import Extra from '../Extra/Extra';
import Subscibe from '../Subscribe/Subscibe';


const Home = () => {
    const data = useLoaderData();
    const handleView = () => {
        const cart = document.querySelector('.cart-container');
        cart.classList.remove('h-[750px]')
    }
    
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <IconSection></IconSection>
            <SectionTitle title='Meet Our Legendes' subtitle='Legends are not born; they are forged through the fire of passion, dedication, and a relentless pursuit of excellence.'></SectionTitle>
            <Legend></Legend>
            <SectionTitle title='Greates of All Time' subtitle=' A "greatest" chef is a pioneer, an innovator who dares to redefine flavors, challenge conventions, and set new benchmarks.'></SectionTitle>
            <section>
            <div className='cart-container grid grid-cols-3 overflow-hidden h-[750px]'>
                {
                    data.map(details => <ChefCart key={details._code} data={details}></ChefCart>)
                }
                
            </div>
           <div className='text-center'>
           <button id='viewAll-btn' onClick={handleView} style={{borderBottom:'2px solid white'}} className="btn btn-outline text-orange-500 border-none px-10">View All Chefs</button>
           </div>
            </section>
            <Extra></Extra>
            <Subscibe></Subscibe>
            <Footer></Footer>
        </div>
    );
};

export default Home;