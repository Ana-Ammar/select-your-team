import BgImage from '../../assets/bg-shadow.png'
import BannerImg from '../../assets/banner-main.png'

const Banner = () => {
    return (
        <div className='h-[545px] max-w-[1280px] mx-auto bg-cover bg-center bg-black rounded-4xl mb-24 mt-6 pt-16' 
        style={{ backgroundImage: `url(${BgImage})` }}>
            <img className='mx-auto mb-8' src={BannerImg} alt="" />
            <h1 className='text-4xl font-bold text-white text-center'>Assemble Your Ultimate Dream 11 Cricket Team</h1>
            <h3 className='font-medium text-2xl text-center text-gray-400 mt-4 mb-5'>Beyond Boundaries Beyond Limits</h3>
            <div className='flex justify-center'>
                <div className=' border-1 border-[#E7FE29] p-2 rounded-2xl cursor-pointer transform active:scale-95 transition-transform duration-150'>
                <button className="py-4 px-6 rounded-[12px] bg-[#E7FE29] font-bold cursor-pointer">Claim Free Credit</button>
            </div>
            </div>
        </div>
    );
};

export default Banner;