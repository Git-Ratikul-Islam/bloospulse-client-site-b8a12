import { Link } from "react-router-dom";

const Banner = () => {
      return (
            <div className="hero h-[80vh]" style={{
                  background: 'linear-gradient(to right, rgba(255,255,255,1), rgba(255,255,255,0)), url(https://i.ibb.co/ZY393xL/Maimonides-MC-Patient-Visitors-Blood-Donation-1440x500.jpg)',
                  backgroundSize: 'cover', // Optionally, you can add this for better image coverage
            }}>
                  <div className=" bg-opacity-0"></div>
                  <div className="w-full text-start flex">
                        <div className="ml-20 md:ml-0 lg:ml-64">
                              <h1 className="mb-5 text-4xl text-[#ea062b] font-bold">Donate blood, Save life!</h1>
                              <h1 className="text-9xl text-black font-bold">Join as a <br />donor</h1>
                              <Link to="/search"><button className="btn btn-primary bg-[#ea062b] border-none hover:bg-black rounded-none mt-8">Search Donors</button></Link>
                        </div>
                  </div>
            </div>



      );
};

export default Banner;