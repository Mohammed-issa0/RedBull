import logo from "../../public/logo.png"
export default function Header(){
    return(
        <div className="w-full h-28 sticky top-0 flex justify-end px-5 bg-white shadow-md z-40">
            <img src={logo} className="h-full "/>
        </div>
    )
}