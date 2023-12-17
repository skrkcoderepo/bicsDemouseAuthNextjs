import Image from "next/image"
import Loader1 from "@/assets/img/loader/Rocket.gif"
import Loader2 from "@/assets/img/loader/Spinner-2.gif"
export default function Spinner(){
return <>
<div style={{display: "block", marginLeft: "auto", marginRIght: "auto", width : "50%"}}>
    <Image src={Loader1} alt="Loader" />
</div>
</>
}

export function Spinner2(){
    return <>
<div style={{display: "block", marginLeft: "auto", marginRIght: "auto"}}>
    <Image src={Loader2} alt="Loader" width={30} />
</div>
</>
}