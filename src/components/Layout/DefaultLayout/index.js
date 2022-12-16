import Header from "~/components/Layout/components/Header";
import Sidebar from "./Sidebar";

function DefaultLayout({ children}) {
    return ( 
        <div className="h-auto w-screen flex flex-col justify-center items-center">
            <Header />
            <div className="h-[1000px] w-[75vw] flex justify-between">
                <Sidebar />
                <div className="h-[1000px] w-[45vw] bg-[#ddd]">{children}</div>
            </div>
        </div>
     );
}

export default DefaultLayout;