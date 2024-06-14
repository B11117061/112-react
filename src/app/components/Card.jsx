/**
 * @author B11117061 DickLau <B11117061@gemail.yuntech.edu.tw>
 */

import Image from "next/link";

export default function CustomCard({item}) {
    return(
        <div class="border">
            <Image src={item.Picture.PictureUrl1} alt={item.Picture.PictureDescription1}/>   
            <div>{item.ScenicSpotName}</div>
        </div>
    )
}