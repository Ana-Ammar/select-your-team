import bgPlate from '../../assets/SectionBg.png'
import subPlate from '../../assets/sub.png'
import footerLogo from '../../assets/logo-footer.png'

const Footer = () => {
    return (
       <>
       <div className='border-2 border-white p-6 bg-white/10 h-[385px] max-w-[1280px] mx-auto rounded-3xl mt-24 -mb-[170px] relative z-20'>
          <div className='h-full md:bg-cover md:bg-center rounded-3xl flex flex-col justify-center items-center' style={{ backgroundImage: `url(${bgPlate})` }}>
            <h1 className='md:text-3xl text-2xl font-bold text-center'>Subscribe to our Newsletter</h1>
            <p className='font-medium md:text-2xl text-l text-[#131313b3] text-center mt-4 mb-6'>Get the latest updates and news right in your inbox!</p>
            <div className='flex gap-4 justify-center'>
                <input type="text" className="input md:w-[400px] w-full md:h-[56px] rounded-[12px] text-[16px]" placeholder="Enter your email" />
                <button className='bg-cover bg-center md:w-[145px] btn md:h-[56px] md:py-4 md:px-6 rounded-[12px] font-bold cursor-pointer transform active:scale-95 transition-transform duration-150' style={{ backgroundImage:`url(${subPlate})`}}>Subscribe</button>
            </div>
          </div>
       </div>


       <div className='bg-[#06091A] relative'>
            <img className='mx-auto pt-[250px]' src={footerLogo} alt="" />

            <div className='max-w-[1280px] md:mx-auto mx-9 grid gap-10 md:flex items-center justify-between mt-16'>
                <div className='w-[250px]'>
                    <h1 className='text-white font-semibold text-[18px] mb-4'>About Us</h1>
                    <p className='text-white/60'>We are a passionate team dedicated to providing the best services to our customers.</p>
                </div>
                <div className=''>
                    <h1 className='text-white font-semibold text-[18px] mb-4'>Quick Links</h1>
                    <ul className='text-white/60 list-disc pl-5'>
                        <li>Home</li>
                        <li>Services</li>
                        <li>About</li>
                        <li>Contact</li>
                    </ul>
                </div>
                <div className=''>
                    <h1 className='text-white font-semibold text-[18px] '>Subscribe</h1>
                    <p className='text-white/60 w-[230px] my-4'>Subscribe to our newsletter for the latest updates.</p>
                    <input type="text" className="input rounded-none rounded-l-xl max-w-fit" placeholder="Enter your email" />
                    <button className='bg-cover bg-center btn border-0 rounded-none shadow-none rounded-r-xl font-bold cursor-pointer transform active:scale-95 transition-transform duration-150' style={{ backgroundImage:`url(${subPlate})`}}>Subscribe</button>
                </div>
            </div>

            <div className='mt-[70px] border-t-2 border-t-white/15 py-8'>
                <p className='text-center text-white/60'>@2024 Your Company All Rights Reserved.</p>
            </div>
       </div>
       </>
    );
};

export default Footer;