/**
 * @author B11117061 DickLau <B11117061@gemail.yuntech.edu.tw>
 */

import AutoSizeImage from './AutoSizeImage';

export default function CustomCard({item}) {
    return(
        <div class="border">
            <AutoSizeImage src={item.Picture.PictureUrl1} alt={item.Picture.PictureDescription1}/>   
            <div>{item.ScenicSpotName}</div>
        </div>
    )
}