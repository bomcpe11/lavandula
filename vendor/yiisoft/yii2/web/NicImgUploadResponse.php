<?php
/**
 * Create by BOMBERMAN
 */

namespace yii\web;

use Yii;

class NicImgUploadResponse
{
    
    public function getResponse($type, $width, $height, $size, $img){
        $result = array('upload'=>
				array('image'=>
						array('name'=>'',
								'title'=>'',
								'caption'=>'',
								'hash'=>'',
								'deletehash'=>'',
								'datetime'=>'',
								'type'=>$type,
								'animated'=>'false',
								'width'=>$width,
								'height'=>$height,
								'size'=>$size,
								'views'=>'0',
								'bandwidth'=>'0',
						),
						
						'links'=>
						array('original'=>$img,
								'imgur_page'=>$img,
								'delete_page'=>$img,
								'small_square'=>$img,
								'big_square'=>$img,
								'small_thumbnail'=>$img,
								'medium_thumbnail'=>$img,
								'large_thumbnail'=>$img,
								'huge_thumbnail'=>$img,
						)
				)
		);
        return json_encode($result);
    }
}
